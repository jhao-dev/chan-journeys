/* 二祖慧可篇（Huike chapter）— 以禪宗角度敘述
 * 引文取自《景德傳燈錄》《續高僧傳》（憑記憶引用，待校對）。座標 [經度, 緯度]。
 * 司空山位置為約略位置。 */
(function () {
  const BY = { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' };
  const LAMP = { zh: '《景德傳燈錄》', en: 'Transmission of the Lamp' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];
  const MEM = { zh: '引文憑記憶，待校對。', en: 'Quoted from memory; awaiting proofreading.' };

  const chapter = {
    id: 'huike', ready: true,
    name: { zh: '二祖慧可', en: 'Huike' },
    role: { zh: '二祖・安心法門', en: 'Second Patriarch · Pacifying the Mind' },
    fig: { robe: '#6f7f6a', band: '#98a890', fold: '#3a4636', staff: true, beard: false },
    intro: {
      v: '二祖傳燈', seal: '二祖',
      en: 'Huike, the Second Patriarch',
      sub: { zh: '從洛陽書生到少林弟子 · 他如何把禪傳下去', en: 'From a scholar of Luoyang to Bodhidharma’s heir — and how he carried Chan onward' },
      note: { zh: '依《景德傳燈錄》《續高僧傳》等傳統記載；部分細節屬傳說', en: 'Told from the Transmission of the Lamp and the Continued Biographies; some details are legend' }
    },
    finale: {
      zh: '慧可把達摩的法傳給僧璨，禪宗從此不再靠一個人，而是一代代傳了下去。',
      en: 'Huike passed the teaching to Sengcan, and Chan was no longer the work of one man but a lineage handed down generation to generation.'
    },
    nextHint: { zh: '下一篇：三祖僧璨（即將推出）', en: 'Next: Sengcan, the Third Patriarch (coming soon)' },
    stations: [
      {
        id: 'luoyang', short: { zh: '求道', en: 'Seeker' }, num: '一', at: [112.45, 34.62], zoom: 90, scene: 'luoyang', side: -1,
        place: { zh: '洛陽', en: 'Luoyang' },
        title: { zh: '博學的神光，心裡還是不安', en: 'A Learned Scholar Still Unsettled' },
        source: { zh: '久居伊洛，博覽群書，善談玄理。每歎曰：「孔老之教，禮術風規；莊易之書，未盡妙理。」近聞達磨大士住止少林，至人不遙，當造玄境。', en: '“He lived long by the Yi and Luo rivers, read widely, and spoke well of profound principles. He would sigh: ‘The teachings of Confucius and Laozi are rules of etiquette and conduct; the books of Zhuangzi and the Yi have not exhausted the subtle truth.’ Hearing that the great master Bodhidharma was at Shaolin, he resolved to visit.”', ref: LAMP, note: MEM },
        zen: [],
        refs: WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike']).concat(WIKI(['洛陽市', '洛陽市'], ['Luoyang', 'Luoyang'])),
        facts: [
          { zh: '慧可俗姓姬，原名神光，出生在洛陽一帶。傳說他從小讀書很多，也懂儒家和老莊。', en: 'Huike, born Ji and first named Shenguang, came from the Luoyang area. Tradition says he read widely, in Confucian and Daoist works as well.' },
          { zh: '他先在洛陽龍門香山出家，再到各處聽講佛經，但心裡始終覺得，這些道理還沒有解決自己的不安。', en: 'He first ordained at Xiangshan near the Longmen grottoes, then listened to lectures on the sutras — yet felt the teachings had not settled his own unease.' },
          { zh: '傳說他約四十歲才聽說達摩在嵩山少林寺，便動身前往。', en: 'Tradition says he was about forty when he heard of Bodhidharma at Shaolin and set out.' },
          { zh: '洛陽是北魏的都城，當時是中國北方佛教最興盛的地方。', en: 'Luoyang was the Northern Wei capital and the center of Buddhism in the north.' }
        ],
        text: {
          zh: '神光住在洛陽，讀了很多書，儒家、老莊、佛經都懂，講起道理頭頭是道。但他心裡常常歎氣：這些書都還沒有說到最深的地方。他聽說有位從西方來的大師，在嵩山少林寺面壁靜坐，心想：這位也許就是我要找的人，便收拾行李，走向嵩山。',
          en: 'Shenguang lived in Luoyang. He had read Confucian, Daoist and Buddhist books and could discuss them with ease. Yet he often sighed: none of them had reached the deepest point. Hearing that a master from the west was sitting facing a wall at Shaolin on Mount Song, he thought: perhaps this is the one I seek. He packed his things and set off for Mount Song.'
        }
      },
      {
        id: 'songshan', short: { zh: '得髓', en: 'Marrow' }, num: '二', at: [112.93, 34.51], zoom: 90, scene: 'marrow', side: 1,
        place: { zh: '嵩山・少林寺', en: 'Shaolin Temple, Mount Song' },
        title: { zh: '安心之後，得髓傳衣', en: 'Mind Pacified: Marrow and Robe' },
        source: { zh: '師曰：「汝等四人，所得有淺深。」……最後慧可禮拜，依位而立。師曰：「汝得吾髓。」', en: '“The master said, ‘Of you four, each has grasped something, some shallower, some deeper.’ … Finally Huike bowed and returned to his place. The master said, ‘You have my marrow.’”', ref: LAMP, note: { zh: '傳統說法：道副得「皮」，尼總持得「肉」，道育得「骨」，慧可得「髓」。' + MEM.zh, en: 'Tradition: Daofu got the “skin,” the nun Zongchi the “flesh,” Daoyu the “bone,” and Huike the “marrow.” ' + MEM.en } },
        zen: [
          { title: '【禪師說禪】禪宗心法　開悟見性　直了成佛', url: 'https://n.yam.com/Article/20250319923179', by: BY, summary: { zh: '妙天禪師以二祖向達摩求「安心」的公案說明：祖師要他把不安的心拿出來，他找不到，祖師便說已替他安好。禪師指出，心本來清淨，本來就沒有一顆「不安的心」，明白這點便能當下開悟見性。', en: 'Master Miaotian uses the “pacifying the mind” dialogue to teach that the mind is originally pure — there never was an “unsettled mind” to find; seeing this, one awakens on the spot.' } }
        ],
        refs: WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike']).concat(WIKI(['少林寺', '少林寺'], ['Shaolin Monastery', 'Shaolin_Monastery'])).concat(WIKI(['楞伽經', '楞伽經'], ['Lankavatara Sutra', 'Lankavatara_Sutra'])),
        facts: [
          { zh: '慧可立雪、安心的過程，已經在「達摩東來」篇裡講過；這一站接著講後來的事。', en: 'The snow and the “pacifying the mind” exchange are told in the Bodhidharma chapter; this station picks up what followed.' },
          { zh: '傳說達摩在離開人世前，把弟子們叫來，各說自己的領會。達摩分別說：「得吾皮」「得吾肉」「得吾骨」，最後對慧可說：「汝得吾髓。」', en: 'Before his passing, tradition says, Bodhidharma asked each disciple for their understanding, replying “skin,” “flesh,” “bone” — and to Huike, “marrow.”' },
          { zh: '達摩把袈裟和四卷《楞伽經》交給慧可，作為傳法的憑證，慧可成為中國禪宗的第二代祖師。', en: 'Bodhidharma gave Huike his robe and four fascicles of the Lankavatara Sutra as proof of transmission, making him the second patriarch in China.' },
          { zh: '慧可跟了達摩多年；傳說他的手臂斷了之後，仍然留在達摩身邊學習。這段相處時間，各書記載不一。', en: 'Huike stayed with Bodhidharma for years. Accounts differ on how long.' }
        ],
        text: {
          zh: '慧可在少林寺得到達摩為他安心之後，就一直留在達摩身邊。多年後達摩要離開，把弟子叫來，問各人的領悟。其他人各說了自己的看法，達摩說他們得到「皮」「肉」「骨」；輪到慧可，他只是行了一個禮，站回原位，什麼也沒有說。達摩說：「你得到了我的髓。」於是把袈裟和《楞伽經》交給他，禪宗的法脈就這樣傳到了慧可手上。',
          en: 'After Bodhidharma had pacified his mind at Shaolin, Huike stayed at his side. Years later, when the master was about to leave, he called his disciples to say what they had understood. Others spoke, and Bodhidharma said they had grasped his “skin,” “flesh” and “bone.” When Huike’s turn came, he simply bowed and returned to his place without a word. “You have my marrow,” said Bodhidharma. He handed over the robe and the Lankavatara Sutra, and the lineage passed to Huike.'
        }
      },
      {
        id: 'ye', short: { zh: '弘法', en: 'Teaching' }, num: '三', at: [114.62, 36.33], zoom: 20, scene: 'lanka', side: 1,
        place: { zh: '鄴都', en: 'Ye, the capital' },
        title: { zh: '鄴都弘法，招人嫉恨', en: 'Teaching in Ye, and Jealous Enemies' },
        source: { zh: '吾有《楞伽經》四卷，亦用付汝，即是如來心地要門，令諸眾生開示悟入。', en: '“I have four fascicles of the Lankavatara Sutra, which I also hand to you; it is the essential gate of the Tathagata’s mind-ground, that all beings may open, show, awaken and enter.”', ref: { zh: '《景德傳燈錄》（達摩對慧可所言）', en: 'Transmission of the Lamp (Bodhidharma to Huike)' }, note: MEM },
        zen: [],
        refs: [{ title: '維基百科：鄴城', url: 'https://zh.wikipedia.org/zh-tw/鄴城' }].concat(WIKI(['楞伽經', '楞伽經'], ['Lankavatara Sutra', 'Lankavatara_Sutra'])),
        facts: [
          { zh: '鄴是東魏、北齊的都城，在今河北臨漳、河南安陽一帶，當時是北方的大城。', en: 'Ye was the capital of the Eastern Wei and Northern Qi, near today’s Linzhang in Hebei and Anyang in Henan — a major northern city.' },
          { zh: '慧可在鄴都一面講《楞伽經》，一面教人直接看自己的心，聽的人很多，也有人把他當成怪人。', en: 'In Ye Huike lectured on the Lankavatara and taught people to look directly at their own minds; many came to listen, and some thought him odd.' },
          { zh: '當時講經的法師們不喜歡這種「不立文字」的做法。傳統說法是，有人嫉妒，向官府誣告他，慧可因此遇害。事發年代各書不同。', en: 'Lecturing monks of the day disliked this “not relying on words” approach. Tradition says some, out of jealousy, denounced him to the authorities, and he was put to death; accounts differ on when.' },
          { zh: '慧可的弟子中，有那禪師、慧滿，以及後來成為三祖的僧璨。', en: 'Among Huike’s students were Chan Master Na, Huiman, and Sengcan, who became the Third Patriarch.' }
        ],
        text: {
          zh: '慧可離開嵩山，來到北齊的都城鄴。他一面講《楞伽經》，一面教人不要只在文字裡打轉，要直接看自己的心。聽的人一天比一天多，但也有些講經的法師不服氣。他並不爭辯，只是一次又一次地把他們的問題，轉回到「你自己的心在哪裡」這個問題上。',
          en: 'Huike left Mount Song and came to Ye, capital of the Northern Qi. He lectured on the Lankavatara Sutra, but taught people not to circle in words and instead to look directly at their own minds. His audience grew day by day, yet some lecturing monks resented him. He never argued, but turned each question back to: “Where is your own mind?”'
        }
      },
      {
        id: 'hidden', short: { zh: '混世', en: 'Hidden' }, num: '四', at: [114.62, 36.33], zoom: 20, scene: 'tavern', side: -1,
        place: { zh: '鄴都一帶', en: 'Around Ye' },
        title: { zh: '混跡市井，我自調心', en: 'Among the Common Folk: “I Am Tuning My Mind”' },
        source: { zh: '或有酒肆，或在屠門。人問之：「何以如此？」可曰：「我自調心，何關汝事？」', en: '“Sometimes he was at wine shops, sometimes at butchers’ stalls. When asked, ‘Why live like this?’ Huike said, ‘I am tuning my own mind — what is it to you?’”', ref: { zh: '《續高僧傳》（意譯）', en: 'Continued Biographies of Eminent Monks (paraphrase)' }, note: { zh: '這段話是依記憶改寫的大意，不是逐字引用，待校對。', en: 'This is a paraphrase from memory rather than a verbatim quotation; awaiting proofreading.' } },
        zen: [],
        refs: WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike']),
        facts: [
          { zh: '《續高僧傳》提到，慧可晚年常常混在酒館、屠宰場和普通百姓中間。', en: 'The Continued Biographies say that in his later years Huike mixed with ordinary people in wine shops and butchers’ stalls.' },
          { zh: '有人問他：身為出家人，為什麼待在這種地方？他說：「我自己在調伏自己的心，與你有什麼相干？」', en: 'Asked why a monk should stay in such places, he is said to have answered that he was taming his own mind, which was no concern of the questioner.' },
          { zh: '禪宗後來的說法是：修行不一定在寺院裡，在人群裡也可以守住自己的心。', en: 'Chan later said that practice does not require a monastery: one can keep the mind well even in a crowd.' },
          { zh: '這一站的地點只是大致位置，慧可具體去過哪些地方，歷史上沒有留下詳細記載。', en: 'The map position is approximate; history does not record exactly where Huike went.' }
        ],
        text: {
          zh: '遭人排擠之後，慧可不再開講。他換了普通人的衣服，混進酒館、屠宰場和市集裡。有人看了不解：「你是出家人，為什麼待在這種地方？」慧可說：「我在調伏自己的心，關你什麼事？」禪宗說，把心守好，在哪裡都一樣；在最吵、最雜的地方，更能看出一個人的心是不是真的安定。',
          en: 'After being shunned, Huike stopped giving lectures. He put on ordinary clothes and moved among wine shops, butchers’ stalls and markets. Puzzled onlookers asked, “You are a monk — why stay in such places?” Huike said, “I am taming my own mind. What is it to you?” Chan says that once the mind is well kept, any place is the same; in the loudest, messiest places one can best see whether the mind is truly settled.'
        }
      },
      {
        id: 'sikong', short: { zh: '傳法', en: 'Heir' }, num: '五', at: [116.1, 30.65], zoom: 12, scene: 'sin', side: 1,
        place: { zh: '司空山（今安徽）', en: 'Mount Sikong, Anhui' },
        title: { zh: '覓罪不可得，傳法僧璨', en: 'The Sin Cannot Be Found: Passing On to Sengcan' },
        source: { zh: '曰：「弟子身纏風恙，請和尚懺罪。」師曰：「將罪來，與汝懺。」居士良久曰：「覓罪不可得。」師曰：「我與汝懺罪竟，宜依佛法僧住。」曰：「今見和尚，已知是僧，未審何名佛法？」師曰：「是心是佛，是心是法，法佛無二，僧寶亦然。」', en: '“‘My body is afflicted with illness; please, Reverend, absolve my sin.’ The master said, ‘Bring your sin here and I will absolve it.’ After a long while the layman said, ‘I cannot find my sin.’ ‘Then I have absolved you. Now take refuge in Buddha, Dharma and Sangha.’ ‘Seeing you, I know the Sangha; but what are Buddha and Dharma?’ ‘This mind is Buddha, this mind is Dharma. Dharma and Buddha are not two; nor is the Sangha.’”', ref: { zh: '《景德傳燈錄・三祖章》', en: 'Transmission of the Lamp, chapter on the Third Patriarch' }, note: MEM },
        zen: [],
        refs: WIKI(['僧璨', '僧璨'], ['Sengcan', 'Sengcan']).concat(WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike'])),
        facts: [
          { zh: '僧璨來見慧可時，是一位身患重病的居士。傳統說他請慧可替他「懺罪」，慧可說：「把你的罪拿來，我替你懺。」這和當年慧可向達摩求「安心」的對話幾乎一模一樣。', en: 'Sengcan came to Huike as a layman gravely ill. Tradition says he asked Huike to absolve his sin; Huike said, “Bring me your sin.” The exchange closely mirrors Huike’s own “pacify the mind” dialogue with Bodhidharma.' },
          { zh: '僧璨找不到「罪」，就明白罪本來沒有一個固定的實體。慧可隨即為他剃髮，收為弟子，後來把衣缽傳給他，僧璨成為三祖。', en: 'Unable to find the sin, Sengcan realized that it has no fixed substance. Huike shaved his head, took him as a disciple, and later passed him the robe, making him the Third Patriarch.' },
          { zh: '傳說中，慧可之後約過了很長一段時間，因為遇到北周武帝滅佛（約公元 574 年），僧璨曾隱居在山中。三祖的詳細經歷，等三祖篇再說。', en: 'Tradition has Sengcan living in hiding in the mountains during the Northern Zhou persecution of Buddhism (c. 574). His story is left for the Third Patriarch chapter.' },
          { zh: '司空山在今安徽安慶太湖一帶，這裡的座標只是大概位置，各書說法也不盡相同。', en: 'Mount Sikong is in the Taihu area of Anqing, Anhui; the map position is approximate and sources differ.' }
        ],
        text: {
          zh: '慧可後來來到南方的山裡。有一天，一位全身長了病的居士來見他，說：「請你替我懺悔罪過。」慧可說：「把你的罪拿來，我替你懺。」居士找了很久，說：「找不到。」慧可說：「那我已經替你懺好了。」居士當下明白：罪也好，心也好，都找不到一個固定的東西。慧可為他剃髮，取名僧璨，後來把衣缽傳給他。從達摩到慧可，再到僧璨，一代又一代，禪就這樣傳了下去。',
          en: 'Huike later came to the mountains of the south. One day a layman afflicted with illness came to see him: “Please absolve my sin.” “Bring your sin here, and I will absolve it.” The man searched for a long while: “I cannot find it.” “Then it is already absolved.” At that moment the layman understood that neither sin nor mind has any fixed thing to be found. Huike shaved his head, named him Sengcan, and later passed him the robe. From Bodhidharma to Huike to Sengcan, generation by generation, Chan was handed down.'
        }
      }
    ],
    segments: [
      { dur: 6500, zoom: 80, mode: 'walk', pts: [[112.45, 34.62], [112.7, 34.55], [112.93, 34.51]],
        caption: { walk: { zh: '神光離開洛陽，一路來到嵩山少林寺。', en: 'Shenguang left Luoyang and made his way to Shaolin Temple on Mount Song.' } } },
      { dur: 8500, zoom: 18, mode: 'walk', pts: [[112.93, 34.51], [113.4, 35.0], [114.0, 35.6], [114.62, 36.33]],
        caption: { walk: { zh: '達摩離世後，慧可帶著衣缽北上，來到北齊的都城鄴。', en: 'After Bodhidharma’s passing, Huike carried the robe north to Ye, capital of the Northern Qi.' } } },
      { dur: 6000, zoom: 20, mode: 'wait', pts: null, kicker: { zh: '歲月', en: 'Years' }, title: { zh: '世路坎坷', en: 'A Hard Road' },
        caption: { wait: { zh: '被人排擠之後，慧可不再開講，隱入市井之中。', en: 'Shunned by others, Huike stopped teaching and slipped into the life of the marketplace.' } } },
      { dur: 10000, zoom: 6, mode: 'walk', pts: [[114.62, 36.33], [114.9, 35.0], [115.2, 33.5], [115.4, 32.2], [115.8, 31.2], [116.1, 30.65]],
        caption: { walk: { zh: '亂世之中，慧可南下，進入安徽的山區，在那裡遇見了僧璨。', en: 'In troubled times Huike went south into the mountains of Anhui, where he met Sengcan.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'huike');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [114.0, 37.4], zh: '北齊', en: 'Northern Qi', cls: 'realm', ch: 'huike' },
    { at: [112.45, 34.1], zh: '嵩山', en: 'Mt Song', cls: 'mtn', ch: 'huike' }
  );
})();
