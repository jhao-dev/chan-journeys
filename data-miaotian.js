/* 第85代 悟覺妙天禪師篇（Master Wujue Miaotian chapter）
 * 事蹟依其官方報導、教團網站與《禪師說禪》專欄整理；代數、年份、人數皆為官方或自述說法，未獨立查證。
 * 座標 [經度, 緯度]；「臺灣」站為約略位置。 */
(function () {
  const WEN = 'https://n.yam.com/Article/';
  const LINKS = [
    { title: '認識悟覺妙天禪師（聖光禪教會，含歷年大事記）', url: 'https://www.zen.org.tw/tlife/aboutmaster/' },
    { title: '世界領袖教育和平基金會成立 25 週年（禪天下）', url: 'https://www.zencosmos.com.tw/2026/01/hot-topic/special-feature/55964/' },
    { title: '《禪師說禪》專欄（蕃新聞）', url: WEN + '20250721474508' },
    { title: '悟覺妙天師父【印心佛法】官方頻道（YouTube）', url: 'https://www.youtube.com/@thebuddhachan' }
  ];

  const chapter = {
    id: 'miaotian', ready: true,
    name: { zh: '第85代 悟覺妙天禪師', en: '85th: Master Wujue Miaotian' },
    role: { zh: '當代禪師・印心禪法', en: 'Contemporary Master · Mind-seal Chan' },
    fig: { robe: '#8a6a4a', band: '#c9a23a', fold: '#4a3526', staff: false, beard: false },
    intro: {
      v: '當代禪師', seal: '妙天',
      en: 'Master Wujue Miaotian',
      sub: { zh: '從屏東潮州到各地大法會 · 依官方報導的事蹟', en: 'From Chaozhou, Pingtung to assemblies across Taiwan — as his official reports tell it' },
      note: { zh: '依官方報導與教團網站整理；代數、年份、人數皆為官方或自述，本站未獨立查證', en: 'Compiled from official reports and association sites; generation, dates and numbers are official or self-reported and not independently verified' }
    },
    finale: {
      zh: '依官方報導，悟覺妙天禪師自釋迦牟尼佛算起為禪宗第 85 代。他的開示主張：見性要先清淨，清淨要能放下。',
      en: 'By official reports, Master Wujue Miaotian is the 85th Chan master counting from Shakyamuni. His teaching: to see nature, first be pure; to be pure, be able to let go.'
    },
    nextHint: { zh: '這是目前最後一篇', en: 'This is the last chapter for now' },
    stations: [
      {
        id: 'chaozhou', short: { zh: '早年', en: 'Early' }, num: '一', at: [120.54, 22.55], zoom: 60, scene: 'miaoseek', side: -1,
        place: { zh: '屏東潮州', en: 'Chaozhou, Pingtung' },
        title: { zh: '早年與訪道', en: 'Early Years and Seeking' },
        source: { zh: '修行人要自覺。什麼是自覺？就是自己要覺悟。', en: '“A practitioner must be self-aware. What is self-awareness? It is to awaken oneself.”', ref: { zh: '《禪師說禪》專欄：修行人應有的自覺與自悟', en: 'Column “Chan Master Speaks on Chan”: On a practitioner’s self-awareness' } },
        zen: [],
        refs: LINKS,
        facts: [
          { zh: '畢業於國防管理學院，曾在文化大學政治研究所研究。', en: 'He graduated from the National Defense Management College and studied at the Graduate Institute of Political Science, Chinese Culture University.' },
          { zh: '40 歲從軍職退休（約 1974 年），開始遍訪各宗教尋找師父。', en: 'At forty he retired from military service (around 1974) and began visiting many religions in search of a teacher.' },
          { zh: '官方資料說，他發願證無上菩提，蒙觀世音菩薩指引，遇到禪宗第 84 代敬哉禪師，拜入門下。', en: 'Official accounts say that, having vowed to realize supreme bodhi, he was guided by Avalokiteshvara and met the 84th-generation Chan master Jingzai, becoming his student.' },
          { zh: '官方資料說，他經八年苦修，才得到師父付囑「佛心印」；教團網站記為 1981 年 2 月 19 日。', en: 'Official accounts say that after eight years of arduous practice he received his teacher’s transmission of the “Buddha mind-seal”; the association’s site dates this to 19 February 1981.' }
        ],
        text: {
          zh: '悟覺妙天禪師 1934 年生於臺灣屏東潮州。他從小經歷戰爭，母親早逝，很早就感受到人生的空苦無常。他畢業於國防管理學院，四十歲從軍職退休後，開始遍訪各宗教找師父。依官方資料，他後來遇到禪宗第 84 代敬哉禪師，苦修八年後得到付囑。' ,
          en: 'Master Wujue Miaotian was born in 1934 in Chaozhou, Pingtung, Taiwan. He knew war as a child and lost his mother early, and so felt life’s emptiness and impermanence from a young age. After graduating from the National Defense Management College and retiring from the military at forty, he began visiting many religions in search of a teacher. Official accounts say he met the 84th-generation Chan master Jingzai and, after eight years of practice, received his transmission.'
        }
      },
      {
        id: 'lineage', short: { zh: '傳承', en: 'Lineage' }, num: '二', at: [121.30, 24.99], zoom: 60, scene: 'miaocrowd', side: 1,
        place: { zh: '桃園', en: 'Taoyuan' },
        title: { zh: '傳承與弘法', en: 'Transmission and Teaching' },
        source: { zh: '修行要能夠見性，要見性，第一步就是要清淨；要清淨，必須要能夠放下，而且是真正地放下。', en: '“To see your nature, the first step is purity; for purity you must let go — truly let go.”', ref: { zh: '《禪師說禪》專欄：智境同輒　證佛之道', en: 'Column “Chan Master Speaks on Chan”: Wisdom and realm in step' } },
        zen: [],
        refs: LINKS,
        facts: [
          { zh: '禪師自述，他承接了「釋迦如來一脈相傳」的法脈，成為禪宗第 85 代宗師。', en: 'By his own account he inherited the lineage “passed down from Shakyamuni Tathagata” and became the 85th Chan master.' },
          { zh: '1995 年，在桃園縣立體育場舉辦「印心禪法見性成佛」大法會，官方說有 6 萬多人參加。', en: 'In 1995 he held the “Mind-seal Chan: Seeing Nature and Becoming Buddha” assembly at the Taoyuan County Stadium; official accounts say over 60,000 attended.' },
          { zh: '1999 年，成立臺灣禪宗佛教會（禪教會）。', en: 'In 1999 the Taiwan Chan Buddhist Association was founded.' },
          { zh: '1999 年受邀擔任嵩山少林寺副住持；2004 年少林寺住持釋永信贈「少林鎮山寶劍」，官方稱之為兩岸法脈接軌；2007 年他率領千名弟子到少林寺「歸山拜祖」。', en: 'In 1999 he was invited to serve as deputy abbot of Shaolin Temple on Mount Song; in 2004 Abbot Shi Yongxin presented him the “Shaolin Sword”, which the association calls the reconnection of the lineage across the Strait; in 2007 he led a thousand disciples to Shaolin to “pay homage to the ancestors”.' }
        ],
        text: {
          zh: '依官方報導，他自釋迦牟尼佛算起為禪宗第 85 代；自達摩算起為中華禪宗第 58 代。1995 年他在桃園舉辦「印心禪法見性成佛」大法會，官方說有 6 萬多人參加；1999 年成立臺灣禪宗佛教會。官方也記載他與嵩山少林寺的往來，包括 2004 年獲贈「少林鎮山寶劍」、2007 年率弟子「歸山拜祖」。',
          en: 'By official reports he is the 85th Chan master counting from Shakyamuni and the 58th in China from Bodhidharma. In 1995 he held the “Mind-seal Chan” assembly in Taoyuan, which official accounts say over 60,000 attended; in 1999 the Taiwan Chan Buddhist Association was founded. Official accounts also record his ties with Shaolin Temple: the “Shaolin Sword” presented in 2004 and the 2007 pilgrimage with his disciples.'
        }
      },
      {
        id: 'leaders', short: { zh: '領袖會', en: 'Leaders' }, num: '三', at: [120.9, 23.7], zoom: 30, scene: 'miaoleaders', side: -1,
        place: { zh: '臺灣', en: 'Taiwan' },
        title: { zh: '成立領袖會', en: 'The Leaders’ Association' },
        source: { zh: '見性（見到自性）不是成佛，只是你找到了這條明路而已，至於你要不要走上這條路，那是你的事。', en: '“Seeing your nature is not becoming a Buddha; you have only found the bright road. Whether you walk it is up to you.”', ref: { zh: '《禪師說禪》專欄：智境同輒　證佛之道', en: 'Column “Chan Master Speaks on Chan”: Wisdom and realm in step' } },
        zen: [],
        refs: LINKS,
        facts: [
          { zh: '2000 年 6 月 3 日成立「世界領袖教育基金會」（領袖會）；官方介紹的全名是「世界領袖教育和平基金會」，兩個名稱都有出現。', en: 'On 3 June 2000 the World Leaders Education Foundation was founded; its official introduction gives the full name as the World Leaders Education and Peace Foundation — both names appear.' },
          { zh: '創立宗旨是培育具有「宗教家慈悲、政治家智慧」的「內聖外王」真領袖，信念是「偉大、完美、博愛、和平」。', en: 'Its aim is to cultivate true leaders of “inner sage, outer king” with “a religious person’s compassion and a statesman’s wisdom”; its creed is “greatness, perfection, universal love, peace”.' },
          { zh: '2025 年滿 25 週年，報導說與會者超過五萬人。', en: 'It marked its 25th anniversary in 2025; reports say more than 50,000 people have taken part.' }
        ],
        text: {
          zh: '2000 年 6 月 3 日，他成立「世界領袖教育基金會」，一般稱「領袖會」。宗旨是培育具有「宗教家慈悲、政治家智慧」的真領袖，信念是「偉大、完美、博愛、和平」。2025 年滿 25 週年，報導說累計與會者超過五萬人。',
          en: 'On 3 June 2000 he founded the World Leaders Education Foundation, known as the “Leaders’ Association”. Its aim is to cultivate true leaders with “a religious person’s compassion and a statesman’s wisdom”; its creed is “greatness, perfection, universal love, peace”. It marked its 25th anniversary in 2025, and reports say more than 50,000 people have taken part.'
        }
      },
      {
        id: 'peace', short: { zh: '超度', en: 'Rite' }, num: '四', at: [121.30, 24.99], zoom: 60, scene: 'miaopeace', side: 1,
        place: { zh: '桃園巨蛋', en: 'Taoyuan Arena' },
        title: { zh: '二戰超度法會', en: 'The World War Memorial Assembly' },
        source: { zh: '做到當下開悟、當下放下，放下以後就解脫了，放不下就不能解脫。', en: '“Awaken in the moment, let go in the moment; once you let go you are free — if you cannot let go you cannot be free.”', ref: { zh: '《禪師說禪》專欄：修行人應有的自覺與自悟', en: 'Column “Chan Master Speaks on Chan”: On a practitioner’s self-awareness' } },
        zen: [],
        refs: LINKS,
        facts: [
          { zh: '1999 年 12 月 12 日，在桃園巨蛋舉辦「迎接二十一世紀世界和平大法會」。', en: 'On 12 December 1999, the “Welcoming the 21st Century: World Peace Assembly” was held at the Taoyuan Arena.' },
          { zh: '他在法會中為 921 大地震，以及二十世紀所有因戰爭罹難的亡靈舉行超度儀式。', en: 'At the assembly he performed a rite of deliverance for the victims of the 921 earthquake and for all who died in the wars of the twentieth century.' },
          { zh: '出席人數：官方網站寫約兩萬多人，另一個資料寫三萬人，本站未能核實。', en: 'Attendance: the association’s site says over 20,000, another source says 30,000; this site could not verify either.' }
        ],
        text: {
          zh: '1999 年 12 月 12 日，他在桃園巨蛋舉辦「迎接二十一世紀世界和平大法會」，為 921 大地震以及二十世紀所有因戰爭罹難的亡靈舉行超度。出席人數官方網站寫兩萬多人，另一個資料寫三萬人，本站未能核實。',
          en: 'On 12 December 1999 he held the “Welcoming the 21st Century: World Peace Assembly” at the Taoyuan Arena, with a rite of deliverance for the victims of the 921 earthquake and for all who died in the wars of the twentieth century. The association’s site gives over 20,000 attendees and another source 30,000; this site could not verify either.'
        }
      },
      {
        id: 'service', short: { zh: '公益', en: 'Service' }, num: '五', at: [121.56, 25.05], zoom: 60, scene: 'miaocare', side: -1,
        place: { zh: '臺北小巨蛋', en: 'Taipei Arena' },
        title: { zh: '公益、海外與其他', en: 'Charity, Overseas and More' },
        source: { zh: '生活中，要做到隨時放下、隨時自在，如果不能自在，表示心裡還有心結，還有事情沒有了結。', en: '“In daily life, be able to let go and be at ease at any moment; if you cannot, some knot remains in the heart, some matter unfinished.”', ref: { zh: '《禪師說禪》專欄：斷滅四相　自見真心', en: 'Column “Chan Master Speaks on Chan”: Cutting off the four marks' } },
        zen: [],
        refs: LINKS,
        facts: [
          { zh: '公益：921 地震賑災並在埔里設大梵寺、八八風災捐款、SARS 期間捐贈口罩、送平安米給偏鄉。', en: 'Charity: relief after the 921 earthquake, with Dafan Temple founded in Puli; donations after Typhoon Morakot; masks donated during SARS; “peace rice” for remote areas.' },
          { zh: '到看守所教受刑人禪修。', en: 'He taught meditation to inmates in detention centres.' },
          { zh: '海外：1994 年在紐西蘭成立第一個海外道場「印心禪園」，也赴美國、日本、俄羅斯等地交流。', en: 'Overseas: in 1994 he founded the first overseas centre, the Heart-Seal Chan Garden in New Zealand, and visited the USA, Japan, Russia and elsewhere.' },
          { zh: '2011 年成立釋迦牟尼佛救世基金會，提出「地球佛國」理念。', en: 'In 2011 he founded the Shakyamuni Buddha Salvation Foundation and put forward the idea of the “Buddha-land on Earth”.' },
          { zh: '2012 年在臺北小巨蛋舉辦萬人大法會。', en: 'In 2012 he held a ten-thousand-person assembly at the Taipei Arena.' },
          { zh: '以上事蹟依官方報導、教團網站整理，本站未獨立查證。', en: 'These accounts follow official reports and association sites and are not independently verified here.' }
        ],
        text: {
          zh: '官方資料記載，他在 921 地震後賑災並在埔里設大梵寺，也有八八風災捐款、SARS 期間捐贈口罩、送平安米給偏鄉，並到看守所教受刑人禪修。海外方面，1994 年在紐西蘭成立第一個海外道場。2011 年成立釋迦牟尼佛救世基金會，提出「地球佛國」；2012 年在臺北小巨蛋舉辦萬人大法會。',
          en: 'Official accounts record relief work after the 921 earthquake, with Dafan Temple founded in Puli, donations after Typhoon Morakot, masks during SARS, “peace rice” for remote areas, and meditation teaching in detention centres. Overseas, he founded his first centre in New Zealand in 1994. In 2011 he founded the Shakyamuni Buddha Salvation Foundation, proposing the “Buddha-land on Earth”; in 2012 he held a ten-thousand-person assembly at the Taipei Arena.'
        }
      }
    ],
    segments: [
      { dur: 7000, zoom: 40, mode: 'walk', pts: [[120.54, 22.55], [120.8, 23.5], [121.1, 24.4], [121.30, 24.99]],
        caption: { walk: { zh: '從屏東潮州出發，一路北上，來到桃園。', en: 'From Chaozhou in Pingtung he went north, up to Taoyuan.' } } },
      { dur: 6000, zoom: 32, mode: 'walk', pts: [[121.30, 24.99], [121.1, 24.4], [120.9, 23.7]],
        caption: { walk: { zh: '傳法與弘法之後，領袖會在臺灣成立。', en: 'After teaching and lineage came the founding of the Leaders’ Association in Taiwan.' } } },
      { dur: 6000, zoom: 32, mode: 'walk', pts: [[120.9, 23.7], [121.1, 24.4], [121.30, 24.99]],
        caption: { walk: { zh: '回到桃園，舉辦迎接新世紀的和平大法會。', en: 'Back in Taoyuan for the peace assembly welcoming the new century.' } } },
      { dur: 5000, zoom: 60, mode: 'walk', pts: [[121.30, 24.99], [121.45, 25.02], [121.56, 25.05]],
        caption: { walk: { zh: '之後的公益與海外弘法，最後在臺北小巨蛋舉行萬人法會。', en: 'Later came charity and overseas work, and finally a ten-thousand-person assembly at the Taipei Arena.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'miaotian');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [121.0, 23.0], zh: '臺灣', en: 'TAIWAN', cls: 'realm', ch: 'miaotian' }
  );
})();
