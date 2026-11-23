/* 摩訶迦葉篇（Mahakasyapa chapter）— 以禪宗角度敘述
 * 引文取自《五燈會元》卷一（維基文庫）。座標 [經度, 緯度]；雞足山位置為約略。第 1–4 站同在王舍城一帶，地圖上共用同一標記。 */
(function () {
  const WU = { zh: '《五燈會元》卷一', en: 'Wudeng huiyuan (Compendium of Five Lamps), fasc. 1' };
  const WIKI = (zh, en) => [
    { title: '維基百科：' + zh[0], url: 'https://zh.wikipedia.org/zh-tw/' + zh[1] },
    { title: 'Wikipedia: ' + en[0], url: 'https://en.wikipedia.org/wiki/' + en[1] }
  ];
  const KREFS = WIKI(['大迦葉', '大迦葉'], ['Mahakasyapa', 'Mahākāśyapa']);
  const NOTE = { zh: '禪宗的傳承故事出自宋代前後的禪宗典籍，早期印度經典沒有；學者多把它視為禪宗自己的傳承說法。', en: 'The transmission story comes from Chan texts around the Song dynasty and is absent from early Indian sutras; scholars generally treat it as Chan’s own account.' };

  const chapter = {
    id: 'kasyapa', ready: true,
    name: { zh: '摩訶迦葉', en: 'Mahakasyapa' },
    role: { zh: '西天初祖・拈花微笑', en: 'First Indian Patriarch · The Smile' },
    fig: { robe: '#8a5a2b', band: '#b5a37c', fold: '#4a3320', staff: true, beard: false },
    intro: {
      v: '西天初祖', seal: '迦葉',
      en: 'Mahakasyapa, First Indian Patriarch',
      sub: { zh: '從摩竭陀到雞足山 · 禪宗心法的第一位接棒人', en: 'From Magadha to Kukkutapada — the first to receive Chan’s mind-teaching' },
      note: { zh: '依《五燈會元》等禪宗典籍；傳承故事屬禪宗傳統說法', en: 'Told from Chan texts such as the Wudeng huiyuan; the transmission story is Chan tradition' }
    },
    finale: {
      zh: '迦葉持著衣缽進入雞足山，等待彌勒下生。他傳給阿難的心法，一代一代傳到第二十八祖——達摩。',
      en: 'Kasyapa entered Mount Kukkutapada with the robe to await Maitreya. The teaching he gave Ananda passed from generation to generation to the twenty-eighth, Bodhidharma.'
    },
    nextChapter: { id: 'ananda', label: { zh: '接續下一篇：阿難', en: 'Next chapter: Ananda' } },
    nextHint: { zh: '下一篇：阿難 — 多聞第一的二祖', en: 'Next: Ananda, the second patriarch, foremost in hearing' },
    stations: [
      {
        id: 'magadha', short: { zh: '出家', en: 'Leaving' }, num: '一', at: [85.42, 25.03], zoom: 110, scene: 'kasorden', side: 1,
        place: { zh: '摩竭陀・王舍城一帶', en: 'Magadha, near Rajagriha' },
        title: { zh: '摩竭陀的婆羅門子，出家', en: 'A Brahmin of Magadha Leaves Home' },
        source: { zh: '摩竭陀國人也。姓婆羅門，父飲澤，母香誌……名曰迦葉波，此云飲光勝尊，蓋以金色為號也。繇是誌求出家，冀度諸有。佛言：「善來，比丘！」鬚髮自除，袈裟著體，常於眾中稱嘆第一。', en: '“A man of the country of Magadha, of Brahmin family; his father was Yinze and his mother Xiangzhi… He was called Kasyapa, meaning ‘drinking light, the honored one,’ named for his golden color. He resolved to leave home and cross over all existence. The Buddha said, ‘Come, bhikkhu!’ His hair and beard fell away of themselves and the robe clothed his body; among the assembly he was always praised as foremost.’”', ref: WU, note: NOTE },
        zen: [],
        refs: KREFS.concat(WIKI(['王舍城', '王舍城'], ['Rajgir', 'Rajgir'])),
        facts: [
          { zh: '《五燈會元》說他是摩竭陀國人、婆羅門出身，名叫迦葉波，意思是「飲光」。', en: 'The Wudeng huiyuan says he was a Brahmin of Magadha named Kasyapa, “drinker of light.”' },
          { zh: '這部書的傳說還講，他的前世曾為佛像貼金，所以身體像金色。這屬於傳說，不是歷史記載。', en: 'The same text tells that in a former life he had gilded a Buddha image, hence his golden color — a legend, not history.' },
          { zh: '佛教傳統稱他為「頭陀第一」，意思是在簡樸苦行上最為嚴格。', en: 'Buddhist tradition calls him foremost in ascetic practice (dhuta), the strictest in simple living.' }
        ],
        text: {
          zh: '迦葉出生在摩竭陀國，是婆羅門家的孩子，身體金色，所以叫「飲光」。他一心想出家，要超越生死。見到佛陀時，佛陀只說了一句「善來，比丘！」他的鬚髮就自然脫落，袈裟披上了身。後來大眾都稱讚他是修行嚴謹的第一人。',
          en: 'Kasyapa was born in Magadha into a Brahmin family, golden in color, hence “drinker of light.” He longed to leave home and cross beyond birth and death. When he met the Buddha, the Buddha said only, “Come, bhikkhu!” — and his hair fell away and the robe clothed him. The assembly later honored him as the most disciplined of all.'
        }
      },
      {
        id: 'vulture', short: { zh: '拈花', en: 'Flower' }, num: '二', at: [85.42, 25.03], zoom: 110, scene: 'kassmile', side: -1,
        place: { zh: '靈鷲山・王舍城', en: 'Vulture Peak, Rajagriha' },
        title: { zh: '拈花微笑，受付正法眼藏', en: 'The Flower and the Smile' },
        source: { zh: '世尊在靈山會上，拈花示眾。是時眾皆默然，唯迦葉尊者破顏微笑。世尊曰：「吾有正法眼藏，涅槃妙心，實相無相，微妙法門，不立文字，教外別傳，付囑摩訶迦葉。」世尊至多子塔前，命摩訶迦葉分座令坐，以僧伽梨圍之。遂告曰：「吾以正法眼藏密付於汝，汝當護持，傳付將來。」', en: '“On Vulture Peak the World-Honored One held up a flower before the assembly. All were silent; only the venerable Kasyapa broke into a smile. The Buddha said: ‘I have the treasury of the true Dharma eye, the wondrous mind of nirvana, the true mark that is no mark, the subtle Dharma gate, not set up in words, a special transmission outside the teachings. I entrust it to Mahakasyapa.’ At the Bahuputra stupa the World-Honored One had Mahakasyapa share his seat and wrapped him in the sanghati robe. He said: ‘I secretly entrust the treasury of the true Dharma eye to you; guard it and hand it on to the future.’”', ref: WU, note: NOTE },
        zen: [
          { title: '【禪師說禪】禪宗正法　教外別傳　佛心傳心　傳佛心印', url: 'https://n.yam.com/Article/20260301505110', by: { zh: '講述／悟覺妙天禪師・禪天下雜誌（愛傳媒「禪師說禪」專欄）', en: 'Teaching by Master Wujue Miaotian, Zen Cosmos column on yam.com' }, summary: { zh: '妙天禪師回顧靈山法會：世尊拈花不語，只有迦葉尊者會心微笑，於是把「正法眼藏、涅槃妙心」託付給他；禪師把這視為禪宗傳承的開端。', en: 'Master Miaotian recalls the Vulture Peak assembly: the Buddha held up a flower in silence, only Kasyapa smiled, and the “treasury of the true Dharma eye” was entrusted to him — the start of the Chan transmission.' } }
        ],
        refs: WIKI(['拈花微笑', '拈花微笑'], ['Flower Sermon', 'Flower_Sermon']).concat(KREFS),
        facts: [
          { zh: '「不立文字，教外別傳」說的是：這個心法不靠文字，要面對面、心對心來傳。', en: '“Not set up in words, a special transmission outside the teachings” means the teaching is passed face to face, mind to mind, not through writing.' },
          { zh: '《五燈會元》把「分座」說成佛陀在多子塔前把半個座位讓給迦葉、並用僧伽梨衣圍住他，這是第二個付法的場景。', en: 'The Wudeng huiyuan adds a second scene: at the Bahuputra stupa the Buddha shares his seat with Kasyapa and wraps him in his robe.' },
          { zh: '迦葉這一笑，讓禪宗後來把他尊為「西天第一祖」。', en: 'Because of that smile Chan later honored him as the first Indian patriarch.' }
        ],
        text: {
          zh: '靈鷲山上，佛陀拈起一朵花，一句話也不說。大眾面面相覷，只有迦葉笑了。佛陀說：「我有正法眼藏、涅槃妙心，不靠文字，在經教之外另外傳，我交給摩訶迦葉。」另一個場景裡，佛陀在多子塔前請迦葉分半個座位，並對他說：「我把正法眼藏悄悄託付給你，你要守護它，傳給將來的人。」',
          en: 'On Vulture Peak the Buddha lifted a flower and said nothing. The assembly looked at one another; only Kasyapa smiled. The Buddha said: “I have the treasury of the true Dharma eye and the wondrous mind of nirvana, passed outside the scriptures — I entrust it to Mahakasyapa.” In another scene, at the Bahuputra stupa, he invites Kasyapa to share his seat and says: “I quietly entrust the treasury of the Dharma eye to you; guard it and hand it on.”'
        }
      },
      {
        id: 'cave', short: { zh: '結集', en: 'Council' }, num: '三', at: [85.42, 25.03], zoom: 110, scene: 'kascouncil', side: 1,
        place: { zh: '王舍城・畢缽羅窟', en: 'Rajagriha, the Pippala cave' },
        title: { zh: '佛滅後，結集法眼', en: 'After the Buddha: Gathering the Dharma' },
        source: { zh: '迦葉告諸比丘：「佛已荼毗，金剛舍利，非我等事。我等宜當結集法眼，無令斷絕。」……迦葉乃白眾言：「此阿難比丘多聞總持，有大智慧，常隨如來，梵行清淨。所聞佛法，如水傳器，無有遺餘。」', en: '“Kasyapa told the monks: ‘The Buddha has been cremated; the diamond relics are not our business. We should now gather and compile the Dharma eye so that it is not cut off.’ … Kasyapa then said to the assembly: ‘This monk Ananda has heard much and holds all; he has great wisdom, was always with the Tathagata, and is pure in conduct. What he heard of the Dharma was passed on like water poured from vessel to vessel, with nothing lost.’”', ref: WU },
        zen: [],
        refs: WIKI(['第一次結集', '第一次結集'], ['First Buddhist council', 'First_Buddhist_council']).concat(KREFS),
        facts: [
          { zh: '《五燈會元》說，佛涅槃時迦葉不在場；他在王舍城的耆闍崛山畢缽羅窟中入定，看見佛陀在熙連河邊入滅，就趕去雙樹間哭拜。', en: 'The Wudeng huiyuan says Kasyapa was away when the Buddha entered nirvana; in meditation at the Pippala cave on Vulture Hill he saw it happen and hurried to the sal trees, weeping.' },
          { zh: '他號召有神通的弟子到王舍城的山窟集合，把佛陀的教法整理出來。阿難原本還沒證果，不能入會，後來證得阿羅漢果才進去。', en: 'He gathered the accomplished disciples at a cave near Rajagriha to compile the teachings. Ananda, not yet awakened, could not enter at first; once he attained arhatship he was admitted.' },
          { zh: '阿難宣誦經文，開頭是「如是我聞」，迦葉問大眾：他說得有錯嗎？大家說：沒有，與世尊所說相同。', en: 'Ananda recited, opening each sutra with “Thus have I heard”; Kasyapa asked whether he had erred, and all answered he had not.' },
          { zh: '一般佛教史稱這是「第一次結集」。', en: 'Buddhist history usually calls this the First Council.' }
        ],
        text: {
          zh: '佛陀入滅時，迦葉不在現場。他在山窟入定，看見佛陀去世，趕到雙樹間哭拜。火化之後，他對大家說：我們的事，是把佛陀的教法整理起來，不讓它斷掉。於是他召集弟子到王舍城的山窟，請多聞的阿難誦出佛陀說過的話，大家一一確認。',
          en: 'Kasyapa was away when the Buddha died. In meditation at a cave he saw it happen and hurried to the sal trees, weeping. After the cremation he told the monks: our task is to gather the Buddha’s teaching so it does not break off. He called the disciples to the cave near Rajagriha and asked Ananda, who had heard the most, to recite what the Buddha had said, and each point was confirmed.'
        }
      },
      {
        id: 'ananda', short: { zh: '付法', en: 'Heir' }, num: '四', at: [85.42, 25.03], zoom: 110, scene: 'kaspole', side: -1,
        place: { zh: '王舍城', en: 'Rajagriha' },
        title: { zh: '傳法阿難，倒卻剎竿', en: 'Handing the Dharma to Ananda' },
        source: { zh: '迦葉乃告阿難言：「我今年不久留，今將正法付囑於汝。汝善守護，聽吾偈言：法法本來法，無法無非法。何於一法中，有法有不法？」……一日問迦葉曰：「師兄！世尊傳金襴袈裟外，別傳個甚麼？」迦葉召阿難，阿難應諾。迦葉曰：「倒卻門前剎竿著！」', en: '“Kasyapa said to Ananda: ‘I will not remain long. Now I entrust the true Dharma to you; guard it well. Hear my verse: The Dharma of all dharmas is originally Dharma; no-Dharma is no non-Dharma. How, within one Dharma, is there Dharma and not-Dharma?’ … One day Ananda asked Kasyapa: ‘Elder brother, besides the gold-brocade robe, what else did the World-Honored One transmit?’ Kasyapa called, ‘Ananda!’ Ananda answered, ‘Yes?’ Kasyapa said: ‘Knock down the flagpole at the gate!’”', ref: WU, note: { zh: '「倒卻門前剎竿」：寺門前豎旗竿表示有法會，倒下旗竿表示法會結束。禪宗常用來說：付法就在這一應一答之間。', en: 'A flagpole raised at a temple gate signals a Dharma gathering; lowering it ends it. Chan reads the exchange as: the transmission is in that very call and reply.' } },
        zen: [],
        refs: KREFS.concat(WIKI(['阿難', '阿難'], ['Ānanda', 'Ānanda'])),
        facts: [
          { zh: '阿難問「世尊除了金襴袈裟，還傳了什麼？」迦葉只叫了一聲「阿難」，阿難答應，迦葉就說「倒卻門前剎竿著」。後世禪宗把這當成公案：答案就在那一聲應答之中。', en: 'Ananda asked what else the Buddha transmitted beside the robe; Kasyapa merely called “Ananda!” and Ananda answered. Chan later made this a koan: the answer is in that reply.' },
          { zh: '迦葉說自己「年不久留」，把正法交給阿難，阿難成為禪宗尊的「西天第二祖」。', en: 'Kasyapa, saying he would not stay long, entrusted the Dharma to Ananda, honored in Chan as the second Indian patriarch.' },
          { zh: '《五燈會元》還記載有外道問他「如何是我我？」，迦葉答：「覓我者是汝我。」', en: 'The same text records a non-Buddhist asking “What is the self of self?” and Kasyapa answering “The one who seeks the self is your self.”' }
        ],
        text: {
          zh: '結集之後，迦葉年紀大了，對阿難說：我快要走了，現在把正法託付給你，你好好守護，並說了一首偈：「法法本來法，無法無非法。」阿難曾問他：「佛陀除了傳金襴袈裟，還傳了什麼？」迦葉叫一聲「阿難」，阿難應了一聲「是」，迦葉說：「把門前的剎竿倒下吧！」',
          en: 'After the council, Kasyapa, growing old, told Ananda: I will not stay long; now I entrust the true Dharma to you — guard it well, and he spoke a verse, “The Dharma of all dharmas is originally Dharma; no-Dharma is no non-Dharma.” Ananda once asked, “Besides the gold robe, what else did the Buddha transmit?” Kasyapa called “Ananda!” and Ananda answered “Yes!” Kasyapa said, “Knock down the flagpole at the gate.”'
        }
      },
      {
        id: 'kukkuta', short: { zh: '入定', en: 'Samadhi' }, num: '五', at: [85.50, 24.80], zoom: 110, scene: 'kascave', side: 1,
        place: { zh: '雞足山（位置約略）', en: 'Mount Kukkutapada (approximate position)' },
        title: { zh: '入雞足山，等候彌勒', en: 'Into the Mountain to Await Maitreya' },
        source: { zh: '說偈已，乃持僧伽梨衣入雞足山，俟慈氏下生。', en: '“Having spoken the verse, he took the sanghati robe and entered Mount Kukkutapada, to await the birth of Maitreya.”', ref: WU },
        zen: [],
        refs: KREFS,
        facts: [
          { zh: '「慈氏」就是彌勒，佛教說他是未來佛。迦葉帶著佛陀的僧伽梨衣入山，是要把這件衣交給未來的彌勒佛。', en: '“Cishi” is Maitreya, the future Buddha; Kasyapa took the Buddha’s robe into the mountain to hand it on to him.' },
          { zh: '雞足山在今天印度比哈爾邦，這裡的標記位置只是大約，歷史上的確切地點不同書說法不一。', en: 'Mount Kukkutapada is in today’s Bihar; the marker here is approximate, since sources differ on the exact site.' },
          { zh: '禪宗把這個傳承延續下去：迦葉傳阿難，一代一代單傳，到第二十八祖達摩，才有東來的故事。', en: 'Chan continues the line: Kasyapa to Ananda, one to one, until the twenty-eighth, Bodhidharma, whose journey east begins the next chapter.' }
        ],
        text: {
          zh: '傳法給阿難之後，迦葉拿著佛陀傳給他的僧伽梨衣，走進雞足山，等著彌勒佛降生。禪宗說，他把法交給了阿難，自己則守著衣，守著對未來的承諾。從他開始，禪宗的心法一代一代傳下去，經過二十八代，到了達摩。',
          en: 'After handing the Dharma to Ananda, Kasyapa took the sanghati robe the Buddha had given him into Mount Kukkutapada, to wait for Maitreya. Chan says he gave the Dharma to Ananda and kept the robe, a promise to the future. From him the mind-teaching passed down twenty-eight generations to Bodhidharma.'
        }
      }
    ],
    segments: [
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '追隨佛陀', en: 'Following the Buddha' }, title: { zh: '靈鷲山', en: 'Vulture Peak' },
        caption: { wait: { zh: '迦葉跟隨佛陀修行，後來在靈鷲山上的法會中，成為那位會心微笑的人。', en: 'Kasyapa followed the Buddha, and at the Vulture Peak assembly became the one who smiled.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '佛陀涅槃', en: 'The Buddha’s passing' }, title: { zh: '結集', en: 'The Council' },
        caption: { wait: { zh: '佛陀入滅之後，迦葉召集弟子，把教法整理起來。', en: 'After the Buddha’s passing, Kasyapa called the disciples to gather the teaching.' } } },
      { dur: 6000, zoom: 110, mode: 'wait', pts: null, kicker: { zh: '晚年', en: 'Old age' }, title: { zh: '付法', en: 'Passing it on' },
        caption: { wait: { zh: '年紀大了，迦葉把正法交給阿難。', en: 'Growing old, Kasyapa gave the Dharma to Ananda.' } } },
      { dur: 6500, zoom: 80, mode: 'walk', pts: [[85.42, 25.03], [85.45, 24.95], [85.48, 24.86], [85.50, 24.80]],
        caption: { walk: { zh: '迦葉持著僧伽梨衣，離開王舍城，走向雞足山。', en: 'Kasyapa left Rajagriha with the robe and walked to Mount Kukkutapada.' } } }
    ]
  };

  const i = CHAPTERS.findIndex((c) => c.id === 'kasyapa');
  CHAPTERS[i] = chapter;
})();
