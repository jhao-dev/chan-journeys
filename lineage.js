/* 傳法系譜總覽（Lineage overview）— 可點的水墨樹狀圖
 * 座標 x 為 0–760 的比例位置、y 為像素。ch 為已完成篇章的 id，點擊會直接前往。 */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const T = (zh, en) => ({ zh, en });
  const OFFICIAL = { title: '蕃新聞 2019/10/22：洞悉2020 致勝關鍵 大師強勢來襲 妙天隔空開示', url: 'https://n.yam.com/Article/20191022376164' };

  const N = [
    { id: 'buddha', x: 380, y: 60, w: T('釋迦牟尼佛', 'Shakyamuni Buddha'), tag: T('本師', 'The Buddha'), ch: 'buddha',
      d: T('禪宗尊為本師。傳說他在靈山會上拈花示眾，把「正法眼藏」交給摩訶迦葉。', 'Honored by Chan as the original teacher. Tradition says he held up a flower on Vulture Peak and entrusted the “treasury of the true Dharma eye” to Mahakasyapa.') },
    { id: 'kasyapa', x: 380, y: 150, w: T('摩訶迦葉', 'Mahakasyapa'), tag: T('西天初祖', 'Indian 1st'),
      d: T('靈山會上破顏微笑，受佛陀付囑，禪宗尊為西天第一祖。', 'Smiled at the flower sermon and received the Buddha’s transmission; Chan honors him as the first Indian patriarch.') },
    { id: 'ananda', x: 380, y: 240, w: T('阿難', 'Ananda'), tag: T('西天二祖', 'Indian 2nd'),
      d: T('佛陀的侍者，以多聞著稱，禪宗傳統尊為西天第二祖。', 'The Buddha’s attendant, known for his memory; honored in Chan tradition as the second Indian patriarch.') },
    { id: 'skip1', x: 380, y: 320, w: T('二十八祖，一代單傳', 'Twenty-eight patriarchs, one to one'), skip: true,
      d: T('阿難之後，西天祖師一代傳一代，到第二十八祖為止。這是禪宗自己的傳承說法，中間名單這裡省略。', 'After Ananda the Indian patriarchs pass the teaching one to one up to the 28th. This is Chan’s own account; the middle names are omitted here.') },
    { id: 'prajna', x: 380, y: 400, w: T('般若多羅', 'Prajnatara'), tag: T('西天二十七祖', 'Indian 27th'),
      d: T('達摩的師父，傳說他囑咐達摩在自己圓寂後前往震旦（中國）傳法。', 'Bodhidharma’s teacher, who is said to have told him to go to China after his passing.') },
    { id: 'dharma', x: 380, y: 490, w: T('菩提達摩', 'Bodhidharma'), tag: T('西天二十八祖・東土初祖', 'Indian 28th · Chinese 1st'), ch: 'dharma',
      d: T('由南天竺東來中國，少林面壁九年，成為中國禪宗初祖。相傳他留下傳法偈：「一花開五葉，結果自然成。」', 'Came east from South India and sat nine years at Shaolin, becoming first patriarch in China. He is said to have left the verse: “One flower opens five petals; the fruit ripens of itself.”') },
    { id: 'huike', x: 380, y: 580, w: T('慧可', 'Huike'), tag: T('二祖', '2nd'), ch: 'huike',
      d: T('立雪斷臂求法，向達摩求「安心」，得傳衣缽。', 'Stood in the snow and asked Bodhidharma to pacify his mind; received the robe.') },
    { id: 'sengcan', x: 380, y: 660, w: T('僧璨', 'Sengcan'), tag: T('三祖', '3rd'),
      d: T('二祖之後的傳人，相傳作《信心銘》。', 'Huike’s successor; the poem “Xinxin ming” is traditionally ascribed to him.') },
    { id: 'daoxin', x: 380, y: 740, w: T('道信', 'Daoxin'), tag: T('四祖', '4th'),
      d: T('住在黃梅雙峰山，聚集弟子，使禪門有了固定的修行團體。', 'Settled on Twin Peaks at Huangmei and gathered a lasting community of practitioners.') },
    { id: 'hongren', x: 380, y: 820, w: T('弘忍', 'Hongren'), tag: T('五祖', '5th'), ch: 'hongren',
      d: T('黃梅東山寺，把衣缽傳給不識字的惠能。', 'At East Mountain Temple, Huangmei, he passed the robe to the illiterate Huineng.') },
    { id: 'huineng', x: 380, y: 910, w: T('惠能', 'Huineng'), tag: T('六祖', '6th'), ch: 'huineng',
      d: T('南宗禪的奠基者，《六祖壇經》記錄他的說法。禪宗各家後來都出自他的弟子。', 'Founder of Southern Chan; the Platform Sutra records his teaching. All later Chan houses descend from his disciples.') },
    { id: 'nanyue', x: 215, y: 1010, w: T('南嶽懷讓', 'Nanyue Huairang'), tag: T('惠能弟子', 'Disciple'),
      d: T('惠能的弟子，馬祖道一的老師。後來溈仰、臨濟兩家都出自這一系。', 'Huineng’s disciple and teacher of Mazu Daoyi. The Guiyang and Linji houses later grew from this line.') },
    { id: 'qingyuan', x: 545, y: 1010, w: T('青原行思', 'Qingyuan Xingsi'), tag: T('惠能弟子', 'Disciple'),
      d: T('惠能的弟子。後來曹洞、雲門、法眼三家都出自這一系。', 'Huineng’s disciple. The Caodong, Yunmen and Fayan houses later grew from this line.') },
    { id: 'guiyang', x: 70, y: 1130, w: T('溈仰宗', 'Guiyang'), leaf: true,
      d: T('溈山靈祐與弟子仰山慧寂所創，是五家中最早成形的一家。', 'Founded by Weishan Lingyou and his disciple Yangshan Huiji; the earliest of the five houses to form.') },
    { id: 'linji', x: 225, y: 1130, w: T('臨濟宗', 'Linji'), leaf: true, mine: true,
      d: T('臨濟義玄所創，以「棒喝」的直接教學著稱，是流傳最廣、延續最久的一家。', 'Founded by Linji Yixuan, known for the direct teaching of “blows and shouts”; the most widespread and enduring house.') },
    { id: 'caodong', x: 400, y: 1130, w: T('曹洞宗', 'Caodong'), leaf: true,
      d: T('洞山良价與曹山本寂所創，後世以「默照禪」的靜坐修行聞名。', 'Founded by Dongshan Liangjie and Caoshan Benji; later known for the quiet-sitting “silent illumination” practice.') },
    { id: 'yunmen', x: 540, y: 1130, w: T('雲門宗', 'Yunmen'), leaf: true,
      d: T('雲門文偃所創，以言語簡短、峻峭著稱。', 'Founded by Yunmen Wenyan, known for terse, steep sayings.') },
    { id: 'fayan', x: 685, y: 1130, w: T('法眼宗', 'Fayan'), leaf: true,
      d: T('法眼文益所創，重視禪與教理的融合。', 'Founded by Fayan Wenyi, who valued harmony between Chan and doctrinal study.') },
    { id: 'huanglong', x: 120, y: 1230, w: T('黃龍派', 'Huanglong'), small: true,
      d: T('臨濟宗下的一支，與楊岐派合稱「七宗」中的兩宗。', 'A branch of Linji; with the Yangqi branch it makes up the “seven schools.”') },
    { id: 'yangqi', x: 330, y: 1230, w: T('楊岐派', 'Yangqi'), small: true,
      d: T('臨濟宗下的一支，與黃龍派並稱，合五家為「五家七宗」。', 'A branch of Linji; together with Huanglong it completes the “five houses, seven schools.”') },
    { id: 'skip2', x: 225, y: 1330, w: T('歷代祖師（此處省略）', 'Successive masters (omitted)'), skip: true,
      d: T('臨濟之後歷代傳承的名單很長，這裡不一一列出，也不替他們編造資料。', 'The list of masters after Linji is long; it is not reproduced here, and nothing is invented to fill it.') },
    { id: 'miaotian', x: 225, y: 1430, w: T('悟覺妙天禪師', 'Master Wujue Miaotian'), tag: T('第 85 代（依其官方報導自述）', '85th (per his official reports)'), mine: true, final: true, ch: 'miaotian',
      d: T('依官方報導的說法：自釋迦牟尼佛傳法給迦葉算起，是禪宗第 85 代宗師；自達摩東來算起，是中華禪宗第 58 代；自六祖下臨濟一脈算起，是臨濟宗第 48 代。這是其自述的傳承，並非獨立考證。', 'According to his official reports: counting from the Buddha’s transmission to Kasyapa he is the 85th Chan patriarch; from Bodhidharma’s arrival, the 58th in China; within the Linji line below Huineng, the 48th. This is his own account, not independently verified.'), src: OFFICIAL }
  ];
  const EDGES = [
    ['buddha', 'kasyapa'], ['kasyapa', 'ananda'], ['ananda', 'skip1'], ['skip1', 'prajna'], ['prajna', 'dharma'], ['dharma', 'huike'], ['huike', 'sengcan'], ['sengcan', 'daoxin'], ['daoxin', 'hongren'], ['hongren', 'huineng'],
    ['huineng', 'nanyue'], ['huineng', 'qingyuan'], ['nanyue', 'guiyang'], ['nanyue', 'linji'], ['qingyuan', 'caodong'], ['qingyuan', 'yunmen'], ['qingyuan', 'fayan'],
    ['linji', 'huanglong'], ['linji', 'yangqi'], ['linji', 'skip2', 'dash'], ['skip2', 'miaotian', 'dash']
  ];
  const H = 1520, W = 760;
  const byId = {}; N.forEach((n) => { byId[n.id] = n; });
  const readyIds = () => (window.CHAPTERS || []).filter((c) => c.ready).map((c) => c.id);
  const bi = (o, tag) => `<${tag} class="zh">${o.zh}</${tag}><${tag} class="en">${o.en}</${tag}>`;

  const root = $('lineage');
  if (!root) return;
  const scroll = root.querySelector('.lin-scroll');
  const panel = root.querySelector('.lin-panel');

  function build() {
    const ready = readyIds();
    let paths = '';
    EDGES.forEach(([a, b, kind]) => {
      const A = byId[a], B = byId[b];
      const y0 = A.y + 26, y1 = B.y - 26, my = (y0 + y1) / 2;
      paths += `<path d="M${A.x} ${y0} C${A.x} ${my} ${B.x} ${my} ${B.x} ${y1}" class="${kind || ''}"/>`;
    });
    let nodes = N.map((n) => {
      const live = n.ch && ready.includes(n.ch);
      const cls = ['lin-node', n.leaf ? 'leaf' : '', n.small ? 'small' : '', n.skip ? 'skip' : '', n.final ? 'final' : '', n.mine ? 'mine' : '', live ? 'live' : '', n.soon ? 'soon' : ''].join(' ');
      return `<button class="${cls}" data-id="${n.id}" style="left:${(n.x / W * 100).toFixed(2)}%;top:${n.y}px">
        <span class="nm">${bi(n.w, 'span')}</span>${n.tag ? `<span class="tg">${bi(n.tag, 'span')}</span>` : ''}${live ? '<i class="go">▶</i>' : ''}</button>`;
    }).join('');
    scroll.innerHTML = `<div class="lin-canvas" style="height:${H}px">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">${paths}</svg>
      <p class="lin-flower" style="top:1072px">${bi(T('一花開五葉，結果自然成', 'One flower opens five petals; the fruit ripens of itself'), 'span')}<small>${bi(T('相傳為達摩付法偈', 'Verse traditionally ascribed to Bodhidharma'), 'span')}</small></p>
      ${nodes}</div>`;
  }

  function show(id) {
    const n = byId[id];
    scroll.querySelectorAll('.lin-node').forEach((b) => b.classList.toggle('cur', b.dataset.id === id));
    const live = n.ch && readyIds().includes(n.ch);
    panel.innerHTML = `<h3>${bi(n.w, 'span')}${n.tag ? `<em>${bi(n.tag, 'span')}</em>` : ''}</h3>
      <p>${bi(n.d, 'span')}</p>
      ${n.src ? `<p class="lin-src"><a href="${n.src.url}" target="_blank" rel="noopener">${n.src.title} ↗</a></p>` : ''}
      ${live ? `<button class="begin lin-go" data-ch="${n.ch}">${bi(T('前往這一篇', 'Open this chapter'), 'span')}</button>` : ''}`;
    panel.classList.add('on');
  }

  function open() {
    build();
    root.hidden = false;
    document.body.classList.add('lin-open');
    panel.classList.remove('on');
    const cur = (window.CHAPTERS || []).find((c) => c.ready && location.hash.indexOf('ch=' + c.id) >= 0);
    scroll.scrollTop = 0;
  }
  function close() { root.hidden = true; document.body.classList.remove('lin-open'); }

  scroll.addEventListener('click', (e) => { const b = e.target.closest('.lin-node'); if (b) show(b.dataset.id); });
  panel.addEventListener('click', (e) => {
    const g = e.target.closest('.lin-go');
    if (g) { location.hash = '#ch=' + g.dataset.ch; location.reload(); }
  });
  root.querySelector('.lin-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !root.hidden) close(); });
  ['lineageBtn', 'finaleLineage'].forEach((id) => { const b = $(id); if (b) b.addEventListener('click', (e) => { e.preventDefault(); open(); }); });
  if (/[?&]lineage/.test(location.search)) open();
})();
