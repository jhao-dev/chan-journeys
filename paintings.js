/* 古畫場景（Painting scenes）：目前有達摩篇、六祖篇、釋迦篇、慧可篇與迦葉篇。圖片皆為公開授權，來自維基共享資源、克利夫蘭藝術博物館與日本國立博物館（ColBase）。 */
(function () {
  const P = 'assets/paintings/';
  const c = (zh, en) => ({ zh, en });
  const ART = {
    xiangzhi: { img: 'xiangzhi', from: '12% 50%', to: '50% 50%', origin: '50% 45%', fx: 'mist',
      credit: c('元・趙孟頫《紅衣西域僧圖》，遼寧省博物館藏', 'Zhao Mengfu, Monk in a Red Robe, 1304 · Liaoning Provincial Museum') },
    liang: { img: 'liang', from: '50% 70%', to: '50% 22%', origin: '48% 38%', quote: [c('廓然無聖', 'Vast emptiness — nothing holy'), c('不識', 'I don’t know')],
      credit: c('《梁武帝像》', 'Portrait of Emperor Wu of Liang') },
    reed: { img: 'reed', from: '50% 18%', to: '50% 48%', origin: '50% 40%', fx: 'mist', quote: [c('一葦渡江', 'Across on a single reed')],
      credit: c('日本《蘆葉達磨圖》，大都會藝術博物館藏', 'Bodhidharma Crossing the Yangzi on a Reed (Japan) · The Met') },
    wall: { img: 'wall', from: '50% 25%', to: '50% 92%', origin: '55% 75%', fx: 'leaves', quote: [c('面壁九年', 'Nine years facing the wall')],
      credit: c('日本・雲谷等顏《達磨圖》，17 世紀初，大都會藝術博物館藏', 'Unkoku Tōgan, Daruma, early 17th c. · The Met') },
    snow: { img: 'snow', from: '50% 12%', to: '50% 90%', origin: '35% 75%', fx: 'snow', quote: [c('將心來', 'Bring me your mind'), c('與汝安', 'and I will calm it')],
      credit: c('日本・雪舟《慧可斷臂圖》，1496 年', 'Sesshū, Huike Offering His Arm to Bodhidharma, 1496') },
    road: { img: 'land', from: '100% 50%', to: '55% 50%', origin: '50% 60%', fx: 'mist', travel: true,
      credit: c('宋・夏圭《溪山清遠圖》（局部）', 'Xia Gui, Pure and Remote View of Streams and Mountains (detail)') }
  };
  const HN = {
    firewood: { img: 'hn-firewood', from: '50% 8%', to: '50% 65%', origin: '52% 50%', quote: [c('應無所住', 'Dwelling nowhere,'), c('而生其心', 'let the mind arise')],
      credit: c('南宋・直翁《六祖挾擔圖》', 'Zhiweng, The Sixth Patriarch Carrying a Pole, 13th c.') },
    walls: { img: 'hn-bamboo', from: '50% 20%', to: '50% 92%', origin: '55% 60%', fx: 'leaves', quote: [c('本來無一物', 'Originally not one thing —'), c('何處惹塵埃', 'where could dust alight?')],
      credit: c('南宋・梁楷《六祖斫竹圖》', 'Liang Kai, The Sixth Patriarch Cutting Bamboo, 13th c.') },
    robe: { img: 'hn-goso', from: '50% 8%', to: '50% 75%', origin: '45% 50%', quote: [c('何期自性', 'Who would have thought'), c('本自清淨', 'self-nature is originally pure')],
      credit: c('元《五祖荷鋤圖》，福岡市美術館藏', 'The Fifth Patriarch with a Hoe, Yuan · Fukuoka Art Museum') },
    ridge: { img: 'hn-mountain', from: '50% 10%', to: '50% 80%', origin: '45% 70%', fx: 'mist', quote: [c('不思善', 'Think not of good,'), c('不思惡', 'think not of evil')],
      credit: c('元・陳汝言《羅浮山樵圖》，克利夫蘭藝術博物館藏', 'Chen Ruyan, The Woodcutter of Luofu, 1366 · Cleveland Museum of Art') },
    hunters: { img: 'hn-hunt', from: '15% 50%', to: '56% 50%', origin: '52% 55%', fx: 'leaves', quote: [c('隱遯十五年', 'Fifteen years in hiding')],
      credit: c('傳五代・胡瓌《出獵圖》', 'Attributed to Hu Gui, Setting Out to Hunt') },
    flag: null,
    platform: { img: 'hn-platform', from: '50% 5%', to: '50% 58%', origin: '55% 52%', fx: 'mist', quote: [c('但用此心', 'Just use this mind'), c('直了成佛', 'and directly become Buddha')],
      credit: c('大理國・張勝溫《梵像卷》慧能大師（局部）', 'Zhang Shengwen, Buddhist Images of Dali: Master Huineng (detail), 12th c.') },
    road: ART.road
  };
  const BD = {
    birth: null, palace: null, teachers: null,
    river: { img: 'bd-river', from: '50% 8%', to: '50% 58%', origin: '50% 40%', fx: 'mist', quote: [c('走向中道', 'The Middle Way')],
      credit: c('南宋《出山釋迦圖》，1244 年，克利夫蘭藝術博物館藏', 'Shakyamuni Emerging from the Mountains, 1244 · Cleveland Museum of Art') },
    bodhi: { img: 'bd-bodhi', from: '50% 12%', to: '50% 74%', origin: '50% 60%', fx: 'leaves', quote: [c('不悟道', 'Until I awaken'), c('不起座', 'I will not rise')],
      credit: c('明《菩提樹下釋迦圖》，克利夫蘭藝術博物館藏', 'Shakyamuni under the Bodhi Tree, Ming · Cleveland Museum of Art') },
    deer: { img: 'bd-deer', from: '90% 50%', to: '35% 50%', origin: '50% 55%', fx: 'mist', travel: true, quote: [c('初轉法輪', 'First turning of the wheel')],
      credit: c('元・李升《佛陀度化五比丘》（局部），克利夫蘭藝術博物館藏', 'Li Sheng, Buddha’s Conversion of Five Bhiksu (detail), 14th c. · Cleveland Museum of Art') },
    flower: { img: 'bd-flower', from: '25% 50%', to: '82% 50%', origin: '60% 50%', travel: true, quote: [c('正法眼藏', 'The true Dharma eye,'), c('涅槃妙心', 'the wondrous mind of nirvana')],
      credit: c('日本・菱田春草《拈花微笑》，1897 年', 'Hishida Shunsō, Mahakasyapa Smiling at the Lotus Flower, 1897') },
    nirvana: { img: 'bd-nirvana', from: '50% 8%', to: '50% 36%', origin: '50% 45%', fx: 'leaves', quote: [c('以己為燈', 'Be a lamp to yourselves,'), c('以法為燈', 'let the Dharma be your lamp')],
      credit: c('日本《涅槃圖》版畫，約 1710 年代，克利夫蘭藝術博物館藏', 'The Parinirvana of the Buddha, Japan, c. 1710s · Cleveland Museum of Art') },
    road: ART.road
  };
  const HK = {
    luoyang: null, lanka: null,
    marrow: { img: 'hk-cliff', from: '50% 30%', to: '50% 94%', origin: '40% 80%', fx: 'mist', quote: [c('汝得吾髓', 'You have my marrow')],
      credit: c('南宋《達摩面壁圖》，克利夫蘭藝術博物館藏', 'Bodhidharma Meditating Facing a Cliff, Song, late 13th c. · Cleveland Museum of Art') },
    sin: { img: 'hk-patriarchs', from: '50% 0%', to: '50% 85%', origin: '50% 55%', quote: [c('覓罪不可得', 'The sin cannot be found')],
      credit: c('大理國・張勝溫《梵像卷》慧可、僧璨大師（局部）', 'Zhang Shengwen, Buddhist Images of Dali: Masters Huike and Sengcan (detail), 12th c.') },
    tavern: { img: 'hk-tiger', from: '40% 50%', to: '90% 50%', origin: '50% 55%', travel: true, quote: [c('我自調心', 'I am tuning'), c('何關汝事', 'my own mind')],
      credit: c('傳五代・石恪《二祖調心圖》，東京國立博物館藏（出處：ColBase）', 'Attributed to Shi Ke, Two Patriarchs Harmonizing Their Minds · Tokyo National Museum (ColBase)') },
    road: ART.road
  };
  const KS = {
    kasorden: null,
    kassmile: BD.flower,
    kascouncil: null,
    kaspole: { img: 'ks-transmit', mid: true, from: '50% 0%', to: '50% 72%', origin: '50% 60%', quote: [c('倒卻門前', 'Knock down the flagpole'), c('剎竿著', 'at the gate!')],
      credit: c('大理國・張勝溫《梵像卷》尊者迦葉、尊者阿難（局部），國立故宮博物院藏', 'Zhang Shengwen, Buddhist Images of Dali: Kasyapa and Ananda (detail), 12th c. · National Palace Museum') },
    kascave: null,
    road: null
  };
  const SETS = { dharma: ART, huineng: HN, buddha: BD, huike: HK, kasyapa: KS };
  const bi = (o) => `<span class="zh">${o.zh}</span><span class="en">${o.en}</span>`;

  function particles(kind) {
    const n = kind === 'snow' ? 36 : 7;
    let s = '';
    for (let i = 0; i < n; i++) {
      const size = kind === 'snow' ? 3 + (i % 3) * 1.5 : 7 + (i % 3) * 2;
      s += `<i style="left:${(i * 37) % 104}%;width:${size}px;height:${size}px;animation-duration:${(kind === 'snow' ? 6 : 10) + (i % 5)}s;animation-delay:-${(i * 1.3) % 11}s"></i>`;
    }
    return `<div class="fall ${kind}" aria-hidden="true">${s}</div>`;
  }

  window.paintingScene = function (chapterId, key) {
    const set = SETS[chapterId];
    if (!set || !(key in set)) return '';
    const a = set[key];
    if (!a) return '<div class="no-painting"></div>'; // 這一站不放圖
    const fx = a.fx === 'mist' ? '<div class="haze" aria-hidden="true"></div>' : a.fx ? particles(a.fx) : '';
    const quote = a.quote ? `<p class="inscribe${a.mid ? ' mid' : ''}">${a.quote.map((q) => `<span class="line">${bi(q)}</span>`).join('')}</p>` : '';
    return `<figure class="painting${a.travel ? ' wide' : ''}" style="--from:${a.from};--to:${a.to};--origin:${a.origin}">
      <div class="frame" title="點一下看整幅畫 / Tap to see the whole painting">
        <img src="${P}${a.img}.jpg" alt="${a.credit.zh}">${fx}${quote}
      </div><figcaption>${bi(a.credit)}</figcaption></figure>`;
  };
})();
