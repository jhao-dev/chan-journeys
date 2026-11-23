/* 釋迦牟尼佛篇（Shakyamuni chapter）— 以禪宗角度敘述
 * 座標 [經度, 緯度]。第 4、5 站與第 3、7 站同地點，地圖上共用同一個標記。 */
(function () {
  const ZEN_URL_STAR = 'https://n.yam.com/Article/20250813230433';
  const BY = { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];

  const chapter = {
    id: 'buddha', ready: true,
    name: { zh: '釋迦牟尼佛', en: 'Shakyamuni Buddha' },
    role: { zh: '佛陀・拈花微笑', en: 'The Buddha · The Flower Sermon' },
    fig: { robe: '#d9a441', band: '#ecc766', fold: '#8a6618', staff: false, beard: false },
    intro: {
      v: '佛陀行跡', seal: '佛祖',
      en: 'The Buddha’s Path to Awakening',
      sub: { zh: '從藍毗尼到拘尸那羅 · 禪宗眼中的佛陀一生', en: 'From Lumbini to Kushinagar — the Buddha’s life through the eyes of Chan' },
      note: { zh: '以禪宗觀點敘述；拈花微笑等情節出自後世禪宗典籍', en: 'Told from the Chan viewpoint; episodes like the flower sermon come from later Chan texts' }
    },
    finale: {
      zh: '佛陀入滅，心法由摩訶迦葉承接，一代一代傳到二十八祖——達摩祖師。',
      en: 'The Buddha passed away; the mind-teaching was carried by Mahakasyapa and handed down through twenty-eight patriarchs to Bodhidharma.'
    },
    nextChapter: { id: 'dharma', label: { zh: '接續下一篇：達摩東來', en: 'Next chapter: Bodhidharma’s Journey East' } },
    nextHint: { zh: '下一篇：達摩東來 — 心法傳到中國', en: 'Next: Bodhidharma’s Journey East — the teaching reaches China' },
    stations: [
      {
        id: 'lumbini', short: { zh: '誕生', en: 'Birth' }, num: '一', at: [83.28, 27.47], zoom: 12, scene: 'birth', side: 1,
        place: { zh: '藍毗尼園', en: 'Lumbini Garden' },
        title: { zh: '藍毗尼園，王子誕生', en: 'A Prince Is Born' },
        source: { zh: '天上天下，唯我為尊，三界皆苦，吾當安之。', en: '“Above and below the heavens, I alone am the honored one. The three realms are full of suffering; I shall bring them peace.”', ref: { zh: '《修行本起經》', en: 'Xiuxing benqi jing (Sutra of the Original Acts of Cultivation)' }, note: { zh: '後世常寫成「唯我獨尊」。禪宗多從「人人本具的清淨自性」來理解這句話，而非自誇。', en: 'Later often written “I alone am honored.” Chan readers usually take it as pointing to the pure nature every being already has.' } },
        zen: [],
        refs: WIKI(['釋迦牟尼', '釋迦牟尼'], ['Gautama Buddha', 'Gautama_Buddha']).concat(WIKI(['藍毗尼', '藍毗尼'], ['Lumbini', 'Lumbini'])),
        facts: [
          { zh: '傳統說法佛陀約在公元前六世紀誕生；學者對確切年代仍有不同意見。', en: 'Tradition places the birth in the 6th century BCE; scholars still debate the exact dates.' },
          { zh: '藍毗尼在今尼泊爾。孔雀王朝阿育王曾在此立石柱，上面的銘文記著「佛陀在此誕生」，是最重要的實物證據。', en: 'Lumbini is in present-day Nepal. Emperor Ashoka raised a pillar here whose inscription says the Buddha was born at this spot — the key physical evidence.' },
          { zh: '「釋迦」是他所屬部族的名字，「牟尼」是聖者，所以「釋迦牟尼」意思是「釋迦族的聖者」。俗名悉達多，意思是「成就目標的人」。', en: '“Shakya” is his clan and “muni” means sage, so Shakyamuni is “the sage of the Shakyas.” His personal name Siddhartha means “one who achieves his aim.”' }
        ],
        text: {
          zh: '兩千多年前，北印度有個釋迦族的小國，國王淨飯王的王后摩耶夫人，在回娘家途中，於藍毗尼園的無憂樹下生下一位王子，名叫悉達多。傳說他一出生就向四方各走七步，說：「天上天下，唯我為尊。」禪宗的看法是：這個「我」不是指某一個人，而是每個人心裡本來就有的清淨自性。',
          en: 'More than two thousand years ago, in a small Shakya kingdom of northern India, Queen Maya gave birth beneath a tree in Lumbini Garden on her way to her parents’ home. The boy was named Siddhartha. Legend says he took seven steps in each direction and declared, “Above and below the heavens, I alone am the honored one.” Chan reads this “I” not as one person, but as the pure nature that every being already has.'
        }
      },
      {
        id: 'kapilavastu', short: { zh: '出家', en: 'Leaving' }, num: '二', at: [83.05, 27.57], zoom: 12, scene: 'palace', side: -1,
        place: { zh: '迦毗羅衛城', en: 'Kapilavastu' },
        title: { zh: '四門遊觀，夜半出家', en: 'The Four Sights and the Great Departure' },
        zen: [
          { title: '【禪師說禪】修行首重開悟　讓心清淨', url: 'https://n.yam.com/Article/20260316601289', by: BY, summary: { zh: '妙天禪師說：釋迦牟尼佛還是太子時，出宮見到生、老、病、死，開始思考如何從輪迴的苦中解脫，於是決定離家修行，去尋找答案。禪師把這份「求解脫的決心」視為佛的開悟之始。', en: 'Master Miaotian says that as a prince the Buddha went out of the palace, saw birth, aging, sickness and death, and resolved to leave home to find release from the suffering of rebirth. He treats this resolve as the beginning of the Buddha’s awakening.' }, quote: '決定離家修行，去尋找答案' }
        ],
        refs: WIKI(['迦毗羅衛', '迦毗羅衛'], ['Kapilavastu', 'Kapilavastu']).concat(WIKI(['四門遊觀', '四門遊觀'], ['Four sights', 'Four_sights'])),
        facts: [
          { zh: '「四門遊觀」：太子出東門見老人、出南門見病人、出西門見死人，出北門見到安詳的出家修行人，因此立志出家。', en: 'In the “Four Sights,” the prince met an old man at the east gate, a sick man at the south, a dead man at the west, and a calm renunciant at the north — and resolved to leave home.' },
          { zh: '傳說他在二十九歲時離開王宮，那時他已有妻子耶輸陀羅，和剛出生的兒子羅睺羅。', en: 'Tradition says he left at twenty-nine, already married to Yashodhara and father of a newborn son, Rahula.' },
          { zh: '迦毗羅衛的位置有兩說：尼泊爾的提羅拉科特，或印度的皮普拉瓦。兩處都有考古遺址，至今仍有討論。', en: 'Two sites claim to be Kapilavastu: Tilaurakot in Nepal and Piprahwa in India. Both have archaeological remains and the question is still discussed.' }
        ],
        text: {
          zh: '悉達多在王宮裡長大，一切都不缺。但他多次出城，看見老人、病人、死者，才明白再富貴的人也逃不出生老病死。他想：「有沒有一條路，能真正解開這份苦？」一個夜晚，他騎著白馬犍陟，在侍從車匿陪同下悄悄離開王宮，在河邊剃去頭髮，換上粗布衣。他發願：不找到答案，就不再回來。',
          en: 'Siddhartha grew up in the palace lacking nothing. But on trips outside the city he saw an old man, a sick man and a corpse, and understood that even the richest cannot escape aging, sickness and death. “Is there a path that truly ends this suffering?” One night he rode out on his white horse Kanthaka with his attendant Chandaka, cut off his hair by a river, and put on a rough robe. He vowed not to return until he had found the answer.'
        }
      },
      {
        id: 'rajagriha', short: { zh: '求師', en: 'Teachers' }, num: '三', at: [85.42, 25.03], zoom: 9, scene: 'teachers', side: 1,
        place: { zh: '王舍城', en: 'Rajagriha' },
        title: { zh: '遍訪名師：這還不是究竟', en: 'Learning from Great Teachers' },
        zen: [],
        refs: WIKI(['王舍城', '王舍城'], ['Rajgir', 'Rajgir']).concat([{ title: 'Wikipedia: Alara Kalama', url: 'https://en.wikipedia.org/wiki/Alara_Kalama' }]),
        facts: [
          { zh: '王舍城是當時強國摩揭陀的首都。國王頻婆娑羅看到他氣度不凡，願意分一半國土給他，被他婉拒。', en: 'Rajagriha was capital of the powerful kingdom of Magadha. King Bimbisara, impressed by him, offered to share his kingdom; Siddhartha declined.' },
          { zh: '兩位老師教的是很高深的禪定：阿羅邏迦藍教「無所有處定」，鬱陀迦羅摩子教「非想非非想處定」。', en: 'His two teachers taught very deep meditative absorptions: Alara Kalama the “sphere of nothingness,” Uddaka Ramaputta the “sphere of neither perception nor non-perception.”' },
          { zh: '兩位老師都請他留下來一起領導弟子，他卻都離開了，因為他要的是徹底解脫，不是停在某個境界。', en: 'Both teachers invited him to stay and lead their followers as an equal. He left each, because he wanted complete liberation, not a lofty state.' }
        ],
        text: {
          zh: '悉達多來到摩揭陀國的王舍城，向當時最有名的兩位禪定老師學習。他很快就學會了他們最高深的禪定，進入「什麼都沒有」「非想非非想」的境界。但他出定之後發現：煩惱只是暫時被壓住，生死的根本問題並沒有解決。他對老師說：「這還不是究竟。」於是繼續尋找。禪宗常說，境界再高，也不等於見到自己的本來面目。',
          en: 'Siddhartha reached Rajagriha in Magadha and studied with the two most famous meditation teachers of the day. He quickly mastered their highest attainments — the “sphere of nothingness” and “neither perception nor non-perception.” Yet when he came out of them he saw that his troubles had only been quieted, not ended; the root of birth and death was untouched. “This is not the final answer,” he told them, and moved on. Chan often says: however lofty a state, it is not yet seeing one’s original face.'
        }
      },
      {
        id: 'neranjara', short: { zh: '苦行', en: 'Austerity' }, num: '四', at: [84.99, 24.70], zoom: 12, scene: 'river', side: 1,
        place: { zh: '尼連禪河', en: 'Nairanjana River' },
        title: { zh: '六年苦行，走向中道', en: 'Six Years of Austerity, then the Middle Way' },
        zen: [
          { title: '【禪師說禪】修行人參悟的智慧心光', url: ZEN_URL_STAR, by: BY, summary: { zh: '妙天禪師說：世尊在雪山苦修了六年，身體虛弱後下山，接受乳類的供養，原先跟隨的五位同伴因此離他而去。禪師以這段故事說明：修行要靠智慧之光破除無明，不是靠折磨身體。', en: 'Master Miaotian recounts that the World-Honored One practised austerities for six years, came down weak, accepted milk offered to him, and the five companions who had followed him left. He uses this to show that practice needs the light of wisdom to break ignorance, not self-torment.' }, quote: '一直在雪山苦修了六年' }
        ],
        refs: WIKI(['苦行', '苦行'], ['Ascetic', 'Asceticism']).concat(WIKI(['中道', '中道'], ['Middle Way', 'Middle_Way'])),
        facts: [
          { zh: '傳說他一天只吃一麻一麥，瘦到「肋骨像破屋的椽」。後世佛教美術常畫「苦行像」。', en: 'Texts say he lived on a single sesame seed and grain of rice a day, his ribs showing “like the rafters of a ruined house.” Art often shows this “emaciated Buddha.”' },
          { zh: '當時跟隨他的是憍陳如等五位同伴。他放棄苦行時，他們以為他退失了道心，便離開了。', en: 'His five companions, led by Kaundinya, left because they thought he had given up the path when he abandoned austerity.' },
          { zh: '「中道」就是避開兩個極端：一邊是縱情享樂，一邊是折磨身體。', en: 'The “Middle Way” avoids two extremes: indulgence in pleasure and torment of the body.' },
          { zh: '各傳統對苦行的地點說法不同：有的說在雪山，也有的說在今菩提伽耶附近的苦行林；這裡的地圖放在尼連禪河一帶。', en: 'Traditions differ on where the austerities took place — the snow mountains in some tellings, a forest near today’s Bodh Gaya in others. The map places them by the Nairanjana River.' }
        ],
        text: {
          zh: '離開兩位老師之後，悉達多和五位同伴在尼連禪河邊的樹林裡苦修，用盡各種方法折磨身體，六年下來瘦得只剩骨頭。但他發現，身體受苦並不能讓心清淨，也解不開生死。於是他走進尼連禪河洗去汙垢，接受牧羊女善生供養的乳糜，恢復體力。五位同伴以為他放棄了，失望離去。他從此走上「中道」：不享樂，也不自虐，把心安定下來，用智慧去看清楚。',
          en: 'After leaving the two teachers, Siddhartha and five companions practised in the woods by the Nairanjana River, tormenting the body in every way. After six years he was little more than bones — yet his mind was no purer, and birth and death were no closer to being solved. He bathed in the river and accepted a bowl of milk-rice from the girl Sujata to regain strength. His companions, thinking he had quit, left in disappointment. He now followed the “Middle Way”: neither indulgence nor self-torment, but a settled mind that sees clearly through wisdom.'
        }
      },
      {
        id: 'bodhgaya', short: { zh: '成道', en: 'Awakening' }, num: '五', at: [84.99, 24.70], zoom: 12, scene: 'bodhi', side: 1,
        place: { zh: '菩提伽耶・菩提樹下', en: 'Bodh Gaya · Under the Bodhi Tree' },
        title: { zh: '菩提樹下，降魔見性', en: 'Under the Bodhi Tree: Mara Defeated, Nature Seen' },
        source: { zh: '奇哉！奇哉！此諸眾生，云何具有如來智慧，愚癡迷惑，不知不見？……一切眾生皆具如來智慧德相，但以妄想執著，而不證得。', en: '“How wondrous, how wondrous! Why do these beings, who all hold the Buddha’s wisdom, remain foolish and confused, neither knowing nor seeing it? … All beings possess the wisdom and virtue of the Tathagata; only because of delusive thinking and attachment do they fail to realize it.”', ref: { zh: '《大方廣佛華嚴經》（相傳為佛陀成道時所說）', en: 'Avatamsaka Sutra (traditionally taken as the Buddha’s words at awakening)' } },
        zen: [
          { title: '【禪師說禪】修行人參悟的智慧心光', url: ZEN_URL_STAR, by: BY, summary: { zh: '妙天禪師說：世尊在河邊的菩提樹下禪定，到了第二天晚上，看見夜空的星光，由「光能破暗」體會到智慧可以破除無明。禪師提醒修行人：要靠智慧心光，才能明心見性。', en: 'Master Miaotian tells how, meditating under the bodhi tree by the river, the Buddha saw starlight on the second night and realized that just as light dispels darkness, wisdom dispels ignorance. He urges practitioners to rely on this light of wisdom to see the mind and nature.' } }
        ],
        refs: WIKI(['菩提伽耶', '菩提伽耶'], ['Bodh Gaya', 'Bodh_Gaya']).concat(WIKI(['魔羅', '魔羅'], ['Mara (demon)', 'Mara_(demon)'])),
        facts: [
          { zh: '傳說他在樹下鋪草為座，發願：「不證菩提，不起此座。」降魔時，他以右手觸地，請大地作證，這個手勢叫「觸地印」。', en: 'Legend says he spread grass beneath the tree and vowed, “I will not rise until I awaken.” Facing Mara, he touched the ground with his right hand, calling the earth to witness — the “earth-touching” gesture.' },
          { zh: '漢傳佛教以農曆十二月初八（臘八）為成道日，臘八粥就是由此而來。', en: 'In Chinese Buddhism the awakening is celebrated on the 8th day of the 12th lunar month (Laba), the origin of Laba congee.' },
          { zh: '「佛」意思是「覺悟的人」，「菩提」意思是「覺悟」。那棵樹因此叫菩提樹。今日菩提伽耶的大塔列為世界遺產，旁邊的菩提樹據說是原樹的後代。', en: '“Buddha” means “awakened one” and “bodhi” means awakening, hence the bodhi tree. The Mahabodhi Temple is a World Heritage Site, and the tree beside it is said to descend from the original.' },
          { zh: '禪宗對「魔」的看法：魔不只是外來的怪物，更是自己心中的貪、瞋、癡與妄想。', en: 'Chan sees Mara not only as an outside monster but as the greed, anger, delusion and wandering thoughts within one’s own mind.' }
        ],
        text: {
          zh: '悉達多來到菩提伽耶，在一棵大樹下坐下，發願：不悟道就不起座。魔王派來軍隊、箭雨和美女誘惑他，他不動搖，以手觸地請大地作證，魔軍退散。禪宗說，真正的魔是自己的妄想。幾夜之後，夜空升起明星，他忽然見到自己的本來面目，說：「奇哉！一切眾生皆具如來智慧德相，只因妄想執著而不能證得。」這就是「見性成佛」：不是向外得到什麼，而是見到本來就有的清淨本心。',
          en: 'At Bodh Gaya Siddhartha sat beneath a great tree and vowed not to rise until he awakened. Mara sent armies, storms of arrows and tempting maidens; he stayed unmoved, touched the earth to bear witness, and the host scattered. Chan says the real Mara is one’s own delusive thinking. After several nights, as the morning star rose, he suddenly saw his own original face and exclaimed: “How wondrous! All beings possess the wisdom and virtue of the Buddha; only delusion and attachment keep them from realizing it.” This is “seeing one’s nature and becoming Buddha”: not gaining something from outside, but seeing the pure mind already there.'
        }
      },
      {
        id: 'sarnath', short: { zh: '傳法', en: 'Teaching' }, num: '六', at: [83.02, 25.38], zoom: 11, scene: 'deer', side: 1,
        place: { zh: '鹿野苑', en: 'Deer Park, Sarnath' },
        title: { zh: '鹿野苑初轉法輪，四處傳法', en: 'Turning the Wheel at Sarnath' },
        zen: [],
        refs: WIKI(['鹿野苑', '鹿野苑'], ['Sarnath', 'Sarnath']).concat(WIKI(['初轉法輪', '初轉法輪'], ['Dhammacakkappavattana Sutta', 'Dhammacakkappavattana_Sutta'])),
        facts: [
          { zh: '佛陀在這裡向昔日的五位同伴講「四聖諦」和「八正道」。憍陳如最先聽懂，成為第一位弟子，僧團（僧寶）因此成立。', en: 'Here he taught his five former companions the Four Noble Truths and the Eightfold Path. Kaundinya understood first and became the first disciple, founding the Sangha.' },
          { zh: '佛陀後半生四十多年在恆河流域各地傳法，常住的地方包括王舍城的竹林精舍、舍衛城的祇園精舍。', en: 'For over forty years he taught along the Ganges plain, often staying at the Bamboo Grove in Rajagriha and Jetavana in Shravasti.' },
          { zh: '鹿野苑出土的阿育王石柱柱頭，四隻獅子背對背站立，今天是印度的國徽。', en: 'The lion capital of Ashoka’s pillar found at Sarnath, four lions back to back, is now India’s national emblem.' }
        ],
        text: {
          zh: '成道之後，佛陀想：第一個該說法的對象，是曾和我一起苦修的五位同伴。他步行兩百多公里，來到波羅奈城外的鹿野苑，向他們講四聖諦、八正道，這叫「初轉法輪」。五人聽了都歸依成為弟子。之後四十多年，佛陀帶著弟子走遍恆河兩岸，隨緣說法，度化了國王、商人、婦女和賤民。',
          en: 'After awakening, the Buddha thought first of the five companions who had practised with him. He walked some two hundred kilometres to the Deer Park at Sarnath, near Varanasi, and taught them the Four Noble Truths and the Eightfold Path — the “first turning of the wheel.” All five became his disciples. For more than forty years afterward he walked the Ganges plain with his followers, teaching kings, merchants, women and outcasts alike as conditions allowed.'
        }
      },
      {
        id: 'vulture', short: { zh: '拈花', en: 'Flower' }, num: '七', at: [85.42, 25.03], zoom: 12, scene: 'flower', side: 1,
        place: { zh: '靈鷲山・王舍城', en: 'Vulture Peak, Rajagriha' },
        title: { zh: '靈山會上，拈花微笑', en: 'The Flower Sermon on Vulture Peak' },
        source: { zh: '世尊在靈山會上，拈花示眾。是時眾皆默然，唯迦葉尊者破顏微笑。世尊曰：「吾有正法眼藏，涅槃妙心，實相無相，微妙法門，不立文字，教外別傳，付囑摩訶迦葉。」', en: '“On Vulture Peak the World-Honored One held up a flower before the assembly. All were silent; only the venerable Kasyapa broke into a smile. The Buddha said: ‘I have the treasury of the true Dharma eye, the wondrous mind of nirvana, the true mark that is no mark, the subtle Dharma gate, not set up in words, a special transmission outside the teachings. I entrust it to Mahakasyapa.’”', ref: { zh: '《五燈會元》卷一', en: 'Wudeng huiyuan (Compendium of Five Lamps), vol. 1' }, note: { zh: '這則故事見於宋代前後的禪宗典籍，早期印度經典中沒有，所以學者多把它視為禪宗的傳承故事。', en: 'This story appears in Chan texts around the Song dynasty, not in early Indian sutras, so scholars generally treat it as Chan’s own transmission story.' } },
        zen: [
          { title: '【禪師說禪】禪宗正法　教外別傳　佛心傳心　傳佛心印', url: 'https://n.yam.com/Article/20260301505110', by: BY, summary: { zh: '妙天禪師回顧靈山法會：大梵天王獻上金色蓮花，世尊拈花不語，只有迦葉尊者會心微笑。世尊於是把「正法眼藏、涅槃妙心」託付給摩訶迦葉，禪師把這視為禪宗傳承的開端。', en: 'Master Miaotian recalls the assembly on Vulture Peak: the Brahma king offered a golden lotus, the Buddha held it up in silence, and only Kasyapa smiled. The Buddha then entrusted the “treasury of the true Dharma eye and wondrous mind of nirvana” to Mahakasyapa — which Master Miaotian takes as the start of the Chan transmission.' } },
          { title: '禪修釋疑：禪宗傳承　如來心印', url: 'https://www.zencosmos.com.tw/2025/01/chanqa/48220/', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌 238 期', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos no. 238' }, summary: { zh: '妙天禪師說明禪宗的由來：從靈山會上拈花微笑、迦葉傳承，一脈單傳到二十八祖菩提達摩；這份傳承是「不傳之傳，以心傳心」。', en: 'Master Miaotian traces Chan from the flower sermon and Kasyapa, through the line of patriarchs to the twenty-eighth, Bodhidharma — a transmission “from mind to mind.”' }, quote: '禪宗傳承，以心傳心，非身傳身' }
        ],
        refs: WIKI(['拈花微笑', '拈花微笑'], ['Flower Sermon', 'Flower_Sermon']).concat(WIKI(['靈鷲山', '靈鷲山_(印度)'], ['Vulture Peak', 'Vulture_Peak'])),
        facts: [
          { zh: '靈鷲山在王舍城東北，山形像一隻鷲鳥。傳統說《法華經》《般若經》等許多大乘經典是在這裡宣講。', en: 'Vulture Peak lies northeast of Rajagriha and is shaped like a vulture. Tradition says the Lotus Sutra and the Prajna sutras were taught here.' },
          { zh: '摩訶迦葉是頭陀第一的弟子，生活簡樸、修行嚴謹。禪宗尊他為「西天第一祖」。', en: 'Mahakasyapa was foremost in ascetic practice, living simply and strictly. Chan honors him as the first Indian patriarch.' },
          { zh: '「不立文字，教外別傳，直指人心，見性成佛」，是禪宗的核心主張，而這一幕就是它最有名的出處。', en: '“Not founded on words, a special transmission outside the teachings, pointing directly at the mind, seeing nature and becoming Buddha” is Chan’s core claim, and this scene is its most famous origin.' }
        ],
        text: {
          zh: '有一天，佛陀在王舍城的靈鷲山上，面對大眾，一句話也不說，只是拈起一朵金色的花。大家不明白，全場靜默，只有大弟子摩訶迦葉露出會心的微笑。佛陀說：「我有正法眼藏，涅槃妙心，現在交給迦葉。」這就是禪宗「以心傳心」的開始：真正的心法無法用文字講清楚，要靠自己親自體驗，由心印證心。',
          en: 'One day on Vulture Peak at Rajagriha, the Buddha faced the great assembly and said nothing. He simply held up a golden flower. No one understood and all was silent — except his senior disciple Mahakasyapa, who smiled. The Buddha said, “I have the treasury of the true Dharma eye and the wondrous mind of nirvana. Now I entrust it to Kasyapa.” This is the beginning of Chan’s “mind-to-mind transmission”: the true teaching cannot be explained in words; it must be experienced, one mind confirming another.'
        }
      },
      {
        id: 'kushinagar', short: { zh: '涅槃', en: 'Nirvana' }, num: '八', at: [83.89, 26.74], zoom: 10, scene: 'nirvana', side: 1,
        place: { zh: '拘尸那羅', en: 'Kushinagar' },
        title: { zh: '雙樹入滅，法脈傳承', en: 'Parinirvana and the Passing of the Lamp' },
        source: { zh: '汝等當自熾燃，熾燃於法，勿他熾燃；當自歸依，歸依於法，勿他歸依。', en: '“Be a lamp unto yourselves, a lamp in the Dharma; do not rely on another lamp. Take refuge in yourselves and in the Dharma; do not take refuge in another.”', ref: { zh: '《長阿含經・遊行經》', en: 'Chang Ahan jing, Youxing jing (Mahaparinibbana Sutta, Dirghagama)' } },
        zen: [
          { title: '禪修釋疑：禪宗傳承　如來心印', url: 'https://www.zencosmos.com.tw/2025/01/chanqa/48220/', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌 238 期', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos no. 238' }, summary: { zh: '文中說明禪宗的傳承：從佛陀靈山會上傳給迦葉，一脈單傳，到二十八祖菩提達摩東來，成為中國禪宗初祖。這份傳承是「以心傳心」，不是靠文字或形式。', en: 'The article explains the Chan lineage: from the Buddha’s transmission to Kasyapa on Vulture Peak, one patriarch to the next, down to the 28th, Bodhidharma, who came east to become the first patriarch in China. It is a transmission mind to mind, not through words or forms.' } }
        ],
        refs: WIKI(['拘尸那迦', '拘尸那迦'], ['Kushinagar', 'Kushinagar']).concat(WIKI(['般涅槃', '般涅槃'], ['Parinirvana', 'Parinirvana'])).concat(WIKI(['摩訶迦葉', '摩訶迦葉'], ['Mahakasyapa', 'Mahakasyapa'])),
        facts: [
          { zh: '佛陀約八十歲，在前往拘尸那羅的路上，吃了鐵匠純陀供養的食物後生病。他還是走到拘尸那羅，在兩棵娑羅樹之間躺下入滅。', en: 'At about eighty, on the road to Kushinagar, the Buddha fell ill after a meal offered by the smith Cunda. He still reached Kushinagar and lay down between two sala trees to pass away.' },
          { zh: '最後的弟子須跋陀羅，是在佛陀臨終前才趕來請法的，聽完立即得到開悟。', en: 'His last disciple, Subhadda, arrived just before the end to ask a question, and awakened on hearing the answer.' },
          { zh: '據《長阿含經》，佛陀最後的叮嚀是：一切事物都會變化，要精進、不放逸。', en: 'According to the Pali and Chinese accounts, his last words were that all conditioned things decay, so strive with diligence.' },
          { zh: '禪宗傳說：佛陀把金縷僧伽黎衣交給迦葉，迦葉再傳阿難，一代代傳到第二十八祖達摩，形成「西天二十八祖」；這個世系是禪宗自己的傳承說法。', en: 'In Chan tradition the Buddha gave Kasyapa a golden-threaded robe, passed on through Ananda and onward to the 28th patriarch Bodhidharma — the “twenty-eight Indian patriarchs,” a lineage that is Chan’s own account.' }
        ],
        text: {
          zh: '佛陀八十歲那年，走到拘尸那羅，在兩棵娑羅樹下右脅而臥，弟子圍繞哭泣。他叮嚀大家：「要以自己為燈，以法為燈。」說完安詳入滅。後來迦葉尊者承接了心法，傳給阿難，一代傳一代。禪宗說，這盞心燈從靈山一路傳到第二十八祖菩提達摩，達摩再把它帶到中國。',
          en: 'At eighty the Buddha reached Kushinagar and lay down on his right side between two sala trees as his disciples wept around him. “Be a lamp unto yourselves,” he told them, “and a lamp in the Dharma.” Then he passed away peacefully. Mahakasyapa received the mind-teaching and handed it to Ananda, and so on from one patriarch to the next. Chan says this lamp of the mind passed from Vulture Peak down to the twenty-eighth patriarch, Bodhidharma, who carried it to China.'
        }
      }
    ],
    segments: [
      { dur: 4500, zoom: 12, mode: 'walk', pts: [[83.28, 27.47], [83.16, 27.53], [83.05, 27.57]],
        caption: { walk: { zh: '悉達多在迦毗羅衛的王宮長大，過著無憂無慮的日子，直到他走出城門，看見了人間的苦。', en: 'Siddhartha grew up in the palace at Kapilavastu without a care — until he rode out through the city gates and saw the world’s suffering.' } } },
      { dur: 9500, zoom: 4.6, mode: 'walk', pts: [[83.05, 27.57], [83.5, 26.9], [84.3, 26.1], [84.95, 25.5], [85.42, 25.03]],
        caption: { walk: { zh: '夜半離宮，渡過阿奴摩河，剃髮換衣。他向南走到摩揭陀國的王舍城，尋找老師。', en: 'Leaving the palace by night, he crossed the Anoma River, shaved his head and changed his robes. He went south to Rajagriha in Magadha to find a teacher.' } } },
      { dur: 5500, zoom: 9, mode: 'walk', pts: [[85.42, 25.03], [85.2, 24.85], [84.99, 24.70]],
        caption: { walk: { zh: '離開兩位老師，悉達多來到尼連禪河邊的樹林，開始苦行。', en: 'Leaving both teachers, Siddhartha went to the woods by the Nairanjana River and began his austerities.' } } },
      { dur: 6000, zoom: 12, mode: 'wait', pts: null,
        kicker: { zh: '尼連禪河', en: 'Nairanjana River' }, title: { zh: '放下苦行', en: 'Letting Go of Austerity' },
        caption: { wait: { zh: '接受善生的乳糜，洗淨身體，在菩提樹下鋪上吉祥草，發願：不證菩提，不起此座。', en: 'He accepted Sujata’s milk-rice, bathed, spread kusha grass beneath the bodhi tree and vowed: no rising until awakening.' } } },
      { dur: 9500, zoom: 5.2, mode: 'walk', pts: [[84.99, 24.70], [84.4, 24.95], [83.7, 25.2], [83.02, 25.38]],
        caption: { walk: { zh: '成道之後，佛陀向西步行約兩百公里，前往鹿野苑，尋找當年的五位同伴。', en: 'After awakening, the Buddha walked some two hundred kilometres west to Sarnath to find his five former companions.' } } },
      { dur: 8500, zoom: 4.8, mode: 'walk', pts: [[83.02, 25.38], [83.7, 25.62], [84.4, 25.66], [85.14, 25.6], [85.42, 25.03]],
        caption: { walk: { zh: '此後四十多年，佛陀帶著僧團走遍恆河兩岸。這一次，他回到王舍城的靈鷲山。', en: 'For the next forty years the Buddha walked the Ganges plain with his Sangha. Now he returned to Vulture Peak at Rajagriha.' } } },
      { dur: 9500, zoom: 4.2, mode: 'walk', pts: [[85.42, 25.03], [85.14, 25.6], [85.13, 25.99], [84.4, 26.4], [83.89, 26.74]],
        caption: { walk: { zh: '晚年的佛陀離開王舍城，北渡恆河，經過毗舍離，一路說法，走向最後一站拘尸那羅。', en: 'In old age the Buddha left Rajagriha, crossed the Ganges northward, taught through Vaishali, and walked on toward his final stop, Kushinagar.' } } }
    ]
  };

  CHAPTERS[0] = chapter;

  /* 本篇專用的地名 */
  MAP_LABELS.push(
    { at: [86.4, 24.55], zh: '摩揭陀', en: 'MAGADHA', cls: 'realm', ch: 'buddha' },
    { at: [82.0, 26.9], zh: '憍薩羅', en: 'KOSALA', cls: 'realm', ch: 'buddha' },
    { at: [82.05, 27.52], zh: '舍衛城', en: 'Shravasti', cls: 'city', ch: 'buddha' },
    { at: [85.13, 25.98], zh: '毗舍離', en: 'Vaishali', cls: 'city', ch: 'buddha' },
    { at: [85.14, 25.6], zh: '華氏城', en: 'Pataliputra', cls: 'city', ch: 'buddha' },
    { at: [82.0, 25.9], zh: '恆河', en: 'Ganges', cls: 'river', ch: 'buddha' }
  );
  RIVERS.push([[78.2, 29.95], [79.4, 28.7], [79.9, 27.1], [80.9, 26.2], [81.85, 25.43], [83.0, 25.32], [84.2, 25.6], [85.14, 25.62], [86.2, 25.35], [87.1, 25.2], [87.9, 24.8], [88.6, 24.0], [89.6, 23.2]]);
})();
