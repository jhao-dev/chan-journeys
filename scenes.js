/* 水墨插圖（Ink-wash scene illustrations） */
(function () {
  const INK = '#241c15', SKIN = '#efd6b0', RED = '#b3261e';

  /* 人物（Figure）：畫在 60×80 的框內，腳底中心在 (30,78) */
  function figArt(o) {
    o = o || {};
    const robe = o.robe || RED;
    const band = o.band || '#d9573f';
    const fold = o.fold || '#7a1713';
    let s = '';
    s += '<ellipse cx="30" cy="78" rx="15" ry="2.6" fill="' + INK + '" opacity=".16"/>';
    if (o.staff !== false) {
      s += '<path d="M47 8 L47 78" stroke="#4a3526" stroke-width="2.2" stroke-linecap="round"/>';
      s += '<circle cx="47" cy="7" r="3.2" fill="none" stroke="#4a3526" stroke-width="1.6"/>';
    }
    s += '<path d="M20 35 C14 49 12 65 10 77 L44 77 C42 63 40 48 37 35 Z" fill="' + robe + '" stroke="' + INK + '" stroke-width="1.4" stroke-linejoin="round"/>';
    s += '<path d="M21 36 L40 63 L37 70 L17 45 Z" fill="' + band + '" opacity=".55"/>';
    s += '<path d="M23 56 Q30 61 38 58 M20 67 Q28 71 37 68" stroke="' + fold + '" fill="none" stroke-width="1.1" stroke-linecap="round"/>';
    if (o.staff !== false) {
      s += '<path d="M35 41 Q42 39 46.5 34" stroke="' + robe + '" stroke-width="5.5" fill="none" stroke-linecap="round"/>';
      s += '<circle cx="47" cy="33.5" r="2.7" fill="' + SKIN + '" stroke="' + INK + '" stroke-width=".8"/>';
    }
    s += '<circle cx="28" cy="22" r="10" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.3"/>';
    if (o.crown) {
      s += '<rect x="17" y="9" width="22" height="4" fill="' + INK + '"/>';
      s += '<path d="M19 13 v5 M23 13 v6 M33 13 v6 M37 13 v5" stroke="' + INK + '" stroke-width="1"/>';
      s += '<rect x="22" y="12" width="12" height="4" fill="' + INK + '"/>';
    }
    if (o.beard !== false) {
      s += '<path d="M18.5 22 C18 36 27 40 37.5 27 C33 32.5 25 32 21.5 24 Z" fill="' + INK + '"/>';
      s += '<path d="M30.5 18 q4 -2.6 7.6 -.2" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/>';
      s += '<circle cx="19.5" cy="26" r="1.6" fill="#c9a23a"/>';
    } else {
      s += '<path d="M31 18.5 q3 -1.2 6 0" stroke="' + INK + '" stroke-width="1.3" fill="none" stroke-linecap="round"/>';
      s += '<path d="M33 27 q2 1 3.5 0" stroke="' + INK + '" stroke-width="1" fill="none"/>';
    }
    s += '<circle cx="34.6" cy="21.6" r="1.6" fill="' + INK + '"/>';
    return s;
  }

  function FIG(x, y, sc, flip, o) {
    const tx = flip ? x + 30 * sc : x - 30 * sc;
    return '<g transform="translate(' + tx + ' ' + (y - 78 * sc) + ') scale(' + (flip ? -sc : sc) + ' ' + sc + ')">' + figArt(o) + '</g>';
  }

  function bi(zh, en, x, y, attrs) {
    return '<text class="zh" x="' + x + '" y="' + y + '" ' + (attrs || '') + '>' + zh + '</text>' +
           '<text class="en" x="' + x + '" y="' + y + '" ' + (attrs || '') + '>' + en + '</text>';
  }

  /* 遠山（Distant ink mountains） */
  function hills(y, op, seed) {
    const h = [[0, y], [40, y - 26], [80, y - 8], [130, y - 42], [180, y - 12], [230, y - 34], [290, y - 6], [340, y - 30], [400, y - 10], [400, 240], [0, 240]];
    const d = 'M' + h.map(function (p, i) { return p[0] + ' ' + (p[1] + (i % 2 ? seed : 0)); }).join(' L') + ' Z';
    return '<path d="' + d + '" fill="' + INK + '" opacity="' + op + '" stroke-linejoin="round"/>';
  }

  function waves(y0, n, cls) {
    let s = '<g class="' + (cls || 'waves') + '">';
    for (let i = 0; i < n; i++) {
      const y = y0 + i * 12, off = (i % 2) * 22;
      let d = 'M' + (-60 + off) + ' ' + y;
      for (let x = -60 + off; x < 460; x += 44) d += ' q11 -6 22 0 t22 0';
      s += '<path d="' + d + '" stroke="#4d5a55" stroke-width="1.2" fill="none" opacity="' + (0.55 - i * 0.06) + '"/>';
    }
    return s + '</g>';
  }

  const SCENES = {
    xiangzhi: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="香至國">' +
        '<defs><radialGradient id="sg1"><stop offset="0" stop-color="#d9502b" stop-opacity=".55"/><stop offset="1" stop-color="#d9502b" stop-opacity="0"/></radialGradient></defs>' +
        '<circle class="pulse" cx="300" cy="70" r="64" fill="url(#sg1)"/>' +
        '<circle cx="300" cy="70" r="24" fill="' + RED + '" opacity=".85"/>' +
        hills(170, 0.12, 6) +
        '<g class="birds"><path d="M40 60 q6 -6 12 0 q6 -6 12 0" /><path d="M78 44 q5 -5 10 0 q5 -5 10 0"/><path d="M64 80 q4 -4 8 0 q4 -4 8 0"/></g>' +
        /* 佛塔（Stupa） */
        '<g transform="translate(0 6)">' +
        '<path d="M60 196 L200 196 L196 186 L64 186 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M74 186 Q74 120 130 114 Q186 120 186 186 Z" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<path d="M88 186 Q90 140 130 132 M172 186 Q170 140 130 132" stroke="' + INK + '" stroke-width=".7" fill="none" opacity=".5"/>' +
        '<rect x="119" y="102" width="22" height="12" fill="#e2d5b2" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M130 102 V62 M114 92 H146 M118 82 H142 M122 72 H138" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<circle cx="130" cy="60" r="3" fill="' + RED + '"/>' +
        '</g>' +
        /* 菩提樹（Bodhi tree） */
        '<path d="M228 202 C230 170 226 150 236 130" stroke="' + INK + '" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<g class="sway" fill="' + INK + '" opacity=".72"><ellipse cx="236" cy="122" rx="30" ry="18"/><ellipse cx="214" cy="136" rx="18" ry="11"/><ellipse cx="258" cy="138" rx="17" ry="10"/></g>' +
        '<path d="M0 204 Q100 196 200 204 T400 202" stroke="' + INK + '" stroke-width="2" fill="none" opacity=".6"/>' +
        FIG(320, 206, 1.25, false) +
        '</svg>';
    },

    liang: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="梁武帝">' +
        hills(120, 0.08, 4) +
        /* 宮殿（Palace hall） */
        '<path d="M36 92 Q70 88 96 72 L304 72 Q330 88 364 92 L352 100 L48 100 Z" fill="#3b3029" stroke="' + INK + '" stroke-width="1"/>' +
        '<path d="M110 72 Q200 54 290 72" stroke="' + INK + '" stroke-width="3" fill="none"/>' +
        '<rect x="60" y="100" width="280" height="8" fill="#8c2a1f"/>' +
        '<path d="M78 108 V196 M128 108 V196 M272 108 V196 M322 108 V196" stroke="#8c2a1f" stroke-width="7"/>' +
        '<path d="M40 196 H360 L372 210 H28 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(150, 200, 1.25, false, { robe: '#c9a13a', band: '#e8c867', fold: '#7d6320', crown: true, staff: false }) +
        FIG(258, 200, 1.25, true) +
        '<g class="say s1" font-size="22">' + bi('「廓然無聖」', '“Vast emptiness — nothing holy”', 200, 36, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="19">' + bi('「不識」', '“I don’t know.”', 258, 230, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    reed: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="一葦渡江">' +
        '<circle cx="318" cy="56" r="22" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" opacity=".9"/>' +
        hills(130, 0.1, 8) +
        '<rect x="0" y="128" width="400" height="112" fill="#c9cfc2" opacity=".45"/>' +
        waves(150, 8, 'waves drift') +
        '<g class="ripple"><ellipse cx="200" cy="186" rx="60" ry="6" fill="none" stroke="#4d5a55" stroke-width="1"/></g>' +
        '<g class="ripple r2"><ellipse cx="200" cy="186" rx="60" ry="6" fill="none" stroke="#4d5a55" stroke-width="1"/></g>' +
        '<g class="float">' +
        '<path d="M120 184 Q200 172 284 182 Q200 190 120 184 Z" fill="#6e7a3a" stroke="#3d4520" stroke-width="1"/>' +
        '<path d="M284 182 L300 176" stroke="#3d4520" stroke-width="1.4"/>' +
        FIG(200, 182, 1.25, false) +
        '</g>' +
        '<g class="mist"><rect x="-40" y="196" width="480" height="16" fill="#f2e8d0" opacity=".55"/></g>' +
        '</svg>';
    },

    wall: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="面壁">' +
        hills(110, 0.1, 6) +
        '<path d="M60 240 L60 120 Q90 50 200 40 Q310 50 340 120 L340 240 Z" fill="#2d241c"/>' +
        '<path d="M110 232 L110 128 Q130 78 200 70 Q270 78 290 128 L290 232 Z" fill="#7c6e5c"/>' +
        '<path d="M130 130 Q160 100 200 96 M240 110 Q270 120 280 150 M140 200 L170 190" stroke="' + INK + '" stroke-width=".8" fill="none" opacity=".4"/>' +
        /* 石上身影（Shadow in the stone） */
        '<g class="shadow"><ellipse cx="186" cy="118" rx="17" ry="19" fill="' + INK + '"/><path d="M146 226 Q144 158 186 142 Q228 158 226 226 Z" fill="' + INK + '"/></g>' +
        /* 背影打坐（Seated, seen from behind） */
        '<path d="M164 232 Q162 186 200 176 Q238 186 236 232 Z" fill="' + RED + '" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<path d="M178 232 Q190 196 214 182" stroke="#d9573f" stroke-width="10" fill="none" opacity=".5"/>' +
        '<circle cx="200" cy="166" r="13" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<path d="M187 170 q-4 2 -2 6 M213 170 q4 2 2 6" stroke="' + INK + '" stroke-width="1.2" fill="none"/>' +
        '<path d="M60 236 H340" stroke="' + INK + '" stroke-width="2"/>' +
        '<g class="leaves"><path d="M40 40 q6 -4 10 2 q-6 4 -10 -2Z"/><path d="M360 30 q6 -4 10 2 q-6 4 -10 -2Z"/><path d="M90 20 q5 -3 8 2 q-5 3 -8 -2Z"/></g>' +
        '<g class="seal-stamp"><rect x="352" y="186" width="34" height="40" fill="' + RED + '"/>' + bi('九年', '9 yrs', 369, 211, 'text-anchor="middle" fill="#f6efdc" font-size="13"') + '</g>' +
        '</svg>';
    },

    snow: function () {
      let flakes = '';
      for (let i = 0; i < 46; i++) {
        const x = (i * 83) % 400, r = 1 + (i % 3) * 0.7;
        flakes += '<circle cx="' + x + '" cy="-6" r="' + r + '" style="animation-delay:-' + ((i * 0.37) % 6).toFixed(2) + 's;animation-duration:' + (5 + (i % 5)) + 's"/>';
      }
      return '<svg viewBox="0 0 400 240" role="img" aria-label="立雪">' +
        '<rect x="0" y="0" width="400" height="240" fill="#6b6a66" opacity=".18"/>' +
        hills(120, 0.16, 6) +
        '<path d="M0 240 L0 70 Q40 40 110 50 L150 240 Z" fill="#2d241c"/>' +
        '<path d="M14 240 L14 110 Q46 84 96 96 L122 240 Z" fill="#5a4e40"/>' +
        FIG(70, 216, 1.15, false) +
        '<path d="M0 214 Q120 200 240 210 T400 206 V240 H0 Z" fill="#f7f3ea" stroke="#9a9384" stroke-width="1"/>' +
        /* 神光跪雪（Shenguang kneeling） */
        '<g transform="translate(262 208)">' +
        '<path d="M-20 0 Q-22 -30 0 -38 Q20 -30 18 0 Z" fill="#cfc6b3" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<circle cx="-4" cy="-46" r="9" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<circle cx="-9" cy="-47" r="1.3" fill="' + INK + '"/>' +
        '<path d="M-22 4 Q0 -4 22 4" stroke="#f7f3ea" stroke-width="7" fill="none"/>' +
        '</g>' +
        '<g class="drops"><circle cx="300" cy="216" r="3" fill="' + RED + '"/><circle cx="310" cy="220" r="2" fill="' + RED + '"/><circle cx="292" cy="222" r="1.6" fill="' + RED + '"/></g>' +
        '<g class="snow" fill="#fbf8f0">' + flakes + '</g>' +
        '<g class="say s1" font-size="16">' + bi('將心來，與汝安', '“Bring me your mind.”', 250, 120, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* 旅途小插圖（Travel vignettes） */
    ship: function () {
      return '<svg viewBox="0 0 400 140" role="img" aria-label="航海">' +
        '<rect x="0" y="80" width="400" height="60" fill="#c9cfc2" opacity=".45"/>' +
        waves(92, 4, 'waves drift') +
        '<g class="float">' +
        '<path d="M140 96 L260 96 L246 112 L156 112 Z" fill="#5a4334" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M200 96 V30" stroke="' + INK + '" stroke-width="2"/>' +
        '<path d="M202 34 Q236 54 230 90 L202 90 Z" fill="#e9dcbc" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(176, 98, 0.78, false) +
        '</g></svg>';
    },
    walk: function () {
      return '<svg viewBox="0 0 400 140" role="img" aria-label="步行">' +
        hills(100, 0.1, 5) +
        '<path d="M0 120 Q120 108 220 118 T400 112" stroke="' + INK + '" stroke-width="1.6" fill="none" opacity=".6"/>' +
        '<g class="walker">' + FIG(200, 120, 0.95, false) + '</g>' +
        '</svg>';
    },
    wait: function () {
      return '<svg viewBox="0 0 400 140" role="img" aria-label="時光">' +
        '<circle cx="200" cy="70" r="40" fill="none" stroke="' + INK + '" stroke-width="5" stroke-dasharray="200 52" stroke-linecap="round" opacity=".75" class="enso"/>' +
        '</svg>';
    }
  };
  SCENES['reed-travel'] = SCENES.reed;

  window.INK_FIG = { figArt: figArt, FIG: FIG };
  window.SCENES = SCENES;
})();
