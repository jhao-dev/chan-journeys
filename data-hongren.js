/* 五祖弘忍篇（Hongren chapter）— 以禪宗角度敘述
 * 引文取自《景德傳燈錄》（四部叢刊本）、《六祖壇經・行由品》（宗寶本）、《最上乘論》（即《修心要論》），已逐字核對。座標 [經度, 緯度]。
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
      zh: '弘忍在東山教導了許多年，座下弟子上千。他的法脈後來分成神秀的北宗與惠能的南宗，而惠能的故事，要從他接下的衣缽說起。',
      en: 'Hongren taught at East Mountain for many years to over a thousand disciples. His line later divided into Shenxiu’s Northern school and Huineng’s Southern school — and Huineng’s story begins with the robe he received.'
    },
    nextChapter: { id: 'huineng', label: { zh: '接續下一篇：六祖惠能', en: 'Next chapter: Huineng, the Sixth Patriarch' } },
    nextHint: { zh: '下一篇：六祖惠能，接過衣缽的人', en: 'Next: Huineng, who received the robe' },
    stations: [
      {
        id: 'huangmei', short: { zh: '出家', en: 'Child' }, num: '一', at: [115.94, 30.07], zoom: 110, scene: 'child', side: 1,
        place: { zh: '黃梅', en: 'Huangmei, Hubei' },
        title: { zh: '路遇四祖的童子', en: 'The Child Who Met the Fourth Patriarch' },
        source: { zh: '師問曰：「子何姓？」答曰：「姓即有，不是常姓。」師曰：「是何姓？」答曰：「是佛性。」師曰：「汝無性邪？」答曰：「性空故。」師默然，識其法器。', en: '“The master asked, ‘What is your surname?’ ‘I have a surname, but not an ordinary one.’ ‘What surname is it?’ ‘Buddha-nature.’ ‘Then you have no nature?’ ‘Its nature is empty, therefore.’ The master fell silent, recognizing a vessel of the Dharma.”', ref: { zh: '《景德傳燈錄》卷三（四祖道信章）', en: 'Transmission of the Lamp, fasc. 3 (chapter on Daoxin)' }, note: { zh: '這是禪宗燈史的記載，屬傳說性質；各書用字略有出入。', en: 'This is from the Chan lamp histories and is legendary in character; wording varies slightly between books.' } },
        zen: [],
        refs: WIKI(['弘忍', '弘忍'], ['Hongren', 'Hongren']).concat(WIKI(['道信', '道信'], ['Daoxin', 'Daoxin'])).concat(WIKI(['黃梅縣', '黃梅縣'], ['Huangmei County', 'Huangmei_County'])),
        facts: [
          { zh: '弘忍俗姓周，蘄州黃梅（今湖北黃梅）人。維基百科記他的生卒年為 601—674 年；《傳燈錄》則說他在上元二年（公元 675 年）圓寂，享年七十四歲。', en: 'Hongren, born Zhou, came from Huangmei in Qizhou (today’s Hubei). Wikipedia gives 601–674; the Transmission of the Lamp says he died in the second year of Shangyuan (675) at seventy-four.' },
          { zh: '《傳燈錄》說，弘忍小時候就與眾不同。有位智者見了他，感歎說：「這孩子只缺七種相，就和如來一樣了。」', en: 'The Lamp says Hongren was unusual even as a child. A wise man who saw him sighed, “This child lacks only seven marks to equal the Tathagata.”' },
          { zh: '那時四祖道信住在蘄春的破頭山（後來改稱雙峰山）。他在去黃梅縣的路上遇見這個孩子，問答之後，請侍者到孩子家裡，向他的父母求來讓他出家。父母因為前世的因緣，毫無難色。', en: 'Daoxin was then living on Potou Mountain in Qichun (later renamed Twin Peaks). On the road to Huangmei county he met the boy; after their exchange he sent an attendant to ask the parents to let him ordain, and they raised no objection.' },
          { zh: '「是佛性」「性空故」是禪宗常用的說法：人的本性就是佛性，而這佛性是空，沒有一個固定的「我」。', en: 'The answers “Buddha-nature” and “empty, therefore” are Chan’s way of saying that our true nature is Buddha-nature, and that it is empty — there is no fixed self.' }
        ],
        text: {
          zh: '弘忍出生在黃梅的周家，從小就很不尋常。傳說有一天，四祖道信在路上遇到一個小孩，問他：「你姓什麼？」孩子說：「有姓，但不是平常的姓。」「是什麼姓？」「是佛性。」「那你沒有性嗎？」「性是空的，所以沒有一個固定的。」道信心裡明白，這孩子是可以傳法的人，就把他帶回寺裡。從這一天起，弘忍就留在道信身邊，一生沒有離開禪門。',
          en: 'Hongren was born into the Zhou family of Huangmei and was no ordinary child. Legend says that one day the Fourth Patriarch Daoxin met a little boy on the road and asked, “What is your surname?” “I have one, but not an ordinary one.” “What is it?” “Buddha-nature.” “Then you have no nature?” “Its nature is empty, so there is nothing fixed.” Daoxin understood that here was someone who could carry the Dharma, and took the boy home to his temple. From that day Hongren stayed at Daoxin’s side and never left the Chan path.'
        }
      },
      {
        id: 'shuangfeng', short: { zh: '得法', en: 'Heir' }, num: '二', at: [115.73, 30.15], zoom: 110, scene: 'twinpeaks', side: -1,
        place: { zh: '雙峰山・四祖寺', en: 'Twin Peaks, Daoxin’s temple' },
        title: { zh: '侍奉師父，承接法脈', en: 'Serving the Master, Receiving the Lineage' },
        source: { zh: '攝心無寐，脅不至席者僅六十年。', en: '“He gathered his mind and did not sleep; for nearly sixty years his ribs never touched the mat.”', ref: { zh: '《景德傳燈錄》卷三（描述四祖道信）', en: 'Transmission of the Lamp, fasc. 3 (describing Daoxin)' } },
        zen: [],
        refs: WIKI(['道信', '道信'], ['Daoxin', 'Daoxin']).concat(WIKI(['雙峰山', '雙峰山'], ['East Mountain Teaching', 'East_Mountain_Teaching'])).concat(WIKI(['楞伽師資記', '楞伽師資記'], ['Lankavatara Sutra', 'Lankavatara_Sutra'])),
        facts: [
          { zh: '維基百科記載，道信在雙峰山（本名破頭山）教了三十年，吸引許多人前來。他是第一位在一個地方長期定居、帶領大眾修行的祖師，被認為建立了「達摩禪」的第一個固定道場。', en: 'Wikipedia says Daoxin taught on Twin Peaks (originally Potou Mountain) for thirty years and drew many followers; he is credited with the first settled monastic home for “Bodhidharma’s Zen.”' },
          { zh: '《傳燈錄》說，弘忍「後遇信大師，得法嗣」，也就是拜道信為師、得到他的法脈。道信生於公元 580 年，卒於 651 年。', en: 'The Lamp says Hongren “later met Master Xin and received the lineage.” Daoxin lived from 580 to 651.' },
          { zh: '《傳燈錄》還說，隋朝大業年間，道信帶領徒眾到吉州，遇到強盜圍城七十天，他教大家念《摩訶般若》，強盜遠遠望見城牆上好像有神兵，便退走了。', en: 'The Lamp also says that during the Daye era, when bandits besieged Jizhou for seventy days, Daoxin taught everyone to recite the Maha Prajna; the bandits saw what seemed like divine soldiers on the walls and withdrew.' },
          { zh: '這裡的座標只是大概位置；今天山上的寺廟叫四祖寺。', en: 'The map position is approximate; the temple there today is called Sizu (Fourth Patriarch) Temple.' }
        ],
        text: {
          zh: '弘忍在雙峰山跟著道信，日子過得平淡又扎實。據說道信為了收攝身心，近六十年不躺下睡覺。弘忍跟在這樣的師父身邊，承接了他的法脈。師父過世後，弘忍另在東山建立新的道場。',
          en: 'On Twin Peaks, Hongren followed Daoxin in a plain and steady life. Daoxin is said to have gathered his mind so firmly that for nearly sixty years he never lay down to sleep. Beside such a teacher Hongren received the lineage. After his master’s passing, Hongren founded a new center on East Mountain.'
        }
      },
      {
        id: 'dongshan', short: { zh: '東山', en: 'East Mtn' }, num: '三', at: [115.95, 30.19], zoom: 110, scene: 'eastmtn', side: 1,
        place: { zh: '東山寺', en: 'East Mountain Temple' },
        title: { zh: '東山法門，坐作並重', en: 'East Mountain Teaching: Sitting and Working' },
        source: { zh: '我從蘄州黃梅縣東禪寺來。其寺是五祖忍大師在彼主化，門人一千有餘。……大師常勸僧俗，但持《金剛經》，即自見性，直了成佛。', en: '“I come from Dongchan Temple in Huangmei county, Qizhou. The Fifth Patriarch Master Ren presides there, with over a thousand disciples. … The Master often urges monks and laypeople: just uphold the Diamond Sutra, and you will see your own nature and reach Buddhahood directly.”', ref: SUTRA, note: { zh: '這是一位客人對惠能說的話，說明當時東山寺的規模與教法。', en: 'These are the words of a traveler speaking to Huineng, describing the size and teaching of the temple at that time.' } },
        zen: [],
        refs: WIKI(['五祖寺', '五祖寺'], ['Wuzu Temple', 'Wuzu_Temple']).concat(WIKI(['東山法門', '東山法門'], ['East Mountain Teaching', 'East_Mountain_Teaching'])).concat(WIKI(['金剛經', '金剛經'], ['Diamond Sutra', 'Diamond_Sutra'])),
        facts: [
          { zh: '「東山法門」這個名字，來自道信、弘忍師徒所在的東山寺，所以他們的教法被這樣稱呼；弘忍的道場就是今天的五祖寺。', en: 'The name “East Mountain Teaching” comes from East Mountain Temple, where Daoxin, Hongren and their students taught; Hongren’s center is today’s Wuzu Temple.' },
          { zh: '《壇經》說，東禪寺有「門人一千有餘」；《傳燈錄》則說，神秀與惠能比偈時，會下有「七百餘僧」。兩書數字不同。', en: 'The Platform Sutra says Dongchan Temple had “over a thousand disciples”; the Lamp says that at the verse contest there were “over seven hundred monks.” The two books differ.' },
          { zh: '寺裡人人都有工作，像惠能就在碓坊舂米、劈柴，一做就是八個多月，日夜不息。', en: 'Everyone at the temple had work: Huineng pounded rice and split firewood for over eight months, day and night.' },
          { zh: '傳為弘忍所作的《最上乘論》（又名《修心要論》）說：「守心第一。此守心者，乃是涅槃之根本，入道之要門，十二部經之宗，三世諸佛之祖。」學界對作者是否真是弘忍有爭議。', en: 'The Treatise on the Supreme Vehicle (also Essentials of Cultivating the Mind), attributed to Hongren, says: “Guarding the mind comes first. This guarding of the mind is the root of nirvana, the gateway into the Way, the source of the twelve divisions of scripture, and the ancestor of all Buddhas of the three times.” Scholars debate whether Hongren himself wrote it.' }
        ],
        text: {
          zh: '弘忍在東山建起新的道場，前來學習的人越來越多，據說有一千多人。寺裡人人都要勞動，惠能就在碓坊舂米；空下來，大家坐禪修行。弘忍常勸僧俗兩眾：只要持誦《金剛經》，就能見到自己的本性。後人稱這裡的教法為「東山法門」。',
          en: 'At East Mountain Hongren built a new center, and more and more students came — over a thousand, it is said. Everyone at the temple worked, Huineng pounding rice in the mill; when there was time, all sat in meditation. Hongren often urged monks and laypeople alike: just uphold the Diamond Sutra and you will see your own nature. Later generations called this approach the “East Mountain Teaching.”'
        }
      },
      {
        id: 'choose', short: { zh: '選嗣', en: 'Heir' }, num: '四', at: [115.95, 30.19], zoom: 110, scene: 'choose', side: -1,
        place: { zh: '東山寺', en: 'East Mountain Temple' },
        title: { zh: '兩首偈，一個決定', en: 'Two Verses and One Decision' },
        source: { zh: '吾向汝說，世人生死事大，汝等終日只求福田，不求出離生死苦海，自性若迷，福何可救？汝等各去自看智慧，取自本心般若之性，各作一偈，來呈吾看。', en: '“I tell you: birth and death are the great matter, yet all day you seek only fields of merit and not release from the sea of suffering. If the self-nature is deluded, how can merit save you? Each of you, go and look at your own wisdom, take the prajna-nature of your own original mind, and write a verse to show me.”', ref: SUTRA },
        zen: [
          { title: '【禪師說禪】禪宗心法　開悟見性　解脫成就　直了成佛', url: 'https://n.yam.com/Article/20260717708263', by: BY, summary: { zh: '妙天禪師引用「本來無一物，何處惹塵埃」這句偈，說明心本來清淨，主張修行要明心見性、直了成佛。', en: 'Master Miaotian quotes “originally not a single thing — where could dust alight?” to teach that the mind is originally pure, and urges practice aimed directly at seeing one’s nature.' }, quote: '本來無一物，何處惹塵埃' }
        ],
        refs: WIKI(['神秀', '神秀'], ['Shenxiu', 'Shenxiu']).concat(WIKI(['惠能', '惠能'], ['Huineng', 'Huineng'])).concat(WIKI(['六祖壇經', '六祖壇經'], ['Platform Sutra', 'Platform_Sutra'])),
        facts: [
          { zh: '弘忍要大家各寫一首偈，是為了找出誰真正看見了自己的本性，再把衣缽傳給他。', en: 'By asking everyone for a verse, Hongren meant to find who had truly seen their own nature — and to pass the robe to that person.' },
          { zh: '神秀的偈寫在廊壁上，弘忍當眾稱讚，要大家依偈修行；私下卻對神秀說：「你這偈，只到了門外，還沒進門裡。」', en: 'Shenxiu’s verse went up on the corridor wall. Hongren praised it in public and told everyone to practice by it, but told Shenxiu in private: “You have only reached the door, not yet entered.”' },
          { zh: '惠能的偈出現後，弘忍怕有人嫉妒加害，用鞋把它擦掉，說：「也還沒見性。」大家便以為惠能沒選上。', en: 'When Huineng’s verse appeared, Hongren, fearing jealous harm, rubbed it out with his shoe and said, “This one has not yet seen the nature, either,” so that the others thought Huineng had not been chosen.' },
          { zh: '隔天，弘忍悄悄來到碓坊，看見惠能腰上綁著石頭舂米，說：「求道的人，為法忘軀，就該這樣吧？」問：「米熟了沒有？」惠能說：「米熟很久了，只欠篩了。」弘忍用杖在碓上敲了三下就走；惠能明白他的意思，三更時進到他房裡。', en: 'Next day Hongren slipped into the rice room, saw Huineng pounding with a stone tied to his waist and said, “A seeker of the Way forgets his body for the Dharma — is it not so?” “Is the rice ready?” “Ready long ago; it only wants sifting.” Hongren struck the mortar three times with his staff and left; Huineng understood and came to his room at the third watch.' },
          { zh: '兩首偈的全文與惠能接下來的故事，請看「六祖惠能篇」。', en: 'The full verses and what follows for Huineng are told in the Huineng chapter.' }
        ],
        text: {
          zh: '弘忍年紀大了，要選接班人。他把弟子們叫來，說：「你們整天只求福報，不求出離生死。每個人回去看看自己的智慧，各寫一首偈給我。」首座神秀寫了「身是菩提樹，心如明鏡臺」；舂米的惠能，也請人寫下「菩提本無樹，明鏡亦非臺」。弘忍看了，表面上不動聲色，用鞋把惠能的偈擦掉，說：「這個也還沒見性。」第二天他到碓坊，用杖敲了三下，惠能心領神會，三更就來到他房裡。接班人，就這樣在眾人不知道的時候決定了。',
          en: 'Hongren was growing old and needed an heir. He gathered his disciples and said: “All day you seek only merit, not release from birth and death. Each of you, look at your own wisdom and write a verse for me.” The senior monk Shenxiu wrote “The body is a bodhi tree, the mind a bright mirror stand”; Huineng, the rice-pounder, had someone write “Bodhi has no tree at all, nor has the mirror a stand.” Hongren showed nothing on the surface: he rubbed Huineng’s verse out with his shoe, saying “This one has not yet seen the nature either.” Next day he went to the rice room and struck the mortar three times with his staff. Huineng understood, and came to his room at the third watch. The heir was chosen without anyone else knowing.'
        }
      },
      {
        id: 'passing', short: { zh: '傳承', en: 'Lineages' }, num: '五', at: [115.95, 30.19], zoom: 110, scene: 'lineages', side: 1,
        place: { zh: '東山寺', en: 'East Mountain Temple' },
        title: { zh: '衣法已南，兩宗分流', en: 'The Robe Has Gone South; Two Schools Part' },
        source: { zh: '五祖歸，數日不上堂，眾疑，詣問曰：「和尚少病少惱否？」曰：「病即無，衣法已南矣！」問：「誰人傳授？」曰：「能者得之。」眾乃知焉。', en: '“The Fifth Patriarch returned and for several days did not enter the hall. The assembly wondered and asked, ‘Is the Reverend unwell?’ ‘I am not ill — the robe and Dharma have gone south!’ ‘Who received them?’ ‘The one who is able.’ Then the assembly understood.”', ref: SUTRA, note: { zh: '「能」指惠能。《傳燈錄》的說法略有不同：「吾道行矣，何更詢之？」「衣法誰得邪？」「能者得。」並說他過了三天才如此回答。', en: '“Able” (neng) puns on Huineng’s name. The Lamp words it slightly differently — “My Way has been carried out; why ask more?” “Who has the robe and Dharma?” “The able one has it” — and has this after three days.' } },
        zen: [],
        refs: WIKI(['神秀', '神秀'], ['Shenxiu', 'Shenxiu']).concat([{ title: '維基百科：北宗', url: 'https://zh.wikipedia.org/zh-tw/北宗' }]).concat(WIKI(['南宗', '南宗'], ['Southern Chan', 'Chan_Buddhism'])),
        facts: [
          { zh: '《傳燈錄》說，弘忍付法之後又過了四年，在上元二年（公元 675 年）對大家說：「我的事做完了，時候到了。」便進房坐著圓寂，享年七十四歲，塔建在黃梅的東山。維基百科則記他卒於 674 年。', en: 'The Lamp says that four years after passing on the Dharma, in 675, Hongren told the assembly, “My work is done; it is time,” and passed away seated in his room at seventy-four; his stupa was built on East Mountain at Huangmei. Wikipedia gives his death as 674.' },
          { zh: '神秀後來被稱為玉泉神秀，受到武則天（690—705 年在位）的尊崇，他這一系後人稱「北宗」。', en: 'Shenxiu, known as Yuquan Shenxiu, was honored by Empress Wu Zetian (r. 690–705); his line is called the Northern school.' },
          { zh: '惠能回到南方，他這一系後人稱「南宗」。後來神會大力宣揚，把兩邊說成「南頓北漸」，南宗漸漸成為禪宗的主流。', en: 'Huineng returned south and his line is called the Southern school. Later Shenhui promoted it vigorously, casting the two as “sudden south, gradual north,” and the Southern school became the mainstream of Chan.' },
          { zh: '《壇經》和《傳燈錄》都說，弘忍把衣缽傳出去的事，一開始沒有讓大家知道。', en: 'Both the Platform Sutra and the Lamp say Hongren’s passing of the robe was at first kept from the assembly.' }
        ],
        text: {
          zh: '惠能連夜離開之後，弘忍好幾天沒有上堂。大家擔心他生病，他說：「我沒有病，衣法已經往南去了。」弟子問：「誰得到了？」他說：「能者得之。」四年之後，弘忍在東山圓寂（約公元 674、675 年）。他的弟子神秀在北方受到朝廷尊崇，後人稱北宗；惠能在南方弘法，後人稱南宗。兩條路都從東山出發，而後來流傳最廣的，是惠能這一系。',
          en: 'After Huineng slipped away, Hongren did not enter the hall for several days. Worried they asked if he was ill. “I am not ill — the robe and Dharma have gone south.” “Who has them?” “The one who is able.” Four years later Hongren passed away at East Mountain (c. 674–675). His disciple Shenxiu was honored by the court in the north — the Northern school — while Huineng taught in the south, the Southern school. Both paths began at East Mountain; the one that spread furthest came through Huineng.'
        }
      }
    ],
    segments: [
      { dur: 6500, zoom: 80, mode: 'walk', pts: [[115.94, 30.07], [115.84, 30.11], [115.73, 30.15]],
        caption: { walk: { zh: '弘忍跟著道信，離開黃梅城，走進西北邊的雙峰山。', en: 'Hongren followed Daoxin out of Huangmei and into Twin Peaks to the northwest.' } } },
      { dur: 7000, zoom: 80, mode: 'walk', pts: [[115.73, 30.15], [115.84, 30.17], [115.95, 30.19]],
        caption: { walk: { zh: '道信過世後，弘忍帶著僧眾東行，在東山另建道場。', en: 'After Daoxin’s passing, Hongren led the community east and founded a new center on East Mountain.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '歲月', en: 'Years' }, title: { zh: '東山歲月', en: 'East Mountain Years' },
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
