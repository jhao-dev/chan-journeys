/* 阿難尊者篇（Ananda chapter）— 以禪宗角度敘述
 * 引文取自《五燈會元》卷一（維基文庫）。座標 [經度, 緯度]；恆河中流位置為約略。第 1–4 站同在王舍城一帶，地圖上共用同一標記。 */
(function () {
  const WU = { zh: '《五燈會元》卷一', en: 'Wudeng huiyuan (Compendium of Five Lamps), fasc. 1' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];
  const AREFS = WIKI(['阿難', '阿難'], ['Ānanda', 'Ānanda']);
  const NOTE = { zh: '這些傳承故事出自宋代前後的禪宗典籍，屬禪宗自己的傳承說法，早期印度經典不一定有。', en: 'These transmission stories come from Chan texts around the Song dynasty and are Chan’s own account; early Indian sources may not have them.' };

  const chapter = {
    id: 'ananda', ready: true,
    name: { zh: '阿難', en: 'Ananda' },
    role: { zh: '西天二祖・多聞第一', en: 'Second Indian Patriarch · Foremost in Hearing' },
    fig: { robe: '#a8864a', band: '#d9c58a', fold: '#5a4220', staff: false, beard: false },
    intro: {
      v: '西天二祖', seal: '阿難',
      en: 'Ananda, Second Indian Patriarch',
      sub: { zh: '從王舍城到恆河中流 · 佛陀的侍者，如何接下心法', en: 'From Rajagriha to the middle of the Ganges — how the Buddha’s attendant received the mind-teaching' },
      note: { zh: '依《五燈會元》等禪宗典籍；傳承故事屬禪宗傳統說法', en: 'Told from Chan texts such as the Wudeng huiyuan; the transmission story is Chan tradition' }
    },
    finale: {
      zh: '阿難把心法傳給商那和修，身體分成四份供養。禪宗的法脈，就這樣一代傳一代，傳到第二十八祖達摩。',
      en: 'Ananda passed the teaching to Shanavasa and his body was divided into four parts for veneration. Chan’s line went on, generation to generation, to the twenty-eighth patriarch, Bodhidharma.'
    },
    nextChapter: { id: 'dharma', label: { zh: '接續下一篇：達摩東來', en: 'Next chapter: Bodhidharma’s Journey East' } },
    nextHint: { zh: '下一篇：達摩東來 — 心法傳到中國', en: 'Next: Bodhidharma’s Journey East — the teaching reaches China' },
    stations: [
      {
        id: 'birth', short: { zh: '出生', en: 'Birth' }, num: '一', at: [85.42, 25.03], zoom: 110, scene: 'anbirth', side: 1,
        place: { zh: '王舍城', en: 'Rajagriha' },
        title: { zh: '成道夜生，名叫慶喜', en: 'Born on the Night of Awakening' },
        source: { zh: '王舍城人也。姓剎利帝，父斛飯王，實佛之從弟也。梵語阿難陀，此云慶喜，亦云歡喜。如來成道夜生，因為之名。多聞博達，智慧無礙。', en: '“A man of Rajagriha, of the Kshatriya clan; his father was King Suklodana, in fact a cousin of the Buddha. In Sanskrit, Ananda — ‘joy,’ also ‘delight.’ He was born on the night the Tathagata attained the Way, and so was given this name. Learned in hearing and wide in knowledge, his wisdom was unobstructed.”', ref: WU, note: NOTE },
        zen: [],
        refs: AREFS,
        facts: [
          { zh: '「阿難陀」的意思是「慶喜」或「歡喜」。《五燈會元》說他在佛陀成道的那一夜出生，所以取了這個名字。', en: 'Ananda means “joy.” The Wudeng huiyuan says he was born the night of the Buddha’s awakening and named accordingly.' },
          { zh: '這部書說他是佛陀的堂弟，父親是斛飯王。不同典籍對他的出生地、家世說法不完全一樣。', en: 'It says he was the Buddha’s cousin, son of King Suklodana; sources differ on details of his birthplace and family.' },
          { zh: '他以「多聞第一」著稱，記性特別好。', en: 'He is known as foremost in hearing, with an exceptional memory.' }
        ],
        text: {
          zh: '阿難在佛陀成道的那一夜出生，所以名叫阿難陀，意思是「慶喜」。他是佛陀的堂弟，從小聰明，聽過的話都能記住。後來他出家，成為佛陀的弟子。',
          en: 'Ananda was born on the very night the Buddha awakened, and so was named “joy.” A cousin of the Buddha, he was clever from childhood and remembered all he heard. He later left home and became the Buddha’s disciple.'
        }
      },
      {
        id: 'attendant', short: { zh: '侍者', en: 'Attendant' }, num: '二', at: [85.42, 25.03], zoom: 110, scene: 'anattend', side: -1,
        place: { zh: '王舍城一帶', en: 'Near Rajagriha' },
        title: { zh: '佛陀的侍者，多聞第一', en: 'The Buddha’s Attendant' },
        source: { zh: '世尊以為總持第一，嘗所讚嘆。加以宿世有大功德，受持法藏，如水傳器，佛乃命為侍者。尊者一日白佛言：「今日入城，見一奇特事。」佛曰：「見何奇特事？」者曰：「入城時見一攢樂人作舞，出城總見無常。」', en: '“The World-Honored One regarded him as foremost in holding all, and often praised him. With great merit from past lives, he received and kept the treasury of the Dharma like water poured from vessel to vessel, and the Buddha made him his attendant. One day he said to the Buddha: ‘Today I went into the city and saw something remarkable.’ ‘What did you see?’ ‘Going in, I saw a troupe of dancers; coming out, I saw only impermanence.’”', ref: WU },
        zen: [],
        refs: AREFS,
        facts: [
          { zh: '佛陀回答說，他前一天入城也看到奇特的事：「入城時見樂人作舞，出城時亦見樂人作舞。」意思是：同樣的情景，在不同的心看來不一樣。', en: 'The Buddha replied that the day before he too had seen something remarkable: dancers going in, dancers still going out. The same scene looks different to a different mind.' },
          { zh: '「如水傳器」是說他聽到的佛法，像把水從一個容器倒進另一個，一點也沒有灑出去。', en: '“Like water poured from vessel to vessel” says that what he heard, he kept entire, spilling nothing.' },
          { zh: '傳統說他侍奉佛陀約二十五年。這個數字不見於這段引文，屬後世通說。', en: 'Tradition says he served the Buddha about twenty-five years; this figure is not in this passage and is a later common account.' }
        ],
        text: {
          zh: '阿難聽過的佛法一個字也不漏，佛陀便請他當侍者。有一天他說：「今天進城看見一群人跳舞，出城的時候，我只看到無常。」佛陀回答：「我昨天進城也看到一件奇特的事：進城時看到人跳舞，出城時也還是看到人跳舞。」同一個世界，看的心不同，看到的就不同。',
          en: 'Ananda let no word of the Dharma slip, so the Buddha made him his attendant. One day he said: “Going into the city I saw dancers; coming out, I saw only impermanence.” The Buddha replied: “Yesterday I saw something remarkable too: dancers going in, and dancers still going out.” Same world, different minds, different seeing.'
        }
      },
      {
        id: 'council', short: { zh: '結集', en: 'Council' }, num: '三', at: [85.42, 25.03], zoom: 110, scene: 'ancouncil', side: 1,
        place: { zh: '王舍城・畢缽羅窟', en: 'Rajagriha, the Pippala cave' },
        title: { zh: '受迦葉付法，宣誦「如是我聞」', en: 'Receiving the Dharma and Reciting “Thus Have I Heard”' },
        source: { zh: '阿難聞語信受，觀察眾心而宣偈言：「比丘諸眷屬，離佛不莊嚴。猶如虛空中，眾星之無月。」說是偈已，禮眾僧足，升法座而宣是言：「如是我聞。一時佛住某處說某經教，乃至人天等作禮奉行。」', en: '“Ananda accepted the words, observed the assembly’s mind, and spoke a verse: ‘The monks, his retinue, without the Buddha are not adorned — like stars in an empty sky without the moon.’ Having spoken it, he bowed to the monks’ feet, ascended the Dharma seat and declared: ‘Thus have I heard. At one time the Buddha dwelt in such a place and taught such a sutra, and humans and devas bowed and practiced.’”', ref: WU },
        zen: [],
        refs: WIKI(['第一次結集', '第一次結集'], ['First Buddhist council', 'First_Buddhist_council']).concat(AREFS),
        facts: [
          { zh: '佛陀去世時，阿難還沒有證得阿羅漢果，不能進入結集的會場；他努力修行，證果之後才進去。', en: 'When the Buddha passed away Ananda had not yet become an arhat and could not enter the council; after practicing hard he attained it and was admitted.' },
          { zh: '《五燈會元》說，迦葉對他說「你現在可以宣出法眼」，他就升座誦經。「如是我聞」成為後世佛經的開頭語。', en: 'Kasyapa told him “now declare the Dharma eye,” and he took the seat and recited. “Thus have I heard” became the opening formula of the sutras.' },
          { zh: '迦葉問大眾「阿難說的有沒有錯」，大家都說：「跟世尊說的沒有不同。」', en: 'Kasyapa asked the assembly whether Ananda had erred, and all said: “It is no different from what the World-Honored One said.”' },
          { zh: '《五燈會元》記載，迦葉後來把正法付給他，他也曾問迦葉：「世尊傳金襴袈裟之外，還傳了什麼？」迦葉叫「阿難」，他應「是」，迦葉說：「倒卻門前剎竿著！」詳見迦葉篇。', en: 'The Wudeng huiyuan says Kasyapa later entrusted the Dharma to him; Ananda asked what the Buddha transmitted besides the robe; Kasyapa called “Ananda!”, he answered, and Kasyapa said “Knock down the flagpole at the gate!” See the Kasyapa chapter.' }
        ],
        text: {
          zh: '佛陀去世後，迦葉召集結集。阿難要用功修行，才能進入會場。進去之後，迦葉請他宣出佛陀所說的法，他升上法座，開口說：「如是我聞……」每一部經的開頭，都是這句話。迦葉問大家：他說得有沒有錯？大家說：和世尊說的一樣。',
          en: 'After the Buddha’s passing Kasyapa called the council. Ananda first had to practice hard before he could enter. Inside, Kasyapa asked him to declare what the Buddha had taught; he ascended the seat and began, “Thus have I heard…” — the line that opens every sutra. Kasyapa asked whether he had erred; all said it was just as the World-Honored One had said.'
        }
      },
      {
        id: 'king', short: { zh: '辭王', en: 'Farewell' }, num: '四', at: [85.42, 25.03], zoom: 110, scene: 'anking', side: -1,
        place: { zh: '王舍城・王宮', en: 'Rajagriha, the palace' },
        title: { zh: '與阿阇世王的約定', en: 'A Promise to the King' },
        source: { zh: '後阿阇世王白言：「仁者！如來、迦葉尊勝二師，皆已涅槃，而我多故，悉不能睹。尊者般涅槃時，願垂告別。」尊者許之。後自念言：「我身危脆，猶如聚沫，況復衰老，豈堪久長？阿阇世王與吾有約。」乃詣王宮，告之曰：「吾欲入涅槃，來辭耳。」門者曰：「王寢，不可以聞。」者曰：「俟王覺時，當為我說。」', en: '“Later King Ajatasatru said: ‘Sir, the Tathagata and the venerable Kasyapa, the two honored teachers, have both entered nirvana, and being busy I could not see either. When you enter parinirvana, please let me say farewell.’ The venerable agreed. Later he thought: ‘My body is fragile as foam, and now old — how can it last? King Ajatasatru and I have a promise.’ He went to the palace and told the gatekeeper: ‘I am about to enter nirvana; I came to take leave.’ The gatekeeper said: ‘The king is asleep; I cannot report it.’ The venerable said: ‘When the king wakes, tell him for me.’”', ref: WU },
        zen: [],
        refs: AREFS.concat(WIKI(['阿阇世', '阿阇世'], ['Ajatashatru', 'Ajatashatru'])),
        facts: [
          { zh: '阿阇世王是摩竭陀國的國王，傳統說他晚年成為佛教的護持者。', en: 'Ajatasatru was king of Magadha, said in tradition to have become a patron of Buddhism in later life.' },
          { zh: '阿難說「我身危脆，猶如聚沫」：身體像水上的泡沫，很容易散掉。', en: '“My body is fragile as foam” — the body is like foam on water, easily dispersed.' },
          { zh: '書中說國王夢見一座七寶的華蓋被風雨吹斷，嚇醒後聽說阿難來過，哭著趕去追他。', en: 'The text says the king dreamed of a seven-jewel canopy snapped by storm, woke in alarm, heard Ananda had come, and rushed out weeping to follow him.' }
        ],
        text: {
          zh: '佛陀和迦葉都已經入滅，阿阇世王曾請阿難：你入涅槃時，一定要先通知我。阿難想到自己年紀大了，身體像泡沫一樣不長久，便到王宮去辭行。守門的人說王正在睡覺，阿難只說：等王醒來，請你告訴他。',
          en: 'The Buddha and Kasyapa had both passed away. King Ajatasatru had asked Ananda to let him know before he entered nirvana. Knowing he was old and his body fragile as foam, Ananda went to the palace to take leave. The gatekeeper said the king was asleep; Ananda only said: when he wakes, tell him.'
        }
      },
      {
        id: 'ganges', short: { zh: '入滅', en: 'Passing' }, num: '五', at: [85.17, 25.70], zoom: 40, scene: 'anriver', side: 1,
        place: { zh: '恆河中流（毗舍離一帶，位置約略）', en: 'Mid-Ganges, near Vaishali (approximate position)' },
        title: { zh: '恆河中流，付法入滅', en: 'In Mid-Ganges: Passing the Dharma and Entering Nirvana' },
        source: { zh: '尊者復念：我若偏向一國，諸國爭競，無有是處，應以平等度諸有情。遂於恒河中流，將入寂滅。……昔如來以大法眼付大迦葉，迦葉入定而付於我；我今將滅，用傳於汝。汝受吾教，當聽偈言：本來付有法，付了言無法。各各須自悟，悟了無無法。', en: '“The venerable thought: ‘If I favored one country, the others would quarrel — that cannot be; I should liberate all beings equally.’ So in the middle of the Ganges he prepared to enter stillness. … ‘Long ago the Tathagata gave the great Dharma eye to Mahakasyapa; Kasyapa, in samadhi, gave it to me. Now I am about to pass; I give it to you. Hear my verse: Originally the Dharma was given; once given, we say there is no Dharma. Each must awaken for themselves; once awake, there is no “no-Dharma” either.’”', ref: WU, note: NOTE },
        zen: [],
        refs: AREFS.concat([{ title: '維基百科：商那和修', url: 'https://zh.wikipedia.org/zh-tw/商那和修' }]),
        facts: [
          { zh: '阿阇世王和毗舍離王各自趕到恆河兩岸挽留他。阿難不願偏向任何一國，就在河中央入定。', en: 'Ajatasatru and the king of Vaishali each rushed to a bank of the Ganges to plead; Ananda, unwilling to favor either, entered samadhi in mid-river.' },
          { zh: '這時傳說雪山有五百仙人趕來受法，阿難為他們說法，其中商那和修與末田底迦是堪受傳法的人。阿難把法眼藏傳給商那和修，成為禪宗西天第三祖。', en: 'Tradition says five hundred sages came from the Himalayas to hear him; among them Shanavasa and Madhyantika were fit vessels, and Ananda passed the Dharma eye to Shanavasa, the third Indian patriarch.' },
          { zh: '傳法之後，他騰空顯化，把身體分成四份：一份供養忉利天，一份供養娑竭羅龍宮，一份給毗舍離王，一份給阿阇世王，各自造塔供養。', en: 'After the transmission he rose into the air and divided his body in four: for Trayastrimsa heaven, the dragon palace of Sagara, the king of Vaishali and Ajatasatru, each to build a stupa.' },
          { zh: '這些是禪宗典籍裡的傳說，恆河位置在此只是大約。', en: 'These are legends in Chan texts; the position on the Ganges is approximate here.' }
        ],
        text: {
          zh: '阿阇世王醒來後趕到恆河，毗舍離王也從另一邊趕來，兩位國王都請阿難留下。阿難想：我若偏向一國，兩國會爭。他便在恆河中央入定，並把法眼傳給商那和修，說：「本來付有法，付了言無法。各各須自悟，悟了無無法。」之後他把身體分成四份，讓兩國供養。',
          en: 'King Ajatasatru woke and rushed to the Ganges, and the king of Vaishali came from the other bank; both begged Ananda to stay. He thought: if I favor one country, the two will fight. So he sat in samadhi in mid-river and passed the Dharma eye to Shanavasa: “Originally the Dharma was given; once given, we say there is no Dharma. Each must awaken for themselves.” Then he divided his body in four, for both kingdoms to venerate.'
        }
      }
    ],
    segments: [
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '二十餘年', en: 'Many years' }, title: { zh: '侍奉佛陀', en: 'Serving the Buddha' },
        caption: { wait: { zh: '阿難長年跟隨佛陀，聽了許多法。', en: 'Ananda followed the Buddha for many years, hearing much of the Dharma.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '佛陀入滅後', en: 'After the Buddha' }, title: { zh: '結集', en: 'The Council' },
        caption: { wait: { zh: '佛陀入滅，迦葉召集結集，阿難被請出來誦經。', en: 'After the Buddha passed away, Kasyapa called the council and asked Ananda to recite.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '晚年', en: 'Old age' }, title: { zh: '最後的約定', en: 'The last promise' },
        caption: { wait: { zh: '阿難年紀大了，想起與阿阇世王的約定。', en: 'Growing old, Ananda remembered his promise to King Ajatasatru.' } } },
      { dur: 8500, zoom: 22, mode: 'walk', pts: [[85.42, 25.03], [85.35, 25.30], [85.25, 25.52], [85.17, 25.70]],
        caption: { walk: { zh: '阿難離開王舍城，向北渡過恆河。', en: 'Ananda left Rajagriha and went north to the Ganges.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'ananda');
  CHAPTERS[i] = chapter;
})();
