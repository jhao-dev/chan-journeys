/* 古畫場景（Painting scenes）：目前只有達摩篇。圖片皆為公開授權，來自維基共享資源（Wikimedia Commons）。 */
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
    const a = chapterId === 'dharma' && ART[key];
    if (!a) return '';
    const fx = a.fx === 'mist' ? '<div class="haze" aria-hidden="true"></div>' : a.fx ? particles(a.fx) : '';
    const quote = a.quote ? `<p class="inscribe">${a.quote.map((q) => `<span class="line">${bi(q)}</span>`).join('')}</p>` : '';
    return `<figure class="painting${a.travel ? ' wide' : ''}" style="--from:${a.from};--to:${a.to};--origin:${a.origin}">
      <div class="frame" title="點一下看整幅畫 / Tap to see the whole painting">
        <img src="${P}${a.img}.jpg" alt="${a.credit.zh}">${fx}${quote}
      </div><figcaption>${bi(a.credit)}</figcaption></figure>`;
  };
})();
