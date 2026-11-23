/* 二祖慧可篇（Huike chapter）— 以禪宗角度敘述
 * 引文取自《景德傳燈錄》（四部叢刊本，維基文庫）與《續高僧傳》卷十六，已逐字核對。座標 [經度, 緯度]；管城為約略位置。 */
(function () {
  const BY = { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' };
  const LAMP = { zh: '《景德傳燈錄》', en: 'Transmission of the Lamp' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];

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
      zh: '慧可晚年隱入市井，一百零七歲圓寂（傳說）。他傳給僧璨的衣缽，讓禪不再靠一個人，而是一代一代傳了下去。',
      en: 'In old age Huike hid among the common people and passed away at 107 (tradition). The robe he gave Sengcan meant Chan no longer rested on one man but passed down generation to generation.'
    },
    nextChapter: { id: 'sengcan', label: { zh: '接續下一篇：三祖僧璨', en: 'Next chapter: Sengcan, the Third Patriarch' } },
    nextHint: { zh: '下一篇：三祖僧璨，覓罪不可得之後', en: 'Next: Sengcan, after the sin that could not be found' },
    stations: [
      {
        id: 'luoyang', short: { zh: '求道', en: 'Seeker' }, num: '一', at: [112.45, 34.62], zoom: 90, scene: 'luoyang', side: -1,
        place: { zh: '洛陽', en: 'Luoyang' },
        title: { zh: '博學的神光，心裡還是不安', en: 'A Learned Scholar Still Unsettled' },
        source: { zh: '久居伊洛，博覽群書，善談玄理。每歎曰：「孔老之教，禮術風規；莊易之書，未盡妙理。」近聞達磨大士住止少林，至人不遙，當造玄境。', en: '“He lived long by the Yi and Luo rivers, read widely, and spoke well of profound principles. He would sigh: ‘The teachings of Confucius and Laozi are rules of etiquette and conduct; the books of Zhuangzi and the Yi have not exhausted the subtle truth.’ Hearing that the great master Bodhidharma was at Shaolin, he resolved to visit.”', ref: LAMP },
        zen: [],
        refs: WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike']).concat(WIKI(['洛陽市', '洛陽市'], ['Luoyang', 'Luoyang'])),
        facts: [
          { zh: '《景德傳燈錄》說，慧可是武牢（虎牢，在洛陽附近）人，俗姓姬。傳說他出生前母親夢見異光照滿屋子，所以取名「光」；他從小志氣不凡，廣讀詩書，尤其精通玄理。', en: 'The Transmission of the Lamp says Huike came from Wuyao (Hulao, near Luoyang) and was born Ji. Tradition says his mother saw a strange light fill the house before his birth, so he was named “Guang” (light); as a youth he read widely and was especially drawn to profound philosophy.' },
          { zh: '他後來在洛陽龍門香山跟寶靜禪師出家，到處聽講大小乘佛經；三十二歲回到香山靜坐了八年，傳說有神人對他說：「大道匪遙，汝其南矣。」於是他改名神光，往南去找達摩。', en: 'He later ordained under Chan Master Baojing at Xiangshan by the Longmen grottoes and studied the Great and Small Vehicles widely. At thirty-two he returned to Xiangshan and sat for eight years; a spirit is said to have told him, “The great Way is not far — go south,” and he renamed himself Shenguang and set out for Bodhidharma.' },
          { zh: '算起來，他約四十歲時前往嵩山少林寺。', en: 'By the Lamp’s count he was about forty when he went to Shaolin on Mount Song.' },
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
        source: { zh: '師曰：「汝等四人，所得有淺深。」……最後慧可禮拜，依位而立。師曰：「汝得吾髓。」', en: '“The master said, ‘Of you four, each has grasped something, some shallower, some deeper.’ … Finally Huike bowed and returned to his place. The master said, ‘You have my marrow.’”', ref: LAMP, note: { zh: '前面的問答：道副說「不執文字，不離文字，而為道用」，達摩說「汝得吾皮」；尼總持說「如慶喜見阿閦佛國，一見更不再見」，得「肉」；道育說「四大本空，五陰非有，而我見處，無一法可得」，得「骨」。', en: 'Before this: Daofu said “neither clinging to words nor leaving them, using them for the Way” — “skin”; the nun Zongchi said “like Ananda seeing the Buddha-land of Akshobhya: seen once, never again” — “flesh”; Daoyu said “the four elements are empty, the five aggregates are not real; I see no single thing to grasp” — “bone.”' } },
        zen: [
          { title: '【禪師說禪】禪宗心法　開悟見性　直了成佛', url: 'https://n.yam.com/Article/20250319923179', by: BY, summary: { zh: '妙天禪師以二祖向達摩求「安心」的公案說明：祖師要他把不安的心拿出來，他找不到，祖師便說已替他安好。禪師指出，心本來清淨，本來就沒有一顆「不安的心」，明白這點便能當下開悟見性。', en: 'Master Miaotian uses the “pacifying the mind” dialogue to teach that the mind is originally pure — there never was an “unsettled mind” to find; seeing this, one awakens on the spot.' } }
        ],
        refs: WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike']).concat(WIKI(['少林寺', '少林寺'], ['Shaolin Monastery', 'Shaolin_Monastery'])).concat(WIKI(['楞伽經', '楞伽經'], ['Lankavatara Sutra', 'Lankavatara_Sutra'])),
        facts: [
          { zh: '慧可立雪、安心的過程，已經在「達摩東來」篇裡講過；這一站接著講後來的事。', en: 'The snow and the “pacifying the mind” exchange are told in the Bodhidharma chapter; this station picks up what followed.' },
          { zh: '《景德傳燈錄》說，達摩在中國待了九年後，打算回天竺，便叫門人各說自己的領會。他依次說：「汝得吾皮」「汝得吾肉」「汝得吾骨」，最後對慧可說：「汝得吾髓。」', en: 'The Transmission of the Lamp says that after nine years in China, when Bodhidharma meant to return to India, he asked each disciple what they had understood, answering “skin,” “flesh,” “bone” — and to Huike, “marrow.”' },
          { zh: '達摩把袈裟交給慧可作為傳法的憑證，慧可成為中國禪宗的第二代祖師。《傳燈錄》又說他把四卷《楞伽經》一併交給慧可；該書的編者自己也提醒，更早的《續高僧傳》是說達摩在慧可得法之前就把《楞伽經》給他看，兩種說法有出入。', en: 'Bodhidharma gave Huike his robe as proof of transmission, making him the second patriarch in China. The Lamp adds the four-fascicle Lankavatara Sutra, though its own editor notes that the earlier Continued Biographies has Bodhidharma give Huike the sutra before he received the Dharma — the two accounts differ.' },
          { zh: '《續高僧傳》說，慧可的手臂是被盜賊砍斷的，他用火燒傷口止血，包好，照樣乞食，沒有對人提起；「斷臂求法」是後來《傳燈錄》一系的說法。', en: 'The Continued Biographies say Huike’s arm was cut off by bandits; he cauterized the wound, bound it, and went on begging as before without telling anyone. “Cutting off the arm to seek the Dharma” is the later Transmission of the Lamp version.' }
        ],
        text: {
          zh: '慧可在少林寺得到達摩為他安心之後，就一直留在達摩身邊。九年後達摩打算回天竺，把弟子叫來，問各人的領悟。其他人各說了自己的看法，達摩說他們得到「皮」「肉」「骨」；輪到慧可，他只是行了一個禮，站回原位，什麼也沒有說。達摩說：「你得到了我的髓。」於是把袈裟交給他，禪宗的法脈就這樣傳到了慧可手上。',
          en: 'After Bodhidharma had pacified his mind at Shaolin, Huike stayed at his side. Nine years on, when the master meant to return to India, he called his disciples to say what they had understood. Others spoke, and Bodhidharma said they had grasped his “skin,” “flesh” and “bone.” When Huike’s turn came, he simply bowed and returned to his place without a word. “You have my marrow,” said Bodhidharma. He handed over the robe, and the lineage passed to Huike.'
        }
      },
      {
        id: 'ye', short: { zh: '弘法', en: 'Teaching' }, num: '三', at: [114.62, 36.33], zoom: 20, scene: 'lanka', side: 1,
        place: { zh: '鄴都', en: 'Ye, the capital' },
        title: { zh: '鄴都弘法三十四年', en: 'Thirty-four Years of Teaching in Ye' },
        source: { zh: '我觀漢地，唯有此經。仁者依行，自得度世。', en: '“I see that in the land of Han only this sutra will do. If you practice by it, you will cross over the world by yourself.”', ref: { zh: '《續高僧傳》卷十六（達摩授《楞伽經》時所說）', en: 'Continued Biographies of Eminent Monks, fasc. 16 (Bodhidharma on giving Huike the Lankavatara)' } },
        zen: [],
        refs: [{ title: '維基百科：鄴城', url: 'https://zh.wikipedia.org/zh-tw/鄴城' }].concat(WIKI(['楞伽經', '楞伽經'], ['Lankavatara Sutra', 'Lankavatara_Sutra'])),
        facts: [
          { zh: '鄴是東魏、北齊的都城，在今河北臨漳、河南安陽一帶，當時是北方的大城。', en: 'Ye was the capital of the Eastern Wei and Northern Qi, near today’s Linzhang in Hebei and Anyang in Henan — a major northern city.' },
          { zh: '《景德傳燈錄》說，達摩付囑之後，慧可就在鄴都隨緣說法，四方僧俗歸依，這樣一共過了三十四年。', en: 'The Transmission of the Lamp says that after Bodhidharma’s charge Huike taught in Ye as occasion allowed, drawing monks and laypeople from all quarters, for thirty-four years in all.' },
          { zh: '北齊天保年間，有位姓向的居士寫信給慧可，說「影由形起，響逐聲來；弄影勞形，不識形為影本；止響滅聲，不知聲是響根」，意思是：煩惱像影子和回聲，一心追趕它，只是徒勞。慧可回信後，居士便來禮拜，得到印可。', en: 'In the Tianbao era (550–559) a layman named Xiang wrote to Huike: “The shadow arises from the form, the echo follows the sound; to play with the shadow and tire the body is to not know the form is the shadow’s root…” — that is, chasing afflictions like shadows and echoes is futile. Huike replied, and Xiang came to pay homage and was sealed.' },
          { zh: '慧可的弟子有那禪師（僧那）、慧滿，以及後來成為三祖的僧璨。', en: 'Huike’s students included Chan Master Na (Sengna), Huiman, and Sengcan, who became the Third Patriarch.' }
        ],
        text: {
          zh: '達摩離開之後，慧可來到北齊的都城鄴。他一面講《楞伽經》，一面教人不要只在文字裡打轉，要直接看自己的心。四方的僧人和百姓都來聽，他就這樣教了三十四年。有位向居士寫信來，說煩惱像影子和回聲，追著它跑只是白費力氣；慧可回信後，他便來禮拜，得到印可。',
          en: 'After Bodhidharma, Huike came to Ye, capital of the Northern Qi. He lectured on the Lankavatara Sutra, but taught people not to circle in words and instead to look directly at their own minds. Monks and townspeople from every side came, and he taught like this for thirty-four years. A layman named Xiang wrote that afflictions are like shadows and echoes, and chasing them is wasted effort; Huike replied, and the layman came to pay homage and was sealed.'
        }
      },
      {
        id: 'sengcan', short: { zh: '傳法', en: 'Heir' }, num: '四', at: [114.62, 36.33], zoom: 20, scene: 'sin', side: -1,
        place: { zh: '鄴都', en: 'Ye, the capital' },
        title: { zh: '覓罪不可得，傳法僧璨', en: 'The Sin Cannot Be Found: Passing On to Sengcan' },
        source: { zh: '有一居士，年踰四十，不言名氏，聿來設禮而問師曰：「弟子身纏風恙，請和尚懺罪。」師曰：「將罪來，與汝懺。」居士良久云：「覓罪不可得。」師曰：「我與汝懺罪竟，宜依佛法僧住。」曰：「今見和尚，已知是僧，未審何名佛法？」師曰：「是心是佛，是心是法，法佛無二，僧寶亦然。」曰：「今日始知罪性不在內，不在外，不在中間，如其心然，佛法無二也。」', en: '“A layman over forty, who gave no name, came, bowed, and asked: ‘My body is afflicted with illness; please, Reverend, absolve my sin.’ The master said, ‘Bring your sin here and I will absolve it.’ After a long while the layman said, ‘I cannot find my sin.’ ‘Then I have absolved you. Now take refuge in Buddha, Dharma and Sangha.’ ‘Seeing you, I know the Sangha; but what are Buddha and Dharma?’ ‘This mind is Buddha, this mind is Dharma. Dharma and Buddha are not two; nor is the Sangha.’ ‘Today I know that the nature of sin is not inside, not outside, not in between — it is just like the mind. Buddha and Dharma are not two.’”', ref: { zh: '《景德傳燈錄》卷三（慧可章）', en: 'Transmission of the Lamp, fasc. 3 (chapter on Huike)' } },
        zen: [],
        refs: WIKI(['僧璨', '僧璨'], ['Sengcan', 'Sengcan']).concat(WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike'])),
        facts: [
          { zh: '這位居士就是後來的三祖僧璨。《傳燈錄》說他當時四十多歲，沒有說出姓名，身患風疾；慧可替他剃髮後，才取名「僧璨」，說：「是吾寶也。」', en: 'This layman became the Third Patriarch Sengcan. The Lamp says he was over forty, gave no name and suffered from wind-illness; only when Huike shaved his head did he receive the name Sengcan — “He is my treasure.”' },
          { zh: '這段問答和當年慧可向達摩求「安心」幾乎一模一樣：一個說「把心拿來」，一個說「把罪拿來」；找不到，就是已經安了、已經懺了。', en: 'The exchange mirrors Huike’s own plea to Bodhidharma: “Bring me your mind” becomes “Bring me your sin”; being unable to find it means it is already pacified, already absolved.' },
          { zh: '傳燈錄記載年份為「天平二年」，但書中自己注明應是天保二年，也就是公元 551 年。', en: 'The Lamp gives the year as Tianping 2, but its own note says it should be Tianbao 2 — 551.' },
          { zh: '僧璨在慧可身邊侍奉兩年後，慧可把達摩傳下的衣缽交給他，並說：「你應該住在深山，還不要公開傳法，將來有國難。」三祖的後續故事，留到三祖篇。', en: 'After Sengcan served him for two years, Huike passed him the robe from Bodhidharma and said: “Live deep in the mountains and do not teach openly yet; a national calamity is coming.” The rest of Sengcan’s story is left for the Third Patriarch chapter.' }
        ],
        text: {
          zh: '有一天，一位四十多歲的居士來見慧可，身上長著重病，說：「請你替我懺悔罪過。」慧可說：「把你的罪拿來，我替你懺。」居士找了很久，說：「找不到。」慧可說：「那我已經替你懺好了。」居士當下明白：罪也好，心也好，都找不到一個固定的東西。慧可為他剃髮，取名僧璨，兩年後把衣缽傳給他。從達摩到慧可，再到僧璨，禪就這樣一代一代傳了下去。',
          en: 'One day a layman in his forties, ill with a grave disease, came to Huike: “Please absolve my sin.” “Bring your sin here, and I will absolve it.” The man searched for a long while: “I cannot find it.” “Then it is already absolved.” At that moment the layman understood that neither sin nor mind has any fixed thing to be found. Huike shaved his head, named him Sengcan, and two years later passed him the robe. From Bodhidharma to Huike to Sengcan, Chan was handed down generation by generation.'
        }
      },
      {
        id: 'guancheng', short: { zh: '混世', en: 'Hidden' }, num: '五', at: [113.68, 34.75], zoom: 20, scene: 'tavern', side: 1,
        place: { zh: '筦城（今河南鄭州一帶）', en: 'Guancheng (around today’s Zhengzhou)' },
        title: { zh: '我自調心，一百零七歲圓寂', en: '“I Am Tuning My Mind” — and the End at 107' },
        source: { zh: '遂韜光混跡，變易儀相，或入諸酒肆，或過于屠門，或習街談，或隨廝役。人問之曰：「師是道人，何故如是？」師曰：「我自調心，何關汝事。」', en: '“He then hid his light and mingled in the world, changing his appearance: sometimes entering wine shops, sometimes passing by butchers’ gates, sometimes joining street talk, sometimes working as a servant. When asked, ‘Master, you are a man of the Way — why do you live like this?’ he said, ‘I am tuning my own mind. What is it to you?’”', ref: { zh: '《景德傳燈錄》卷三（慧可章）', en: 'Transmission of the Lamp, fasc. 3 (chapter on Huike)' } },
        zen: [],
        refs: WIKI(['慧可', '慧可'], ['Huike', 'Dazu_Huike']),
        facts: [
          { zh: '《傳燈錄》說，慧可在鄴都教了三十四年之後，改變打扮，混進酒館、屠宰場、街頭閒談的人群和雜役之間。', en: 'The Lamp says that after thirty-four years of teaching in Ye, Huike changed his appearance and mingled among wine shops, butchers’ stalls, street talk and menial workers.' },
          { zh: '有人問：你是修道的人，為什麼這樣？他說：「我自己在調伏自己的心，關你什麼事？」禪宗後來常說：修行不一定在寺院裡，在人群裡也能守住自己的心。', en: 'Asked why a man of the Way would live so, he answered that he was taming his own mind, which was no concern of the questioner. Chan later often said that practice does not need a monastery.' },
          { zh: '後來慧可在筦城縣匡救寺的山門下談無上道，聽的人很多。講《涅槃經》的辨和法師不高興，向縣官翟仲侃進讒言；慧可平靜接受，被認為是在「償債」，享年一百零七歲，約在隋開皇十三年（公元 593 年）。', en: 'Later, at Kuangjiu Temple in Guancheng county, Huike spoke on the supreme Way beneath the gate to a large crowd. The lecturer Dharma Master Bianhe, annoyed as his students drifted away, slandered him to the magistrate Zhai Zhongkan; Huike accepted it calmly — seen as “repaying a debt” — at age 107, around 593.' },
          { zh: '更早的《續高僧傳》另有說法：是道恆禪師因門下弟子被慧可吸引，懷恨在心，賄賂官府加害他。各書記載不一，年齡「一百零七歲」也只是傳說。', en: 'The earlier Continued Biographies tell it differently: the Chan master Daoheng, resentful that his followers were drawn to Huike, bribed the authorities to harm him. Accounts differ, and the age of 107 is only tradition.' },
          { zh: '《傳燈錄》說他葬在磁州滏陽縣；筦城的位置在這裡只是大概的。', en: 'The Lamp says he was buried at Fuyang in Cizhou; the map position of Guancheng here is approximate.' }
        ],
        text: {
          zh: '教了三十四年之後，慧可換了普通人的樣子，混進酒館、屠宰場和市集裡。有人看了不解：「你是修道的人，為什麼這樣？」慧可說：「我在調伏自己的心，關你什麼事？」後來他在筦城縣的寺門前講道，聽的人很多，卻惹惱了另一位講經的法師。慧可平靜地接受了這場災禍。禪宗說，把心守好，在哪裡都一樣；最吵、最雜的地方，才看得出心是不是真的安定。',
          en: 'After thirty-four years of teaching, Huike took on an ordinary look and mingled among wine shops, butchers’ stalls and markets. Onlookers asked, “You are a man of the Way — why live like this?” “I am taming my own mind. What is it to you?” Later he spoke on the Way before the gate of a temple in Guancheng county; many came, which angered another lecturing monk. Huike met the disaster calmly. Chan says that once the mind is well kept, any place is the same; in the loudest, messiest places one can best see whether the mind is truly settled.'
        }
      }
    ],
    segments: [
      { dur: 6500, zoom: 80, mode: 'walk', pts: [[112.45, 34.62], [112.7, 34.55], [112.93, 34.51]],
        caption: { walk: { zh: '神光離開洛陽，一路來到嵩山少林寺。', en: 'Shenguang left Luoyang and made his way to Shaolin Temple on Mount Song.' } } },
      { dur: 8500, zoom: 18, mode: 'walk', pts: [[112.93, 34.51], [113.4, 35.0], [114.0, 35.6], [114.62, 36.33]],
        caption: { walk: { zh: '達摩離去後，慧可帶著衣缽北上，來到北齊的都城鄴。', en: 'After Bodhidharma left, Huike carried the robe north to Ye, capital of the Northern Qi.' } } },
      { dur: 6000, zoom: 20, mode: 'wait', pts: null, kicker: { zh: '歲月', en: 'Years' }, title: { zh: '三十四年', en: 'Thirty-four Years' },
        caption: { wait: { zh: '慧可在鄴都說法多年，直到有一天，一位生病的居士來求懺罪。', en: 'Huike taught in Ye for many years — until one day an ailing layman came asking to be absolved.' } } },
      { dur: 7500, zoom: 18, mode: 'walk', pts: [[114.62, 36.33], [114.3, 35.8], [113.9, 35.2], [113.68, 34.75]],
        caption: { walk: { zh: '傳法給僧璨之後，慧可南下，改換樣貌，隱入市井，最後來到筦城。', en: 'After passing the Dharma to Sengcan, Huike went south, changed his appearance, slipped into the life of the marketplace, and finally reached Guancheng.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'huike');
  CHAPTERS[i] = chapter;

  MAP_LABELS.push(
    { at: [114.0, 37.4], zh: '北齊', en: 'Northern Qi', cls: 'realm', ch: 'huike' },
    { at: [112.45, 34.1], zh: '嵩山', en: 'Mt Song', cls: 'mtn', ch: 'huike' }
  );
})();
