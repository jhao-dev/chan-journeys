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

  const BUD = { robe: '#d9a441', band: '#ecc766', fold: '#8a6618', staff: false, beard: false };
  const HUI = { robe: '#8a7a5c', band: '#b5a37c', fold: '#4f4430', staff: false, beard: false };
  const HON = { robe: '#d98a2b', band: '#ecc766', fold: '#8a5a18', staff: false, beard: true };
  const DAO = { robe: '#6e5a46', band: '#8a7a5c', fold: '#3a2d20', staff: true, beard: true };
  const HK = { robe: '#6f7f6a', band: '#98a890', fold: '#3a4636', staff: false, beard: false };
  const MIA = { robe: '#8a6a4a', band: '#c9a23a', fold: '#4a3526', staff: false, beard: false };
  const KAS = { robe: '#8a5a2b', band: '#b5a37c', fold: '#4a3320', staff: true, beard: false };
  const ANA = { robe: '#a8864a', band: '#d9c58a', fold: '#5a4220', staff: false, beard: false };
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

    /* ===== 釋迦牟尼佛篇（Shakyamuni chapter） ===== */
    birth: function () {
      let lot = '';
      for (let i = 0; i < 7; i++) lot += '<ellipse cx="' + (92 + i * 21) + '" cy="206" rx="9" ry="3.6" fill="#f3c9c4" stroke="' + INK + '" stroke-width=".8"/>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="藍毗尼誕生">' +
        '<circle class="pulse" cx="300" cy="64" r="22" fill="#e8c867" opacity=".8"/>' + hills(170, 0.1, 6) +
        '<path d="M300 212 C296 170 304 140 286 108" stroke="' + INK + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '<g class="sway" fill="' + INK + '" opacity=".7" style="transform-origin:290px 200px"><ellipse cx="262" cy="96" rx="40" ry="20"/><ellipse cx="318" cy="104" rx="34" ry="18"/><ellipse cx="236" cy="118" rx="22" ry="12"/></g>' +
        '<g fill="#f3a8a0" opacity=".9"><circle cx="250" cy="100" r="3"/><circle cx="296" cy="92" r="3"/><circle cx="322" cy="108" r="3"/></g>' +
        '<path d="M286 112 Q268 128 262 150" stroke="#cfc6b3" stroke-width="6" fill="none" stroke-linecap="round"/>' +
        '<path d="M242 208 Q236 158 262 146 Q288 158 282 208 Z" fill="#e9dcbc" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<circle cx="264" cy="134" r="10" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M254 130 q10 -10 20 0" stroke="' + INK + '" stroke-width="3" fill="none"/>' +
        lot +
        '<g transform="translate(205 206)"><ellipse cx="0" cy="0" rx="16" ry="5" fill="#f3c9c4" stroke="' + INK + '" stroke-width="1"/>' +
        '<path d="M-7 -4 Q-9 -24 0 -26 Q9 -24 7 -4 Z" fill="#d9a441" stroke="' + INK + '" stroke-width="1"/><circle cx="0" cy="-34" r="8" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/>' +
        '<path d="M6 -22 Q16 -34 14 -46" stroke="' + SKIN + '" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M-6 -20 Q-16 -14 -18 -8" stroke="' + SKIN + '" stroke-width="3.4" fill="none" stroke-linecap="round"/></g>' +
        '<g class="say s1" font-size="20">' + bi('「天上天下，唯我獨尊」', '“Above and below, I am the one who awakens”', 190, 44, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    palace: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="夜半出家">' +
        '<rect width="400" height="240" fill="#2b2a33" opacity=".12"/>' +
        '<circle class="pulse" cx="300" cy="54" r="26" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" style="transform-origin:300px 54px"/>' +
        hills(176, 0.14, 6) +
        '<path d="M16 96 Q40 92 60 78 L180 78 Q200 92 224 96 L214 104 L26 104 Z" fill="#3b3029" stroke="' + INK + '" stroke-width="1"/>' +
        '<rect x="30" y="104" width="180" height="8" fill="#8c2a1f"/><path d="M44 112 V204 M96 112 V204 M144 112 V204 M196 112 V204" stroke="#8c2a1f" stroke-width="7"/>' +
        '<path d="M120 204 V150 Q120 138 134 138 Q148 138 148 150 V204" fill="#241c15" opacity=".8"/>' +
        '<path d="M0 206 H400" stroke="' + INK + '" stroke-width="2" opacity=".6"/>' +
        '<g class="float" style="animation-duration:1.4s"><g transform="translate(284 206)">' +
        '<path d="M-44 -16 Q-44 -40 -20 -42 L26 -42 Q44 -44 52 -64 L58 -62 Q56 -40 46 -34 L44 0 L36 0 L34 -18 L-20 -18 L-24 0 L-32 0 L-34 -18 Z" fill="#f4efe6" stroke="' + INK + '" stroke-width="1.3" stroke-linejoin="round"/>' +
        '<g transform="translate(-6 -42) scale(.55)">' + figArt({ robe: '#cfc6b3', band: '#e8e1d0', fold: '#8a8170', staff: false, beard: false }).replace('<ellipse', '<ellipse opacity="0"') + '</g></g></g>' +
        '<g class="drift" opacity=".35"><ellipse cx="220" cy="204" rx="26" ry="3"/><ellipse cx="170" cy="208" rx="18" ry="2.4"/></g>' +
        '<g class="say s1" font-size="20">' + bi('「不證菩提，不再回來」', '“Not until I awaken will I return”', 214, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    teachers: function () {
      function sit(x, y, c) {
        return '<g transform="translate(' + x + ' ' + y + ')"><path d="M-22 0 Q-20 -26 0 -32 Q20 -26 22 0 Z" fill="' + c + '" stroke="' + INK + '" stroke-width="1.2"/>' +
          '<circle cx="0" cy="-42" r="10" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M-9 -44 q9 -8 18 0" stroke="' + INK + '" stroke-width="2.4" fill="none"/></g>';
      }
      return '<svg viewBox="0 0 400 240" role="img" aria-label="早期修行">' +
        hills(120, 0.1, 6) + '<path d="M120 240 L170 70 L210 120 L250 56 L330 240 Z" fill="#7c6e5c" opacity=".55" stroke="' + INK + '" stroke-width="1"/>' +
        '<path d="M0 206 Q120 196 240 204 T400 202" stroke="' + INK + '" stroke-width="2" fill="none" opacity=".6"/>' +
        sit(70, 206, '#cfc6b3') + sit(330, 206, '#cfc6b3') +
        '<g class="pulse" style="transform-origin:70px 160px"><circle cx="70" cy="164" r="38" fill="none" stroke="#7a6a8a" stroke-width="1" stroke-dasharray="3 5" opacity=".6"/></g>' +
        '<g class="pulse" style="transform-origin:330px 160px"><circle cx="330" cy="164" r="38" fill="none" stroke="#7a6a8a" stroke-width="1" stroke-dasharray="3 5" opacity=".6"/></g>' +
        FIG(200, 206, 1.25, false, BUD) +
        '<g class="say s1" font-size="17">' + bi('「這還不是究竟」', '“This is not the final answer.”', 200, 32, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    river: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="尼連禪河">' +
        hills(104, 0.08, 6) + '<rect x="0" y="116" width="400" height="124" fill="#c9cfc2" opacity=".5"/>' + waves(132, 6, 'waves drift') +
        '<path d="M0 186 Q100 170 220 184 T400 176 V240 H0 Z" fill="#e6dcc0" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(120 200)"><path d="M-26 0 Q-24 -24 0 -30 Q24 -24 26 0 Z" fill="#cfc6b3" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<circle cx="0" cy="-40" r="10" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M-5 -37 v6 M0 -36 v6 M5 -37 v6" stroke="' + INK + '" stroke-width=".8"/>' +
        '<path d="M-18 -22 Q-8 -14 0 -22 Q8 -14 18 -22" stroke="' + INK + '" stroke-width=".9" fill="none"/></g>' +
        '<g transform="translate(250 204)"><path d="M-14 0 Q-14 -26 0 -34 Q14 -26 14 0 Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1.2"/><circle cx="0" cy="-42" r="8" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M-6 -42 q-10 -4 -8 6" stroke="' + INK + '" stroke-width="2.2" fill="none"/>' +
        '<path d="M-14 -20 Q-26 -18 -34 -22" stroke="#c9573f" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '<ellipse cx="-38" cy="-22" rx="10" ry="4" fill="#f4efe6" stroke="' + INK + '" stroke-width="1"/><path d="M-46 -23 Q-38 -32 -30 -23" fill="#fffaf0" opacity=".8"/></g>' +
        '<g class="drift" opacity=".4"><path d="M-20 70 q16 -8 32 0 t32 0" stroke="' + INK + '" fill="none"/></g>' +
        '<g class="say s1" font-size="22">' + bi('「中道」', '“The Middle Way”', 200, 40, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    bodhi: function () {
      let petals = '';
      for (let i = 0; i < 22; i++) petals += '<circle cx="' + ((i * 61) % 400) + '" cy="-6" r="' + (1.6 + (i % 3) * 0.6) + '" style="animation-delay:-' + ((i * 0.5) % 6).toFixed(1) + 's;animation-duration:' + (6 + (i % 4)) + 's"/>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="菩提樹下">' +
        '<rect width="400" height="240" fill="#2b2a33" opacity=".16"/>' +
        '<g class="pulse" style="transform-origin:330px 40px"><path d="M330 28 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z" fill="#f6efdc" stroke="' + INK + '" stroke-width=".6"/></g>' +
        '<path d="M200 212 C196 170 204 140 196 104" stroke="' + INK + '" stroke-width="9" fill="none" stroke-linecap="round"/>' +
        '<g class="sway" fill="' + INK + '" opacity=".78" style="transform-origin:200px 200px"><ellipse cx="200" cy="70" rx="86" ry="36"/><ellipse cx="124" cy="100" rx="42" ry="20"/><ellipse cx="278" cy="102" rx="42" ry="20"/></g>' +
        '<g fill="#6e7a3a" opacity=".5"><path d="M150 80 q6 -10 12 0 q-6 6 -12 0Z M250 84 q6 -10 12 0 q-6 6 -12 0Z M200 56 q6 -10 12 0 q-6 6 -12 0Z"/></g>' +
        '<path d="M0 214 Q100 206 200 214 T400 212 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(200 214)"><circle class="pulse" cx="0" cy="-70" r="40" fill="#e8c867" opacity=".4" style="transform-origin:200px 144px"/>' +
        '<path d="M-34 0 Q-32 -14 -20 -22 Q-26 -44 0 -52 Q26 -44 20 -22 Q32 -14 34 0 Z" fill="#d9a441" stroke="' + INK + '" stroke-width="1.4"/>' +
        '<circle cx="0" cy="-64" r="12" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.3"/><path d="M-3 -77 q3 -4 6 0" stroke="' + INK + '" stroke-width="2" fill="none"/><path d="M-5 -63 q3 1 6 0" stroke="' + INK + '" stroke-width="1" fill="none"/>' +
        '<path d="M-20 -30 Q-26 -10 -16 -2" stroke="#d9a441" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="-14" cy="0" r="3" fill="' + SKIN + '" stroke="' + INK + '" stroke-width=".8"/></g>' +
        '<g stroke="' + INK + '" stroke-width="1.2" opacity=".7"><path d="M24 170 l30 14 M16 196 l28 -6 M370 160 l-30 18 M382 196 l-28 -4"/></g>' +
        '<g class="snow" fill="#f3a8a0">' + petals + '</g>' +
        '<g class="say s1" font-size="15">' + bi('「奇哉！眾生皆具如來智慧」', '“How wondrous — all beings hold the Buddha’s wisdom”', 200, 20, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    deer: function () {
      function monk(x) { return '<g transform="translate(' + x + ' 206)"><path d="M-14 0 Q-12 -18 0 -22 Q12 -18 14 0 Z" fill="#cfc6b3" stroke="' + INK + '" stroke-width="1.1"/><circle cx="0" cy="-30" r="7" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.1"/></g>'; }
      function deer(x, f) { return '<g transform="translate(' + x + ' 150) scale(' + f + ' 1)"><path d="M-16 0 Q-16 -14 0 -14 Q16 -14 18 -6 L26 -26 L30 -24 L24 -2 L22 14 L18 14 L16 2 L-8 2 L-10 14 L-14 14 L-14 2 Z" fill="#a98a5e" stroke="' + INK + '" stroke-width="1"/><path d="M26 -26 l-4 -10 M28 -28 l4 -8" stroke="' + INK + '" stroke-width="1.2"/></g>'; }
      return '<svg viewBox="0 0 400 240" role="img" aria-label="鹿野苑">' +
        hills(150, 0.1, 6) + '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(200 82)"><g class="wheel"><circle r="34" fill="#e8c867" stroke="' + INK + '" stroke-width="2"/><circle r="8" fill="' + RED + '"/>' +
        '<path d="M0 -34 V34 M-34 0 H34 M-24 -24 L24 24 M24 -24 L-24 24" stroke="' + INK + '" stroke-width="1.6"/><circle r="26" fill="none" stroke="' + INK + '" stroke-width="1"/></g></g>' +
        '<path d="M176 128 H224 L230 142 H170 Z" fill="#8c2a1f" stroke="' + INK + '" stroke-width="1"/>' +
        deer(116, 1) + deer(284, -1) +
        monk(70) + monk(110) + monk(290) + monk(330) + monk(200) +
        '<g transform="translate(200 206)"><path d="M-22 0 Q-20 -22 0 -28 Q20 -22 22 0 Z" fill="#d9a441" stroke="' + INK + '" stroke-width="1.2"/><circle cx="0" cy="-38" r="9" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/></g>' +
        '<g class="say s1" font-size="19">' + bi('「初轉法輪」', '“Turning the Wheel”', 200, 32, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    flower: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="拈花微笑">' +
        '<circle cx="300" cy="56" r="24" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" opacity=".9"/>' +
        '<path d="M0 240 L60 110 L120 150 L190 60 L260 140 L320 90 L400 240 Z" fill="#2d241c" opacity=".7"/>' +
        '<path d="M70 240 L130 150 L190 110 L250 160 L300 240 Z" fill="#7c6e5c" opacity=".6"/>' +
        '<path d="M0 218 Q140 206 260 216 T400 212 V240 H0 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(130 214)"><circle class="pulse" cx="0" cy="-60" r="42" fill="#e8c867" opacity=".35" style="transform-origin:130px 154px"/>' +
        '<path d="M-34 0 Q-32 -14 -20 -22 Q-26 -44 0 -52 Q26 -44 20 -22 Q32 -14 34 0 Z" fill="#d9a441" stroke="' + INK + '" stroke-width="1.4"/>' +
        '<circle cx="0" cy="-64" r="12" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.3"/><path d="M-5 -63 q4 2 8 0" stroke="' + INK + '" stroke-width="1" fill="none"/>' +
        '<path d="M14 -34 Q30 -44 34 -62" stroke="#d9a441" stroke-width="6" fill="none" stroke-linecap="round"/>' +
        '<g class="sway" style="transform-origin:34px -62px"><path d="M34 -64 q-8 -10 0 -18 q8 8 0 18 M34 -64 q-12 -2 -14 -12 q10 -2 14 12 M34 -64 q12 -2 14 -12 q-10 -2 -14 12" fill="#f3d36a" stroke="' + INK + '" stroke-width="1"/></g></g>' +
        '<g transform="translate(284 214)"><path d="M-18 0 Q-16 -22 0 -28 Q16 -22 18 0 Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<circle cx="0" cy="-38" r="9.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M-5 -36 q5 5 10 0" stroke="' + INK + '" stroke-width="1.4" fill="none"/><path d="M-6 -41 h3 M3 -41 h3" stroke="' + INK + '" stroke-width="1.2"/></g>' +
        '<g class="say s1" font-size="22">' + bi('「拈花微笑」', '“A flower, and a smile”', 200, 36, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    nirvana: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="拘尸那羅">' +
        '<circle cx="310" cy="54" r="24" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" opacity=".9"/>' + hills(160, 0.1, 6) +
        '<path d="M60 214 C58 160 66 110 54 70 M340 214 C342 160 334 110 346 70" stroke="' + INK + '" stroke-width="8" fill="none" stroke-linecap="round"/>' +
        '<g class="sway" fill="' + INK + '" opacity=".72" style="transform-origin:200px 200px"><ellipse cx="56" cy="62" rx="52" ry="26"/><ellipse cx="344" cy="62" rx="52" ry="26"/><ellipse cx="200" cy="50" rx="60" ry="14"/></g>' +
        '<g class="snow" fill="#f6efdc">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return '<circle cx="' + (80 + i * 26) + '" cy="-6" r="2.2" style="animation-delay:-' + i * 0.6 + 's;animation-duration:7s"/>'; }).join('') + '</g>' +
        '<path d="M0 214 Q100 206 200 214 T400 212 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M96 204 H304 L296 192 H104 Z" fill="#8c2a1f" stroke="' + INK + '" stroke-width="1"/>' +
        '<path d="M118 192 Q122 176 150 174 L270 174 Q290 176 290 192 Z" fill="#d9a441" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<circle cx="128" cy="170" r="11" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M118 174 q10 -14 22 -2" stroke="' + INK + '" stroke-width="2" fill="none"/>' +
        '<g transform="translate(86 206)"><path d="M-12 0 Q-10 -16 0 -20 Q10 -16 12 0Z" fill="#cfc6b3" stroke="' + INK + '" stroke-width="1"/><circle cx="0" cy="-27" r="6.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/></g>' +
        '<g transform="translate(320 206)"><path d="M-12 0 Q-10 -16 0 -20 Q10 -16 12 0Z" fill="#cfc6b3" stroke="' + INK + '" stroke-width="1"/><circle cx="0" cy="-27" r="6.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/></g>' +
        '<g transform="translate(200 160)"><path class="pulse" d="M0 0 q-9 -14 0 -28 q9 14 0 28Z" fill="#f0a830" stroke="' + RED + '" stroke-width="1" style="transform-origin:200px 160px"/><path d="M-8 2 h16" stroke="' + INK + '" stroke-width="2"/></g>' +
        '<g class="say s1" font-size="20">' + bi('「自燃燈，法燃燈」', '“Be a lamp unto yourselves”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* ===== 六祖惠能篇（Huineng chapter） ===== */
    firewood: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="賣柴聞經">' +
        '<circle cx="320" cy="58" r="22" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" opacity=".9"/>' + hills(150, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g class="walker" style="animation-duration:1.2s">' + FIG(110, 214, 1.2, false, HUI).replace('<ellipse', '<ellipse opacity="0"') + '</g>' +
        '<path d="M64 150 L168 120" stroke="#4a3526" stroke-width="3" stroke-linecap="round"/>' +
        '<g fill="#8c5a2b" stroke="' + INK + '" stroke-width="1"><rect x="56" y="150" width="30" height="34" rx="3" transform="rotate(-10 71 167)"/><rect x="150" y="116" width="30" height="34" rx="3" transform="rotate(-10 165 133)"/></g>' +
        '<rect x="250" y="120" width="110" height="86" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.4"/><path d="M240 120 L305 92 L370 120 Z" fill="#3b3029"/>' +
        '<g transform="translate(300 206)"><path d="M-14 0 Q-12 -20 0 -24 Q12 -20 14 0Z" fill="#6b7a8a" stroke="' + INK + '" stroke-width="1.1"/><circle cx="0" cy="-32" r="7.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.1"/><path d="M-14 -14 h28" stroke="#f6efdc" stroke-width="5" opacity=".8"/></g>' +
        '<g class="say s1" font-size="17">' + bi('「應無所住而生其心」', '“Let the mind arise without dwelling on anything”', 220, 34, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    walls: function () {
      function wall(x, label) {
        return '<rect x="' + x + '" y="30" width="176" height="176" fill="#e9dfc3" stroke="' + INK + '" stroke-width="1.6"/>' +
          '<path d="M' + x + ' 30 h176" stroke="#8c2a1f" stroke-width="6"/>' +
          '<path d="M' + (x + 14) + ' 188 q30 -6 60 0 t60 0" stroke="' + INK + '" stroke-width=".8" fill="none" opacity=".25"/>';
      }
      function ln(zh, en, x, y, cls) { return '<g class="' + cls + '" font-size="12.5">' + bi(zh, en, x, y, 'text-anchor="middle" fill="' + INK + '"') + '</g>'; }
      const L = 108, R = 292;
      return '<svg viewBox="0 0 400 240" role="img" aria-label="兩首偈">' +
        '<rect width="400" height="240" fill="#2b2a33" opacity=".08"/>' +
        wall(20) + wall(204) +
        '<g transform="translate(20 212)"><text class="zh" x="88" y="14" text-anchor="middle" font-size="12" fill="' + INK + '" font-weight="900">神秀</text><text class="en" x="88" y="14" text-anchor="middle" font-size="10" fill="' + INK + '">Shenxiu</text></g>' +
        '<g transform="translate(204 212)"><text class="zh" x="88" y="14" text-anchor="middle" font-size="12" fill="' + RED + '" font-weight="900">惠能</text><text class="en" x="88" y="14" text-anchor="middle" font-size="10" fill="' + RED + '">Huineng</text></g>' +
        ln('身是菩提樹', 'The body is a bodhi tree,', L, 66, 'say s1') + ln('心如明鏡臺', 'the mind a bright mirror stand;', L, 98, 'say s1') +
        ln('時時勤拂拭', 'wipe it diligently, always,', L, 130, 'say s1') + ln('勿使惹塵埃', 'let no dust alight.', L, 162, 'say s1') +
        ln('菩提本無樹', 'Bodhi has no tree at all,', R, 66, 'say s3') + ln('明鏡亦非臺', 'nor has the mirror a stand;', R, 98, 'say s3') +
        ln('本來無一物', 'originally, not a single thing —', R, 130, 'say s3') + ln('何處惹塵埃', 'where could dust alight?', R, 162, 'say s3') +
        '</svg>';
    },

    robe: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="夜渡傳衣">' +
        '<rect width="400" height="240" fill="#2b2a33" opacity=".2"/>' +
        '<circle class="pulse" cx="320" cy="54" r="24" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" style="transform-origin:320px 54px"/>' + hills(120, 0.12, 6) +
        '<rect x="0" y="124" width="400" height="116" fill="#c9cfc2" opacity=".4"/>' + waves(142, 7, 'waves drift') +
        '<g class="float">' +
        '<path d="M96 164 Q200 190 304 164 L286 184 Q200 204 114 184 Z" fill="#5a4334" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<path d="M290 168 L346 130" stroke="#4a3526" stroke-width="3"/>' +
        FIG(160, 172, 0.95, false, HUI) + FIG(236, 172, 0.95, true, { robe: '#d98a2b', band: '#ecc766', fold: '#8a5a18', staff: false, beard: true }) +
        '<rect x="150" y="150" width="22" height="16" rx="2" fill="#c9573f" stroke="' + INK + '" stroke-width="1"/>' +
        '</g>' +
        '<g class="say s1" font-size="19">' + bi('「迷時師度，悟了自度」', '“Deluded, a teacher ferries you; awakened, you ferry yourself”', 200, 34, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    ridge: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="大庾嶺">' +
        '<rect width="400" height="240" fill="#6b6a66" opacity=".1"/>' +
        '<path d="M0 240 L0 140 L70 60 L130 110 L210 30 L280 100 L340 70 L400 130 L400 240 Z" fill="#2d241c" opacity=".78"/>' +
        '<path d="M0 240 L0 180 L90 120 L170 170 L250 110 L330 160 L400 140 L400 240 Z" fill="#7c6e5c" opacity=".7"/>' +
        '<path d="M120 240 Q160 190 200 190 Q240 190 280 240 Z" fill="#9a8c78" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<rect x="176" y="176" width="48" height="16" rx="3" fill="#c9573f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M16 210 Q80 200 120 220" stroke="' + INK + '" stroke-width="2" fill="none" opacity=".5"/>' +
        '<g class="walker" style="animation-duration:.5s">' + FIG(60, 214, 1.1, false, { robe: '#5a4a3a', band: '#7a6a58', fold: '#2d241c', staff: false, beard: true }) + '</g>' +
        FIG(336, 214, 1.15, true, HUI) +
        '<g class="say s1" font-size="16">' + bi('「不思善，不思惡」', '“Think neither good nor evil”', 200, 34, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('「那箇是明上座本來面目？」', '“What is your original face?”', 200, 74, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    hunters: function () {
      function hunter(x, c) { return '<g transform="translate(' + x + ' 206)"><path d="M-14 0 Q-12 -20 0 -24 Q12 -20 14 0Z" fill="' + c + '" stroke="' + INK + '" stroke-width="1.1"/><circle cx="0" cy="-32" r="7.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.1"/><path d="M-9 -36 q9 -9 18 0" stroke="' + INK + '" stroke-width="2.4" fill="none"/></g>'; }
      let trees = '';
      [30, 90, 330, 380].forEach(function (x, i) { trees += '<path d="M' + x + ' 214 L' + x + ' ' + (70 + i * 10) + '" stroke="' + INK + '" stroke-width="5"/><ellipse cx="' + x + '" cy="' + (66 + i * 10) + '" rx="38" ry="24" fill="' + INK + '" opacity=".6"/>'; });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="獵人隊">' +
        hills(140, 0.1, 6) + trees + '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M140 90 Q200 150 270 90 M150 100 L150 190 M200 130 L200 190 M260 100 L260 190" stroke="#8c7a5a" stroke-width="1" fill="none" opacity=".6"/>' +
        hunter(90, '#7a5a3a') + hunter(310, '#7a5a3a') +
        '<g transform="translate(200 206)"><ellipse cx="0" cy="-8" rx="26" ry="12" fill="#3b3029" stroke="' + INK + '" stroke-width="1.3"/><path d="M-20 -12 q6 -10 12 -2 q6 -10 12 -2 q6 -8 12 0" fill="#6e7a3a" stroke="#3d4520" stroke-width="1"/>' +
        '<path class="pulse" d="M-6 -24 q-4 -8 0 -14 M6 -24 q4 -8 0 -14" stroke="#9a9384" stroke-width="2" fill="none" style="transform-origin:200px 170px"/></g>' +
        FIG(150, 206, 1.1, false, HUI) +
        '<g class="seal-stamp"><rect x="350" y="150" width="34" height="40" fill="' + RED + '"/>' + bi('十五年', '15 yrs', 367, 175, 'text-anchor="middle" fill="#f6efdc" font-size="11"') + '</g>' +
        '</svg>';
    },

    flag: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="風動幡動">' +
        hills(150, 0.1, 6) +
        '<path d="M232 214 V30" stroke="' + INK + '" stroke-width="4"/>' +
        '<g class="drift" style="animation-duration:3s"><path d="M236 36 Q290 26 336 44 Q300 58 336 80 Q290 92 236 78 Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1.3"/></g>' +
        '<path d="M30 214 H370" stroke="' + INK + '" stroke-width="2" opacity=".5"/>' +
        '<path d="M20 120 Q50 112 76 98 L170 98 Q196 112 224 120 L216 128 L28 128 Z" fill="#3b3029" stroke="' + INK + '" stroke-width="1"/><rect x="34" y="128" width="170" height="86" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M60 214 V150 Q60 138 76 138 Q92 138 92 150 V214" fill="#241c15" opacity=".7"/>' +
        '<g class="walker" style="animation-duration:1.6s">' + FIG(150, 214, 1, false, { robe: '#cfc6b3', band: '#e8e1d0', fold: '#8a8170', staff: false, beard: false }) + '</g>' +
        FIG(290, 214, 1.1, true, HUI) +
        '<g class="say s1" font-size="16">' + bi('「不是風動，不是幡動」', '“Not the wind, not the flag”', 150, 22, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="20">' + bi('「仁者心動」', '“It is your mind that moves.”', 290, 228, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    platform: function () {
      let heads = '';
      for (let i = 0; i < 14; i++) heads += '<g transform="translate(' + (28 + (i % 7) * 52) + ' ' + (210 - Math.floor(i / 7) * 16) + ')"><path d="M-9 0 Q-8 -12 0 -14 Q8 -12 9 0Z" fill="' + (i % 3 ? '#cfc6b3' : '#8a7a5c') + '" stroke="' + INK + '" stroke-width="1"/><circle cx="0" cy="-19" r="5.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/></g>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="曹溪說法">' +
        hills(130, 0.1, 6) +
        '<path d="M60 150 Q200 120 340 150 L340 158 Q200 130 60 158 Z" fill="#3b3029" stroke="' + INK + '" stroke-width="1"/>' +
        '<path d="M120 168 H280 L296 190 H104 Z" fill="#8c2a1f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(200 168)"><circle class="pulse" cx="0" cy="-34" r="34" fill="#e8c867" opacity=".3" style="transform-origin:200px 134px"/>' +
        '<path d="M-26 0 Q-24 -16 -14 -24 Q-18 -42 0 -48 Q18 -42 14 -24 Q24 -16 26 0Z" fill="#8a7a5c" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<circle cx="0" cy="-56" r="10" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M-4 -56 q3 2 6 0" stroke="' + INK + '" stroke-width="1" fill="none"/></g>' +
        '<rect x="240" y="150" width="30" height="20" rx="2" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M246 156 h18 M246 161 h18" stroke="' + INK + '" stroke-width=".8"/>' +
        heads +
        '<g class="say s1" font-size="17">' + bi('「菩提自性，本來清淨」', '“Bodhi-nature is originally pure”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },


    /* ===== 五祖弘忍篇（Hongren chapter） ===== */
    child: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="路遇童子">' +
        '<circle cx="320" cy="58" r="22" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" opacity=".9"/>' + hills(150, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M360 214 L360 110" stroke="' + INK + '" stroke-width="5"/><ellipse cx="360" cy="100" rx="34" ry="22" fill="' + INK + '" opacity=".6"/><ellipse cx="344" cy="124" rx="22" ry="12" fill="' + INK + '" opacity=".5"/>' +
        FIG(110, 214, 1.2, false, DAO) +
        '<g class="walker" style="animation-duration:1.4s">' + FIG(260, 214, 0.62, true, { robe: '#cfc6b3', band: '#e8e1d0', fold: '#8a8170', staff: false, beard: false }) + '</g>' +
        '<g class="say s1" font-size="19">' + bi('「是佛性」', '“It is Buddha-nature.”', 200, 34, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('「性空故」', '“Its nature is empty, therefore.”', 200, 96, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    twinpeaks: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="雙峰山侍師">' +
        '<rect width="400" height="240" fill="#6b6a66" opacity=".08"/>' +
        '<path d="M0 240 L0 150 L60 90 L110 130 L170 50 L230 120 L290 70 L340 110 L400 90 L400 240 Z" fill="#2d241c" opacity=".7"/>' +
        '<path d="M0 240 L0 190 L80 150 L150 185 L230 140 L320 180 L400 160 L400 240 Z" fill="#7c6e5c" opacity=".65"/>' +
        '<path d="M20 120 q40 -10 80 0 M250 90 q50 -12 100 0" stroke="#d9d3c3" stroke-width="5" fill="none" opacity=".55" class="drift" style="animation-duration:6s"/>' +
        '<path d="M96 200 H304 L316 214 H84 Z" fill="#8c7a5a" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(150, 206, 1.15, false, DAO) + FIG(246, 206, 1.0, true, HON) +
        '<rect x="188" y="188" width="24" height="16" rx="2" fill="#c9573f" stroke="' + INK + '" stroke-width="1.1"/>' +
        '<g class="say s1" font-size="17">' + bi('「攝心無寐，脅不至席」', '“Mind gathered, he never lay down to sleep”', 200, 34, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    eastmtn: function () {
      let heads = '';
      for (let i = 0; i < 5; i++) heads += '<g transform="translate(' + (36 + i * 34) + ' 196)"><path d="M-10 0 Q-9 -13 0 -15 Q9 -13 10 0Z" fill="' + (i % 2 ? '#cfc6b3' : '#8a7a5c') + '" stroke="' + INK + '" stroke-width="1"/><circle cx="0" cy="-20" r="6" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/></g>';
      let furrows = '';
      for (let i = 0; i < 4; i++) furrows += '<path d="M220 ' + (176 + i * 12) + ' Q300 ' + (170 + i * 12) + ' 390 ' + (178 + i * 12) + '" stroke="#7c6a48" stroke-width="1.6" fill="none"/>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="東山寺">' +
        hills(130, 0.1, 6) +
        '<path d="M0 240 L0 170 Q100 120 200 150 Q300 120 400 170 L400 240 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M130 120 Q200 90 270 120 L262 128 L138 128 Z" fill="#3b3029" stroke="' + INK + '" stroke-width="1"/><rect x="146" y="128" width="108" height="40" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/>' +
        heads + furrows +
        '<g class="walker" style="animation-duration:1.8s">' + FIG(310, 206, 0.8, false, HUI) + '</g>' +
        '<path d="M335 176 L352 196" stroke="#4a3526" stroke-width="2.4" stroke-linecap="round"/>' +
        '<g font-size="12" fill="' + INK + '">' + bi('坐禪', 'Sitting', 72, 150, 'text-anchor="middle"') + bi('耕作', 'Working', 322, 132, 'text-anchor="middle"') + '</g>' +
        '<g class="say s1" font-size="17">' + bi('「但持《金剛經》，即自見性」', '“Just hold the Diamond Sutra and see your nature”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    choose: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="三更叩碓">' +
        '<rect width="400" height="240" fill="#2b2a33" opacity=".22"/>' +
        '<circle class="pulse" cx="330" cy="54" r="22" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" style="transform-origin:330px 54px"/>' + hills(150, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M150 214 L158 176 H214 L222 214 Z" fill="#8c7a5a" stroke="' + INK + '" stroke-width="1.3"/><ellipse cx="186" cy="176" rx="28" ry="5" fill="#6e5e44" stroke="' + INK + '" stroke-width="1.1"/>' +
        FIG(100, 214, 1.1, false, HUI) + FIG(280, 214, 1.15, true, HON) +
        '<path d="M262 120 L196 170" stroke="#4a3526" stroke-width="3" stroke-linecap="round"/>' +
        '<g class="pulse" fill="none" stroke="' + RED + '" stroke-width="1.6" stroke-linecap="round" style="transform-origin:190px 168px"><path d="M170 160 q-6 -6 0 -14"/><path d="M158 164 q-8 -10 0 -22"/><path d="M206 160 q6 -6 0 -14"/></g>' +
        '<g class="say s1" font-size="17">' + bi('以杖擊碓三下', 'Three taps of the staff on the mortar', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('「三更入室」', '“Come to my room at the third watch”', 200, 94, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    lineages: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="南北兩宗">' +
        hills(150, 0.08, 6) +
        '<path d="M200 112 Q190 160 96 190 M200 112 Q210 160 304 190" stroke="' + INK + '" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".7"/>' +
        '<path d="M160 112 H240 L248 124 H152 Z" fill="#8c2a1f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(200, 112, 0.8, false, HON) +
        FIG(96, 196, 0.95, false, { robe: '#6b7a8a', band: '#98a6b4', fold: '#3b4650', staff: false, beard: true }) + FIG(304, 196, 0.95, true, HUI) +
        '<g font-size="13">' + bi('北宗・神秀', 'Northern · Shenxiu', 96, 211, 'text-anchor="middle" fill="' + INK + '" font-weight="900"') + bi('南宗・惠能', 'Southern · Huineng', 304, 211, 'text-anchor="middle" fill="' + RED + '" font-weight="900"') + '</g>' +
        '<g class="say s1" font-size="16">' + bi('「能者得之」', '“Let the one who can, receive it.”', 200, 26, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },


    /* ===== 二祖慧可篇（Huike chapter） ===== */
    luoyang: function () {
      let books = '';
      [[250, 190, '#8c5a2b'], [262, 178, '#6b7a8a'], [246, 166, '#a38a52']].forEach(function (b) { books += '<rect x="' + b[0] + '" y="' + b[1] + '" width="56" height="12" rx="2" fill="' + b[2] + '" stroke="' + INK + '" stroke-width="1"/>'; });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="洛陽讀書">' +
        '<circle cx="330" cy="54" r="22" fill="#f6efdc" stroke="' + INK + '" stroke-width=".8" opacity=".9"/>' + hills(150, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#d8ccad" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M232 214 V196 H320 V214" fill="#8c7a5a" stroke="' + INK + '" stroke-width="1.2"/>' + books +
        '<path d="M20 120 Q50 112 76 98 L150 98 Q176 112 204 120 L196 128 L28 128 Z" fill="#3b3029" stroke="' + INK + '" stroke-width="1"/><rect x="34" y="128" width="150" height="86" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(210, 214, 1.1, true, HK) +
        '<g class="say s1" font-size="16">' + bi('「莊易之書，未盡妙理」', '“Zhuangzi and the Yi leave the subtle truth unfinished”', 200, 34, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    marrow: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="得髓">' +
        '<rect width="400" height="240" fill="#6b6a66" opacity=".08"/>' +
        '<path d="M0 240 L0 160 L80 100 L150 140 L230 70 L300 130 L400 110 L400 240 Z" fill="#2d241c" opacity=".55"/>' +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(130, 212, 1.2, false, { robe: '#b3261e', band: '#d9573f', fold: '#7a1713', staff: false, beard: true }) + FIG(270, 212, 1.1, true, HK) +
        '<rect x="186" y="190" width="28" height="18" rx="2" fill="#c9573f" stroke="' + INK + '" stroke-width="1.1"/>' +
        '<g class="say s1" font-size="22">' + bi('「汝得吾髓」', '“You have my marrow.”', 200, 34, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="14">' + bi('皮・肉・骨・髓', 'skin · flesh · bone · marrow', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    lanka: function () {
      let heads = '';
      for (let i = 0; i < 12; i++) heads += '<g transform="translate(' + (24 + (i % 6) * 30) + ' ' + (214 - Math.floor(i / 6) * 14) + ')"><path d="M-8 0 Q-7 -11 0 -13 Q7 -11 8 0Z" fill="' + (i % 3 ? '#cfc6b3' : '#8a7a5c') + '" stroke="' + INK + '" stroke-width="1"/><circle cx="0" cy="-17" r="5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/></g>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="鄴都弘法">' +
        hills(130, 0.1, 6) +
        '<path d="M0 150 H400 V214 H0 Z" fill="#cdbf9a" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M0 150 h400" stroke="' + INK + '" stroke-width="2"/><path d="M0 150 v-12 h14 v12 M40 150 v-12 h14 v12 M80 150 v-12 h14 v12 M120 150 v-12 h14 v12 M160 150 v-12 h14 v12 M200 150 v-12 h14 v12 M240 150 v-12 h14 v12 M280 150 v-12 h14 v12 M320 150 v-12 h14 v12 M360 150 v-12 h14 v12" stroke="' + INK + '" stroke-width="1.4" fill="none"/>' +
        '<path d="M250 214 V160 Q250 148 270 148 Q290 148 290 160 V214" fill="#241c15" opacity=".7"/>' +
        heads +
        FIG(300, 214, 1.15, true, HK) +
        '<rect x="214" y="180" width="26" height="16" rx="2" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M219 186 h16 M219 191 h16" stroke="' + INK + '" stroke-width=".8"/>' +
        '<g class="say s1" font-size="17">' + bi('《楞伽經》四卷', 'Four scrolls of the Lankavatara', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    tavern: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="混跡市井">' +
        hills(150, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<rect x="24" y="108" width="130" height="106" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.3"/><path d="M14 108 L89 80 L164 108 Z" fill="#3b3029"/>' +
        '<path d="M170 100 V52" stroke="' + INK + '" stroke-width="3"/><g class="drift" style="animation-duration:3s"><path d="M172 54 h34 v50 h-34 Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1.2"/><text x="189" y="88" text-anchor="middle" font-size="26" font-weight="900" fill="#f6efdc">酒</text></g>' +
        '<g transform="translate(80 214)"><ellipse cx="0" cy="-10" rx="14" ry="12" fill="#7a5a3a" stroke="' + INK + '" stroke-width="1.2"/><path d="M-10 -18 h20" stroke="#f6efdc" stroke-width="3"/></g>' +
        FIG(240, 214, 1.1, false, HK) +
        '<g transform="translate(330 206)"><path d="M-14 0 Q-12 -20 0 -24 Q12 -20 14 0Z" fill="#7a5a3a" stroke="' + INK + '" stroke-width="1.1"/><circle cx="0" cy="-32" r="7.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.1"/></g>' +
        '<g class="say s1" font-size="16">' + bi('「我自調心，何關汝事？」', '“I am tuning my own mind — what is it to you?”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    sin: function () {
      let dots = '';
      [[0, -30], [6, -22], [-6, -14], [4, -6]].forEach(function (d) { dots += '<circle cx="' + d[0] + '" cy="' + d[1] + '" r="1.6" fill="#8c2a1f" opacity=".75"/>'; });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="覓罪不可得">' +
        '<rect width="400" height="240" fill="#6b6a66" opacity=".08"/>' +
        '<path d="M0 240 L0 150 L70 80 L130 130 L210 40 L290 120 L350 80 L400 130 L400 240 Z" fill="#2d241c" opacity=".6"/>' +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(120, 214, 1.2, false, HK) +
        '<g transform="translate(278 214)"><path d="M-16 0 Q-14 -24 0 -28 Q14 -24 16 0Z" fill="#a38a52" stroke="' + INK + '" stroke-width="1.2"/><circle cx="0" cy="-38" r="9" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M-9 -42 q9 -9 18 0" stroke="' + INK + '" stroke-width="2.4" fill="none"/>' + dots + '</g>' +
        '<g class="say s1" font-size="20">' + bi('「覓罪不可得」', '“The sin cannot be found.”', 200, 34, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="16">' + bi('「是心是佛，是心是法」', '“This mind is Buddha; this mind is Dharma.”', 200, 94, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* 悟覺妙天禪師篇（Miaotian chapter） */
    miaoseek: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="訪道">' +
        hills(150, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M250 212 Q290 170 330 150 T390 120" stroke="' + INK + '" stroke-width="1.6" fill="none" stroke-dasharray="5 6" opacity=".6"/>' +
        '<g transform="translate(60 214)"><rect x="-26" y="-46" width="52" height="46" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M-32 -46 L0 -66 L32 -46 Z" fill="#3b3029"/></g>' +
        '<g transform="translate(160 214)"><rect x="-22" y="-40" width="44" height="40" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M-27 -40 L0 -58 L27 -40 Z" fill="#8c2a1f"/></g>' +
        FIG(260, 214, 1.1, false, MIA) +
        '<g class="say s1" font-size="17">' + bi('「遍訪各宗教，尋找明師」', 'Visiting many faiths in search of a teacher', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('1934 年生・潮州', 'Born 1934, Chaozhou', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    miaocrowd: function () {
      let d = '';
      for (let r = 0; r < 3; r++) for (let i = 0; i < 17; i++) d += '<circle cx="' + (32 + i * 21 + (r % 2) * 10) + '" cy="' + (200 + r * 12) + '" r="5" fill="' + INK + '" opacity="' + (0.7 - r * 0.15) + '"/>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="大法會">' +
        hills(140, 0.1, 6) +
        '<rect x="110" y="140" width="180" height="26" fill="#a38a52" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M96 140 H304" stroke="' + INK + '" stroke-width="2"/>' +
        FIG(200, 140, 0.9, false, MIA) + d +
        '<g class="say s1" font-size="19">' + bi('「見性成佛」', '“Seeing nature, becoming Buddha”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('桃園大法會', 'The Taoyuan assembly', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    miaoleaders: function () {
      const c = ['#6f7f6a', '#8a7a5c', '#7a5a3a', '#6e5a46'];
      let f = '';
      [90, 160, 240, 310].forEach(function (x, i) { f += FIG(x, 190, 0.7, i > 1, { robe: c[i], band: '#b5a37c', fold: '#3a2d20', staff: false, beard: false }); });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="領袖會">' +
        hills(150, 0.1, 6) +
        '<ellipse cx="200" cy="200" rx="150" ry="22" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' + f +
        '<g class="say s1" font-size="17">' + bi('「宗教家慈悲，政治家智慧」', '“A religious person’s compassion, a statesman’s wisdom”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('偉大・完美・博愛・和平', 'Greatness · Perfection · Love · Peace', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    miaopeace: function () {
      let l = '';
      for (let i = 0; i < 9; i++) l += '<g class="drift" style="animation-duration:' + (3 + i % 3) + 's"><ellipse cx="' + (40 + i * 40) + '" cy="' + (120 + (i % 3) * 14) + '" rx="8" ry="11" fill="#e9b04a" stroke="' + INK + '" stroke-width="1"/></g>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="超度法會">' +
        '<rect width="400" height="240" fill="#2d241c" opacity=".12"/>' + hills(170, 0.12, 6) + l +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(200, 214, 1.1, false, MIA) +
        '<g class="say s1" font-size="18">' + bi('為戰亂亡靈超度', 'A rite of deliverance for the war dead', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('迎接二十一世紀世界和平大法會', 'World Peace Assembly, 1999', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    miaocare: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="公益">' +
        hills(150, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(290 214)"><path d="M-22 0 L-18 -34 L18 -34 L22 0Z" fill="#e9dcbc" stroke="' + INK + '" stroke-width="1.2"/><path d="M-10 -22 h20" stroke="' + INK + '" stroke-width="1"/></g>' +
        '<g transform="translate(335 214)"><path d="M-22 0 L-18 -34 L18 -34 L22 0Z" fill="#e9dcbc" stroke="' + INK + '" stroke-width="1.2"/></g>' +
        FIG(200, 214, 1.1, false, MIA) +
        '<g class="say s1" font-size="18">' + bi('「地球佛國」', '“A Buddha-land on Earth”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('賑災・送米・看守所・海外', 'Relief, rice, prisons, overseas', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* 迦葉尊者篇（Mahakasyapa chapter） */
    kasorden: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="善來比丘">' +
        hills(150, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M300 214 V120" stroke="#4a3526" stroke-width="5"/><ellipse cx="300" cy="112" rx="42" ry="26" fill="#6e7d5a" opacity=".8" stroke="' + INK + '" stroke-width="1.1"/>' +
        FIG(100, 214, 1.15, false, KAS) + FIG(230, 214, 1.1, true, BUD) +
        '<g class="say s1" font-size="19">' + bi('「善來，比丘！」', '“Come, bhikkhu!”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('摩竭陀國的婆羅門子，出家', 'A Brahmin of Magadha, he leaves home', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    kassmile: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="破顏微笑">' +
        hills(160, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(120, 214, 1.1, false, BUD) +
        '<g transform="translate(168 120)"><circle r="6" fill="#e9b04a" stroke="' + INK + '" stroke-width="1"/><path d="M0 -6 q-7 -10 0 -16 q7 6 0 16 M6 0 q10 -7 16 0 q-6 7 -16 0" fill="#f0c668" stroke="' + INK + '" stroke-width="1"/></g>' +
        FIG(290, 214, 1.1, true, KAS) +
        '<path d="M279 160 q6 6 12 0" stroke="' + INK + '" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0"/>' +
        '<g class="say s1" font-size="19">' + bi('眾皆默然，迦葉破顏微笑', 'All fell silent; Kasyapa smiled', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="16">' + bi('「付囑摩訶迦葉」', '“I entrust it to Mahakasyapa.”', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    kascouncil: function () {
      let f = '';
      [70, 130, 270, 330].forEach(function (x, i) { f += FIG(x, 214, 0.8, i > 1, i % 2 ? HUI : KAS); });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="結集">' +
        '<path d="M20 214 Q30 90 200 70 Q370 90 380 214 Z" fill="#2d241c" opacity=".55" stroke="' + INK + '" stroke-width="1.4"/>' +
        '<path d="M60 214 Q70 118 200 100 Q330 118 340 214 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.1"/>' +
        f + FIG(200, 214, 0.95, false, KAS) +
        '<g class="say s1" font-size="17">' + bi('「我等宜當結集法眼」', '“We should now gather and compile the Dharma”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('阿難誦出：如是我聞', 'Ananda recites: “Thus have I heard”', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    kaspole: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="倒卻剎竿">' +
        hills(160, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M330 214 V110" stroke="#4a3526" stroke-width="4"/><path d="M332 114 h34 v22 h-34 Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1"/>' +
        FIG(110, 214, 1.1, false, KAS) + FIG(220, 214, 1.05, true, HUI) +
        '<g class="say s1" font-size="19">' + bi('「倒卻門前剎竿著！」', '“Knock down the flagpole at the gate!”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('「法法本來法，無法無非法」', '“The Dharma of all dharmas is originally Dharma…”', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    kascave: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="雞足山入定">' +
        '<path d="M0 240 L0 160 L80 90 L150 140 L230 36 L310 130 L360 90 L400 140 L400 240 Z" fill="#2d241c" opacity=".6"/>' +
        '<path d="M140 214 Q150 150 200 140 Q250 150 260 214 Z" fill="#1a130d" opacity=".85"/>' +
        FIG(200, 214, 0.9, false, KAS) +
        '<g class="say s1" font-size="19">' + bi('持僧伽梨衣入雞足山', 'He enters Mount Kukkutapada with the robe', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="16">' + bi('「俟慈氏下生」', '“to await the coming of Maitreya”', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },

    /* 阿難尊者篇（Ananda chapter） */
    anbirth: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="成道夜生">' +
        '<rect width="400" height="240" fill="#2d241c" opacity=".16"/>' +
        '<g fill="#e9b04a" opacity=".9"><circle cx="70" cy="60" r="2.2"/><circle cx="330" cy="50" r="2"/><circle cx="260" cy="80" r="1.6"/><circle cx="130" cy="90" r="1.6"/></g>' +
        '<circle cx="200" cy="110" r="9" fill="#f0c668" stroke="' + INK + '" stroke-width="1"/>' +
        hills(170, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(110 214)"><rect x="-34" y="-50" width="68" height="50" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M-42 -50 L0 -74 L42 -50 Z" fill="#3b3029"/></g>' +
        FIG(290, 214, 1.1, true, ANA) +
        '<g class="say s1" font-size="19">' + bi('如來成道夜生', 'Born on the night of the Buddha’s awakening', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="16">' + bi('阿難陀・慶喜', 'Ananda — “Joy”', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    anattend: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="侍者">' +
        hills(160, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(130, 214, 1.1, false, BUD) + FIG(240, 214, 1.0, true, ANA) +
        '<g transform="translate(330 214)"><circle cx="0" cy="-30" r="6" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/><path d="M-10 0 Q-8 -22 0 -24 Q8 -22 10 0Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1"/></g>' +
        '<g class="say s1" font-size="18">' + bi('入城見舞，出城見無常', 'Dancers on the way in; impermanence on the way out', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="16">' + bi('多聞第一・總持', 'Foremost in hearing; holder of all', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    ancouncil: function () {
      let f = '';
      [60, 110, 290, 340].forEach(function (x, i) { f += FIG(x, 214, 0.75, i > 1, i % 2 ? HUI : KAS); });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="誦出經藏">' +
        '<path d="M20 214 Q30 90 200 70 Q370 90 380 214 Z" fill="#2d241c" opacity=".55" stroke="' + INK + '" stroke-width="1.4"/>' +
        '<path d="M60 214 Q70 118 200 100 Q330 118 340 214 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.1"/>' +
        f +
        '<rect x="170" y="176" width="60" height="38" fill="#a38a52" stroke="' + INK + '" stroke-width="1.2"/>' + FIG(200, 178, 0.8, false, ANA) +
        '<g class="say s1" font-size="20">' + bi('「如是我聞」', '“Thus have I heard”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('受迦葉付囑正法', 'He receives the Dharma from Kasyapa', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    anking: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="辭王">' +
        hills(170, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<rect x="250" y="116" width="120" height="98" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.3"/><path d="M240 116 L310 84 L380 116 Z" fill="#3b3029"/><rect x="292" y="160" width="36" height="54" fill="#3b3029"/>' +
        '<g transform="translate(222 214)"><circle cx="0" cy="-30" r="6" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/><path d="M-10 0 Q-8 -22 0 -24 Q8 -22 10 0Z" fill="#7a5a3a" stroke="' + INK + '" stroke-width="1"/></g>' +
        FIG(120, 214, 1.1, false, ANA) +
        '<g class="say s1" font-size="19">' + bi('「吾欲入涅槃，來辭耳」', '“I am about to enter nirvana; I came to take leave.”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('與阿阇世王的約定', 'His promise to King Ajatasatru', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    anriver: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="恆河入滅">' +
        '<rect x="0" y="150" width="400" height="90" fill="#c9cfc2" opacity=".5"/>' + waves(160, 4, 'waves drift') +
        '<path d="M0 150 Q60 130 110 150 Z M290 150 Q340 128 400 150 Z" fill="#2d241c" opacity=".35"/>' +
        '<g class="float">' + FIG(200, 168, 0.9, false, ANA) + '</g>' +
        '<g transform="translate(50 150)"><circle cx="0" cy="-30" r="6" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/><path d="M-10 0 Q-8 -22 0 -24 Q8 -22 10 0Z" fill="#c9573f" stroke="' + INK + '" stroke-width="1"/></g>' +
        '<g transform="translate(350 150)"><circle cx="0" cy="-30" r="6" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1"/><path d="M-10 0 Q-8 -22 0 -24 Q8 -22 10 0Z" fill="#6e7d5a" stroke="' + INK + '" stroke-width="1"/></g>' +
        '<g class="say s1" font-size="17">' + bi('「本來付有法，付了言無法」', '“Originally given, the Dharma; once given, ‘no Dharma.’”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('身分四分，供兩國與天龍', 'His body in four parts, for two kings, devas and nagas', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* 三祖僧璨篇（Sengcan chapter） */
    sncome: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="白衣謁二祖">' +
        hills(160, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(120, 214, 1.15, false, HK) +
        '<g transform="translate(270 214)"><path d="M-16 0 Q-14 -24 0 -28 Q14 -24 16 0Z" fill="#e9e2cc" stroke="' + INK + '" stroke-width="1.2"/><circle cx="0" cy="-38" r="9" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.2"/><path d="M-9 -42 q9 -9 18 0" stroke="' + INK + '" stroke-width="2.4" fill="none"/></g>' +
        '<g class="say s1" font-size="19">' + bi('以白衣謁二祖', 'A layman comes to the Second Patriarch', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('受度，傳法', 'Ordained, and given the Dharma', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    snhide: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="隱居">' +
        '<path d="M0 240 L0 150 L70 70 L130 120 L210 30 L290 110 L350 70 L400 120 L400 240 Z" fill="#2d241c" opacity=".6"/>' +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(300 214)"><rect x="-26" y="-34" width="52" height="34" fill="#efe5cc" stroke="' + INK + '" stroke-width="1.2"/><path d="M-32 -34 L0 -54 L32 -34 Z" fill="#3b3029"/></g>' +
        FIG(130, 214, 1.1, false, HK) +
        '<g class="say s1" font-size="18">' + bi('周武帝滅佛，居無常處', 'Wu of Zhou suppresses Buddhism; no fixed abode', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('隱於皖公山、司空山十餘載', 'A decade or more hidden in the mountains', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    snbind: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="誰縛汝">' +
        hills(160, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(260, 214, 1.15, true, HK) +
        '<g transform="translate(110 214)"><path d="M-12 0 Q-10 -20 0 -22 Q10 -20 12 0Z" fill="#a38a52" stroke="' + INK + '" stroke-width="1.1"/><circle cx="0" cy="-30" r="7.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.1"/><path d="M-7.5 -33 q7.5 -8 15 0" stroke="' + INK + '" stroke-width="2" fill="none"/></g>' +
        '<g class="say s1" font-size="22">' + bi('「誰縛汝？」', '“Who binds you?”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="17">' + bi('「無人縛。」「何更求解脫乎？」', '“No one.” “Then why seek liberation?”', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    snluofu: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="羅浮山">' +
        '<path d="M0 240 L0 170 L60 120 L110 150 L190 50 L260 120 L320 80 L400 150 L400 240 Z" fill="#2d241c" opacity=".55"/>' +
        '<path d="M0 240 L0 195 L90 160 L170 190 L260 150 L400 190 L400 240 Z" fill="#2d241c" opacity=".3"/>' +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(200, 214, 1.1, false, HK) +
        '<g class="say s1" font-size="19">' + bi('「今吾得汝，何滯此乎？」', '“Now I have you — why linger here?”', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('往羅浮山，優遊二載', 'To Mount Luofu, two years at ease', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    sntree: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="立化">' +
        hills(170, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M300 214 V120" stroke="#4a3526" stroke-width="7"/><ellipse cx="300" cy="100" rx="70" ry="38" fill="#6e7d5a" opacity=".8" stroke="' + INK + '" stroke-width="1.1"/>' +
        FIG(200, 214, 1.1, false, HK) +
        '<g class="say s1" font-size="19">' + bi('「至道無難，唯嫌揀擇」', '“The Great Way is not difficult; only avoid picking and choosing.”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('於法會大樹下合掌立終', 'He passed away standing, palms joined, beneath a great tree', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* 四祖道信篇（Daoxin chapter） */
    dxsit: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="攝心無寐">' +
        '<rect width="400" height="240" fill="#2d241c" opacity=".14"/>' +
        '<circle cx="320" cy="60" r="16" fill="#f0e6c8" stroke="' + INK + '" stroke-width="1"/>' +
        hills(170, 0.12, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(200 214)"><rect x="-44" y="-8" width="88" height="8" fill="#a38a52" stroke="' + INK + '" stroke-width="1.1"/></g>' +
        FIG(200, 206, 1.0, false, DAO) +
        '<g class="say s1" font-size="19">' + bi('攝心無寐，脅不至席', 'Gathering the mind, never lying down to sleep', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('僅六十年', 'For some sixty years', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    dxcity: function () {
      let sol = '';
      for (let i = 0; i < 6; i++) sol += '<g transform="translate(' + (46 + i * 26) + ' 214)"><path d="M-6 0 L-5 -14 L5 -14 L6 0Z" fill="#3b3029"/><circle cx="0" cy="-18" r="4.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width=".8"/></g>';
      return '<svg viewBox="0 0 400 240" role="img" aria-label="吉州解圍">' +
        hills(170, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<rect x="230" y="130" width="160" height="84" fill="#d9cfb3" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<path d="M230 130 h12 v-10 h14 v10 h14 v-10 h14 v10 h14 v-10 h14 v10 h14 v-10 h14 v10 h14 v-10 h14 v10 h12" stroke="' + INK + '" stroke-width="1.2" fill="none"/>' +
        '<g class="drift" style="animation-duration:4s" opacity=".55"><circle cx="300" cy="150" r="16" fill="#e9b04a"/><circle cx="340" cy="150" r="16" fill="#e9b04a"/></g>' +
        sol + FIG(205, 214, 0.9, true, DAO) +
        '<g class="say s1" font-size="19">' + bi('教令念「摩訶般若」', 'He taught them to recite “Mahaprajna”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('「城內必有異人，不可攻矣」', '“There must be a remarkable person in the city; do not attack.”', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    dxmount: function () {
      let m = '';
      [60, 110, 290, 340].forEach(function (x, i) { m += FIG(x, 214, 0.7, i > 1, i % 2 ? HUI : HK); });
      return '<svg viewBox="0 0 400 240" role="img" aria-label="破頭山">' +
        '<path d="M0 240 L0 150 L70 80 L130 130 L210 36 L290 120 L350 80 L400 130 L400 240 Z" fill="#2d241c" opacity=".55"/>' +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' + m +
        FIG(200, 214, 1.0, false, DAO) +
        '<g class="say s1" font-size="19">' + bi('住破頭山，學侶雲臻', 'At Potou Mountain, students gather like clouds', 200, 30, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('「莫是和尚他後橫出一枝佛法否？」', '“Might a new branch of the Dharma sprout from you?”', 200, 100, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '</svg>';
    },
    dxchild: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="是佛性">' +
        hills(160, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(260, 214, 1.15, true, DAO) +
        '<g transform="translate(110 214)"><path d="M-12 0 Q-10 -20 0 -22 Q10 -20 12 0Z" fill="#a38a52" stroke="' + INK + '" stroke-width="1.1"/><circle cx="0" cy="-30" r="7.5" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="1.1"/></g>' +
        '<g class="say s1" font-size="21">' + bi('「是佛性。」「性空，故無。」', '“It is Buddha-nature.” “Nature is empty — so there is none.”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('路逢一小兒，骨相奇秀', 'On the road, a remarkable child', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },
    dxend: function () {
      return '<svg viewBox="0 0 400 240" role="img" aria-label="安坐而逝">' +
        hills(170, 0.1, 6) +
        '<path d="M0 214 Q120 204 240 212 T400 208 V240 H0 Z" fill="#cbbf9f" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<g transform="translate(320 214)"><path d="M-18 0 L-14 -40 L0 -52 L14 -40 L18 0Z" fill="#e9e2cc" stroke="' + INK + '" stroke-width="1.2"/><rect x="-6" y="-24" width="12" height="24" fill="#3b3029"/></g>' +
        '<g transform="translate(110 214)"><rect x="-44" y="-8" width="88" height="8" fill="#a38a52" stroke="' + INK + '" stroke-width="1.1"/></g>' +
        FIG(110, 206, 1.0, false, DAO) +
        '<g class="say s1" font-size="18">' + bi('「一切諸法，悉皆解脫」', '“All dharmas are, without exception, liberated.”', 200, 30, 'text-anchor="middle" fill="' + RED + '"') + '</g>' +
        '<g class="say s2" font-size="15">' + bi('汝等各自護念，流化未來', 'Each of you, protect and spread it to the future', 200, 100, 'text-anchor="middle" fill="' + INK + '"') + '</g>' +
        '</svg>';
    },

    /* 旅途小插圖（Travel vignettes） */
    ship: function (o) {
      return '<svg viewBox="0 0 400 140" role="img" aria-label="航海">' +
        '<rect x="0" y="80" width="400" height="60" fill="#c9cfc2" opacity=".45"/>' +
        waves(92, 4, 'waves drift') +
        '<g class="float">' +
        '<path d="M140 96 L260 96 L246 112 L156 112 Z" fill="#5a4334" stroke="' + INK + '" stroke-width="1.2"/>' +
        '<path d="M200 96 V30" stroke="' + INK + '" stroke-width="2"/>' +
        '<path d="M202 34 Q236 54 230 90 L202 90 Z" fill="#e9dcbc" stroke="' + INK + '" stroke-width="1.2"/>' +
        FIG(176, 98, 0.78, false, o) +
        '</g></svg>';
    },
    walk: function (o) {
      return '<svg viewBox="0 0 400 140" role="img" aria-label="步行">' +
        hills(100, 0.1, 5) +
        '<path d="M0 120 Q120 108 220 118 T400 112" stroke="' + INK + '" stroke-width="1.6" fill="none" opacity=".6"/>' +
        '<g class="walker">' + FIG(200, 120, 0.95, false, o) + '</g>' +
        '</svg>';
    },
    wait: function () {
      return '<svg viewBox="0 0 400 140" role="img" aria-label="時光">' +
        '<circle cx="200" cy="70" r="40" fill="none" stroke="' + INK + '" stroke-width="5" stroke-dasharray="200 52" stroke-linecap="round" opacity=".75" class="enso"/>' +
        '</svg>';
    }
  };
  SCENES['reed-travel'] = SCENES.reed;

  window.INK_FIG = { BUD: BUD, HON: HON, figArt: figArt, FIG: FIG };
  window.SCENES = SCENES;
})();
