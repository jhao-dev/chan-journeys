/* 五祖弘忍篇（Hongren chapter）— 以禪宗角度敘述
 * 引文取自《景德傳燈錄》《楞伽師資記》《六祖壇經》《修心要論》（皆憑記憶引用，待校對）。座標 [經度, 緯度]。
 * 東山寺（今五祖寺）座標取自維基百科；黃梅縣城與雙峰山（四祖寺）為約略位置。 */
(function () {
  const SUTRA = { zh: '《六祖壇經・行由品》', en: 'Platform Sutra, “Autobiography” chapter' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];
  const BY = { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' };

  const chapter = {
    id: 'hongren', ready: true,
    name: { zh: '五祖弘忍', en: 'Hongren' },
    role: { zh: '五祖・東山法門', en: 'Fifth Patriarch · East Mountain Teaching' },
    fig: { robe: '#d98a2b', band: '#ecc766', fold: '#8a5a18', staff: false, beard: true },
    intro: {
      v: '五祖傳燈', seal: '五祖',
      en: 'Hongren, the Fifth Patriarch',
      sub: { zh: '從黃梅童子到東山祖師 · 他如何挑出不識字的惠能', en: 'From a child of Huangmei to the master of East Mountain — and how he chose the illiterate Huineng' },
      note: { zh: '依《景德傳燈錄》《六祖壇經》等傳統記載；部分細節屬傳說', en: 'Told from the Transmission of the Lamp and the Platform Sutra; some details are legend' }
    },
    finale: {
      zh: '弘忍在東山教導了二十多年，座下弟子上千。他的法脈後來分成神秀的北宗與惠能的南宗，而惠能的故事，要從他接下的衣缽說起。',
      en: 'Hongren taught at East Mountain for some twenty years to over a thousand disciples. His line later divided into Shenxiu’s Northern school and Huineng’s Southern school — and Huineng’s story begins with the robe he received.'
    },
    nextChapter: { id: 'huineng', label: { zh: '接續下一篇：六祖惠能', en: 'Next chapter: Huineng, the Sixth Patriarch' } },
    nextHint: { zh: '下一篇：六祖惠能，接過衣缽的人', en: 'Next: Huineng, who received the robe' },
    stations: [
      {
        id: 'huangmei', short: { zh: '出家', en: 'Child' }, num: '一', at: [115.94, 30.07], zoom: 110, scene: 'child', side: 1,
        place: { zh: '黃梅', en: 'Huangmei, Hubei' },
        title: { zh: '路遇四祖的童子', en: 'The Child Who Met the Fourth Patriarch' },
        source: { zh: '祖曰：「汝何姓？」答曰：「姓即有，不是常姓。」祖曰：「是何姓？」答曰：「是佛性。」祖曰：「汝無姓耶？」答曰：「性空故無。」祖默識其法器。', en: '“The Patriarch asked, ‘What is your surname?’ ‘I have a surname, but not an ordinary one.’ ‘What surname is it?’ ‘Buddha-nature.’ ‘Then you have no surname?’ ‘Its nature is empty, so there is none.’ The Patriarch silently recognized a vessel of the Dharma.”', ref: { zh: '《景德傳燈錄》（傳說）', en: 'Transmission of the Lamp (legend)' }, note: { zh: '這段對話屬後世禪宗傳說，並非當時的史料；引文憑記憶，待校對。', en: 'This exchange is later Chan legend rather than contemporary record; quoted from memory and awaiting proofreading.' } },
        zen: [],
        refs: WIKI(['弘忍', '弘忍'], ['Hongren', 'Hongren']).concat(WIKI(['道信', '道信'], ['Daoxin', 'Daoxin'])).concat(WIKI(['黃梅縣', '黃梅縣'], ['Huangmei County', 'Huangmei_County'])),
        facts: [
          { zh: '弘忍（約公元 601—674 年）俗姓周，出生在蘄州黃梅（今湖北黃梅）。傳統說他七歲就跟隨四祖道信出家。', en: 'Hongren (c. 601–674), born Zhou, came from Huangmei in today’s Hubei. Tradition says he followed the Fourth Patriarch Daoxin into monastic life at seven.' },
          { zh: '傳說道信在山中遇到一位種松的老人，想收他為徒，老人說自己年紀太大，願意轉世再來。後來道信路上遇見周家的七歲童子，認出就是他。', en: 'Legend says Daoxin once met an old pine-planter in the hills and offered to teach him; the old man said he was too old and would return in another life. Daoxin later met a seven-year-old of the Zhou family and recognized him.' },
          { zh: '「姓是佛性」「性空故無」是禪宗用來說：人的本性是佛性，而佛性本是空，沒有一個固定的我。', en: 'The answers “Buddha-nature” and “empty, so none” are Chan’s way of saying that our true nature is Buddha-nature, and that it is empty — there is no fixed self.' },
          { zh: '這段故事是後來的傳說，不同書記載的年紀與細節不盡相同。', en: 'This is a later legend; different books give different ages and details.' }
        ],
        text: {
          zh: '弘忍出生在黃梅的周家，從小就很不尋常。傳說有一天，四祖道信在路上遇到一個小孩，問他：「你姓什麼？」孩子說：「有姓，但不是平常的姓。」「是什麼姓？」「是佛性。」「你沒有姓嗎？」「本性是空的，所以沒有。」道信心裡明白，這孩子是可以傳法的人，就把他帶回寺裡。從這一天起，弘忍就留在道信身邊，一生沒有離開禪門。',
          en: 'Hongren was born into the Zhou family of Huangmei and was no ordinary child. Legend says that one day the Fourth Patriarch Daoxin met a little boy on the road and asked, “What is your surname?” “I have one, but not an ordinary one.” “What is it?” “Buddha-nature.” “Then you have no surname?” “Its nature is empty, so there is none.” Daoxin understood that here was someone who could carry the Dharma, and took the boy home to his temple. From that day Hongren stayed at Daoxin’s side and never left the Chan path.'
        }
      },
      {
        id: 'shuangfeng', short: { zh: '得法', en: 'Heir' }, num: '二', at: [115.73, 30.15], zoom: 110, scene: 'twinpeaks', side: -1,
        place: { zh: '雙峰山・四祖寺', en: 'Twin Peaks, Daoxin’s temple' },
        title: { zh: '侍奉師父，承接法脈', en: 'Serving the Master, Receiving the Lineage' },
        source: { zh: '努力勤坐，坐為根本。', en: '“Strive to sit — sitting is the root.”', ref: { zh: '《楞伽師資記》載道信對學人的叮嚀', en: 'Record of the Masters and Disciples of the Lankavatara, on Daoxin’s advice to students' }, note: { zh: '引文憑記憶，待校對。', en: 'Quoted from memory; awaiting proofreading.' } },
        zen: [],
        refs: WIKI(['道信', '道信'], ['Daoxin', 'Daoxin']).concat(WIKI(['雙峰山', '雙峰山'], ['East Mountain Teaching', 'East_Mountain_Teaching'])).concat(WIKI(['楞伽師資記', '楞伽師資記'], ['Lankavatara Sutra', 'Lankavatara_Sutra'])),
        facts: [
          { zh: '四祖道信在黃梅雙峰山住了三十年左右，聚集了數百位學人。他是第一位在一個地方長期定居、帶領大眾修行的祖師，禪門從此有了固定的團體。', en: 'The Fourth Patriarch Daoxin lived on Twin Peaks at Huangmei for some thirty years and gathered several hundred students. He was the first patriarch to settle in one place and lead a lasting community.' },
          { zh: '弘忍長年跟在道信身邊侍奉。傳統說法是：道信臨終前，把衣缽與法脈傳給他，時間約在公元 651 年。', en: 'Hongren attended Daoxin for many years. Tradition says that near the end of his life Daoxin passed him the robe and the lineage, around 651.' },
          { zh: '道信教人「坐」：坐著收攝身心，看清自己的心。這個重點，弘忍後來也繼承了。', en: 'Daoxin taught “sitting”: sit, gather body and mind, and look at the mind itself. Hongren inherited this emphasis.' },
          { zh: '今天山上的寺廟叫四祖寺。地圖上的位置只是大概的。', en: 'The temple there is today called Sizu (Fourth Patriarch) Temple. The map position here is approximate.' }
        ],
        text: {
          zh: '弘忍在雙峰山跟著道信，白天勞作，夜裡打坐，日子過得平淡又扎實。道信常提醒學人：「努力勤坐，坐為根本。」弘忍把這句話聽進了心裡，一做就是幾十年。道信年老時，看出弘忍是能承擔法脈的人，便把衣缽傳給他。師父過世後，弘忍帶著僧眾離開雙峰山，另外在東邊的山上建立新的道場。',
          en: 'On Twin Peaks, Hongren followed Daoxin, working by day and sitting by night, in a plain and steady life. Daoxin often reminded students: “Strive to sit — sitting is the root.” Hongren took this to heart and kept at it for decades. When Daoxin grew old, he saw that Hongren could carry the lineage and passed him the robe and bowl. After his teacher’s passing, Hongren led the community away from Twin Peaks and founded a new center on the mountain to the east.'
        }
      },
      {
        id: 'dongshan', short: { zh: '東山', en: 'East Mtn' }, num: '三', at: [115.95, 30.19], zoom: 110, scene: 'eastmtn', side: 1,
        place: { zh: '東山寺', en: 'East Mountain Temple' },
        title: { zh: '東山法門，坐作並重', en: 'East Mountain Teaching: Sitting and Working' },
        source: { zh: '守心者，乃是涅槃之根本，入道之要門，十二部經之宗，三世諸佛之祖。', en: '“Guarding the mind is the root of nirvana, the gateway into the Way, the source of the twelve divisions of the scriptures, and the ancestor of all Buddhas of the three times.”', ref: { zh: '《修心要論》（傳為弘忍所作）', en: 'Treatise on the Essentials of Cultivating the Mind (attributed to Hongren)' }, note: { zh: '學界對《修心要論》是否為弘忍親作有爭議；引文憑記憶，待校對。', en: 'Scholars debate whether Hongren himself wrote this treatise; quoted from memory and awaiting proofreading.' } },
        zen: [],
        refs: WIKI(['五祖寺', '五祖寺'], ['Wuzu Temple', 'Wuzu_Temple']).concat(WIKI(['東山法門', '東山法門'], ['East Mountain Teaching', 'East_Mountain_Teaching'])).concat(WIKI(['金剛經', '金剛經'], ['Diamond Sutra', 'Diamond_Sutra'])),
        facts: [
          { zh: '「東山法門」這個名字，是因為弘忍的道場在雙峰山東邊的東山上，也就是今天的五祖寺。', en: 'The name “East Mountain Teaching” comes from Hongren’s center on the mountain east of Twin Peaks — today’s Wuzu Temple.' },
          { zh: '東山寺的僧眾一面務農勞動，一面坐禪修行，自己養活自己，不靠施捨。', en: 'The community at East Mountain farmed and worked as well as sat in meditation, supporting itself rather than living on alms.' },
          { zh: '《壇經》說，弘忍所在的東禪寺有「門人一千有餘」，是當時最大的禪門道場之一。', en: 'The Platform Sutra says Hongren’s Dongchan Temple had “over a thousand disciples,” one of the largest Chan centers of the day.' },
          { zh: '弘忍常勸人讀誦《金剛經》，惠能後來也是因為聽到《金剛經》而來到黃梅。', en: 'Hongren often urged people to recite the Diamond Sutra; it was hearing that sutra that brought Huineng to Huangmei.' }
        ],
        text: {
          zh: '弘忍在東山建起新的道場，前來學習的人越來越多。僧眾白天一起耕田、種菜、做雜務，空下來就打坐，把修行放進日子裡。弘忍的教法很簡單：守住自己的本心，不要讓念頭帶著走。他也常勸人讀誦《金剛經》。他自己不愛多話，卻讓許多人安心學了下去。因為這裡的法門，後人稱它「東山法門」。',
          en: 'At East Mountain Hongren built a new center, and more and more students arrived. The community farmed, grew vegetables and did chores together by day, and sat in meditation whenever there was time — practice woven into daily life. Hongren’s teaching was simple: guard your own original mind and do not be carried off by thoughts. He often urged people to recite the Diamond Sutra. Not one for many words, he nonetheless helped many settle into practice. Later generations called this approach the “East Mountain Teaching.”'
        }
      },
      {
        id: 'choose', short: { zh: '選嗣', en: 'Heir' }, num: '四', at: [115.95, 30.19], zoom: 110, scene: 'choose', side: -1,
        place: { zh: '東山寺', en: 'East Mountain Temple' },
        title: { zh: '兩首偈，一個決定', en: 'Two Verses and One Decision' },
        source: { zh: '世人生死事大，汝等終日只求福田，不求出離生死苦海。自性若迷，福何可救？汝等各去自看智慧，取自本心般若之性，各作一偈，來呈吾看。', en: '“Birth and death are the great matter, yet all day you seek only merit and not release from the sea of suffering. If the self-nature is deluded, how can merit save you? Each of you, go and look at your own wisdom, take the prajna-nature of your own original mind, and write a verse to show me.”', ref: SUTRA, note: { zh: '引文憑記憶，待校對。', en: 'Quoted from memory; awaiting proofreading.' } },
        zen: [
          { title: '【禪師說禪】禪宗心法　開悟見性　解脫成就　直了成佛', url: 'https://n.yam.com/Article/20260717708263', by: BY, summary: { zh: '妙天禪師引用「本來無一物，何處惹塵埃」這句偈，說明心本來清淨，主張修行要明心見性、直了成佛。', en: 'Master Miaotian quotes “originally not a single thing — where could dust alight?” to teach that the mind is originally pure, and urges practice aimed directly at seeing one’s nature.' }, quote: '本來無一物，何處惹塵埃' }
        ],
        refs: WIKI(['神秀', '神秀'], ['Shenxiu', 'Shenxiu']).concat(WIKI(['惠能', '惠能'], ['Huineng', 'Huineng'])).concat(WIKI(['六祖壇經', '六祖壇經'], ['Platform Sutra', 'Platform_Sutra'])),
        facts: [
          { zh: '弘忍要大家各寫一首偈，是為了找出誰真正看見了自己的本性，再把衣缽傳給他。', en: 'By asking everyone for a verse, Hongren meant to find who had truly seen their own nature — and to pass the robe to that person.' },
          { zh: '神秀的偈寫在廊壁上，弘忍當眾稱讚，要大家依偈修行；私下卻對神秀說：「你這偈，只到了門外，還沒進門裡。」', en: 'Shenxiu’s verse went up on the corridor wall. Hongren praised it in public and told everyone to practice by it, but told Shenxiu in private: “You have only reached the door, not yet entered.”' },
          { zh: '惠能的偈出現後，弘忍怕有人嫉妒加害，用鞋把它擦掉，說：「也還沒見性。」大家便以為惠能沒選上。', en: 'When Huineng’s verse appeared, Hongren, fearing jealous harm, rubbed it out with his shoe and said, “This one has not yet seen the nature, either,” so that the others thought Huineng had not been chosen.' },
          { zh: '當天半夜，弘忍悄悄來到碓房，用杖在碓上敲了三下，惠能便明白了，三更時到他房裡。', en: 'That night Hongren slipped into the rice-pounding room and struck the mortar three times with his staff; Huineng understood and came to his room at the third watch.' },
          { zh: '兩首偈的全文與惠能接下來的故事，請看「六祖惠能篇」。', en: 'The full verses and what follows for Huineng are told in the Huineng chapter.' }
        ],
        text: {
          zh: '弘忍年紀大了，要選接班人。他把弟子們叫來，說：「你們整天只求福報，不求出離生死。每個人回去看看自己的智慧，各寫一首偈給我。」首座神秀寫了「身是菩提樹，心如明鏡臺」；舂米的惠能，也請人寫下「菩提本無樹，明鏡亦非臺」。弘忍看了，表面上不動聲色，半夜裡到碓房用杖敲了三下，惠能心領神會，三更就來到他房裡。接班人，就這樣在眾人不知道的時候決定了。',
          en: 'Hongren was growing old and needed an heir. He gathered his disciples and said: “All day you seek only merit, not release from birth and death. Each of you, look at your own wisdom and write a verse for me.” The senior monk Shenxiu wrote “The body is a bodhi tree, the mind a bright mirror stand”; Huineng, the rice-pounder, had someone write “Bodhi has no tree at all, nor has the mirror a stand.” Hongren showed nothing on the surface. At night he went to the rice room and struck the mortar three times with his staff. Huineng understood, and came to his room at the third watch. The heir was chosen without anyone else knowing.'
        }
      },
      {
        id: 'passing', short: { zh: '傳承', en: 'Lineages' }, num: '五', at: [115.95, 30.19], zoom: 110, scene: 'lineages', side: 1,
        place: { zh: '東山寺', en: 'East Mountain Temple' },
        title: { zh: '衣法已南，兩宗分流', en: 'The Robe Has Gone South; Two Schools Part' },
        source: { zh: '祖數日不上堂，眾疑，詣問曰：「和尚少病少惱否？」曰：「病即無，衣法已南矣。」問：「誰人傳授？」曰：「能者得之。」', en: '“For several days the Patriarch did not enter the hall. The assembly wondered and asked, ‘Is the Reverend unwell?’ ‘I am not ill — the robe and Dharma have gone south.’ ‘Who received them?’ ‘The one who is able.’”', ref: SUTRA, note: { zh: '「能者」指惠能。引文憑記憶，待校對。', en: '“The one who is able” puns on Huineng’s name (Neng). Quoted from memory; awaiting proofreading.' } },
        zen: [],
        refs: WIKI(['神秀', '神秀'], ['Shenxiu', 'Shenxiu']).concat([{ title: '維基百科：北宗', url: 'https://zh.wikipedia.org/zh-tw/北宗' }]).concat(WIKI(['南宗', '南宗'], ['Southern Chan', 'Chan_Buddhism'])),
        facts: [
          { zh: '傳統說，弘忍座下有十位傑出弟子，包括神秀、惠能、智詵、法如、老安等人。', en: 'Tradition counts ten outstanding disciples under Hongren, including Shenxiu, Huineng, Zhishen, Faru and Laoan.' },
          { zh: '神秀後來在湖北玉泉寺弘法，被武則天請到洛陽，受到朝廷尊崇，他這一系後人稱「北宗」。', en: 'Shenxiu later taught at Yuquan Temple in Hubei, was invited by Empress Wu to Luoyang and honored at court; his line is called the Northern school.' },
          { zh: '惠能回到南方，他這一系後人稱「南宗」。後來神會大力宣揚，提出「南頓北漸」的說法，南宗漸漸成為禪宗的主流。', en: 'Huineng returned south and his line is called the Southern school. Later Shenhui promoted it vigorously with the slogan “sudden south, gradual north,” and the Southern school became the mainstream of Chan.' },
          { zh: '弘忍約在公元 674 年圓寂，享年七十多歲。', en: 'Hongren passed away around 674, in his seventies.' }
        ],
        text: {
          zh: '惠能連夜離開之後，弘忍好幾天沒有上堂。大家擔心他生病，他說：「我沒有病，衣法已經往南去了。」弟子問：「誰得到了？」他說：「能者得之。」弘忍晚年繼續在東山教導弟子，約在公元 674 年圓寂。他的弟子神秀在北方受到朝廷尊崇，後人稱北宗；惠能在南方弘法，後人稱南宗。兩條路都從東山出發，而後來流傳最廣的，是惠能這一系。',
          en: 'After Huineng slipped away, Hongren did not enter the hall for several days. Worried they asked if he was ill. “I am not ill — the robe and Dharma have gone south.” “Who has them?” “The one who is able.” In his last years Hongren kept teaching at East Mountain and passed away around 674. His disciple Shenxiu was honored by the court in the north — the Northern school — while Huineng taught in the south, the Southern school. Both paths began at East Mountain; the one that spread furthest came through Huineng.'
        }
      }
    ],
    segments: [
      { dur: 6500, zoom: 80, mode: 'walk', pts: [[115.94, 30.07], [115.84, 30.11], [115.73, 30.15]],
        caption: { walk: { zh: '弘忍跟著道信，離開黃梅城，走進西北邊的雙峰山。', en: 'Hongren followed Daoxin out of Huangmei and into Twin Peaks to the northwest.' } } },
      { dur: 7000, zoom: 80, mode: 'walk', pts: [[115.73, 30.15], [115.84, 30.17], [115.95, 30.19]],
        caption: { walk: { zh: '道信過世後，弘忍帶著僧眾東行，在東山另建道場。', en: 'After Daoxin’s passing, Hongren led the community east and founded a new center on East Mountain.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '二十餘年', en: 'Two decades' }, title: { zh: '東山歲月', en: 'East Mountain Years' },
        caption: { wait: { zh: '一年又一年，東山的僧眾越來越多。直到有一天，弘忍決定要找接班人。', en: 'Year after year the community grew — until one day Hongren decided it was time to choose an heir.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '傳法之後', en: 'After the transmission' }, title: { zh: '兩條路', en: 'Two Paths' },
        caption: { wait: { zh: '衣法傳了出去，弘忍繼續在東山教導弟子，直到圓寂。', en: 'With the robe passed on, Hongren went on teaching at East Mountain until his passing.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'hongren');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [115.5, 30.65], zh: '大別山', en: 'Dabie Mts', cls: 'mtn', ch: 'hongren' }
  );
})();
