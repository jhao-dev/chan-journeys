/* 六祖惠能篇（Huineng chapter）— 以禪宗角度敘述
 * 引文取自《六祖壇經》（通行本）。座標 [經度, 緯度]。 */
(function () {
  const BY = { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' };
  const SUTRA = { zh: '《六祖壇經・行由品》', en: 'Platform Sutra, “Autobiography” chapter' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];

  const chapter = {
    id: 'huineng', ready: true,
    name: { zh: '六祖惠能', en: 'Huineng' },
    role: { zh: '六祖・本來無一物', en: 'Sixth Patriarch · Originally Nothing' },
    fig: { robe: '#8a7a5c', band: '#b5a37c', fold: '#4f4430', staff: false, beard: false },
    intro: {
      v: '六祖傳燈', seal: '六祖',
      en: 'Huineng, the Sixth Patriarch',
      sub: { zh: '從嶺南到黃梅，再回曹溪 · 一位不識字的樵夫如何成為祖師', en: 'From Lingnan to Huangmei and back to Caoxi — how an illiterate woodcutter became a patriarch' },
      note: { zh: '依《六祖壇經》傳統記載；部分細節各版本略有不同', en: 'Told from the Platform Sutra tradition; details vary slightly between versions' }
    },
    finale: {
      zh: '惠能在曹溪弘法三十餘年，南宗禪從此傳遍天下，他的說法被弟子記成《六祖壇經》。',
      en: 'Huineng taught at Caoxi for over thirty years; Southern Chan spread across the land, and his talks were recorded as the Platform Sutra.'
    },
    nextChapter: { id: 'miaotian', label: { zh: '接續下一篇：第85代 悟覺妙天禪師', en: 'Next chapter: Master Wujue Miaotian, 85th' } },
    nextHint: { zh: '《壇經》流傳至今，禪宗五家七宗皆由此而出', en: 'The Platform Sutra lives on; the later houses of Chan all trace back to it' },
    stations: [
      {
        id: 'xinzhou', short: { zh: '聞經', en: 'Sutra' }, num: '一', at: [112.23, 22.70], zoom: 8, scene: 'firewood', side: 1,
        place: { zh: '新州（今廣東新興）', en: 'Xinzhou (modern Xinxing, Guangdong)' },
        title: { zh: '賣柴少年，聞經開悟', en: 'The Woodcutter Who Heard a Sutra' },
        source: { zh: '惠能幼小，父又早亡，老母孤遺，移來南海，艱辛貧乏，於市賣柴。時有一客買柴，使送至客店。客收去，惠能得錢，卻出門外，見一客誦經。惠能一聞經語，心即開悟。', en: '“Huineng lost his father when young, leaving an old mother alone. They moved to Nanhai, poor and hard-pressed, and he sold firewood in the market. A customer bought wood and had him deliver it to an inn. Outside the door, Huineng heard another guest reciting a sutra. At a single hearing of the words, his mind opened.”', ref: SUTRA },
        zen: [
          { title: '【禪師說禪】修行首重開悟　讓心清淨', url: 'https://n.yam.com/Article/20260316601289', by: BY, summary: { zh: '妙天禪師以六祖慧能聞《金剛經》「應無所住而生其心」而開悟為例，說明修行要放下我執與法執，讓自心清淨。', en: 'Master Miaotian cites Huineng’s awakening on hearing “let the mind arise without dwelling on anything” from the Diamond Sutra, to teach letting go of attachment to self and to doctrine so that the mind becomes pure.' } }
        ],
        refs: WIKI(['惠能', '惠能'], ['Huineng', 'Huineng']).concat(WIKI(['六祖壇經', '六祖壇經'], ['Platform Sutra', 'Platform_Sutra'])).concat(WIKI(['金剛經', '金剛經'], ['Diamond Sutra', 'Diamond_Sutra'])),
        facts: [
          { zh: '惠能俗姓盧，生於唐朝貞觀十二年（公元 638 年），原籍范陽，父親被貶到嶺南後去世，他從小跟母親相依為命。', en: 'Born Lu, in 638 under the Tang, Huineng’s family came from Fanyang; his father was exiled to Lingnan and died there, leaving the boy to live with his mother.' },
          { zh: '他不識字，沒有上過學。《壇經》說：他是靠聽，而不是靠讀，一聽就明白經義。', en: 'He never learned to read or write. The Platform Sutra stresses that he understood through hearing, not through reading.' },
          { zh: '他聽到的經文是《金剛經》，客人告訴他：這部經是從黃梅縣東禪寺的五祖弘忍大師那裡學來的。', en: 'The sutra he heard was the Diamond Sutra; the guest told him he had learned it from the Fifth Patriarch Hongren at Dongchan Temple in Huangmei.' }
        ],
        text: {
          zh: '惠能出生在嶺南，父親早逝，他和老母親靠砍柴賣柴過活，不識字，也沒有讀過書。有一天，他把柴送到客店，聽到一位客人在念《金剛經》。念到「應無所住而生其心」時，惠能心裡忽然一亮，彷彿有什麼豁然開朗。他問客人經從哪裡來，得知黃梅縣的五祖弘忍大師正在教人，便安頓好母親，動身北上求法。禪宗常說：開悟靠的不是識字，而是一念見自己的本心。',
          en: 'Huineng grew up in Lingnan in the far south. His father died early, and he and his old mother lived by cutting and selling firewood. He could neither read nor write. One day, delivering wood to an inn, he heard a guest chanting the Diamond Sutra. At the line “let the mind arise without dwelling on anything,” something suddenly opened in him. He asked where the sutra came from and learned that the Fifth Patriarch Hongren was teaching at Huangmei. After settling his mother’s needs, he set out north to seek the Dharma. Chan often says: awakening does not depend on literacy, only on a moment of seeing one’s own mind.'
        }
      },
      {
        id: 'huangmei', short: { zh: '偈子', en: 'Verses' }, num: '二', at: [115.89, 30.15], zoom: 12, scene: 'walls', side: -1,
        place: { zh: '黃梅・東山寺', en: 'East Mountain Temple, Huangmei' },
        title: { zh: '舂米八個月，兩首偈', en: 'Eight Months at the Rice Mortar, and Two Verses' },
        source: { zh: '祖問曰：「汝何方人？欲求何物？」惠能對曰：「弟子是嶺南新州百姓，遠來禮師，惟求作佛，不求餘物。」祖言：「汝是嶺南人，又是獦獠，若為堪作佛？」惠能曰：「人雖有南北，佛性本無南北；獦獠身與和尚不同，佛性有何差別？」', en: '“The Patriarch asked, ‘Where are you from, and what do you seek?’ Huineng replied, ‘I am a commoner from Xinzhou in Lingnan. I have come a long way to pay homage, seeking only Buddhahood.’ ‘You are a southerner and a barbarian — how could you become a Buddha?’ ‘People may be northern or southern, but Buddha-nature is neither. A barbarian’s body differs from yours, Reverend, but how does Buddha-nature differ?’”', ref: SUTRA, note: { zh: '神秀的偈與惠能的偈，通行本（宗寶本）與敦煌本字句略有不同，這裡採通行本。', en: 'The two verses read slightly differently in the Dunhuang manuscript; this site follows the common (Zongbao) edition.' } },
        zen: [
          { title: '【禪師說禪】禪宗心法　開悟見性　解脫成就　直了成佛', url: 'https://n.yam.com/Article/20260717708263', by: BY, summary: { zh: '妙天禪師在這篇文章裡引用「本來無一物，何處惹塵埃」這句偈，說明心本來清淨，沒有什麼塵埃可以沾染，主張修行要明心見性、直了成佛。', en: 'In this article Master Miaotian quotes “originally not a single thing — where could dust alight?” to teach that the mind is originally pure, with no dust to settle on it, and urges practice aimed directly at seeing one’s nature.' }, quote: '本來無一物，何處惹塵埃' }
        ],
        refs: WIKI(['弘忍', '弘忍'], ['Hongren', 'Hongren']).concat(WIKI(['神秀', '神秀'], ['Shenxiu', 'Shenxiu'])).concat(WIKI(['東山法門', '東山法門'], ['East Mountain Teachings', 'East_Mountain_Teachings'])),
        facts: [
          { zh: '惠能走了約三十天到黃梅。五祖見他是南方來的，不識字，便叫他去後院劈柴、舂米，做了八個月的雜工。', en: 'It took Huineng about thirty days to reach Huangmei. The Patriarch put him to work splitting firewood and pounding rice in the back yard for eight months.' },
          { zh: '神秀是五祖座下的首座，博學多聞，大家都以為他會繼承衣缽。他的偈寫在廊壁上，但他自己也沒把握。', en: 'Shenxiu, the senior monk, was learned and widely expected to succeed. He wrote his verse on the corridor wall, but was not sure of it himself.' },
          { zh: '神秀的偈講的是「時時勤拂拭」，要不斷擦掉心上的塵；惠能的偈則說，心本來就沒有塵，也就沒有東西需要擦。', en: 'Shenxiu’s verse is about wiping the mirror of the mind again and again; Huineng’s says there was never any dust to wipe.' },
          { zh: '惠能不識字，所以請一位江州別駕張日用把偈念給他聽，再請他代筆寫在牆上。', en: 'Unable to write, Huineng asked a local official, Zhang Riyong, to read the first verse to him and to write his own on the wall.' }
        ],
        text: {
          zh: '惠能走了一個月，到了黃梅東山寺。五祖弘忍見他是南方人，又不識字，便叫他去後院舂米。八個月後，五祖要弟子各寫一首偈，看誰領悟了。首座神秀在牆上寫：「身是菩提樹，心如明鏡臺，時時勤拂拭，勿使惹塵埃。」惠能聽了，請人替他在旁邊寫下：「菩提本無樹，明鏡亦非臺，本來無一物，何處惹塵埃。」神秀要人不斷擦拭心上的塵；惠能直接說：心本來清淨，沒有塵可擦。不識字的惠能，一語道破經義的核心。',
          en: 'After a month on the road Huineng reached East Mountain Temple at Huangmei. The Fifth Patriarch Hongren saw a southerner who could not read, and sent him to pound rice in the back yard. Eight months later Hongren asked his disciples each to write a verse showing their understanding. The senior monk Shenxiu wrote on the wall: “The body is a bodhi tree, the mind a bright mirror stand; wipe it diligently, always, let no dust alight.” Huineng, hearing it, had someone write beside it: “Bodhi has no tree at all, nor has the mirror a stand; originally not a single thing — where could dust alight?” Shenxiu says keep wiping the dust from the mind; Huineng says the mind is originally pure and there is nothing to wipe. The illiterate woodcutter had gone straight to the heart of the sutras.'
        }
      },
      {
        id: 'jiujiang', short: { zh: '傳衣', en: 'Robe' }, num: '三', at: [115.99, 29.73], zoom: 12, scene: 'robe', side: 1,
        place: { zh: '九江驛（黃梅南）', en: 'Jiujiang Post-station, south of Huangmei' },
        title: { zh: '三更傳衣缽，連夜南逃', en: 'The Robe Passed at Midnight' },
        source: { zh: '何期自性，本自清淨！何期自性，本不生滅！何期自性，本自具足！何期自性，本無動搖！何期自性，能生萬法！', en: '“Who would have thought that the self-nature is originally pure! Who would have thought that the self-nature is originally without birth or death! Who would have thought that the self-nature is originally complete! Who would have thought that the self-nature is originally unshakable! Who would have thought that the self-nature can give rise to all things!”', ref: SUTRA, note: { zh: '這是惠能聽五祖講《金剛經》時說的五句話。五祖知道他已見性，便把衣缽和頓教法門傳給他。', en: 'Huineng spoke these five lines while the Fifth Patriarch expounded the Diamond Sutra. Hongren knew he had seen his nature and passed him the robe and the sudden teaching.' } },
        zen: [
          { title: '【禪師說禪】修行首重開悟　讓心清淨', url: 'https://n.yam.com/Article/20260316601289', by: BY, summary: { zh: '妙天禪師用惠能聞「因無所住而生其心」而開悟的故事，提醒修行人：放下我執與法執、清淨自心，是開悟的關鍵。', en: 'Using Huineng’s awakening on hearing “arise the mind without dwelling,” Master Miaotian reminds practitioners that letting go of attachment to self and to doctrine, and purifying the mind, is the key.' } }
        ],
        refs: [{ title: '維基百科：衣缽', url: 'https://zh.wikipedia.org/zh-tw/衣缽' }].concat(WIKI(['弘忍', '弘忍'], ['Hongren', 'Hongren'])),
        facts: [
          { zh: '五祖三更把惠能叫進房裡，用袈裟遮住窗，替他講《金剛經》。講到「應無所住而生其心」，惠能當下大悟。', en: 'At the third watch Hongren called Huineng into his room, screened the window with his robe, and taught the Diamond Sutra. At “let the mind arise without dwelling,” Huineng awakened on the spot.' },
          { zh: '五祖說：「衣是爭端，止汝勿傳。」意思是衣缽容易引起爭奪，傳到你這一代就不要再傳了。後來六祖之後，禪宗不再傳衣。', en: 'Hongren said the robe causes contention and should end with Huineng. After the Sixth Patriarch, the robe was no longer handed on.' },
          { zh: '五祖親自送惠能到九江驛，上船後要自己搖櫓。惠能說：「請和尚坐，弟子應搖櫓。」五祖說：「合是吾渡汝。」惠能答：「迷時師度，悟了自度。」', en: 'Hongren himself took Huineng to Jiujiang station and began to row. Huineng said, “Please sit, Reverend; I should row.” “It is right that I ferry you.” “When deluded, the teacher ferries; once awakened, one ferries oneself.”' }
        ],
        text: {
          zh: '五祖弘忍看了惠能的偈，知道他已見性，卻不當眾說破。半夜三更，他悄悄叫惠能進房，用袈裟遮住窗戶，講《金剛經》。講到「應無所住而生其心」，惠能言下大悟，說：「何期自性，本自清淨！」五祖把衣缽和頓教法門傳給他，叮囑：「你要馬上離開，不然有人會害你。」那夜，五祖親自送他到九江驛，在江上搖櫓渡他過去。惠能說：「迷的時候要師父度，悟了就要自己度。」',
          en: 'Hongren saw Huineng’s verse and knew he had seen his nature, but said nothing in public. At midnight he quietly called Huineng to his room, covered the window with his robe, and taught the Diamond Sutra. At “let the mind arise without dwelling,” Huineng awakened and said, “Who would have thought the self-nature is originally pure!” Hongren handed him the robe and bowl and the sudden teaching, warning, “Leave at once, or someone will harm you.” That night Hongren took him to Jiujiang station and rowed him across the river himself. Huineng said, “When deluded, a teacher ferries you; once awakened, you ferry yourself.”'
        }
      },
      {
        id: 'dayuling', short: { zh: '追衣', en: 'Pursuit' }, num: '四', at: [114.33, 25.40], zoom: 9, scene: 'ridge', side: 1,
        place: { zh: '大庾嶺', en: 'Dayu Ridge' },
        title: { zh: '大庾嶺，不思善不思惡', en: 'Dayu Ridge: “Think Neither Good Nor Evil”' },
        source: { zh: '惠能擲下衣缽於石上，曰：「此衣表信，可力爭耶？」能隱草莽中。明至，提掇不動，乃喚云：「行者！行者！我為法來，不為衣來。」惠能遂出，坐盤石上。明作禮云：「望行者為我說法。」惠能云：「汝既為法而來，可屏息諸緣，勿生一念，吾為汝說。」良久，謂明曰：「不思善，不思惡，正與麼時，那個是明上座本來面目？」明言下大悟。', en: '“Huineng laid the robe and bowl on a rock and said, ‘This robe is a token of faith; is it to be taken by force?’ and hid in the grass. Huiming arrived but could not lift it, and called out, ‘Layman! I have come for the Dharma, not for the robe.’ Huineng came out and sat on the rock. Huiming bowed: ‘Please teach me.’ ‘Since you come for the Dharma, put aside all conditions and give rise to no thought, and I will teach you.’ After a long while he said: ‘Not thinking of good, not thinking of evil — at just this moment, what is your original face, Venerable Ming?’ At these words Huiming was greatly awakened.”', ref: SUTRA },
        zen: [],
        refs: [{ title: '維基百科：大庾嶺', url: 'https://zh.wikipedia.org/zh-tw/大庾嶺' }],
        facts: [
          { zh: '惠明出家前是將軍，脾氣急躁。他和幾百名僧人追趕惠能，想把衣缽搶回去。', en: 'Before ordaining, Huiming had been a general and was hot-tempered. He and some hundreds of monks chased Huineng to take back the robe.' },
          { zh: '傳說衣缽放在石上，惠明怎麼也提不起來，這才醒悟：衣缽不是用力就能得到的。', en: 'Legend says the robe on the rock could not be lifted, so Huiming realized it cannot be taken by force.' },
          { zh: '「本來面目」是禪宗的重要用詞，指的是一個念頭還沒有生起之前，那個本來就有的清淨自心。', en: '“Original face” is a key Chan phrase for the pure mind that exists before any thought arises.' },
          { zh: '大庾嶺在今天江西、廣東交界，是古代南北交通的重要關口，著名的「梅關古道」就在這一帶。', en: 'Dayu Ridge, on the Jiangxi–Guangdong border, was a vital pass between north and south; the famous Meiguan ancient road runs here.' }
        ],
        text: {
          zh: '惠能連夜南逃，走了兩個多月，才到大庾嶺。後面有幾百人追上來，領頭的是以前的將軍惠明。惠能把衣缽放在大石頭上，說：「這衣是信物，難道可以用力爭奪嗎？」自己躲進草叢。惠明去拿，卻怎麼也拿不起來，便喊：「我是為法而來，不是為衣而來！」惠能走出來說：「不思善，不思惡，就在這個時候，哪一個是你的本來面目？」惠明當下大悟。禪宗說的「本來面目」，就是念頭還沒有生起之前，那個清淨的自心。',
          en: 'Huineng fled south through the night and travelled for over two months until Dayu Ridge. Several hundred men pursued him, led by Huiming, once a general. Huineng set the robe and bowl on a large rock and said, “This robe is a token of faith — can it be taken by force?” and hid in the grass. Huiming reached for it but could not lift it, and cried, “I came for the Dharma, not for the robe!” Huineng stepped out and said: “Not thinking of good, not thinking of evil — at just this moment, what is your original face?” Huiming awakened on the spot. Chan’s “original face” is the pure mind before any thought has arisen.'
        }
      },
      {
        id: 'sihui', short: { zh: '隱居', en: 'Hiding' }, num: '五', at: [112.69, 23.33], zoom: 8, scene: 'hunters', side: 1,
        place: { zh: '四會', en: 'Sihui' },
        title: { zh: '隱於獵人隊十五年', en: 'Fifteen Years Among the Hunters' },
        source: { zh: '惠能後至曹溪，又被惡人尋逐，乃於四會避難獵人隊中，凡經一十五載，時與獵人隨宜說法。', en: '“Huineng later reached Caoxi, but evil men sought him again, so he took refuge among hunters at Sihui. Fifteen years passed, during which he taught the hunters as occasion allowed.”', ref: SUTRA, note: { zh: '傳說他在獵人隊裡吃「肉邊菜」，只吃鍋邊的蔬菜，並常把守網時捉到的動物放走。', en: 'Tradition says that among the hunters he ate only the vegetables boiled beside the meat, and quietly freed animals caught in the nets.' } },
        zen: [],
        refs: WIKI(['四會市', '四會市'], ['Sihui', 'Sihui']).concat(WIKI(['惠能', '惠能'], ['Huineng', 'Huineng'])),
        facts: [
          { zh: '惠能到曹溪之後，仍有人追查衣缽下落，他便離開，到廣東西部的四會、懷集一帶躲避。', en: 'After Caoxi, people still sought the robe, so he moved on to the Sihui and Huaiji area in western Guangdong.' },
          { zh: '「肉邊菜」的傳說是說：獵人吃肉時，他只在鍋邊煮菜吃。這是後人形容他在亂世中隨緣修行的說法。', en: 'The “vegetables beside the meat” story is later telling of how he practised quietly through turbulent times.' },
          { zh: '「十五年」是《壇經》的說法。這十五年，是惠能在獵人之中默默修行、等待因緣成熟的時期。', en: 'The “fifteen years” comes from the Platform Sutra; they were years of quiet practice among the hunters while he waited for the right time.' }
        ],
        text: {
          zh: '惠能到了南方，仍有人想搶奪衣缽，他只好躲到四會，混在獵人隊裡。他替獵人看網，遇到動物就悄悄放走；吃飯時，只吃鍋邊的蔬菜。獵人問起，他就隨緣說些佛法。就這樣過了十五年。禪宗說，真正的修行不一定在寺院裡，在最平凡、最不起眼的日子裡，也一樣能把心守好。',
          en: 'Back in the south, people still wanted the robe, so Huineng hid at Sihui among a band of hunters. He watched their nets and quietly freed animals that were caught; at meals he ate only the greens boiled beside the meat. When the hunters asked, he spoke of the Dharma as occasion allowed. Fifteen years passed this way. Chan says real practice does not need a monastery: even in the most ordinary, unnoticed days one can keep the mind well.'
        }
      },
      {
        id: 'faxing', short: { zh: '風幡', en: 'Flag' }, num: '六', at: [113.25, 23.13], zoom: 10, scene: 'flag', side: 1,
        place: { zh: '廣州・法性寺', en: 'Faxing Temple, Guangzhou' },
        title: { zh: '風動幡動，仁者心動', en: 'The Wind, the Flag, and the Mind' },
        source: { zh: '時有風吹幡動，一僧曰風動，一僧曰幡動，議論不已。惠能進曰：「不是風動，不是幡動，仁者心動。」一眾駭然。', en: '“A wind was blowing the temple flag. One monk said, ‘The wind moves.’ Another said, ‘The flag moves.’ They argued without end. Huineng stepped forward: ‘Not the wind, not the flag — it is your mind that moves.’ The whole assembly was astonished.”', ref: SUTRA },
        zen: [],
        refs: WIKI(['光孝寺', '光孝寺'], ['Guangxiao Temple', 'Guangxiao_Temple']),
        facts: [
          { zh: '法性寺就是今天廣州的光孝寺。當時印宗法師正在寺中講《涅槃經》。', en: 'Faxing Temple is today’s Guangxiao Temple in Guangzhou, where Dharma Master Yinzong was lecturing on the Nirvana Sutra.' },
          { zh: '印宗聽到惠能的話，十分驚訝，請他到房裡細談，才知道他就是傳說中得了黃梅衣缽的人。', en: 'Astonished, Yinzong took Huineng aside and learned that he was the man said to have received the Huangmei robe and bowl.' },
          { zh: '寺內有一棵菩提樹，惠能就在樹下由印宗剃髮，再由智光律師授具足戒，正式出家。時為唐高宗儀鳳元年（公元 676 年），惠能約三十九歲。', en: 'Beneath the bodhi tree in the temple, Yinzong shaved Huineng’s head and the Vinaya master Zhiguang gave him full ordination, in 676, when Huineng was about thirty-nine.' },
          { zh: '禪宗常用這個公案說明：外在的動，來自內心的分別與執著。', en: 'Chan uses this case to show that the movement we see outside comes from the mind’s discriminations and attachments.' }
        ],
        text: {
          zh: '十五年後，惠能來到廣州法性寺。當時印宗法師正在講《涅槃經》，忽然風吹動了寺前的幡，兩位僧人爭論起來：一個說是風在動，一個說是幡在動。惠能走上前說：「不是風動，不是幡動，是你們的心在動。」全場驚愕。印宗請他詳談，才知道他就是黃梅衣缽的繼承人。於是在菩提樹下為他剃度，請智光律師授具足戒，惠能正式出家，從此公開弘法。',
          en: 'Fifteen years on, Huineng arrived at Faxing Temple in Guangzhou, where Dharma Master Yinzong was lecturing on the Nirvana Sutra. A wind stirred the temple flag, and two monks began to argue: one said the wind was moving, the other that the flag was moving. Huineng stepped forward: “Not the wind, not the flag — it is your minds that move.” The assembly was astonished. Yinzong asked to talk with him and learned that he was the heir of the Huangmei robe. Beneath the temple’s bodhi tree Yinzong shaved his head and the Vinaya master Zhiguang gave him full ordination. Huineng was now formally a monk and began to teach openly.'
        }
      },
      {
        id: 'caoxi', short: { zh: '壇經', en: 'Sutra' }, num: '七', at: [113.60, 24.67], zoom: 9, scene: 'platform', side: 1,
        place: { zh: '曹溪・寶林寺', en: 'Baolin Temple, Caoxi' },
        title: { zh: '曹溪開法，《壇經》傳世', en: 'Teaching at Caoxi: the Platform Sutra' },
        source: { zh: '善知識，菩提自性，本來清淨，但用此心，直了成佛。', en: '“Good friends, the Bodhi nature is originally pure. Just use this mind and you will reach Buddhahood directly.”', ref: SUTRA },
        zen: [],
        refs: WIKI(['南華禪寺', '南華禪寺'], ['Nanhua Temple', 'Nanhua_Temple']).concat(WIKI(['六祖壇經', '六祖壇經'], ['Platform Sutra', 'Platform_Sutra'])).concat(WIKI(['南宗', '南宗'], ['Southern Chan', 'Chan_Buddhism'])),
        facts: [
          { zh: '寶林寺後來改名南華寺，在今廣東韶關，是現存的六祖祖庭，寺中仍供奉傳說是惠能的真身。', en: 'Baolin Temple, later renamed Nanhua Temple (Shaoguan, Guangdong), is the Sixth Patriarch’s ancestral temple and still enshrines the body said to be Huineng’s.' },
          { zh: '《壇經》是惠能在韶州大梵寺說法時，由弟子法海等人記錄整理而成，也是中國人撰寫的佛教著作中，唯一被尊稱為「經」的一部。', en: 'The Platform Sutra records Huineng’s sermon at Dafan Temple in Shaozhou, compiled by his disciples such as Fahai. It is often said to be the only work by a Chinese author honored with the title “sutra.”' },
          { zh: '惠能初到曹溪時，遇到一位尼師無盡藏，她拿《涅槃經》請教他。惠能說：「字我不識，義就請你問。」尼師很驚訝：「連字都不識，怎麼能懂義理？」惠能答：「諸佛妙理，非關文字。」', en: 'When he first reached Caoxi, the nun Wujinzang brought him the Nirvana Sutra. “I cannot read the words; ask me about the meaning.” Surprised, she asked how one who cannot read could understand it. “The wondrous principle of the Buddhas has nothing to do with words.”' },
          { zh: '禪宗後來分出的五家七宗，都自稱出自惠能一系，所以他被尊為禪宗真正的奠基者。', en: 'The later houses of Chan all trace themselves to Huineng’s line, which is why he is honored as the true founder of Chan.' }
        ],
        text: {
          zh: '惠能回到曹溪寶林寺，前來求法的人越來越多，連韶州刺史韋璩也請他到大梵寺說法。他不識字，卻能直指經義的核心。他說：「菩提自性，本來清淨，但用此心，直了成佛。」弟子把他的說法記錄下來，就是《六祖壇經》。他一生教人的重點只有一個：不向外求，直接見到自己本來清淨的心。弟子問他：什麼是「不識字卻懂經義」？他說：「諸佛妙理，非關文字。」',
          en: 'Huineng returned to Baolin Temple at Caoxi. More and more seekers came, and even the Shaozhou prefect Wei Qu invited him to speak at Dafan Temple. Unable to read, he nonetheless pointed straight to the core of the sutras. He said, “The Bodhi nature is originally pure. Just use this mind and you will reach Buddhahood directly.” His disciples recorded his talks as the Platform Sutra. His one teaching, all his life: do not seek outside; see directly the pure mind you already have. Asked how one who cannot read can understand the sutras, he answered: “The wondrous principle of the Buddhas has nothing to do with words.”'
        }
      }
    ],
    segments: [
      { dur: 12000, zoom: 3.4, mode: 'walk', pts: [[112.23, 22.70], [112.9, 23.6], [113.6, 24.67], [114.33, 25.40], [114.9, 26.4], [115.4, 27.3], [115.86, 28.68], [115.99, 29.7], [115.89, 30.15]],
        caption: { walk: { zh: '惠能安頓好母親，向北走了三十多天，途經曹溪、大庾嶺，渡過贛江，來到湖北黃梅。', en: 'Having provided for his mother, Huineng walked north for over thirty days — past Caoxi and Dayu Ridge, across the Gan River — to Huangmei in Hubei.' } } },
      { dur: 5000, zoom: 9, mode: 'walk', pts: [[115.89, 30.15], [115.95, 29.95], [115.99, 29.73]],
        caption: { walk: { zh: '半夜三更，惠能懷抱衣缽，隨五祖悄悄離開東山寺，趕往九江驛。', en: 'Past midnight, Huineng slipped away from East Mountain Temple with the robe and bowl, following the Patriarch to Jiujiang station.' } } },
      { dur: 9500, zoom: 3.6, mode: 'walk', pts: [[115.99, 29.73], [115.5, 28.8], [115.1, 27.8], [114.6, 26.7], [114.33, 25.40]],
        caption: { walk: { zh: '渡江之後，惠能一路向南逃，翻山越嶺，兩個多月後到達大庾嶺。', en: 'Across the river, Huineng fled south over mountains for more than two months until he reached Dayu Ridge.' } } },
      { dur: 8500, zoom: 5, mode: 'walk', pts: [[114.33, 25.40], [113.9, 24.4], [113.3, 23.9], [112.9, 23.6], [112.69, 23.33]],
        caption: { walk: { zh: '惠明悟道後返回，惠能繼續南行，經曹溪後再往西南，避往四會。', en: 'After Huiming turned back awakened, Huineng went on south, passed Caoxi, then turned southwest to hide at Sihui.' } } },
      { dur: 6500, zoom: 8, mode: 'wait', pts: null, kicker: { zh: '十五年', en: 'Fifteen years' }, title: { zh: '默默修行', en: 'Quiet Practice' },
        caption: { wait: { zh: '十五年過去，因緣成熟，惠能離開獵人隊，前往廣州。', en: 'Fifteen years passed. When the time was ripe, Huineng left the hunters for Guangzhou.' } } },
      { dur: 7500, zoom: 6, mode: 'walk', pts: [[113.25, 23.13], [113.3, 23.9], [113.6, 24.67]],
        caption: { walk: { zh: '在法性寺剃度之後，惠能回到曹溪寶林寺，開始公開說法。', en: 'Ordained at Faxing Temple, Huineng returned to Baolin Temple at Caoxi and began to teach openly.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'huineng');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [111.0, 24.0], zh: '嶺南', en: 'LINGNAN', cls: 'realm', ch: 'huineng' },
    { at: [112.0, 26.2], zh: '五嶺', en: 'Wuling', cls: 'mtn', ch: 'huineng' },
    { at: [115.86, 28.68], zh: '洪州', en: 'Hongzhou', cls: 'city', ch: 'huineng' },
    { at: [116.7, 29.4], zh: '鄱陽湖', en: 'Poyang Lake', cls: 'river', ch: 'huineng' }
  );
})();
