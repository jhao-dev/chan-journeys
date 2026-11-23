/* 三祖僧璨篇（Sengcan chapter）— 以禪宗角度敘述
 * 引文取自《五燈會元》卷一（維基文庫），《信心銘》與《傳燈錄》卷三十所載相同。座標 [經度, 緯度]；皖公山、羅浮山為約略位置。
 * 第 2、3、5 站同在皖公山一帶，地圖上共用同一標記。 */
(function () {
  const WU = { zh: '《五燈會元》卷一（三祖僧璨章）', en: 'Wudeng huiyuan (Compendium of Five Lamps), fasc. 1 (chapter on Sengcan)' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];
  const SREFS = WIKI(['僧璨', '僧璨'], ['Sengcan', 'Sengcan']);
  const NOTE = { zh: '僧璨的生平資料很少，《五燈會元》一開頭就說他「不知何許人也」，以下多是禪宗傳統的說法。', en: 'Little is known of Sengcan’s life; the Wudeng huiyuan itself opens by saying “it is not known where he was from.” What follows is largely Chan tradition.' };

  const chapter = {
    id: 'sengcan', ready: true,
    name: { zh: '三祖僧璨', en: 'Sengcan' },
    role: { zh: '三祖・信心銘', en: 'Third Patriarch · Faith in Mind' },
    fig: { robe: '#6f7f6a', band: '#98a890', fold: '#3a4636', staff: false, beard: false },
    intro: {
      v: '三祖信心', seal: '三祖',
      en: 'Sengcan, the Third Patriarch',
      sub: { zh: '從鄴都到皖公山 · 隱居、傳法、《信心銘》', en: 'From Ye to Mount Wangong — hiding, transmitting, and the Xinxin ming' },
      note: { zh: '依《五燈會元》等傳統記載；生平資料少，《信心銘》作者說法不一', en: 'Told from the Wudeng huiyuan and similar sources; little is known of his life, and the authorship of the Xinxin ming is debated' }
    },
    finale: {
      zh: '僧璨在大樹下合掌立終。他傳給道信的衣法，讓禪從隱居的山林走向黃梅，後來開出東山法門。',
      en: 'Sengcan passed away standing under a great tree. The robe and Dharma he gave Daoxin carried Chan out of hidden mountains to Huangmei, where the East Mountain teaching later bloomed.'
    },
    nextHint: { zh: '下一篇：四祖道信（即將推出）', en: 'Next: Daoxin, the Fourth Patriarch (coming soon)' },
    stations: [
      {
        id: 'ye', short: { zh: '受法', en: 'Heir' }, num: '一', at: [114.62, 36.33], zoom: 20, scene: 'sncome', side: 1,
        place: { zh: '鄴都', en: 'Ye, the capital' },
        title: { zh: '白衣來謁，受度傳法', en: 'A Layman Comes and Is Ordained' },
        source: { zh: '三祖僧璨大師者，不知何許人也。初以白衣謁二祖，既受度傳法，隱於舒州之皖公山。', en: '“The Third Patriarch, Great Master Sengcan — no one knows where he was from. At first, as a layman in white, he called on the Second Patriarch; having been ordained and given the Dharma, he hid on Mount Wangong in Shuzhou.”', ref: WU, note: NOTE },
        zen: [],
        refs: SREFS.concat(WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike'])),
        facts: [
          { zh: '「白衣」指沒有出家的在家人。僧璨來見慧可時，還是穿白衣的居士。', en: '“White robe” means a layperson. Sengcan came to Huike as a layman.' },
          { zh: '他和慧可「覓罪不可得」的問答，已經在二祖慧可篇講過，這一站接著講後來。', en: 'His “the sin cannot be found” exchange with Huike was told in the Huike chapter; this station picks up afterward.' },
          { zh: '依《五燈會元》，他受法後隨即隱居在舒州的皖公山，沒有留在鄴都。', en: 'According to the Wudeng huiyuan, after receiving the Dharma he went straight into hiding on Mount Wangong in Shuzhou rather than staying in Ye.' }
        ],
        text: {
          zh: '僧璨是不知道哪裡人的居士，帶著病來見慧可。慧可替他剃度，傳法給他。從這一刻起，他就是達摩一脈的第三位傳人。不過在那個年代，北方的局勢將變，慧可要他隱居，等待時機。',
          en: 'Sengcan, a layman whose origin no one knows, came to Huike in ill health. Huike ordained him and gave him the Dharma, making him the third in Bodhidharma’s line. But the north was about to turn dangerous, and Huike had him go into hiding to wait.'
        }
      },
      {
        id: 'wangong', short: { zh: '隱居', en: 'Hiding' }, num: '二', at: [116.46, 30.73], zoom: 60, scene: 'snhide', side: -1,
        place: { zh: '舒州皖公山（今安徽潛山一帶）', en: 'Mount Wangong, Shuzhou (near today’s Qianshan, Anhui)' },
        title: { zh: '周武帝滅佛，隱於山中', en: 'Hiding in the Mountains' },
        source: { zh: '屬後周武帝破滅佛法，祖往來太湖縣司空山，居無常處，積十餘載，時人無能知者。', en: '“It was the time when Emperor Wu of Later Zhou destroyed the Buddha’s teaching. The patriarch went back and forth to Mount Sikong in Taihu county with no fixed dwelling; for more than ten years no one of the time knew of him.”', ref: WU },
        zen: [],
        refs: SREFS.concat([{ title: '維基百科：北周武帝滅佛', url: 'https://zh.wikipedia.org/zh-tw/北周武帝滅佛' }]),
        facts: [
          { zh: '北周武帝在 574 年下令禁止佛教、道教，寺院被毀，僧人被迫還俗。僧璨在這段時間躲進南方山區。', en: 'In 574 Emperor Wu of Northern Zhou banned Buddhism and Daoism; monasteries were destroyed and monks laicized. Sengcan took refuge in the mountains of the south.' },
          { zh: '皖公山在今天安徽潛山，也就是天柱山一帶；司空山在隔壁的太湖縣。兩地位置在這裡是約略的。', en: 'Mount Wangong is in today’s Qianshan, Anhui, the Tianzhu mountain area; Mount Sikong is in neighboring Taihu county. Both positions are approximate here.' },
          { zh: '「居無常處，積十餘載」：十多年沒有固定住處，沒有人知道他在哪裡。', en: '“No fixed dwelling for over ten years” — no one knew where he was.' }
        ],
        text: {
          zh: '北周武帝禁佛的時候，僧璨躲進南方的山區，在皖公山和司空山之間來回，沒有固定的住處。這樣過了十多年，沒有人知道他在哪裡。禪宗後來說，這就是禪的力量：不靠寺院，也不靠名氣，一個人守著心，法也就守住了。',
          en: 'When Emperor Wu of Zhou banned Buddhism, Sengcan hid in the mountains of the south, moving between Mount Wangong and Mount Sikong with no fixed abode. For more than ten years no one knew where he was. Chan later read this as its strength: with no temple and no fame, one person keeping the mind keeps the Dharma.'
        }
      },
      {
        id: 'daoxin', short: { zh: '傳道信', en: 'Daoxin' }, num: '三', at: [116.46, 30.73], zoom: 60, scene: 'snbind', side: 1,
        place: { zh: '皖公山一帶', en: 'Mount Wangong area' },
        title: { zh: '誰縛汝？', en: 'Who Binds You?' },
        source: { zh: '至隋開皇十二年壬子歲，有沙彌道信，年始十四，來禮祖曰：「願和尚慈悲，乞與解脫法門。」祖曰：「誰縛汝？」曰：「無人縛。」祖曰：「何更求解脫乎？」信於言下大悟。', en: '“In the twelfth year of Kaihuang of Sui, the year Renzi, a novice named Daoxin, only fourteen, came and bowed to the patriarch: ‘Master, in your compassion, please give me the gate of liberation.’ The patriarch said: ‘Who binds you?’ ‘No one binds me.’ ‘Then why seek liberation?’ At these words Daoxin was greatly awakened.’”', ref: WU },
        zen: [],
        refs: SREFS.concat(WIKI(['道信', '道信'], ['Daoxin', 'Dayi_Daoxin'])),
        facts: [
          { zh: '開皇十二年是公元 592 年。道信只有十四歲。', en: 'The twelfth year of Kaihuang is 592; Daoxin was only fourteen.' },
          { zh: '這一問一答和當年慧可求「安心」、僧璨求「懺罪」是同一個模樣：把你說的東西拿出來看，找不到，問題就已經解決了。', en: 'The exchange mirrors Huike’s plea to be pacified and Sengcan’s plea to be absolved: bring out the thing you speak of; when it cannot be found, the problem is already dissolved.' },
          { zh: '道信之後服侍僧璨九年，才在吉州受戒。', en: 'Daoxin then served nine more years before being fully ordained at Jizhou.' },
          { zh: '僧璨觀察他的因緣成熟，才把衣和法傳給他，並說偈：「華種雖因地，從地種華生。若無人下種，華地盡無生。」', en: 'When he judged the conditions ripe, Sengcan passed him the robe and Dharma with the verse: “Flower seeds depend on the ground; from the ground the seed brings flowers. Without someone to sow, flower and ground both fail to grow.”' }
        ],
        text: {
          zh: '隋朝開皇十二年，十四歲的沙彌道信來拜見僧璨，說：「請你給我解脫的方法。」僧璨問：「誰綁住你了？」道信說：「沒有人綁我。」僧璨說：「那為什麼還要求解脫？」道信聽了，當場大悟。他服侍僧璨九年，僧璨看他因緣成熟，便把衣法傳給了他。',
          en: 'In the twelfth year of Kaihuang, a fourteen-year-old novice, Daoxin, came to Sengcan: “Please give me the way to liberation.” Sengcan asked: “Who binds you?” “No one.” “Then why seek liberation?” At these words Daoxin awakened on the spot. He served Sengcan nine years, and when Sengcan saw the conditions ripe, he passed him the robe and Dharma.'
        }
      },
      {
        id: 'luofu', short: { zh: '羅浮', en: 'Luofu' }, num: '四', at: [114.28, 23.27], zoom: 40, scene: 'snluofu', side: -1,
        place: { zh: '羅浮山（今廣東惠州一帶）', en: 'Mount Luofu (near Huizhou, Guangdong)' },
        title: { zh: '何滯此乎？前往羅浮山', en: '“Why Linger Here?” — To Mount Luofu' },
        source: { zh: '祖又曰：「昔可大師付吾法，後往鄴都行化，三十年方終。今吾得汝，何滯此乎？」即適羅浮山，優遊二載，卻還舊址。', en: '“The patriarch said again: ‘Long ago Master Huike gave me the Dharma, then went to Ye to teach, and only after thirty years did he end. Now that I have you, why should I linger here?’ He went to Mount Luofu, roamed at ease two years, then returned to his old place.”', ref: WU },
        zen: [],
        refs: SREFS.concat(WIKI(['羅浮山', '羅浮山'], ['Mount Luofu', 'Mount_Luofu'])),
        facts: [
          { zh: '羅浮山在廣東，離皖公山一千多公里；這一段是從北到南的長途。', en: 'Mount Luofu is in Guangdong, over a thousand kilometers from Mount Wangong — a long journey north to south.' },
          { zh: '僧璨說慧可傳法後到鄴都弘法三十年；「今吾得汝」是說：現在我有了傳人，不必再留在這裡。', en: 'Sengcan notes that Huike taught thirty years in Ye after receiving the Dharma; “now that I have you” means: with an heir secured, he need not stay.' },
          { zh: '《五燈會元》只說他在羅浮山「優遊二載」，沒有說做了什麼，這裡不另外編寫。', en: 'The Wudeng huiyuan says only that he “roamed at ease for two years” on Luofu; nothing more is invented here.' }
        ],
        text: {
          zh: '把法交給道信之後，僧璨說：我可以不用再待在這裡了。他往南走，到了遠在廣東的羅浮山，在那裡悠閒地住了兩年，然後又回到原來的山。',
          en: 'Having given the Dharma to Daoxin, Sengcan said he need linger no longer. He went south to Mount Luofu in Guangdong, spent two unhurried years there, and then returned to his old mountain.'
        }
      },
      {
        id: 'tree', short: { zh: '立化', en: 'Passing' }, num: '五', at: [116.46, 30.73], zoom: 60, scene: 'sntree', side: 1,
        place: { zh: '皖公山一帶', en: 'Mount Wangong area' },
        title: { zh: '《信心銘》，大樹下立化', en: 'Xinxin ming and Passing Under the Tree' },
        source: { zh: '至道無難，唯嫌揀擇。但莫憎愛，洞然明白。毫釐有差，天地懸隔。', en: '“The Great Way is not difficult; only avoid picking and choosing. Without hate or love, all is clear and bright. A hair’s breadth of difference, and heaven and earth are set apart.”', ref: { zh: '《信心銘》（《五燈會元》卷一、《景德傳燈錄》卷三十；傳為僧璨作）', en: 'Xinxin ming (Wudeng huiyuan fasc. 1; Transmission of the Lamp fasc. 30; traditionally ascribed to Sengcan)' }, note: { zh: '《信心銘》是否真是僧璨所作，學者有不同看法；傳統上歸在他名下。', en: 'Scholars differ on whether Sengcan truly wrote the Xinxin ming; tradition ascribes it to him.' } },
        zen: [],
        refs: SREFS.concat(WIKI(['信心銘', '信心銘'], ['Xinxin Ming', 'Xinxin_Ming'])),
        facts: [
          { zh: '《五燈會元》說他回到舊地一個多月，百姓蜂擁而來，擺設供養；他在法會上為四眾講說心要，然後在大樹下合掌站著去世，時間是隋煬帝大業二年（606 年）十月十五日。', en: 'The Wudeng huiyuan says that after a month back at his old place crowds came with offerings; he taught the essentials to the fourfold assembly, then passed away standing, palms joined, beneath a great tree, on 15 October of the second year of Daye, Emperor Yang of Sui (606).' },
          { zh: '唐玄宗後來追諡他為「鑒智禪師」，塔稱「覺寂之塔」。', en: 'Emperor Xuanzong of Tang later gave him the title Chan Master Jianzhi and called his stupa the Stupa of Awakened Stillness.' },
          { zh: '《信心銘》的重點是「不二」：不要在好壞、取捨、有無中跳來跳去，信心與心本來不二。', en: 'The Xinxin ming turns on “not-two”: do not leap between good and bad, grasping and rejecting, being and nothing; faith and mind are originally not two.' },
          { zh: '最後兩句：「信心不二，不二信心。言語道斷，非去來今。」', en: 'Its last lines: “Faith and mind are not two; not-two is faith and mind. The path of words is cut off — not past, not future, not present.”' }
        ],
        text: {
          zh: '僧璨回到皖公山，不到一個月，百姓都來供養。他在法會上講完心要，在大樹下合掌站著去世。傳說他留下《信心銘》，開頭就是：「至道無難，唯嫌揀擇。」意思是：真正的道不難，只是不要挑來挑去、愛這個恨那個；最後說：「信心不二，不二信心。」',
          en: 'Sengcan returned to Mount Wangong, and within a month the people came with offerings. After teaching the essentials at the assembly, he passed away standing under a great tree, palms joined. Tradition gives him the Xinxin ming, which opens: “The Great Way is not difficult; only avoid picking and choosing” — the true Way is not hard, only do not pick and choose, loving this and hating that — and ends: “Faith and mind are not two; not-two is faith and mind.”'
        }
      }
    ],
    segments: [
      { dur: 9000, zoom: 14, mode: 'walk', pts: [[114.62, 36.33], [115.0, 34.5], [115.6, 32.6], [116.46, 30.73]],
        caption: { walk: { zh: '受法之後，僧璨從鄴都南下，躲進皖公山。', en: 'After receiving the Dharma, Sengcan went south from Ye and hid on Mount Wangong.' } } },
      { dur: 6500, zoom: 60, mode: 'wait', pts: null, kicker: { zh: '十餘年', en: 'A decade' }, title: { zh: '隱於山中', en: 'In hiding' },
        caption: { wait: { zh: '十多年過去，隋朝的開皇十二年，一位少年沙彌來到山中。', en: 'A decade and more passed; in the twelfth year of Kaihuang a young novice came into the mountains.' } } },
      { dur: 9000, zoom: 12, mode: 'walk', pts: [[116.46, 30.73], [116.0, 28.0], [115.0, 25.5], [114.28, 23.27]],
        caption: { walk: { zh: '傳法給道信之後，僧璨南行，一路來到羅浮山。', en: 'After giving the Dharma to Daoxin, Sengcan went south all the way to Mount Luofu.' } } },
      { dur: 9000, zoom: 12, mode: 'walk', pts: [[114.28, 23.27], [115.0, 25.5], [116.0, 28.0], [116.46, 30.73]],
        caption: { walk: { zh: '兩年後，他回到皖公山，在法會大樹下合掌立終。', en: 'Two years later he returned to Mount Wangong and passed away at the assembly beneath the great tree.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'sengcan');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [116.0, 31.9], zh: '皖公山', en: 'Mt Wangong', cls: 'mtn', ch: 'sengcan' }
  );
})();
