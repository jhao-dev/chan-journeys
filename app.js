/* 禪宗祖師行旅圖 — 主程式（Main app） */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const body = document.body;
  const NS = 'http://www.w3.org/2000/svg';

  /* ---------- 投影（Projection）：經度 60–130、緯度 0–48 映射到 2000 寬的地圖座標 ---------- */
  const LON0 = 60, LON1 = 130, LAT0 = 0, LAT1 = 48, W0 = 2000;
  const RAD = Math.PI / 180;
  const merc = (lat) => Math.log(Math.tan(Math.PI / 4 + lat * RAD / 2));
  const K = W0 / ((LON1 - LON0) * RAD);
  const H0 = K * (merc(LAT1) - merc(LAT0));
  const proj = d3.geoMercator().center([0, 0]).scale(K)
    .translate([-K * LON0 * RAD, K * merc(LAT1)])
    .clipExtent([[-W0 * 0.6, -H0 * 0.7], [W0 * 1.6, H0 * 1.7]]);
  const P = (ll) => proj(ll);
  const geoPath = d3.geoPath(proj);

  const chHash = () => { const m = /ch=(\w+)/.exec(location.hash); return m ? m[1] : /stop=\d+/.test(location.hash) ? 'dharma' : 'buddha'; };
  const chapter = CHAPTERS.find((c) => c.id === chHash() && c.ready) || CHAPTERS.find((c) => c.ready);
  const FIGO = chapter.fig || {};
  const compIdx = chapter.stations.findIndex((s) => s.companion);
  const stations = chapter.stations;
  const segs = chapter.segments;
  const SP = stations.map((s) => P(s.at));

  /* ---------- 狀態（State） ---------- */
  let lang = 'zh';
  try { lang = localStorage.getItem('chan-lang') || 'zh'; } catch (e) {}
  let started = false, playing = false, ended = false, overview = false;
  let stepIdx = 0, stepT = 0, facing = 1;
  let seekFrom = null, seekStart = 0;
  const cam = { x: W0 / 2, y: H0 / 2, lz: 0 };
  let disp = SP[0].slice();

  const steps = [];
  stations.forEach((s, i) => {
    steps.push({ type: 'stay', i, dur: 22000 });
    if (i < stations.length - 1) steps.push({ type: 'move', i, dur: segs[i].dur });
  });
  const stayIdx = (i) => steps.findIndex((s) => s.type === 'stay' && s.i === i);
  const durOf = (st) => st.type === 'stay' ? st.dur * (lang === 'en' ? 1.25 : lang === 'bi' ? 1.7 : 1) : st.dur;
  const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  /* ---------- 建立地圖（Build map） ---------- */
  const svg = d3.select('#map');
  const gWorld = svg.append('g');
  gWorld.append('rect').attr('class', 'sea-bg').attr('x', -W0 * 2).attr('y', -H0 * 2).attr('width', W0 * 5).attr('height', H0 * 5);
  const land = window.LAND_ASIA;
  const landD = geoPath(land);
  gWorld.append('path').attr('class', 'land-halo2').attr('d', landD);
  gWorld.append('path').attr('class', 'land-halo').attr('d', landD);
  gWorld.append('path').attr('class', 'land').attr('d', landD);

  const curve = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
  RIVERS.forEach((r) => gWorld.append('path').attr('class', 'river').attr('d', curve(r.map(P))));

  const gWave = gWorld.append('g');
  WAVES.forEach((w, i) => {
    const p = P(w);
    gWave.append('path').attr('class', 'wave')
      .attr('d', i % 2 ? 'M-9 0 q4.5 -3.5 9 0 t9 0' : 'M-9 0 q4.5 -3.5 9 0 t9 0 M-4 5 q4.5 -3.5 9 0')
      .attr('transform', `translate(${p[0]} ${p[1]})`);
  });
  const gPeak = gWorld.append('g');
  PEAKS.forEach((pk, i) => {
    const p = P(pk), sc = 0.8 + ((i * 37) % 10) / 22;
    const g = gPeak.append('g').attr('class', 'peak').attr('transform', `translate(${p[0]} ${p[1]}) scale(${sc})`);
    g.append('path').attr('d', 'M-11 5 L-4 -7 L-1 -3 L4 -12 L12 5 Z').attr('fill', 'rgba(36,28,21,.16)').attr('stroke', '#3b3029').attr('stroke-width', 0.9).attr('stroke-linejoin', 'round');
    g.append('path').attr('d', 'M4 -12 L1 -5 L4 -6 L6 -3 L7.5 -6.5 Z').attr('fill', '#f6efdc').attr('stroke', 'none');
  });

  /* 路線（Routes） */
  const gRoute = svg.append('g');
  segs.forEach((sg) => {
    if (!sg.pts) { sg.L = 0; return; }
    const d = curve(sg.pts.map(P));
    gRoute.append('path').attr('class', 'route-ghost').attr('d', d);
    sg.under = gRoute.append('path').attr('class', 'route-ink under').attr('d', d).node();
    sg.ink = gRoute.append('path').attr('class', 'route-ink').attr('d', d).node();
    sg.L = sg.ink.getTotalLength();
    [sg.under, sg.ink].forEach((n) => { n.style.strokeDasharray = sg.L + ' ' + sg.L; n.style.strokeDashoffset = sg.L; });
    sg.Lland = Infinity;
    if (sg.landfall) {
      const tmp = gRoute.append('path').attr('d', curve(sg.pts.slice(0, sg.landfall + 1).map(P)));
      sg.Lland = tmp.node().getTotalLength();
      tmp.remove();
    }
  });
  const modeAt = (sg, len) => sg.mode || (len < sg.Lland ? 'ship' : 'walk');

  /* 固定大小的元素（Screen-sized items: labels, markers, figure） */
  const fixed = [];
  const addFixed = (g, xy) => { fixed.push({ g, x: xy[0], y: xy[1] }); return g; };
  const gLab = svg.append('g');
  const labNodes = [];
  MAP_LABELS.filter((l) => !l.ch || l.ch === chapter.id).forEach((l) => {
    const p = P(l.at);
    const g = addFixed(gLab.append('g').attr('class', 'lab ' + l.cls), p);
    if (l.cls === 'city') g.append('rect').attr('x', -3.5).attr('y', -3.5).attr('width', 7).attr('height', 7).attr('transform', 'rotate(45)');
    const tz = g.append('text').attr('class', 'zh').attr('y', 0).text(l.zh);
    if (l.sub) tz.append('tspan').attr('font-size', 12).attr('letter-spacing', '0').text('（' + l.sub.zh + '）');
    const te = g.append('text').attr('class', 'en').attr('y', 15).text(l.en);
    if (l.cls === 'city') { tz.attr('x', -9).attr('y', 4); te.attr('x', -9).attr('y', 19); }
    labNodes.push({ g, cls: l.cls });
  });

  /* 途經點（Via point: Guangzhou） */
  segs.forEach((sg, j) => {
    if (!sg.placeAt) return;
    const g = addFixed(svg.append('g').attr('class', 'via'), P(sg.placeAt));
    sg.viaG = g; sg.viaJ = j;
    g.append('circle').attr('r', 4);
    g.append('text').attr('class', 'zh').attr('x', 8).attr('y', 4).text(sg.place.zh);
    g.append('text').attr('class', 'en').attr('x', 8).attr('y', 4).text(sg.place.en);
  });

  /* 站點（Station markers；同地點只畫一個） */
  const gStn = svg.append('g');
  const markers = [];
  stations.forEach((s, i) => {
    const key = s.at.join(',');
    let m = markers.find((mm) => mm.key === key);
    if (m) { m.idx.push(i); return; }
    const side = s.side || 1;
    const g = addFixed(gStn.append('g').attr('class', 'stn'), SP[i]);
    g.append('circle').attr('class', 'halo').attr('r', 11);
    g.append('circle').attr('class', 'ring').attr('r', 11);
    g.append('circle').attr('class', 'dot').attr('r', 8.5);
    const num = g.append('text').attr('class', 'num').attr('y', 4).text(s.num);
    const anchor = side > 0 ? 'start' : 'end';
    const tz = g.append('text').attr('class', 'zh').attr('x', 17 * side).attr('y', 5).attr('text-anchor', anchor).text(s.place.zh);
    const te = g.append('text').attr('class', 'en').attr('x', 17 * side).attr('y', 5).attr('text-anchor', anchor).text(s.place.en);
    m = { key, idx: [i], g, num, tz, te };
    g.on('click', () => seek(m.idx[0]));
    markers.push(m);
  });

  /* 達摩（Bodhidharma figure） */
  const figWrap = svg.append('g').attr('class', 'fig-wrap');
  const figFlip = figWrap.append('g');
  const figBob = figFlip.append('g').attr('class', 'bob');
  figBob.append('path').attr('class', 'boat')
    .attr('d', 'M-30 -2 L30 -2 L22 10 L-22 10 Z M0 -2 V-58 M2 -54 Q26 -40 22 -6 L2 -6 Z')
    .attr('fill', '#5a4334').attr('stroke', '#241c15').attr('stroke-width', 1.4).attr('stroke-linejoin', 'round');
  figBob.append('path').attr('class', 'reed')
    .attr('d', 'M-34 1 Q0 -6 36 0 Q0 5 -34 1 Z M36 0 L44 -4')
    .attr('fill', '#6e7a3a').attr('stroke', '#3d4520').attr('stroke-width', 1.2);
  figBob.append('g').attr('transform', 'translate(-30 -78)').html(INK_FIG.figArt(FIGO));
  const huike = svg.append('g').attr('class', 'huike');
  if (compIdx >= 0) huike.append('g').attr('transform', 'scale(-1 1) translate(-30 -78)')
    .html(INK_FIG.figArt({ robe: '#cfc6b3', band: '#e8e1d0', fold: '#8a8170', staff: false, beard: false }));

  /* ---------- 版面與鏡頭（Layout & camera） ---------- */
  const cardEl = $('card');
  let winW, winH, s0, vis;
  function layout() {
    winW = window.innerWidth; winH = window.innerHeight;
    const mobile = winW <= 860;
    const r = cardEl.getBoundingClientRect();
    if (!mobile) vis = { x0: 0, y0: 76, x1: r.left - 16, y1: winH - 96 };
    else vis = { x0: 0, y0: 58, x1: winW, y1: r.top - 64 };
    if (vis.y1 - vis.y0 < 120) vis.y1 = vis.y0 + 120;
    s0 = Math.max(0.05, Math.min((vis.x1 - vis.x0) / W0, (vis.y1 - vis.y0) / H0) * 0.97);
  }

  /* ---------- 卡片（Story card） ---------- */
  const cardBody = $('cardBody');
  let cardKey = '', cardToken = 0;
  const bi = (o, tag, cls) => `<${tag} class="zh ${cls || ''}">${o.zh}</${tag}><${tag} class="en ${cls || ''}">${o.en}</${tag}>`;

  function stationHTML(i) {
    const s = stations[i];
    let h = `<div class="head"><div class="stn-seal">${s.num}</div><div>
      <p class="place">${bi(s.place, 'span')}</p>
      <h2 class="title">${bi(s.title, 'span')}</h2></div></div>
      <div class="scene">${SCENES[s.scene](FIGO)}</div>
      <div class="story">${bi(s.text, 'p')}</div>`;
    if (s.source) {
      h += `<details class="more src"><summary>${bi({ zh: '典籍原文', en: 'Classical source' }, 'span')}</summary>
        <blockquote class="zh">${s.source.zh}</blockquote><blockquote class="en">${s.source.en}</blockquote>
        <cite>— ${bi(s.source.ref, 'span')}</cite>
        ${s.source.note ? `<p class="note">${bi(s.source.note, 'span')}</p>` : ''}</details>`;
    }
    if (s.zen && s.zen.length) {
      h += `<details class="more zen"><summary>${bi({ zh: '禪天下・延伸閱讀', en: 'Further reading · Zen Cosmos' }, 'span')}</summary>
        ${s.zen.map((z) => `<div class="zen-item">
          ${z.quote ? `<p class="zen-quote">「${z.quote}」<span>— ${bi({ zh: '悟覺妙天禪師', en: 'Master Wujue Miaotian' }, 'span')}</span></p>` : ''}
          <p>${bi(z.summary, 'span')}</p>
          <a href="${z.url}" target="_blank" rel="noopener">${z.title} ↗</a>
          <small>${bi(z.by, 'span')}</small></div>`).join('')}</details>`;
    }
    if (s.facts && s.facts.length) {
      h += `<details class="more facts"><summary>${bi({ zh: '小知識', en: 'Did you know?' }, 'span')}</summary>
        <ul>${s.facts.map((f) => `<li>${bi(f, 'span')}</li>`).join('')}</ul></details>`;
    }
    if (s.refs && s.refs.length) {
      h += `<details class="more refs"><summary>${bi({ zh: '參考資料', en: 'References' }, 'span')}</summary>
        <ul>${s.refs.map((r) => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.title} ↗</a></li>`).join('')}</ul></details>`;
    }
    if (i === stations.length - 1 && window.quotesBlock) h += window.quotesBlock(chapter.id);
    if (i < stations.length - 1) h += `<p class="read-hint">${bi({ zh: '閱讀模式：讀完請按「下一站」 ›', en: 'Reading mode: press Next when ready ›' }, 'span')}</p>`;
    if (i === stations.length - 1 && chapter.nextHint) h += `<div class="next">${bi(chapter.nextHint, 'span')}</div>`;
    return h;
  }
  function travelHTML(i, mode) {
    const sg = segs[i], next = stations[i + 1];
    const cap = sg.caption[mode] || sg.caption[Object.keys(sg.caption)[0]];
    const title = sg.title || (mode === 'wait'
      ? { zh: '時光流轉', en: 'Time Passes' }
      : { zh: '前往' + next.place.zh, en: 'Toward ' + next.place.en });
    const kicker = sg.kicker || (mode === 'ship' ? { zh: '海路', en: 'By sea' } : mode === 'reed' ? { zh: '江畔', en: 'At the river' } : mode === 'wait' ? { zh: '時光', en: 'Time' } : { zh: '陸路', en: 'Overland' });
    return `<div class="head"><div class="stn-seal travel">途</div><div>
      <p class="place">${bi(kicker, 'span')}</p>
      <h2 class="title">${bi(title, 'span')}</h2></div></div>
      <div class="scene">${SCENES[sg.scene || (mode === 'reed' ? 'walk' : mode)](FIGO)}</div>
      <div>${bi(cap, 'p', 'caption')}</div>
      <p class="hint">${bi({ zh: '下一站：' + next.num + '・' + next.title.zh, en: 'Next: ' + next.title.en }, 'span')}</p>`;
  }
  function setCard(key, html) {
    if (key === cardKey) return;
    const first = cardKey === '';
    cardKey = key;
    const tok = ++cardToken;
    const swap = () => {
      if (tok !== cardToken) return;
      cardBody.classList.remove('out', 'in');
      cardBody.innerHTML = html;
      cardBody.scrollTop = 0;
      void cardBody.offsetWidth;
      cardBody.classList.add('in');
    };
    if (first) swap(); else { cardBody.classList.add('out'); setTimeout(swap, 230); }
  }

  /* ---------- 時間軸（Timeline） ---------- */
  const tl = $('timeline'), tlFill = $('tlFill');
  const dots = stations.map((s, i) => {
    const b = document.createElement('button');
    b.className = 'tl-dot';
    b.style.left = (i / (stations.length - 1) * 100) + '%';
    b.innerHTML = `${s.num}<span class="lbl zh">${s.short.zh}</span><span class="lbl en">${s.short.en}</span>`;
    b.setAttribute('aria-label', s.title.zh + ' / ' + s.title.en);
    b.addEventListener('click', () => seek(i));
    tl.appendChild(b);
    return b;
  });

  /* ---------- 控制（Controls） ---------- */
  function setPlaying(v) {
    playing = v;
    body.classList.toggle('playing', playing);
    body.classList.toggle('ended', ended && !playing);
  }
  function seek(i) {
    if (!started) begin();
    seekFrom = disp.slice(); seekStart = performance.now();
    stepIdx = stayIdx(i); stepT = 0; ended = false;
    setOverview(false);
    body.classList.remove('ended', 'show-finale');
  }
  function curStation() { const st = steps[stepIdx]; return st.i; }
  $('playBtn').addEventListener('click', () => {
    if (!started) return begin();
    if (ended) { seek(0); setPlaying(true); return; }
    setPlaying(!playing);
  });
  $('prevBtn').addEventListener('click', () => {
    const st = steps[stepIdx];
    if (st.type === 'stay' && stepT < 2500) seek(Math.max(0, st.i - 1)); else seek(st.i);
  });
  $('nextBtn').addEventListener('click', () => {
    const st = steps[stepIdx];
    if (readMode && st.type === 'stay' && stepIdx < steps.length - 1) { stepIdx++; stepT = 0; setPlaying(true); return; }
    seek(Math.min(stations.length - 1, st.i + 1));
  });
  function setOverview(v) {
    overview = v;
    $('overviewBtn').setAttribute('aria-pressed', String(v));
  }
  $('overviewBtn').addEventListener('click', () => setOverview(!overview));

  function begin() {
    if (started) return;
    started = true;
    $('intro').classList.add('hide');
    const h = stopFromHash();
    stepIdx = stayIdx(h >= 0 ? h : 0); stepT = 0;
    setPlaying(true);
  }
  $('beginBtn').addEventListener('click', begin);

  /* 語言（Language） */
  const langBtns = document.querySelectorAll('.lang button');
  function setLang(l) {
    lang = l; body.dataset.lang = l;
    document.documentElement.lang = l === 'en' ? 'en' : 'zh-Hant';
    langBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    try { localStorage.setItem('chan-lang', l); } catch (e) {}
    $('chapterName').innerHTML = bi(chapter.name, 'span');
  }
  langBtns.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* 音樂（Music） */
  const audio = $('bgm'), musicBtn = $('musicBtn');
  let toastTimer;
  function toast(zh, en) {
    const t = $('toast');
    t.textContent = lang === 'en' ? en : lang === 'bi' ? zh + ' / ' + en : zh;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }
  musicBtn.addEventListener('click', () => {
    if (soundOn) { soundOn = false; audio.pause(); musicBtn.setAttribute('aria-pressed', 'false'); return; }
    soundOn = true; musicBtn.setAttribute('aria-pressed', 'true');
    bell();
    audio.volume = 0.45;
    audio.play().catch(() => toast('已開啟到站鐘聲（背景音樂檔尚未放入）', 'Arrival bell on (background music not added yet)'));
  });

  /* 篇章選單（Chapter menu） */
  const menu = $('chapterMenu'), chBtn = $('chapterBtn');
  menu.innerHTML = CHAPTERS.map((c, i) => {
    const cur = c.id === chapter.id;
    const tag = cur ? { zh: '觀看中', en: 'Viewing' } : c.ready ? { zh: '', en: '' } : { zh: '即將推出', en: 'Coming soon' };
    return `<button class="${cur ? 'cur' : ''}" ${c.ready ? '' : 'disabled'} data-id="${c.id}">
      <span class="mk">${i + 1}</span>
      <span><span class="n">${bi(c.name, 'span')}</span><br><span class="r">${bi(c.role, 'span')}</span></span>
      <span class="tag">${bi(tag, 'span')}</span></button>`;
  }).join('');
  chBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
    chBtn.setAttribute('aria-expanded', String(!menu.hidden));
  });
  menu.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    menu.hidden = true;
    if (b.dataset.id !== chapter.id) goChapter(b.dataset.id);
  });
  function goChapter(id) { location.hash = '#ch=' + id; location.reload(); }
  document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target)) { menu.hidden = true; chBtn.setAttribute('aria-expanded', 'false'); } });

  /* 手機抽屜（Mobile sheet） */
  $('sheetHandle').addEventListener('click', () => body.classList.toggle('sheet-min'));

  /* 鍵盤（Keyboard） */
  document.addEventListener('keydown', (e) => {
    if (e.target.closest && e.target.closest('input,textarea')) return;
    if (!started && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); begin(); return; }
    if (e.key === ' ') { e.preventDefault(); $('playBtn').click(); }
    else if (e.key === 'ArrowRight') $('nextBtn').click();
    else if (e.key === 'ArrowLeft') $('prevBtn').click();
  });

  /* ---------- 主迴圈（Main loop） ---------- */
  let last = performance.now(), lastArrive = -1;
  function frame(now) {
    const dt = Math.min(now - last, 100); last = now;
    layout();

    if (playing) {
      if (!(readMode && steps[stepIdx].type === 'stay')) stepT += dt * speed;
      while (stepT >= durOf(steps[stepIdx])) {
        if (stepIdx < steps.length - 1) { stepT -= durOf(steps[stepIdx]); stepIdx++; }
        else { stepT = durOf(steps[stepIdx]); ended = true; setPlaying(false); body.classList.add('show-finale'); break; }
      }
    }
    const st = steps[stepIdx];
    const p = clamp01(stepT / durOf(st));
    if (started && st.type === 'stay' && lastArrive !== st.i) { lastArrive = st.i; onArrive(st.i); }
    if (st.type !== 'stay') lastArrive = -1;

    /* 位置與模式（Position & mode） */
    let pos, mode = 'stand', moving = false, q = 0;
    if (st.type === 'stay') pos = SP[st.i];
    else {
      const sg = segs[st.i];
      q = ease(p);
      if (sg.ink) {
        const len = q * sg.L;
        const a = sg.ink.getPointAtLength(len), b = sg.ink.getPointAtLength(Math.min(sg.L, len + 3));
        pos = [a.x, a.y];
        if (Math.abs(b.x - a.x) > 0.3) facing = b.x > a.x ? 1 : -1;
        mode = modeAt(sg, len);
        moving = p > 0 && p < 1;
      } else { pos = SP[st.i + 1]; mode = 'wait'; }
    }
    if (st.type === 'stay' && st.i === compIdx) facing = 1;
    disp = pos.slice();
    if (seekFrom) {
      const k = clamp01((now - seekStart) / 1400);
      if (k >= 1) seekFrom = null;
      else { const e = ease(k); disp = [seekFrom[0] + (pos[0] - seekFrom[0]) * e, seekFrom[1] + (pos[1] - seekFrom[1]) * e]; moving = true; }
    }

    /* 墨跡路線（Ink trail） */
    segs.forEach((sg, j) => {
      if (!sg.ink) return;
      let off;
      if (st.type === 'move' && st.i === j) off = sg.L * (1 - q);
      else off = (st.i > j) ? 0 : sg.L;
      sg.ink.style.strokeDashoffset = off;
      sg.under.style.strokeDashoffset = off;
    });
    const sNow = s0 * Math.exp(cam.lz);
    segs.forEach((sg) => {
      if (!sg.ink) return;
      sg.ink.style.strokeWidth = 3.4 / sNow;
      sg.under.style.strokeWidth = 9 / sNow;
    });

    /* 鏡頭（Camera） */
    let tx, ty, tz;
    if (!started || overview) { tx = W0 / 2; ty = H0 / 2; tz = 1; }
    else { tx = disp[0]; ty = disp[1]; tz = st.type === 'stay' ? stations[st.i].zoom : segs[st.i].zoom; }
    const a = 1 - Math.exp(-dt / 1000 * 2.4);
    cam.x += (tx - cam.x) * a; cam.y += (ty - cam.y) * a;
    cam.lz += (Math.log(tz) - cam.lz) * a;
    const z = Math.exp(cam.lz), s = s0 * z;
    const vcx = (vis.x0 + vis.x1) / 2, vcy = (vis.y0 + vis.y1) / 2;
    svg.attr('viewBox', `${cam.x - vcx / s} ${cam.y - vcy / s} ${winW / s} ${winH / s}`);

    const inv = 1 / s;
    fixed.forEach((f) => f.g.attr('transform', `translate(${f.x} ${f.y}) scale(${inv})`));
    labNodes.forEach((l) => {
      const dim = (l.cls === 'realm' || l.cls === 'sea') ? z > 3.6 : l.cls === 'mtn' ? z > 4.5 : l.cls === 'city' ? z < 3.2 : false;
      l.g.classed('dim', dim);
    });

    /* 人物（Figure） */
    const fs = (winW <= 860 ? 0.5 : 0.62) * inv;
    const fx = disp[0] + (st.type === 'stay' && st.i === compIdx ? -10 * inv : 0);
    figWrap.attr('transform', `translate(${fx} ${disp[1] - (moving ? 0 : 9 * inv)}) scale(${fs})`)
      .attr('class', 'fig-wrap' + (moving ? ' moving' : '') + ' m-' + mode);
    figFlip.attr('transform', facing < 0 ? 'scale(-1 1)' : null);
    if (compIdx >= 0) huike.attr('transform', `translate(${SP[compIdx][0] + 22 * inv} ${SP[compIdx][1]}) scale(${fs * 0.9})`)
      .classed('on', started && st.type === 'stay' && st.i === compIdx);

    /* 站點狀態（Marker state） */
    const curI = st.type === 'stay' ? st.i : -1;
    markers.forEach((m) => {
      const visited = m.idx.some((i) => i < st.i || (i === st.i && st.type === 'stay') || (st.type === 'move' && i <= st.i));
      const current = m.idx.includes(curI);
      m.g.classed('visited', started && visited).classed('current', started && current);
      const shown = current ? curI : m.idx[0];
      m.num.text(stations[shown].num);
      m.tz.text(stations[shown].place.zh); m.te.text(stations[shown].place.en);
    });

    segs.forEach((sg, j) => { if (sg.viaG) sg.viaG.classed('visited', started && (st.i > j || (st.type === 'move' && st.i === j && modeAt(sg, q * sg.L) !== 'ship'))); });

    /* 時間軸（Timeline） */
    const frac = st.type === 'stay' ? st.i : st.i + q;
    tlFill.style.width = (frac / (stations.length - 1) * 100) + '%';
    dots.forEach((d, i) => {
      d.classList.toggle('current', started && st.type === 'stay' && i === st.i);
      d.classList.toggle('visited', started && (i < st.i || (st.type === 'move' && i === st.i)));
    });

    /* 卡片（Card） */
    if (st.type === 'stay') setCard('s' + st.i, stationHTML(st.i));
    else setCard('m' + st.i + mode, travelHTML(st.i, mode));

    requestAnimationFrame(frame);
  }

  /* 閱讀模式（Reading mode：每站停住，按下一站才繼續） */
  let readMode = false;
  try { readMode = localStorage.getItem('chan-read') === '1'; } catch (e) {}
  function setRead(v) {
    readMode = v; body.classList.toggle('reading', v);
    $('readBtn').setAttribute('aria-pressed', String(v));
    try { localStorage.setItem('chan-read', v ? '1' : '0'); } catch (e) {}
  }
  setRead(readMode);
  cardBody.addEventListener('click', (e) => { if (e.target.closest('.read-hint')) $('nextBtn').click(); });
  $('readBtn').addEventListener('click', () => {
    setRead(!readMode);
    toast(readMode ? '閱讀模式：每站會停住，按「下一站」繼續' : '自動播放：讀完自動前往下一站',
          readMode ? 'Reading mode: press Next to continue' : 'Auto-play: moves on automatically');
  });

  /* 速度（Playback speed） */
  const SPEEDS = [0.75, 1, 1.5, 2];
  let speed = 1;
  $('speedBtn').addEventListener('click', () => {
    speed = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
    $('speedBtn').textContent = speed + '×';
  });

  /* 分享與網址定位（Share link & #stop deep link） */
  const stopFromHash = () => { const m = /stop=(\d+)/.exec(location.hash); const n = m ? +m[1] - 1 : -1; return n >= 0 && n < stations.length ? n : -1; };
  const linkFor = (i) => location.origin + location.pathname + '#ch=' + chapter.id + '&stop=' + (i + 1);
  $('shareBtn').addEventListener('click', async () => {
    const i = steps[stepIdx].i;
    const url = linkFor(started ? i : 0);
    const title = document.title;
    try {
      if (navigator.share && matchMedia('(pointer: coarse)').matches) { await navigator.share({ title, url }); return; }
      await navigator.clipboard.writeText(url);
      toast('已複製這一站的連結', 'Link to this stop copied');
    } catch (e) { toast('複製失敗，請手動複製網址列', 'Could not copy — please copy the address bar'); }
  });
  window.addEventListener('hashchange', () => { if (chHash() !== chapter.id && CHAPTERS.some((c) => c.id === chHash() && c.ready)) { location.reload(); return; } const n = stopFromHash(); if (n >= 0 && n !== steps[stepIdx].i) seek(n); });

  /* 到站鐘聲（Arrival bell, synthesized — 不需音檔） */
  let actx = null, soundOn = false;
  function bell() {
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime, master = actx.createGain();
      master.gain.value = 0.16; master.connect(actx.destination);
      [[196, 1, 5.5], [196 * 2.76, 0.45, 3.2], [196 * 5.4, 0.2, 1.8], [196 * 8.93, 0.08, 1.1]].forEach(([f, a, d]) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(a, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + d + 0.1);
      });
    } catch (e) {}
  }

  /* 到站效果（Arrival: ink bloom, bell, address） */
  const gBloom = svg.append('g');
  function onArrive(i) {
    const p = SP[i];
    const g = addFixed(gBloom.append('g'), p);
    g.append('circle').attr('class', 'bloom').attr('r', 14);
    g.append('circle').attr('class', 'bloom b2').attr('r', 14);
    g.append('circle').attr('class', 'bloom b3').attr('r', 14);
    setTimeout(() => { g.remove(); const k = fixed.findIndex((f) => f.g === g); if (k >= 0) fixed.splice(k, 1); }, 2400);
    bell();
    try { history.replaceState(null, '', '#ch=' + chapter.id + '&stop=' + (i + 1)); } catch (e) {}
  }

  /* 結尾（Finale） */
  $('replayBtn').addEventListener('click', () => { body.classList.remove('show-finale'); seek(0); setPlaying(true); });
  $('finaleClose').addEventListener('click', () => body.classList.remove('show-finale'));

  /* 測試用（Debug hook，網址加 ?debug 才啟用） */
  if (/[?&]debug/.test(location.search)) {
    window.__chan = { go(idx, frac) { begin(); stepIdx = idx; stepT = durOf(steps[idx]) * (frac || 0); setPlaying(false); } };
  }

  /* 篇章開場與結尾文字（Per-chapter intro & finale） */
  const I = chapter.intro;
  if (I) {
    document.querySelector('.intro-title .v').textContent = I.v;
    document.querySelector('.intro-title .seal').textContent = I.seal;
    $('introEn').textContent = I.en;
    $('introSub').innerHTML = bi(I.sub, 'span');
    $('introNote').innerHTML = bi(I.note, 'span');
  }
  if (chapter.finale) $('finaleText').innerHTML = bi(chapter.finale, 'span');
  const nextHint = $('finaleNext');
  if (chapter.nextChapter) {
    nextHint.hidden = false;
    nextHint.innerHTML = bi(chapter.nextChapter.label, 'span');
    nextHint.addEventListener('click', () => goChapter(chapter.nextChapter.id));
  } else nextHint.hidden = true;
  $('finaleHint').innerHTML = chapter.nextHint ? bi(chapter.nextHint, 'span') : '';
  document.title = chapter.name.zh + ' · 禪宗祖師行旅圖 · Journeys of the Chan Patriarchs';

  setLang(lang);
  layout();
  requestAnimationFrame(frame);
})();
