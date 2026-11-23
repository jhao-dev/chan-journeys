/* 四祖道信篇（Daoxin chapter）— 以禪宗角度敘述
 * 引文取自《五燈會元》卷一（維基文庫）；小知識另引《景德傳燈錄》卷四。座標 [經度, 緯度]；各地點為約略位置。
 * 第 3、5 站同在破頭山（雙峰山）一帶，地圖上共用同一標記。 */
(function () {
  const WU = { zh: '《五燈會元》卷一（四祖道信章）', en: 'Wudeng huiyuan (Compendium of Five Lamps), fasc. 1 (chapter on Daoxin)' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];
  const DREFS = WIKI(['道信', '道信'], ['Daoxin', 'Dayi_Daoxin']);
  const NOTE = { zh: '道信的生平多出自後世禪宗典籍，細節各書不同，以下依《五燈會元》。', en: 'Daoxin’s life comes mostly from later Chan texts, whose details differ; what follows follows the Wudeng huiyuan.' };

  const chapter = {
    id: 'daoxin', ready: true,
    name: { zh: '四祖道信', en: 'Daoxin' },
    role: { zh: '四祖・東山法門之始', en: 'Fourth Patriarch · Before East Mountain' },
    fig: { robe: '#6e5a46', band: '#8a7a5c', fold: '#3a2d20', staff: true, beard: true },
    intro: {
      v: '四祖道信', seal: '四祖',
      en: 'Daoxin, the Fourth Patriarch',
      sub: { zh: '從皖公山到黃梅 · 解圍、聚眾、傳弘忍', en: 'From Mount Wangong to Huangmei — lifting a siege, gathering students, passing on to Hongren' },
      note: { zh: '依《五燈會元》《景德傳燈錄》等傳統記載；部分情節屬傳說', en: 'Told from the Wudeng huiyuan and Transmission of the Lamp; some episodes are legend' }
    },
    finale: {
      zh: '道信安坐而逝，享年七十二歲。他讓禪有了固定的道場和徒眾，把衣法傳給弘忍，禪從此在黃梅東山一帶茁壯。',
      en: 'Daoxin passed away seated, aged seventy-two. He gave Chan a fixed community and passed the robe and Dharma to Hongren; from there Chan grew strong around East Mountain at Huangmei.'
    },
    nextChapter: { id: 'hongren', label: { zh: '接續下一篇：五祖弘忍', en: 'Next chapter: Hongren, the Fifth Patriarch' } },
    nextHint: { zh: '下一篇：五祖弘忍，東山法門', en: 'Next: Hongren and the East Mountain teaching' },
    stations: [
      {
        id: 'wangong', short: { zh: '得法', en: 'Heir' }, num: '一', at: [116.46, 30.73], zoom: 60, scene: 'dxsit', side: 1,
        place: { zh: '皖公山一帶（約略）', en: 'Mount Wangong area (approximate)' },
        title: { zh: '少年得法，攝心無寐', en: 'A Youth Awakens and Sits Without Sleep' },
        source: { zh: '四祖道信大師者，姓司馬氏。世居河內，後徙於蘄州廣濟縣。生而超異，幼慕空宗諸解脫門，宛如宿習。既嗣祖風，攝心無寐，脅不至席者僅六十年。', en: '“The Fourth Patriarch, Great Master Daoxin, was of the Sima family. His family long lived in Henei and later moved to Guangji county in Qizhou. He was extraordinary from birth; as a child he longed for the liberation gates of the school of emptiness, as if from past habit. Having inherited the patriarch’s way, he gathered his mind and did not sleep, his ribs not touching the mat for some sixty years.”', ref: WU, note: NOTE },
        zen: [],
        refs: DREFS.concat(WIKI(['僧璨', '僧璨'], ['Sengcan', 'Sengcan'])),
        facts: [
          { zh: '他十四歲到三祖僧璨那裡，問：「請給我解脫法門。」僧璨說：「誰縛汝？」他說「無人縛」，在這句話下大悟（見三祖僧璨篇）。', en: 'At fourteen he came to Sengcan asking for the gate of liberation; Sengcan said “Who binds you?” and at his answer “No one,” he awakened (see the Sengcan chapter).' },
          { zh: '他服侍僧璨九年，後來在吉州受戒，直到僧璨把衣法傳給他。', en: 'He served Sengcan for nine years, was ordained at Jizhou, and then received the robe and Dharma.' },
          { zh: '「脅不至席者僅六十年」：說他一生幾乎不躺下睡覺，肋骨不貼床席。這是傳統的說法，意在形容他用功的程度。', en: '“Ribs not touching the mat for sixty years” says he almost never lay down to sleep — tradition’s way of describing his diligence.' }
        ],
        text: {
          zh: '道信姓司馬，原籍河內，後來搬到蘄州廣濟。他從小就嚮往解脫法門。十四歲那年，他問僧璨怎麼求解脫，僧璨一句「誰縛汝」讓他當下大悟。他服侍僧璨多年，得到衣法，成為禪宗第四代祖師。他日夜攝心，據說有六十年都沒有躺下睡覺。',
          en: 'Daoxin was of the Sima family, from Henei, later moved to Guangji in Qizhou. From childhood he longed for liberation. At fourteen he asked Sengcan how to find it, and Sengcan’s “Who binds you?” woke him on the spot. After years of serving Sengcan he received the robe and Dharma as fourth patriarch. He kept his mind gathered day and night, and is said not to have lain down to sleep for sixty years.'
        }
      },
      {
        id: 'jizhou', short: { zh: '解圍', en: 'Siege' }, num: '二', at: [114.99, 27.11], zoom: 40, scene: 'dxcity', side: -1,
        place: { zh: '吉州（今江西吉安一帶）', en: 'Jizhou (near today’s Ji’an, Jiangxi)' },
        title: { zh: '群盜圍城，念摩訶般若', en: 'A Siege Lifted by Recitation' },
        source: { zh: '隋大業十三載領徒眾抵吉州，值群盜圍城，七旬不解，萬眾惶怖。祖愍之，教令念摩訶般若。時賊眾望雉堞間若有神兵，乃相謂曰：「城內必有異人，不可攻矣。」悄悄引去。', en: '“In the thirteenth year of Daye of Sui he led his followers to Jizhou, just as a host of bandits besieged the city. For seventy days the siege was not lifted and the multitude was terrified. The patriarch took pity and taught them to recite ‘Mahaprajna.’ The bandits, looking at the battlements, seemed to see divine soldiers and said to one another: ‘There must be a remarkable person in the city; we cannot attack.’ Quietly they withdrew.”', ref: WU },
        zen: [],
        refs: DREFS,
        facts: [
          { zh: '大業十三年是公元 617 年，隋朝快要結束的亂世。', en: 'The thirteenth year of Daye is 617, in the chaos at the end of the Sui.' },
          { zh: '「摩訶般若」是「大智慧」的意思。這則故事說，城裡的人一起念，盜賊看到城牆上好像有神兵，就退走了。這屬於傳說式的記載。', en: '“Mahaprajna” means great wisdom. The story says that as the people recited, the bandits seemed to see divine soldiers on the walls and withdrew — a legendary account.' },
          { zh: '吉州在今天江西，離皖公山約四百公里。這裡的位置是約略的。', en: 'Jizhou lies in today’s Jiangxi, some four hundred kilometers from Mount Wangong; the map position is approximate.' }
        ],
        text: {
          zh: '隋朝末年，道信帶著徒眾來到吉州，正好遇到一大群盜賊圍城，圍了七十天，大家都很害怕。道信可憐他們，教大家一起念「摩訶般若」。盜賊遠遠看，覺得城牆上好像有神兵，彼此說：「城裡一定有異人，不能打。」就悄悄退走了。',
          en: 'At the end of the Sui, Daoxin brought his followers to Jizhou just as bandits had besieged the city for seventy days, and everyone was afraid. Taking pity, he taught them all to recite “Mahaprajna.” From afar the bandits seemed to see divine soldiers on the walls and said: “There must be a remarkable person inside; we cannot attack.” They quietly withdrew.'
        }
      },
      {
        id: 'potou', short: { zh: '聚眾', en: 'Gathering' }, num: '三', at: [115.73, 30.15], zoom: 80, scene: 'dxmount', side: 1,
        place: { zh: '蘄州破頭山（雙峰山，今湖北黃梅）', en: 'Potou Mountain (Twin Peaks), Qizhou, Huangmei, Hubei' },
        title: { zh: '住破頭山，學侶雲臻', en: 'At Potou Mountain, Students Gather' },
        source: { zh: '唐武德甲申歲師卻返蘄春，住破頭山，學侶雲臻。', en: '“In the Jiashen year of Wude of Tang the master returned to Qichun and settled at Potou Mountain; students gathered like clouds.”', ref: WU },
        zen: [],
        refs: DREFS.concat(WIKI(['黃梅縣', '黃梅縣'], ['Huangmei County', 'Huangmei_County'])),
        facts: [
          { zh: '武德甲申是 624 年。破頭山就是後來說的雙峰山，在黃梅，「東山法門」就是從這裡開始。', en: 'The Jiashen year of Wude is 624. Potou Mountain is the Twin Peaks at Huangmei; the East Mountain teaching grew from here.' },
          { zh: '從道信開始，禪師不再到處遷移，而是在山中安住，聚集弟子共同生活與修行，成為固定的團體。', en: 'From Daoxin on, Chan masters no longer moved from place to place but settled in the mountains with students, forming a lasting community.' },
          { zh: '《五燈會元》說，他有一天告訴弟子：他曾在廬山絕頂望見破頭山上有紫雲如蓋、白氣分為六道，問大家懂不懂。弘忍說：「莫是和尚他後橫出一枝佛法否？」他說：「善。」', en: 'The Wudeng huiyuan says he once told the students he had seen a purple canopy of cloud over Potou Mountain with white vapors dividing into six; Hongren asked, “Might a new branch of the Dharma sprout from you?” and Daoxin said “Good.”' },
          { zh: '《傳燈錄》卷四另記載，他曾到牛頭山見法融，對他說：「夫百千法門同歸方寸，河沙妙德總在心源。」', en: 'Fascicle 4 of the Transmission of the Lamp records his visit to Farong at Niutou Mountain, where he said: “A hundred thousand gates of the Dharma return to this one inch of mind.”' }
        ],
        text: {
          zh: '唐朝武德七年，道信回到蘄州，住在破頭山，也就是黃梅的雙峰山。許多學人從四面八方來，像雲一樣聚攏。從這時候開始，禪不再只靠一個人隱居，而是有了固定的道場和一群一起生活修行的弟子，黃梅「東山法門」的根就在這裡。',
          en: 'In the seventh year of Wude, Daoxin returned to Qizhou and settled at Potou Mountain, the Twin Peaks of Huangmei. Students came from all sides, gathering like clouds. From here Chan no longer rested on a lone recluse but on a fixed community living and practicing together — the root of the East Mountain teaching at Huangmei.'
        }
      },
      {
        id: 'huangmei', short: { zh: '傳法', en: 'Heir' }, num: '四', at: [115.94, 30.07], zoom: 90, scene: 'dxchild', side: -1,
        place: { zh: '黃梅縣路上', en: 'On the road to Huangmei county' },
        title: { zh: '路逢小兒，傳法弘忍', en: 'A Child on the Road, and Hongren as Heir' },
        source: { zh: '一日往黃梅縣，路逢一小兒，骨相奇秀，異乎常童。祖問曰：「子何姓？」答曰：「姓即有，不是常姓。」祖曰：「是何姓？」答曰：「是佛性。」祖曰：「汝無姓邪？」答曰：「性空，故無。」祖默識其法器，即俾侍者至其母所，乞令出家。', en: '“One day, going to Huangmei county, he met a small boy on the road, remarkable in bearing, unlike ordinary children. The patriarch asked: ‘What is your surname?’ ‘I have a surname, but not an ordinary one.’ ‘What is it?’ ‘It is Buddha-nature.’ ‘Then you have no surname?’ ‘Nature is empty — so there is none.’ The patriarch silently recognized a vessel for the Dharma and sent an attendant to ask the boy’s mother to let him leave home.”', ref: WU, note: { zh: '這一段在五祖弘忍篇也有講，那邊引的是《景德傳燈錄》的說法。《五燈會元》的弘忍章另有一種出生傳說，兩書說法不同。', en: 'This is also told in the Hongren chapter, there from the Transmission of the Lamp. The Wudeng huiyuan’s Hongren chapter carries a different birth legend; the books differ.' } },
        zen: [],
        refs: DREFS.concat(WIKI(['弘忍', '弘忍'], ['Hongren', 'Hongren'])),
        facts: [
          { zh: '小兒回答：「姓即有，不是常姓」「是佛性」「性空，故無」，用姓氏的問答點出一個意思：每個人都有佛性，而佛性本身是空的。', en: 'The boy’s answers turn a question about a surname into a teaching: everyone has Buddha-nature, and that nature is itself empty.' },
          { zh: '道信後來把衣法傳給他，並說偈：「華種有生性，因地華生生。大緣與性合，當生生不生。」', en: 'Daoxin later passed him the robe and Dharma with the verse: “Flower seeds have the nature to live; on the ground the flowers keep growing. When great conditions join the nature, there is growth that does not grow.”' },
          { zh: '這個小孩就是後來的五祖弘忍。後面的故事見五祖弘忍篇。', en: 'This child became the Fifth Patriarch, Hongren; his story continues in the Hongren chapter.' }
        ],
        text: {
          zh: '有一天，道信走在去黃梅縣的路上，遇見一個骨相很不平常的小孩。問他：「你姓什麼？」孩子說：「有姓，但不是平常的姓。」「什麼姓？」「是佛性。」「那你沒有姓嗎？」「性是空的，所以沒有。」道信心裡明白這是可傳法的人，就請孩子的母親讓他出家。這個孩子就是後來的弘忍。',
          en: 'One day on the road to Huangmei county, Daoxin met a child of remarkable bearing. He asked: “What is your surname?” “I have one, but not an ordinary one.” “What?” “Buddha-nature.” “Then you have none?” “Nature is empty, so there is none.” Daoxin knew he had found a vessel for the Dharma and asked the mother to let the boy leave home. The child became Hongren.'
        }
      },
      {
        id: 'passing', short: { zh: '圓寂', en: 'Passing' }, num: '五', at: [115.73, 30.15], zoom: 80, scene: 'dxend', side: 1,
        place: { zh: '破頭山', en: 'Potou Mountain' },
        title: { zh: '辭太宗之詔，安坐而逝', en: 'Declining the Emperor, Passing Seated' },
        source: { zh: '一日垂誡門人曰：「一切諸法，悉皆解脫。汝等各自護念，流化未來。」言訖安坐而逝。壽七十有二。塔於本山。', en: '“One day he left a final instruction to his disciples: ‘All dharmas are, without exception, liberated. Each of you protect and spread it into the future.’ Having spoken, he sat peacefully and passed away, aged seventy-two. His stupa was set on that mountain.”', ref: WU, note: NOTE },
        zen: [],
        refs: DREFS,
        facts: [
          { zh: '貞觀癸卯（643 年）唐太宗仰慕他，詔他入京。他上表推辭三次，都以病為由；第四次太宗說：「如果不起，即取首來。」道信引頸就刃，神色儼然。使者驚異，回去據實報告，太宗更加欽慕，賜給他珍貴的絲綢。', en: 'In 643 Emperor Taizong of Tang, admiring him, summoned him to the capital. He declined three times, citing illness; the fourth time the emperor said, “If he will not come, bring his head.” Daoxin stretched out his neck, calm in bearing; the envoy, astonished, reported back, and the emperor admired him all the more and sent fine silks.' },
          { zh: '他在永徽辛亥（651 年）閏九月四日圓寂，享年七十二歲，塔在破頭山。第二年四月八日，塔門無故自開，遺容像生前一樣，後來弟子不敢再關上。', en: 'He passed away on the fourth of the intercalary ninth month, 651, aged seventy-two; his stupa is on Potou Mountain. The next year on the eighth of the fourth month the stupa door opened of itself, his form lifelike, and the disciples dared not shut it again.' },
          { zh: '唐代宗後來追諡他為「大醫禪師」，塔稱「慈雲之塔」。', en: 'Emperor Daizong of Tang later gave him the title Chan Master Dayi and called his stupa the Stupa of Merciful Clouds.' },
          { zh: '傳法給弘忍後，他把弟子交給弘忍帶領，自己的生平以這句遺誡作結。', en: 'Having passed the Dharma to Hongren he entrusted the community to him; his life closes with this last instruction.' }
        ],
        text: {
          zh: '唐太宗聽說道信的名聲，請他入京，他推辭了三次。第四次使者說：「如果不來，就把頭拿來。」道信伸長了脖子，神色如常。使者很驚訝，回去報告，太宗反而更加敬重。後來道信對弟子說：「一切諸法，悉皆解脫。你們各自守護，傳給未來。」說完就安然坐著去世，享年七十二歲。',
          en: 'Emperor Taizong of Tang heard of Daoxin and summoned him to the capital; he declined three times. The fourth time the envoy said: “If he will not come, bring his head.” Daoxin stretched out his neck, calm as ever. The astonished envoy reported it, and the emperor honored him all the more. Later Daoxin told his disciples: “All dharmas are, without exception, liberated. Each of you protect it and hand it on to the future.” Having spoken, he sat peacefully and passed away, aged seventy-two.'
        }
      }
    ],
    segments: [
      { dur: 8500, zoom: 14, mode: 'walk', pts: [[116.46, 30.73], [116.0, 29.0], [115.4, 28.0], [114.99, 27.11]],
        caption: { walk: { zh: '得法之後，道信帶著徒眾南行，來到吉州。', en: 'After receiving the Dharma, Daoxin led his followers south to Jizhou.' } } },
      { dur: 8500, zoom: 14, mode: 'walk', pts: [[114.99, 27.11], [115.2, 28.2], [115.5, 29.3], [115.73, 30.15]],
        caption: { walk: { zh: '吉州解圍之後，道信回到蘄州，住進破頭山。', en: 'After the siege at Jizhou, Daoxin returned to Qizhou and settled at Potou Mountain.' } } },
      { dur: 5500, zoom: 80, mode: 'walk', pts: [[115.73, 30.15], [115.85, 30.1], [115.94, 30.07]],
        caption: { walk: { zh: '一天，道信走向黃梅縣，在路上遇見了一個小孩。', en: 'One day Daoxin walked toward Huangmei county and met a child on the road.' } } },
      { dur: 5500, zoom: 80, mode: 'walk', pts: [[115.94, 30.07], [115.85, 30.1], [115.73, 30.15]],
        caption: { walk: { zh: '傳法給弘忍之後，道信回到破頭山，直到圓寂。', en: 'After passing the Dharma to Hongren, Daoxin returned to Potou Mountain, where he passed away.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'daoxin');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [115.0, 27.5], zh: '吉州', en: 'Jizhou', cls: 'city', ch: 'daoxin' }
  );
})();
