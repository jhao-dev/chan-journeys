/* 禪宗祖師行旅圖 — 篇章資料（Chapter data）
 * 新增篇章：在 CHAPTERS 加一筆，ready: true，並填入 stations（站點）與 segments（路段）。
 * 座標格式為 [經度, 緯度]。segments[i] 是從 stations[i] 走到 stations[i+1] 的路。
 */
window.CHAPTERS = [
  {
    id: 'buddha', ready: false,
    name: { zh: '釋迦牟尼佛', en: 'Shakyamuni Buddha' },
    role: { zh: '佛陀・拈花微笑', en: 'The Buddha · The Flower Sermon' }
  },
  {
    id: 'dharma', ready: true,
    name: { zh: '達摩東來', en: "Bodhidharma's Journey East" },
    role: { zh: '初祖・菩提達摩', en: 'First Patriarch · Bodhidharma' },
    zenChannel: { name: '悟覺妙天師父【印心佛法】', url: 'https://www.youtube.com/@thebuddhachan' },
    nextHint: { zh: '下一篇：二祖慧可（即將推出）', en: 'Next: Huike, the Second Patriarch (coming soon)' },
    stations: [
      {
        id: 'xiangzhi', short: { zh: '香至國', en: 'Gandha' }, num: '一', at: [79.70, 12.83], zoom: 3.0, scene: 'xiangzhi',
        place: { zh: '南天竺・香至國', en: 'Kingdom of Gandha, South India' },
        title: { zh: '王子出家，受命東行', en: 'The Prince Who Became a Monk' },
        source: { zh: '菩提達磨者，南天竺國香至王第三子也。姓剎帝利，本名菩提多羅。後遇二十七祖般若多羅至本國……', en: '“Bodhidharma was the third son of the King of Gandha in South India, of the warrior caste; his original name was Bodhitara. Later he met Prajnatara, the 27th patriarch, who came to his country…”', ref: { zh: '《景德傳燈錄》卷三', en: 'Jingde Record of the Transmission of the Lamp, vol. 3' } },
        zen: [
          { title: '達摩祖師傳（連載5-1）：智光初露　尊者密授心印', url: 'https://www.zencosmos.com.tw/2026/09/ancestor/64394/', by: { zh: '文／覺妙道蓮・禪天下雜誌 258 期', en: 'by Juemiao Daolian, Zen Cosmos magazine no. 258' }, summary: { zh: '文中依《景德傳燈錄》《五燈會元》細述：三王子菩提多羅與般若多羅尊者的「寶珠問答」；香至王駕崩後，他靜坐七日七夜求出家，尊者賜名「菩提達摩」，密授佛心印，並囑咐他在自己圓寂六十七年後乘船前往震旦。', en: 'Drawing on the classical records, the article tells of the prince’s “jewel dialogue” with Prajnatara, his seven days of meditation before ordination, the name “Bodhidharma” given by his teacher, the secret transmission of the mind-seal, and the instruction to sail to China sixty-seven years after his teacher’s passing.' } }
        ],
        refs: [
          { title: '維基百科：菩提達摩', url: 'https://zh.wikipedia.org/zh-tw/菩提達摩' },
          { title: 'Wikipedia: Bodhidharma', url: 'https://en.wikipedia.org/wiki/Bodhidharma' },
          { title: '維基百科：景德傳燈錄', url: 'https://zh.wikipedia.org/zh-tw/景德傳燈錄' }
        ],
        facts: [
          { zh: '「達摩」是「菩提達摩」（Bodhidharma）的簡稱，意思是「覺悟之法」。相傳這個名字是師父般若多羅替他取的。', en: '“Bodhidharma” means roughly “Dharma of awakening.” Tradition says the name was given by his teacher Prajnatara.' },
          { zh: '香至國的確切位置已難考證，一說在今印度南部坦米爾那都邦的甘吉布勒姆（Kanchipuram）一帶，地圖即依此說標示。', en: 'The exact site of Gandha is uncertain; one view places it near Kanchipuram in Tamil Nadu, which this map follows.' }
        ],
        text: {
          zh: '相傳達摩是南天竺香至國的第三王子，自幼聰慧過人。他拜第二十七祖般若多羅為師，修行四十多年，得到心法傳承，成為西天第二十八祖。師父臨終前叮囑他：「我走後，你要到東方的震旦（中國）去，把這份心法傳下去。」於是，年邁的達摩告別故鄉，登上了東行的海船。',
          en: 'Legend says Bodhidharma was the third prince of Gandha in South India. He studied for over forty years under Prajnatara, the 27th patriarch, received the mind-to-mind transmission, and became the 28th. Before passing away, his teacher told him: "After I am gone, go east to China and carry this teaching there." So the aged monk left his homeland and boarded a ship bound for the east.'
        }
      },
      {
        id: 'jiankang', short: { zh: '建康', en: 'Jiankang' }, num: '二', at: [118.78, 32.05], zoom: 5.0, scene: 'liang',
        place: { zh: '建康（今南京）', en: 'Jiankang (modern Nanjing)' },
        title: { zh: '會見梁武帝', en: 'Meeting Emperor Wu of Liang' },
        source: { zh: '帝問曰：「朕即位已來，造寺寫經度僧不可勝紀，有何功德？」師曰：「並無功德。」……帝又問：「如何是聖諦第一義？」師曰：「廓然無聖。」帝曰：「對朕者誰？」師曰：「不識。」帝不領悟。', en: 'The emperor asked: “Since taking the throne I have built temples, copied sutras and ordained monks beyond counting. What merit is there in this?” The master said: “No merit at all.” … “What is the first principle of the holy truth?” “Vast emptiness, nothing holy.” “Who is facing me?” “I don’t know.” The emperor did not understand.', ref: { zh: '《景德傳燈錄》卷三', en: 'Jingde Record of the Transmission of the Lamp, vol. 3' } },
        zen: [
          { title: '禪修釋疑：禪宗傳承　如來心印', url: 'https://www.zencosmos.com.tw/2025/01/chanqa/48220/', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌 238 期', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos no. 238' }, summary: { zh: '妙天禪師說明：梁武帝雖有善根，但造寺度僧所得只是「人天小果，有漏之因」；禪宗重在「直指人心、見性成佛」。並指出達摩所傳是以心傳心的「佛心印」。', en: 'Master Miaotian explains that Emperor Wu had good roots, but building temples and ordaining monks bring only limited, worldly rewards; Chan points directly to the mind so one may see one’s nature and become Buddha.' }, quote: '以佛之心，傳人之本心' },
          { title: '達摩祖師傳（連載5-1）：智光初露　尊者密授心印', url: 'https://www.zencosmos.com.tw/2026/09/ancestor/64394/', by: { zh: '文／覺妙道蓮・禪天下雜誌 258 期', en: 'by Juemiao Daolian, Zen Cosmos magazine no. 258' }, summary: { zh: '文中提到般若多羅尊者早已預言：南方君主只追求表相的功德事業，不明佛理，祖師不必在南方久留。', en: 'The article notes Prajnatara’s prophecy that the southern ruler would seek only outward merit, so Bodhidharma should not linger in the south.' } }
        ],
        refs: [
          { title: '維基百科：梁武帝', url: 'https://zh.wikipedia.org/zh-tw/梁武帝' },
          { title: '維基百科：菩提達摩', url: 'https://zh.wikipedia.org/zh-tw/菩提達摩' },
          { title: 'Wikipedia: Emperor Wu of Liang', url: 'https://en.wikipedia.org/wiki/Emperor_Wu_of_Liang' }
        ],
        facts: [
          { zh: '梁武帝蕭衍篤信佛法，曾四度到同泰寺「捨身」出家，大臣們只好花巨款把皇帝「贖」回來，因此人稱「皇帝菩薩」。', en: 'Emperor Wu (Xiao Yan) four times “gave himself” to Tongtai Temple as a monk; his ministers had to ransom him back with vast sums. He was called the “Bodhisattva Emperor.”' },
          { zh: '達摩說「並無功德」，意思是：為求福報而做的善事，只能得到有限的「福德」；真正的「功德」在於見到自己清淨的本心。', en: '“No merit” means: good deeds done for reward bring only limited blessings; true merit lies in seeing one’s own pure mind.' },
          { zh: '傳統說法達摩約在南朝梁的普通年間（公元 520 年代）抵達廣州；也有學者依其他史料認為他更早就到了北方，年代至今仍有爭議。', en: 'Tradition dates his arrival to the 520s; some scholars, citing other sources, think he reached northern China earlier. The dates remain debated.' }
        ],
        text: {
          zh: '梁武帝篤信佛教，蓋寺、抄經、供養僧人，數也數不清。他問達摩：「我做了這麼多，有什麼功德？」達摩說：「並無功德。」武帝又問：「什麼是最高的真理？」達摩答：「廓然無聖。」——空空蕩蕩，沒有什麼聖不聖。武帝不悅：「站在我面前的是誰？」達摩只回兩個字：「不識。」',
          en: 'Emperor Wu was a devout Buddhist who had built countless temples and supported countless monks. "How much merit have I earned?" he asked. "No merit at all," said Bodhidharma. "Then what is the highest holy truth?" "Vast emptiness — nothing holy." Displeased, the emperor demanded, "Who is this standing before me?" Bodhidharma answered: "I don\'t know."'
        }
      },
      {
        id: 'yangtze', short: { zh: '渡江', en: 'Yangtze' }, num: '三', at: [118.30, 32.62], zoom: 6.5, scene: 'reed',
        place: { zh: '長江', en: 'The Yangtze River' },
        title: { zh: '一葦渡江', en: 'Crossing the River on a Reed' },
        source: { zh: '師知機不契，是月十九日潛回江北。十一月二十三日屆于洛陽。', en: '“Knowing the moment was not ripe, on the nineteenth of that month the master quietly crossed to the north of the river. On the twenty-third of the eleventh month he reached Luoyang.”', ref: { zh: '《景德傳燈錄》卷三', en: 'Jingde Record of the Transmission of the Lamp, vol. 3' }, note: { zh: '原典只說「潛回江北」，踏蘆葦渡江是後世增添的傳說。', en: 'The early text only says he “quietly crossed north”; the reed is a later legend.' } },
        zen: [
          { title: '禪修釋疑：禪宗傳承　如來心印', url: 'https://www.zencosmos.com.tw/2025/01/chanqa/48220/', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌 238 期', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos no. 238' }, summary: { zh: '文中記述祖師「一葦渡江至少林寺」；武帝事後問寶誌公，寶誌公說此人是「觀音大士來傳佛心印」，武帝後悔莫及。', en: 'The teaching recounts the reed crossing to Shaolin, and how the monk Baozhi later told the emperor that the visitor had been Guanyin bringing the Buddha’s mind-seal — to the emperor’s regret.' } },
          { title: '達摩祖師傳（連載5-1）：智光初露　尊者密授心印', url: 'https://www.zencosmos.com.tw/2026/09/ancestor/64394/', by: { zh: '文／覺妙道蓮・禪天下雜誌 258 期', en: 'by Juemiao Daolian, Zen Cosmos magazine no. 258' }, summary: { zh: '文章解讀般若多羅的預言偈：祖師渡海先遇與「羊」有關之地（廣州古稱羊城），之後孤身渡過長江，前往北魏少林寺。', en: 'The article reads Prajnatara’s prophetic verse: he would first land at a place linked to “sheep” (Guangzhou, the “City of Rams”), then cross the Yangtze alone toward Shaolin.' } }
        ],
        refs: [
          { title: '維基百科：菩提達摩', url: 'https://zh.wikipedia.org/zh-tw/菩提達摩' },
          { title: '維基百科：寶誌', url: 'https://zh.wikipedia.org/zh-tw/寶誌' }
        ],
        facts: [
          { zh: '「一葦」語出《詩經・衛風・河廣》：「誰謂河廣？一葦杭之。」原本是說河面不寬，一束蘆葦就能渡過，後來成了達摩渡江的典故。', en: '“A single reed” comes from the Book of Songs: “Who says the river is wide? A single reed can cross it.” The line later became attached to Bodhidharma.' },
          { zh: '今南京長江北岸的長蘆寺、定山寺一帶，自古相傳就是達摩渡江上岸、停留過的地方。', en: 'Temples on the north bank near Nanjing, such as Changlu and Dingshan, have long claimed to be where he landed and stayed.' }
        ],
        text: {
          zh: '達摩知道與武帝的緣分未到，便悄然離開。來到長江邊，沒有船，他折下一枝蘆葦放在江面，踏葦而過，飄然北去。後來寶誌禪師告訴武帝：「那位是觀音大士，來傳佛心印的。」武帝懊悔，派人去追，卻已追不回了。這就是流傳千年的「一葦渡江」。',
          en: 'Seeing that the time was not right, Bodhidharma quietly left. At the Yangtze there was no boat, so he broke off a single reed, set it on the water, and stood upon it as it carried him north. Later the monk Baozhi told the emperor whom he had sent away. The emperor sent riders after him — too late. This is the legend of "crossing the river on a single reed."'
        }
      },
      {
        id: 'shaolin', short: { zh: '面壁', en: 'Shaolin' }, num: '四', at: [112.93, 34.51], zoom: 5.5, scene: 'wall',
        place: { zh: '嵩山・少林寺', en: 'Shaolin Temple, Mount Song' },
        title: { zh: '少林面壁九年', en: 'Nine Years Facing the Wall' },
        source: { zh: '寓止于嵩山少林寺，面壁而坐，終日默然。人莫之測，謂之壁觀婆羅門。', en: '“He stayed at Shaolin Temple on Mount Song, sitting facing a wall, silent all day. No one could fathom him; they called him the wall-gazing Brahmin.”', ref: { zh: '《景德傳燈錄》卷三', en: 'Jingde Record of the Transmission of the Lamp, vol. 3' } },
        zen: [
          { title: '禪修釋疑：禪宗傳承　如來心印', url: 'https://www.zencosmos.com.tw/2025/01/chanqa/48220/', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌 238 期', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos no. 238' }, summary: { zh: '妙天禪師說明禪宗的由來：從靈山會上拈花微笑、迦葉傳承，一脈單傳到二十八祖菩提達摩，東來成為中國禪宗初祖；這份傳承是「不傳之傳，以心傳心」。', en: 'Master Miaotian traces Chan from the Buddha’s flower sermon and Mahakasyapa, through 28 Indian patriarchs to Bodhidharma, who became the first patriarch in China — a transmission “from mind to mind.”' }, quote: '禪宗傳承，以心傳心，非身傳身' }
        ],
        refs: [
          { title: '維基百科：少林寺', url: 'https://zh.wikipedia.org/zh-tw/少林寺' },
          { title: 'Wikipedia: Shaolin Monastery', url: 'https://en.wikipedia.org/wiki/Shaolin_Monastery' }
        ],
        facts: [
          { zh: '少林寺建於北魏太和十九年（公元 495 年），是孝文帝為印度僧人跋陀所建，比達摩到來還早三十年左右。', en: 'Shaolin was founded in 495 by Emperor Xiaowen of the Northern Wei for the Indian monk Batuo — about thirty years before Bodhidharma arrived.' },
          { zh: '「壁觀」原意是讓心像牆壁一樣安定、不被外境動搖，後來才被理解為「面對牆壁打坐」。', en: '“Wall-gazing” originally meant making the mind steady as a wall, unmoved by the world; only later was it read as literally facing a wall.' },
          { zh: '少林寺後方的五乳峰上有「達摩洞」；寺中也曾保存一塊帶有人影紋路的「面壁石」。', en: 'A “Bodhidharma Cave” lies on Wuru Peak behind the temple, and the temple once kept a “wall-facing stone” said to bear his silhouette.' }
        ],
        text: {
          zh: '達摩北上，來到中岳嵩山的少林寺。他在寺後五乳峰的山洞裡，面對石壁靜坐，一坐就是九年，終日不發一語，人們稱他「壁觀婆羅門」。傳說他坐得太久，身影竟印進了石壁，就是後來的「面壁石」。少林寺也因此被尊為禪宗祖庭。',
          en: 'Traveling north, Bodhidharma reached Shaolin Temple on Mount Song. In a cave on the peak behind the temple he sat facing a stone wall — for nine years, without a word. People called him "the wall-gazing Brahmin." Legend says he sat so long that his shadow sank into the rock. Shaolin is honored to this day as the ancestral home of Chan (Zen).'
        }
      },
      {
        id: 'snow', short: { zh: '立雪', en: 'Snow' }, num: '五', at: [112.93, 34.51], zoom: 5.5, scene: 'snow',
        place: { zh: '嵩山・少林寺', en: 'Shaolin Temple, Mount Song' },
        title: { zh: '立雪斷臂，安心傳法', en: 'Standing in the Snow' },
        source: { zh: '其年十二月九日夜，天大雨雪，光堅立不動，遲明積雪過膝。……光潛取利刀，自斷左臂，置于師前。……光曰：「我心未寧，乞師與安。」師曰：「將心來，與汝安。」曰：「覓心了不可得。」師曰：「我與汝安心竟。」', en: '“On the night of the ninth of the twelfth month heavy snow fell; Guang stood firm and did not move, and by dawn the snow was above his knees… He took a sharp knife, cut off his left arm and laid it before the master… ‘My mind is not at peace; I beg you to pacify it.’ ‘Bring me your mind and I will pacify it.’ ‘I have searched for the mind and cannot find it.’ ‘Then I have pacified it for you.’”', ref: { zh: '《景德傳燈錄》卷三', en: 'Jingde Record of the Transmission of the Lamp, vol. 3' } },
        zen: [
          { title: '【禪師說禪】禪宗心法　開悟見性　直了成佛', url: 'https://n.yam.com/Article/20250319923179', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' }, summary: { zh: '妙天禪師以二祖向達摩求「安心」的公案說明：祖師要他把不安的心拿出來，他找不到，祖師便說已替他安好。禪師指出，心本來清淨，本來就沒有一顆「不安的心」，明白這點便能當下開悟見性。', en: 'Master Miaotian uses the “pacifying the mind” dialogue to teach that the mind is originally pure — there never was an “unsettled mind” to find; seeing this, one awakens on the spot.' } }
        ],
        refs: [
          { title: '維基百科：慧可', url: 'https://zh.wikipedia.org/zh-tw/慧可' },
          { title: 'Wikipedia: Dazu Huike', url: 'https://en.wikipedia.org/wiki/Dazu_Huike' },
          { title: 'JAANUS（哥倫比亞大學）：慧可斷臂圖 Eka danpi', url: 'https://projects.mcah.columbia.edu/jaanus/record/ekadanpi' },
          { title: '王開府〈燈前禪影：慧可與楞伽禪〉（臺灣師大）', url: 'https://web.ntnu.edu.tw/~t21015/Z-prs-10.doc' }
        ],
        facts: [
          { zh: '慧可俗姓姬，原名神光，遇見達摩時約四十歲。達摩後來傳他袈裟與《楞伽經》，作為傳法的憑證。', en: 'Huike, born Ji Shenguang, was about forty when he met Bodhidharma, who later gave him his robe and the Lankavatara Sutra as tokens of transmission.' },
          { zh: '另一部較早的史書《續高僧傳》記載，慧可的手臂是被盜賊砍斷的；「斷臂求法」是後來流傳的版本。', en: 'An earlier source, the Continued Biographies of Eminent Monks, says Huike lost his arm to bandits; the self-sacrifice version came later.' },
          { zh: '唐代較早的《傳法寶記》《楞伽師資記》記載：慧可到少林寺時，達摩正在面壁，慧可便在雪中耐心等候——這正是後世「斷臂圖」的畫題來源。', en: 'Early Tang texts say that when Huike arrived, Bodhidharma was facing the wall, so Huike waited patiently in the snow — the source of the later painting theme “Huike Offering His Arm.”' },
          { zh: '少林寺內至今有「立雪亭」，紀念這段立雪求法的故事。', en: 'Shaolin still has a “Standing-in-Snow Pavilion” commemorating the story.' }
        ],
        text: {
          zh: '有位名叫神光的僧人前來求法。寒冬大雪，他在洞外站了一整夜，雪深過膝。為表決心，他斷下自己的左臂。神光說：「我的心不安，請師父為我安心。」達摩說：「把心拿來，我替你安。」神光找了許久：「找不到心。」達摩說：「我已經替你安好了。」神光當下開悟，改名慧可，成為禪宗二祖。',
          en: 'A monk named Shenguang came seeking the teaching. Through a winter night he stood outside the cave as snow rose past his knees, and to show his resolve he cut off his own left arm. "My mind is not at peace," he said. "Please pacify it." "Bring me your mind and I will pacify it." After a long search: "I cannot find it." "There — I have pacified it for you." Shenguang awakened, took the name Huike, and became the Second Patriarch.'
        }
      }
    ],
    segments: [
      {
        dur: 24000, zoom: 1.5, landfall: 14,
        pts: [[79.70, 12.83], [80.4, 12.2], [80.9, 10.2], [81.9, 6.2], [83.5, 5.0], [88, 5.4], [93, 6.0], [97.5, 5.6], [99.6, 4.2], [101.6, 2.4], [103.9, 1.1], [106.5, 4.5], [110.2, 10.5], [113.5, 21.6], [113.26, 23.13], [113.9, 25.3], [115.4, 27.4], [116.4, 29.2], [117.6, 30.8], [118.78, 32.05]],
        place: { zh: '廣州', en: 'Guangzhou' }, placeAt: [113.26, 23.13],
        caption: {
          ship: { zh: '達摩乘海舶東行，歷經三年風浪，繞過錫蘭、穿越麻六甲海峽，渡過南海。', en: 'Bodhidharma sailed east for three years — around Ceylon, through the Strait of Malacca, across the South China Sea.' },
          walk: { zh: '船抵廣州。廣州刺史蕭昂以禮迎接，奏報朝廷；梁武帝遣使，迎請達摩北上京城建康。', en: 'He landed at Guangzhou. The governor, Xiao Ang, received him and reported to the court; Emperor Wu invited him north to the capital, Jiankang.' }
        }
      },
      {
        dur: 7000, zoom: 6.0, mode: 'reed',
        pts: [[118.78, 32.05], [118.66, 32.20], [118.48, 32.42], [118.30, 32.62]],
        caption: { reed: { zh: '話不投機，達摩離開建康，來到長江邊……', en: 'Their words did not meet. Bodhidharma left Jiankang for the river\'s edge…' } }
      },
      {
        dur: 11000, zoom: 2.4, mode: 'walk',
        pts: [[118.30, 32.62], [117.4, 33.0], [116.0, 33.6], [114.6, 34.2], [113.6, 34.45], [112.93, 34.51]],
        caption: { walk: { zh: '渡江之後，達摩進入北魏境內，一路向西北，前往中岳嵩山。', en: 'Across the river lay the Northern Wei. He walked northwest toward Mount Song, the Central Peak.' } }
      },
      {
        dur: 5000, zoom: 5.5, mode: 'wait', pts: null,
        caption: { wait: { zh: '春去秋來，九年過去了……', en: 'Springs and autumns passed — nine years in all…' } }
      }
    ]
  },
  {
    id: 'huike', ready: false,
    name: { zh: '二祖慧可', en: 'Huike' },
    role: { zh: '二祖・安心法門', en: 'Second Patriarch · Pacifying the Mind' }
  },
  {
    id: 'hongren', ready: false,
    name: { zh: '五祖弘忍', en: 'Hongren' },
    role: { zh: '五祖・東山法門', en: 'Fifth Patriarch · East Mountain Teaching' }
  },
  {
    id: 'huineng', ready: false,
    name: { zh: '六祖惠能', en: 'Huineng' },
    role: { zh: '六祖・本來無一物', en: 'Sixth Patriarch · Originally Nothing' }
  }
];

/* 地圖上的地名、海名與河流（Map labels & rivers） */
window.MAP_LABELS = [
  { at: [78.5, 21.5], zh: '天竺', en: 'INDIA', sub: { zh: '印度', en: 'Tianzhu' }, cls: 'realm' },
  { at: [111.5, 37.6], zh: '北魏', en: 'NORTHERN WEI', cls: 'realm' },
  { at: [110.0, 26.6], zh: '南朝・梁', en: 'LIANG', cls: 'realm' },
  { at: [86.5, 31.2], zh: '喜馬拉雅', en: 'Himalaya', cls: 'mtn' },
  { at: [112.45, 34.62], zh: '洛陽', en: 'Luoyang', cls: 'city' },
  { at: [108.94, 34.34], zh: '長安', en: "Chang'an", cls: 'city' },
  { at: [66.5, 13.0], zh: '阿拉伯海', en: 'Arabian Sea', cls: 'sea' },
  { at: [88.5, 14.0], zh: '孟加拉灣', en: 'Bay of Bengal', cls: 'sea' },
  { at: [79.0, 2.5], zh: '印度洋', en: 'Indian Ocean', cls: 'sea' },
  { at: [113.5, 13.0], zh: '南海', en: 'South China Sea', cls: 'sea' },
  { at: [125.5, 28.0], zh: '東海', en: 'East China Sea', cls: 'sea' },
  { at: [108.6, 31.25], zh: '長江', en: 'Yangtze', cls: 'river' },
  { at: [108.3, 39.2], zh: '黃河', en: 'Yellow River', cls: 'river' }
];

window.RIVERS = [
  [[97.0, 33.0], [98.8, 30.5], [99.2, 27.8], [100.6, 26.6], [101.9, 26.4], [103.0, 27.6], [104.6, 28.8], [106.5, 29.5], [108.4, 30.6], [110.3, 31.0], [111.3, 30.7], [112.2, 29.9], [113.1, 29.4], [114.3, 30.6], [115.6, 29.85], [116.6, 30.1], [117.6, 30.9], [118.4, 31.6], [118.8, 32.1], [119.6, 32.25], [120.5, 31.95], [121.8, 31.4]],
  [[96.5, 34.8], [99.0, 34.9], [100.5, 34.0], [102.0, 35.4], [103.8, 36.1], [105.3, 37.4], [106.4, 38.6], [107.3, 40.3], [108.8, 40.8], [110.8, 40.4], [111.2, 39.0], [110.5, 37.0], [110.4, 35.4], [110.3, 34.6], [111.5, 34.8], [113.0, 34.9], [114.6, 35.0], [116.0, 35.9], [117.2, 36.8], [118.9, 37.75]]
];

/* 山與浪紋（Decorative peaks & waves） */
window.PEAKS = [
  [74.5, 35.6], [76.8, 34.6], [78.6, 32.8], [80.6, 30.8], [82.8, 29.6], [85.0, 28.6], [87.2, 28.2], [89.6, 28.3], [92.0, 28.4], [94.6, 29.2],
  [76.0, 36.6], [79.5, 34.8], [84.0, 31.0], [88.5, 30.4], [93.0, 30.6],
  [112.6, 34.62], [113.25, 34.6], [103.5, 31.6], [110.0, 33.9]
];
window.WAVES = [
  [64, 18], [68, 9], [72, 6], [70, 15], [63, 7], [84.5, 9], [87, 18.5], [91, 11], [86, 6.8], [76, 4.5], [82, 1.5], [70, 2],
  [95, 12], [96.5, 1.5], [110, 7], [115, 16.5], [117, 9], [111, 3], [107.8, 13], [119.5, 14], [124, 31], [123, 25], [122.5, 36.5], [125.5, 34], [120, 21], [119.5, 38.6], [128, 25], [90, 2]
];
