/* 名言佳句（Sayings）— 資料與「名言集」頁面
 * 所有古文引文皆已對照維基文庫原典（《景德傳燈錄》《六祖壇經》《長阿含經》《五燈會元》《續高僧傳》《最上乘論》等）。
 * 悟覺妙天禪師的句子取自愛傳媒（蕃新聞）《禪師說禪》專欄（禪天下雜誌提供），逐字摘錄。 */
(function () {
  const S = (zh, en) => ({ zh: zh, en: en });
  const LAMP3 = S('《景德傳燈錄》卷三', 'Transmission of the Lamp, fasc. 3');
  const PLAT = (p) => S('《六祖壇經・' + p + '》', 'Platform Sutra, “' + ({ 行由品: 'Autobiography', 般若品: 'Prajna', 疑問品: 'Questions', 定慧品: 'Samadhi and Prajna' })[p] + '” chapter');
  const WEN = 'https://n.yam.com/Article/';
  const MIAO_BY = S('悟覺妙天禪師・愛傳媒《禪師說禪》', 'Master Wujue Miaotian, “Chan Master Speaks on Chan,” yam.com');

  const MASTERS = [
    {
      id: 'buddha', name: S('釋迦牟尼佛', 'Shakyamuni Buddha'), tag: S('禪宗之源', 'Source of Chan'),
      items: [
        { zh: '當自熾燃，熾燃於法，勿他熾燃；當自歸依，歸依於法，勿他歸依。', en: 'Be a lamp unto yourselves; let the Dharma be your lamp, not another. Take refuge in yourselves and in the Dharma, not in another.', src: S('《長阿含經・遊行經》（佛陀臨涅槃前對阿難說）', 'Dirghagama, Youxing jing (to Ananda before his parinirvana)') },
        { zh: '吾有正法眼藏，涅槃妙心，實相無相，微妙法門，不立文字，教外別傳，付囑摩訶迦葉。', en: 'I hold the treasury of the true Dharma eye, the wondrous mind of nirvana, the formless reality — a subtle gate beyond words, transmitted outside the scriptures. I entrust it to Mahakashyapa.', src: S('《五燈會元》卷一（靈山拈花微笑）', 'Wudeng huiyuan, fasc. 1 (the Flower Sermon)') },
        { zh: '奇哉！奇哉！此諸眾生云何具有如來智慧，愚癡迷惑，不知不見？', en: 'How wondrous! How can these beings possess the Tathagata’s wisdom and yet remain foolish and deluded, neither knowing nor seeing it?', src: S('《大方廣佛華嚴經・如來出現品》', 'Avatamsaka Sutra, “Appearance of the Tathagata”') },
        { zh: '天上天下，唯我為尊，三界皆苦，吾當安之。', en: 'Above and below the heavens, I alone am the honored one; the three realms are all suffering — I shall bring them peace.', src: S('《修行本起經》（誕生時所說）', 'Xiuxing benqi jing (said at his birth)') }
      ]
    },
    {
      id: 'kasyapa', name: S('摩訶迦葉', 'Mahakasyapa'), tag: S('西天初祖', 'First Indian Patriarch'),
      items: [
        { zh: '世尊在靈山會上，拈花示眾。是時眾皆默然，唯迦葉尊者破顏微笑。', en: 'On Vulture Peak the World-Honored One held up a flower; all fell silent, and only the venerable Kasyapa broke into a smile.', src: S('《五燈會元》卷一', 'Wudeng huiyuan, fasc. 1') },
        { zh: '吾以正法眼藏密付於汝，汝當護持，傳付將來。', en: 'I secretly entrust the treasury of the true Dharma eye to you; guard it and hand it on to the future.', src: S('《五燈會元》卷一（世尊於多子塔前對迦葉所說）', 'Wudeng huiyuan, fasc. 1 (the Buddha to Kasyapa at the Bahuputra stupa)') },
        { zh: '法法本來法，無法無非法。何於一法中，有法有不法？', en: 'The Dharma of all dharmas is originally Dharma; no-Dharma is no non-Dharma. How, within one Dharma, is there Dharma and not-Dharma?', src: S('《五燈會元》卷一（迦葉付法偈）', 'Wudeng huiyuan, fasc. 1 (Kasyapa’s transmission verse)') },
        { zh: '倒卻門前剎竿著！', en: 'Knock down the flagpole at the gate!', src: S('《五燈會元》卷一（答阿難問）', 'Wudeng huiyuan, fasc. 1 (to Ananda’s question)') }
      ]
    },
    {
      id: 'ananda', name: S('阿難', 'Ananda'), tag: S('西天二祖', 'Second Indian Patriarch'),
      items: [
        { zh: '入城時見一攢樂人作舞，出城總見無常。', en: 'Going into the city I saw a troupe of dancers; coming out, I saw only impermanence.', src: S('《五燈會元》卷一', 'Wudeng huiyuan, fasc. 1') },
        { zh: '如是我聞。一時佛住某處說某經教。', en: 'Thus have I heard. At one time the Buddha dwelt in such a place and taught such a sutra.', src: S('《五燈會元》卷一（阿難結集時所宣）', 'Wudeng huiyuan, fasc. 1 (as Ananda recited at the council)') },
        { zh: '本來付有法，付了言無法。各各須自悟，悟了無無法。', en: 'Originally the Dharma was given; once given, we say there is no Dharma. Each must awaken for themselves; once awake, there is no “no-Dharma” either.', src: S('《五燈會元》卷一（付商那和修偈）', 'Wudeng huiyuan, fasc. 1 (verse to Shanavasa)') },
        { zh: '我若偏向一國，諸國爭競，無有是處，應以平等度諸有情。', en: 'If I favored one country, the others would quarrel — that cannot be; I should liberate all beings equally.', src: S('《五燈會元》卷一（入滅前）', 'Wudeng huiyuan, fasc. 1 (before his passing)') }
      ]
    },
    {
      id: 'dharma', name: S('菩提達摩', 'Bodhidharma'), tag: S('初祖', 'First Patriarch'),
      items: [
        { zh: '吾本來茲土，傳法救迷情。一花開五葉，結果自然成。', en: 'I came to this land to transmit the Dharma and rescue the deluded. One flower opens five petals; the fruit ripens of itself.', src: S('《景德傳燈錄》卷三（傳法偈）', 'Transmission of the Lamp, fasc. 3 (his transmission verse)') },
        { zh: '廓然無聖。', en: 'Vast emptiness — nothing holy.', src: S('《景德傳燈錄》卷三（答梁武帝）', 'Transmission of the Lamp, fasc. 3 (to Emperor Wu)') },
        { zh: '並無功德。', en: 'No merit at all.', src: S('《景德傳燈錄》卷三（答梁武帝）', 'Transmission of the Lamp, fasc. 3 (to Emperor Wu)') },
        { zh: '將心來，與汝安。', en: 'Bring me your mind, and I will pacify it for you.', src: S('《景德傳燈錄》卷三（答慧可）', 'Transmission of the Lamp, fasc. 3 (to Huike)') }
      ]
    },
    {
      id: 'huike', name: S('二祖慧可', 'Huike'), tag: S('二祖', 'Second Patriarch'),
      items: [
        { zh: '我心未寧，乞師與安。……覓心了不可得。', en: '“My mind is not at peace; please pacify it.” … “I search for my mind and cannot find it.”', src: S('《景德傳燈錄》卷三（慧可與達摩）', 'Transmission of the Lamp, fasc. 3 (Huike and Bodhidharma)') },
        { zh: '是心是佛，是心是法，法佛無二，僧寶亦然。', en: 'This mind is Buddha, this mind is Dharma; Dharma and Buddha are not two, nor is the Sangha.', src: S('《景德傳燈錄》卷三（答僧璨）', 'Transmission of the Lamp, fasc. 3 (to Sengcan)') },
        { zh: '迷摩尼謂瓦礫，豁然自覺是真珠。無明智慧等無異，當知萬法即皆如。', en: 'Mistaking the jewel for a pebble — then suddenly seeing it is a true pearl. Ignorance and wisdom are no different; know that all things are just as they are.', src: S('《景德傳燈錄》卷三（回向居士書）', 'Transmission of the Lamp, fasc. 3 (reply to the layman Xiang)') },
        { zh: '我自調心，何關汝事。', en: 'I am tuning my own mind. What is it to you?', src: S('《景德傳燈錄》卷三', 'Transmission of the Lamp, fasc. 3') }
      ]
    },
    {
      id: 'sengcan', name: S('僧璨', 'Sengcan'), tag: S('三祖', 'Third Patriarch'),
      items: [
        { zh: '至道無難，唯嫌揀擇。但莫憎愛，洞然明白。', en: 'The Great Way is not difficult; only avoid picking and choosing. Without hate or love, all is clear and bright.', src: S('《信心銘》（傳為僧璨作）', 'Xinxin ming (traditionally ascribed to Sengcan)') },
        { zh: '毫釐有差，天地懸隔。', en: 'A hair’s breadth of difference, and heaven and earth are set apart.', src: S('《信心銘》（傳為僧璨作）', 'Xinxin ming (traditionally ascribed to Sengcan)') },
        { zh: '誰縛汝？', en: 'Who binds you?', src: S('《五燈會元》卷一（問道信）', 'Wudeng huiyuan, fasc. 1 (to Daoxin)') },
        { zh: '信心不二，不二信心。言語道斷，非去來今。', en: 'Faith and mind are not two; not-two is faith and mind. The path of words is cut off — not past, not future, not present.', src: S('《信心銘》（傳為僧璨作）', 'Xinxin ming (traditionally ascribed to Sengcan)') }
      ]
    },
    {
      id: 'daoxin', name: S('道信', 'Daoxin'), tag: S('四祖', 'Fourth Patriarch'),
      items: [
        { zh: '夫百千法門同歸方寸，河沙妙德總在心源。', en: 'A hundred thousand gates of the Dharma return to this one inch of mind; the countless virtues, like the sands of the Ganges, all lie in the source of the mind.', src: S('《景德傳燈錄》卷四（四祖對牛頭法融說）', 'Transmission of the Lamp, fasc. 4 (to Niutou Farong)') },
        { zh: '境緣無好醜，好醜起於心。心若不強名，妄情從何起？', en: 'Circumstances are neither fair nor foul; fair and foul arise in the mind. If the mind does not force names, where would false feeling arise?', src: S('《景德傳燈錄》卷四（四祖對牛頭法融說）', 'Transmission of the Lamp, fasc. 4 (to Niutou Farong)') },
        { zh: '華種有生性，因地華生生。大緣與性合，當生生不生。', en: 'Flower seeds have the nature to live; on the ground the flowers keep growing. When great conditions join the nature, there is growth that does not grow.', src: S('《五燈會元》卷一（付弘忍偈）', 'Wudeng huiyuan, fasc. 1 (verse to Hongren)') },
        { zh: '一切諸法，悉皆解脫。汝等各自護念，流化未來。', en: 'All dharmas are, without exception, liberated. Each of you, protect and spread it into the future.', src: S('《五燈會元》卷一（臨終遺誡）', 'Wudeng huiyuan, fasc. 1 (last instruction)') }
      ]
    },
    {
      id: 'hongren', name: S('五祖弘忍', 'Hongren'), tag: S('五祖', 'Fifth Patriarch'),
      items: [
        { zh: '守心第一。此守心者，乃是涅槃之根本，入道之要門，十二部經之宗，三世諸佛之祖。', en: 'Guarding the mind comes first. This guarding is the root of nirvana, the gateway into the Way, the source of the twelve divisions of scripture, and the ancestor of all Buddhas of the three times.', src: S('《最上乘論》（傳為弘忍所作）', 'Treatise on the Supreme Vehicle (attributed to Hongren)') },
        { zh: '世人生死事大，汝等終日只求福田，不求出離生死苦海，自性若迷，福何可救？', en: 'Birth and death are the great matter, yet all day you seek only merit and not release from the sea of suffering. If the self-nature is deluded, how can merit save you?', src: PLAT('行由品') },
        { zh: '衣為爭端，止汝勿傳。', en: 'The robe is a cause of contention; let it end with you and pass it on no further.', src: PLAT('行由品') },
        { zh: '大師常勸僧俗，但持《金剛經》，即自見性，直了成佛。', en: 'The Master often urges monks and laypeople: just uphold the Diamond Sutra, and you will see your nature and reach Buddhahood directly.', src: S('《六祖壇經・行由品》（客人轉述）', 'Platform Sutra, “Autobiography” (as reported by a traveler)') }
      ]
    },
    {
      id: 'huineng', name: S('六祖惠能', 'Huineng'), tag: S('六祖', 'Sixth Patriarch'),
      items: [
        { zh: '菩提本無樹，明鏡亦非臺，本來無一物，何處惹塵埃。', en: 'Bodhi has no tree at all, nor has the mirror a stand; originally not a single thing — where could dust alight?', src: PLAT('行由品') },
        { zh: '應無所住而生其心。', en: 'Let the mind arise without dwelling on anything.', src: S('《金剛經》，惠能聞而開悟（見《壇經・行由品》）', 'Diamond Sutra, on which Huineng awakened (Platform Sutra, “Autobiography”)') },
        { zh: '不是風動，不是幡動，仁者心動。', en: 'Not the wind, not the flag — it is your mind that moves.', src: PLAT('行由品') },
        { zh: '迷時師度，悟了自度。', en: 'When deluded, a teacher ferries you; once awakened, you ferry yourself.', src: PLAT('行由品') },
        { zh: '不思善，不思惡，正與麼時，那個是明上座本來面目？', en: 'Not thinking of good, not thinking of evil — at just this moment, what is your original face, Venerable Ming?', src: PLAT('行由品') },
        { zh: '前念迷，即凡夫；後念悟，即佛。', en: 'A deluded thought and one is an ordinary person; an awakened thought and one is a Buddha.', src: PLAT('般若品') },
        { zh: '佛法在世間，不離世間覺；離世覓菩提，恰如求兔角。', en: 'The Dharma is in the world and is not apart from worldly awakening; seeking bodhi apart from the world is like seeking a rabbit’s horn.', src: PLAT('般若品') },
        { zh: '我此法門，從上以來，先立無念為宗，無相為體，無住為本。', en: 'In this teaching of mine, from the first, no-thought is the principle, no-form the substance, no-dwelling the foundation.', src: PLAT('定慧品') },
        { zh: '心平何勞持戒？行直何用修禪？', en: 'With a level mind, what need of precepts? With upright conduct, what need of meditation?', src: PLAT('疑問品') }
      ]
    }
  ];

  const MIAO_QUOTES = [
    { id: 'q1', zh: '修行要能夠見性，要見性，第一步就是要清淨；要清淨，必須要能夠放下，而且是真正地放下。', en: 'To see your nature, the first step is purity; for purity you must let go — truly let go.', url: WEN + '20250721474508', title: '智境同輒　證佛之道' },
    { id: 'q2', zh: '見性（見到自性）不是成佛，只是你找到了這條明路而已，至於你要不要走上這條路，那是你的事。', en: 'Seeing your nature is not becoming a Buddha; you have only found the bright road. Whether you walk it is up to you.', url: WEN + '20250721474508', title: '智境同輒　證佛之道' },
    { id: 'q3', zh: '智慧到哪裡，境界就到哪裡。', en: 'Wherever wisdom goes, the realm goes too.', url: WEN + '20250721474508', title: '智境同輒　證佛之道', note: S('他說的「智境同輒」：人和車輪一樣，要同步。', 'His “wisdom and realm in step”: like the wheels of a cart, the two must move together.') },
    { id: 'q4', zh: '修行人要自覺。什麼是自覺？就是自己要覺悟。', en: 'A practitioner must be self-aware. What is self-awareness? It is to awaken oneself.', url: WEN + '20250619208630', title: '修行人應有的自覺與自悟' },
    { id: 'q5', zh: '做到當下開悟、當下放下，放下以後就解脫了，放不下就不能解脫。', en: 'Awaken in the moment, let go in the moment; once you let go you are free — if you cannot let go you cannot be free.', url: WEN + '20250619208630', title: '修行人應有的自覺與自悟' },
    { id: 'q6', zh: '其實修行最重要的是清淨，並不在於看到什麼。', en: 'What matters most in practice is purity, not what you happen to see.', url: WEN + '20240321124034', title: '緣起性空　放下執著' },
    { id: 'q7', zh: '不要把佛學當作是佛法，否則即使修一輩子，也不可能成就。', en: 'Do not mistake Buddhist studies for the Buddha’s Dharma, or even a lifetime of practice will not bring accomplishment.', url: WEN + '20260314997128', title: '佛學與佛法　原來大不同' },
    { id: 'q8', zh: '生活中，要做到隨時放下、隨時自在，如果不能自在，表示心裡還有心結，還有事情沒有了結。', en: 'In daily life, be able to let go and be at ease at any moment; if you cannot, some knot remains in the heart, some matter unfinished.', url: WEN + '20240323995310', title: '斷滅四相　自見真心' }
  ];


  const TIMELINE = [
    { h: S('早年與訪道', 'Early years and seeking'), items: [
      S('1934 年生於臺灣屏東潮州。從小經歷戰爭，母親早逝，因此很早就感受到人生的空苦無常。', 'Born in 1934 in Chaozhou, Pingtung, Taiwan. He knew war as a child and lost his mother early, and so felt the emptiness and impermanence of life from a young age.'),
      S('畢業於國防管理學院，曾在文化大學政治研究所研究。', 'He graduated from the National Defense Management College and studied at the Graduate Institute of Political Science, Chinese Culture University.'),
      S('40 歲從軍職退休（約 1974 年），開始遍訪各宗教尋找師父。', 'At forty he retired from military service (around 1974) and began visiting many religions in search of a teacher.'),
      S('官方資料說，他發願證無上菩提，蒙觀世音菩薩指引，遇到禪宗第 84 代敬哉禪師，拜入門下。', 'Official accounts say that, having vowed to realize supreme bodhi, he was guided by Avalokiteshvara and met the 84th-generation Chan master Jingzai, becoming his student.'),
      S('官方資料說，他經八年苦修，才得到師父付囑「佛心印」；教團網站記為 1981 年 2 月 19 日。', 'Official accounts say that after eight years of arduous practice he received his teacher’s transmission of the “Buddha mind-seal”; the association’s site dates this to 19 February 1981.')
    ] },
    { h: S('傳承與弘法', 'Transmission and teaching'), items: [
      S('禪師自述，他承接了「釋迦如來一脈相傳」的法脈，成為禪宗第 85 代宗師。', 'By his own account he inherited the lineage “passed down from Shakyamuni Tathagata” and became the 85th Chan master.'),
      S('1995 年，在桃園縣立體育場舉辦「印心禪法見性成佛」大法會，官方說有 6 萬多人參加。', 'In 1995 he held the “Mind-seal Chan: Seeing Nature and Becoming Buddha” assembly at the Taoyuan County Stadium; official accounts say over 60,000 attended.'),
      S('1999 年，成立臺灣禪宗佛教會（禪教會）。', 'In 1999 the Taiwan Chan Buddhist Association was founded.'),
      S('1999 年受邀擔任嵩山少林寺副住持；2004 年少林寺住持釋永信贈「少林鎮山寶劍」，官方稱之為兩岸法脈接軌；2007 年他率領千名弟子到少林寺「歸山拜祖」。', 'In 1999 he was invited to serve as deputy abbot of Shaolin Temple on Mount Song; in 2004 Abbot Shi Yongxin presented him the “Shaolin Sword”, which the association calls the reconnection of the lineage across the Strait; in 2007 he led a thousand disciples to Shaolin to “pay homage to the ancestors”.')
    ] },
    { h: S('領袖會', 'The Leaders’ Association'), items: [
      S('2000 年 6 月 3 日成立「世界領袖教育基金會」（領袖會）；官方介紹的全名是「世界領袖教育和平基金會」，兩個名稱都有出現。', 'On 3 June 2000 the World Leaders Education Foundation was founded; its official introduction gives the full name as the World Leaders Education and Peace Foundation — both names appear.'),
      S('創立宗旨是培育具有「宗教家慈悲、政治家智慧」的「內聖外王」真領袖，信念是「偉大、完美、博愛、和平」。', 'Its aim is to cultivate true leaders of “inner sage, outer king” with “a religious person’s compassion and a statesman’s wisdom”; its creed is “greatness, perfection, universal love, peace”.'),
      S('2025 年滿 25 週年，報導說與會者超過五萬人。', 'It marked its 25th anniversary in 2025; reports say more than 50,000 people have taken part.')
    ] },
    { h: S('二戰超度法會', 'The World War memorial assembly'), items: [
      S('1999 年 12 月 12 日，在桃園巨蛋舉辦「迎接二十一世紀世界和平大法會」。', 'On 12 December 1999, the “Welcoming the 21st Century: World Peace Assembly” was held at the Taoyuan Arena.'),
      S('他在法會中為 921 大地震，以及二十世紀所有因戰爭罹難的亡靈舉行超度儀式。', 'At the assembly he performed a rite of deliverance for the victims of the 921 earthquake and for all who died in the wars of the twentieth century.'),
      S('出席人數：官方網站寫約兩萬多人，另一個資料寫三萬人，本站未能核實。', 'Attendance: the association’s site says over 20,000, another source says 30,000; this site could not verify either.')
    ] },
    { h: S('公益、海外與其他', 'Charity, overseas and more'), items: [
      S('公益：921 地震賑災並在埔里設大梵寺、八八風災捐款、SARS 期間捐贈口罩、送平安米給偏鄉。', 'Charity: relief after the 921 earthquake, with Dafan Temple founded in Puli; donations after Typhoon Morakot; masks donated during SARS; “peace rice” for remote areas.'),
      S('到看守所教受刑人禪修。', 'He taught meditation to inmates in detention centres.'),
      S('海外：1994 年在紐西蘭成立第一個海外道場「印心禪園」，也赴美國、日本、俄羅斯等地交流。', 'Overseas: in 1994 he founded the first overseas centre, the Heart-Seal Chan Garden in New Zealand, and visited the USA, Japan, Russia and elsewhere.'),
      S('2011 年成立釋迦牟尼佛救世基金會，提出「地球佛國」理念。', 'In 2011 he founded the Shakyamuni Buddha Salvation Foundation and put forward the idea of the “Buddha-land on Earth”.'),
      S('2012 年在臺北小巨蛋舉辦萬人大法會。', 'In 2012 he held a ten-thousand-person assembly at the Taipei Arena.')
    ] }
  ];

  const MIAO = {
    id: 'miaotian', name: S('悟覺妙天禪師', 'Master Wujue Miaotian'), tag: S('當代禪師', 'Contemporary Chan master'),
    profile: [
      S('1934 年生於臺灣屏東潮州，依其官方報導，自釋迦牟尼佛算起為禪宗第 85 代宗師；自達摩算起為中華禪宗第 58 代；自六祖惠能門下臨濟宗一脈算起，為臨濟宗第 48 代。', 'Born in 1934 in Chaozhou, Pingtung, Taiwan. By his official reports he is the 85th Chan master counting from Shakyamuni, the 58th in China from Bodhidharma, and the 48th of the Linji line descending from Huineng.'),
      S('他的開示由禪天下雜誌整理，在愛傳媒（蕃新聞）《禪師說禪》專欄長期刊出。主題多圍繞「印心佛法」「印心禪法」：見性要先清淨，清淨要能放下；也常提醒要分辨「佛學」與「佛法」，並談禪定的身定、意定、心定。', 'His talks are edited by Zen Cosmos magazine and run in the “Chan Master Speaks on Chan” column on yam.com. They centre on “mind-seal Dharma” and “mind-seal Chan”: seeing nature requires purity, and purity requires letting go. He also stresses telling Buddhist studies from the Buddha’s Dharma, and teaches the three samadhis of body, thought and mind.')
    ],
    note: S('以上簡介與事蹟依其官方報導、教團網站與《禪師說禪》專欄整理，代數、年份與人數皆為官方或自述說法，本站未獨立查證。', 'This profile and chronology follow his official reports, the association’s websites and his column; generation counts, dates and attendance are official or self-reported figures not independently verified by this site.'),
    links: [
      { title: '認識悟覺妙天禪師（聖光禪教會，含歷年大事記）', url: 'https://www.zen.org.tw/tlife/aboutmaster/' },
      { title: '世界領袖教育和平基金會成立 25 週年（禪天下）', url: 'https://www.zencosmos.com.tw/2026/01/hot-topic/special-feature/55964/' },
      { title: '《禪師說禪》專欄（蕃新聞）', url: 'https://n.yam.com/Article/20250721474508' },
      { title: '禪天下雜誌', url: 'https://www.zencosmos.com.tw/' },
      { title: '悟覺妙天師父【印心佛法】官方頻道（YouTube）', url: 'https://www.youtube.com/@thebuddhachan' }
    ],
    timeline: TIMELINE,
    items: MIAO_QUOTES
  };

  /* A：每篇結尾附的禪師開示（對應章節） */
  const PICK = { buddha: 'q1', kasyapa: 'q7', ananda: 'q4', sengcan: 'q8', daoxin: 'q3', dharma: 'q2', huike: 'q8', hongren: 'q6', huineng: 'q5' };

  window.QUOTES = { masters: MASTERS, miaotian: MIAO, pick: PICK };
  window.quotesBlock = function (chId) {
    const m = MASTERS.find((x) => x.id === chId);
    if (!m) return '';
    const bi = (o, tag) => '<' + tag + ' class="zh">' + o.zh + '</' + tag + '><' + tag + ' class="en">' + o.en + '</' + tag + '>';
    const pq = MIAO_QUOTES.find((q) => q.id === PICK[chId]);
    let h = '<details class="more sayings" open><summary>' + bi(S('名言佳句', 'Famous sayings'), 'span') + '</summary>';
    h += m.items.map((q) => '<figure class="say-item"><blockquote class="zh">「' + q.zh + '」</blockquote><blockquote class="en">“' + q.en + '”</blockquote><figcaption>— ' + bi(q.src, 'span') + '</figcaption></figure>').join('');
    if (pq) h += '<figure class="say-item say-miao"><p class="say-tag">' + bi(S('禪師開示', 'Master Miaotian'), 'span') + '</p><blockquote class="zh">「' + pq.zh + '」</blockquote><blockquote class="en">“' + pq.en + '”</blockquote><figcaption>— <a href="' + pq.url + '" target="_blank" rel="noopener">' + pq.title + ' ↗</a></figcaption></figure>';
    h += '<p class="say-all"><a href="#" data-open-quotes>' + bi(S('📜 看所有名言與妙天禪師開示', 'All sayings and Master Miaotian’s teachings'), 'span') + '</a></p></details>';
    return h;
  };

  /* B：名言集頁面 */
  const root = document.getElementById('quotes');
  if (!root) return;
  const scroll = root.querySelector('.qt-scroll');
  const nav = root.querySelector('.qt-nav');
  const bi2 = (o, tag) => '<' + tag + ' class="zh">' + o.zh + '</' + tag + '><' + tag + ' class="en">' + o.en + '</' + tag + '>';
  let built = false;
  function build() {
    if (built) return; built = true;
    const all = MASTERS.concat([MIAO]);
    nav.innerHTML = all.map((m) => '<button data-go="qs_' + m.id + '">' + bi2(m.name, 'span') + '</button>').join('');
    let h = '';
    MASTERS.forEach((m) => {
      h += '<section class="qt-sec" id="qs_' + m.id + '"><h3>' + bi2(m.name, 'span') + '<em>' + bi2(m.tag, 'span') + '</em></h3>' +
        m.items.map((q) => '<figure class="say-item"><blockquote class="zh">「' + q.zh + '」</blockquote><blockquote class="en">“' + q.en + '”</blockquote><figcaption>— ' + bi2(q.src, 'span') + '</figcaption></figure>').join('') + '</section>';
    });
    h += '<section class="qt-sec qt-miao" id="qs_miaotian"><h3>' + bi2(MIAO.name, 'span') + '<em>' + bi2(MIAO.tag, 'span') + '</em></h3>' +
      '<p class="qt-profile"><a href="#" data-open-ch="miaotian">' + bi2(S('📜 他的事蹟與介紹，請看篇章「第85代 悟覺妙天禪師」', 'His story is in the chapter “85th: Master Wujue Miaotian”'), 'span') + '</a></p>' +
      '<h4>' + bi2(S('禪師說禪・名言', 'Sayings from his column'), 'span') + '</h4>' +
      MIAO.items.map((q) => '<figure class="say-item"><blockquote class="zh">「' + q.zh + '」</blockquote><blockquote class="en">“' + q.en + '”</blockquote>' +
        (q.note ? '<p class="note">' + bi2(q.note, 'span') + '</p>' : '') +
        '<figcaption>— <a href="' + q.url + '" target="_blank" rel="noopener">' + q.title + ' ↗</a> · ' + bi2(MIAO_BY, 'span') + '</figcaption></figure>').join('') +
      '<ul class="qt-links">' + MIAO.links.map((l) => '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.title + ' ↗</a></li>').join('') + '</ul>' +
      '<p class="note">' + bi2(MIAO.note, 'span') + '</p></section>';
    scroll.innerHTML = h;
  }
  function open(id) {
    build();
    root.hidden = false;
    document.body.classList.add('lin-open');
    scroll.scrollTop = 0;
    if (id) { const el = document.getElementById('qs_' + id); if (el) scroll.scrollTop = el.offsetTop - 8; }
  }
  function close() { root.hidden = true; document.body.classList.remove('lin-open'); }
  nav.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; const el = document.getElementById(b.dataset.go); if (el) scroll.scrollTo({ top: el.offsetTop - 8, behavior: 'smooth' }); });
  root.querySelector('.qt-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !root.hidden) close(); });
  ['quotesBtn', 'finaleQuotes'].forEach((id) => { const b = document.getElementById(id); if (b) b.addEventListener('click', (e) => { e.preventDefault(); open(); }); });
  document.addEventListener('click', (e) => { const g = e.target.closest('[data-open-ch]'); if (g) { e.preventDefault(); location.hash = '#ch=' + g.dataset.openCh; location.reload(); return; } const a = e.target.closest('[data-open-quotes]'); if (a) { e.preventDefault(); open(); } });
  window.openQuotes = open;
  if (/[?&]quotes/.test(location.search)) open(/[?&]quotes=(\w+)/.test(location.search) ? RegExp.$1 : null);
})();
