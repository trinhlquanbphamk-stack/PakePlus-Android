/**
 * 《大学英语IV（写作）》期末智能化刷题系统 - 核心题库数据源（纯净无错版）
 */

const multipleChoiceQuestions = [
  {
    id: 1,
    question: "Slang, jargon, dialectal and obsolete words are called _______.",
    question_zh: "俚语、行话、方言和陈旧词被称为_______。",
    options: [
      { text: "nonstandard words", isCorrect: true, text_zh: "非标准词" },
      { text: "common words", isCorrect: false, text_zh: "常用词" },
      { text: "formal words", isCorrect: false, text_zh: "正式词" },
      { text: "technical words", isCorrect: false, text_zh: "技术词" }
    ],
    tag: "Level of Language (语言级别)",
    hook: "非主流三巨头（俚语、行话、方言） ➔ 锁定 Nonstandard（非标准词）。"
  },
  {
    id: 2,
    question: "Which of the following belongs to specific words?",
    question_zh: "下列哪一个属于具体词？",
    options: [
      { text: "animal", isCorrect: false, text_zh: "动物" },
      { text: "scientist", isCorrect: false, text_zh: "科学家" },
      { text: "laugh", isCorrect: false, text_zh: "笑" },
      { text: "astronomer", isCorrect: true, text_zh: "天文学家" }
    ],
    tag: "Word Selection (选词的具体与抽象)",
    hook: "范围越窄越具体。scientist 是大框，astronomer（天文学家）是具体搬砖人。"
  },
  {
    id: 3,
    question: "Which of the following is used in important documents and in serious, often ceremonial, speeches?",
    question_zh: "下列哪种语言用于重要文件和严肃的、通常是仪式性的演讲中？",
    options: [
      { text: "Colloquial language", isCorrect: false, text_zh: "口语" },
      { text: "Informal language", isCorrect: false, text_zh: "非正式语言" },
      { text: "Formal language", isCorrect: true, text_zh: "正式语言" },
      { text: "Foreign language", isCorrect: false, text_zh: "外语" }
    ],
    tag: "Level of Language (语言级别)",
    hook: "隆重场合穿正装 ➔ 选 Formal（正式语言）。"
  },
  {
    id: 4,
    question: "When selecting the correct words in writing, the tone is usually suggested to be _______.",
    question_zh: "在写作中选择正确的词汇时，通常建议语气要_______。",
    options: [
      { text: "ironic", isCorrect: false, text_zh: "讽刺的" },
      { text: "humorous", isCorrect: false, text_zh: "幽默的" },
      { text: "reasonable", isCorrect: true, text_zh: "理性的/讲道理的" },
      { text: "invective", isCorrect: false, text_zh: "谩骂的" }
    ],
    tag: "Writing Tone (写作语气)",
    hook: "写作不能阴阳怪气(ironic)和骂人(invective)，要讲道理 ➔ Reasonable（理性的）。"
  },
  {
    id: 5,
    question: "Which is the topic of “Celebrities are poor models because the way they dress, talk and behave”?",
    question_zh: "“名人们是糟糕的榜样，因为他们穿着、说话和行为的方式”这句话的主题（Topic）是什么？",
    options: [
      { text: "celebrities", isCorrect: true, text_zh: "名人们" },
      { text: "poor models", isCorrect: false, text_zh: "糟糕的榜样" },
      { text: "the way", isCorrect: false, text_zh: "方式" },
      { text: "dress, talk and behave", isCorrect: false, text_zh: "穿着、说话和行为" }
    ],
    tag: "Topic Identification (主题识别)",
    hook: "找 because 前面最核心的名词。because 之前，主语最大 ➔ celebrities。"
  },
  {
    id: 6,
    question: "Which is the topic of “SUVs are inferior to cars because they are harder to control, more expensive, and dangerous to the environment”?",
    question_zh: "“SUV不如轿车，因为它们更难控制、更昂贵且对环境有害”这句话的主题（Topic）是什么？",
    options: [
      { text: "SUVs", isCorrect: true, text_zh: "SUV" },
      { text: "inferior", isCorrect: false, text_zh: "劣等的" },
      { text: "cars", isCorrect: false, text_zh: "轿车" },
      { text: "harder", isCorrect: false, text_zh: "更难" }
    ],
    tag: "Topic Identification (主题识别)",
    hook: "同上，because 之前，核心主语最大 ➔ SUVs。"
  },
  {
    id: 7,
    question: "To choose the correct words, you should consider the following factors except______.",
    question_zh: "为了选择正确的词汇，你应该考虑以下因素，除了_______。",
    options: [
      { text: "Accuracy", isCorrect: false, text_zh: "准确性" },
      { text: "Level of language", isCorrect: false, text_zh: "语言级别" },
      { text: "Tone", isCorrect: false, text_zh: "语气" },
      { text: "Fanciness", isCorrect: true, text_zh: "华丽/花哨" }
    ],
    tag: "Word Selection Principles (选词原则)",
    hook: "学术写作务实第一，拒绝花里胡哨 ➔ 排除 Fanciness。"
  },
  {
    id: 8,
    question: "Which sentence contains a dangling modifier?",
    question_zh: "哪句话包含悬挂修饰语？",
    options: [
      { text: "Having almost no money, my survival depended on my parents.", isCorrect: true, text_zh: "因为几乎没有钱，我的生存只能依靠我的父母。" },
      { text: "I occasionally enjoy a drink.", isCorrect: false, text_zh: "我偶尔喜欢喝一杯。" },
      { text: "The dog slowly bites.", isCorrect: false, text_zh: "那只狗慢慢地咬。" },
      { text: "None of them.", isCorrect: false, text_zh: "以上都不是。" }
    ],
    tag: "Dangling Modifier (悬挂修饰语)",
    hook: "Having almost no money（几乎没钱）修饰的必须是“人”（I），不能是“生存”（survival），主语错位即为“悬挂”。"
  },
  {
    id: 9,
    question: "Which sentence contains a misplaced modifier?",
    question_zh: "哪句话包含错位修饰语？",
    options: [
      { text: "They could see the Goodyear blimp sitting on the front lawn.", isCorrect: true, text_zh: "他们能看见固特异飞艇正坐在前草坪上。" },
      { text: "Our phone rang almost fifteen times last night.", isCorrect: false, text_zh: "昨晚我们的电话响了差不多十五次。" },
      { text: "He cleverly plays his cards.", isCorrect: false, text_zh: "他聪明地玩着他的牌。" },
      { text: "None of them.", isCorrect: false, text_zh: "以上都不是。" }
    ],
    tag: "Misplaced Modifier (错位修饰语)",
    hook: "飞艇（blimp）不可能自己老老实实坐在草坪上（sitting on the lawn），修饰语位置放错产生歧义。"
  },
  {
    id: 10,
    question: "Which of the following is considered a good technique in sentence writing?",
    question_zh: "在句子写作中，下列哪项被认为是好的技巧？",
    options: [
      { text: "Fragments", isCorrect: false, text_zh: "句子残缺" },
      { text: "Run-ons", isCorrect: false, text_zh: "连写句" },
      { text: "Variety in patterns", isCorrect: true, text_zh: "句式多样化" },
      { text: "Dangling modifiers", isCorrect: false, text_zh: "悬挂修饰语" }
    ],
    tag: "Sentence Writing Techniques (句子写作技巧)",
    hook: "残缺(A)、连写(B)、悬挂(D)都是严重的语法缺陷，好技术只有 Variety in patterns（句式多样化）。"
  },
  {
    id: 11,
    question: "Sentences with two complete thoughts that run together with no adequate sign given to mark the break between them are called ________.",
    question_zh: "两个完整的想法连着写在一起，且中间没有给出足够的标记来表示断句，这种句子被称为_______。",
    options: [
      { text: "fragments", isCorrect: false, text_zh: "句子残缺" },
      { text: "run-ons", isCorrect: true, text_zh: "连写句" },
      { text: "dangling modifiers", isCorrect: false, text_zh: "悬挂修饰语" },
      { text: "modifiers", isCorrect: false, text_zh: "错位修饰语" }
    ],
    tag: "Run-ons (连写句缺陷)",
    hook: "两句完整的话没加标点直接在一起‘跑’ ➔ 叫 run-ons（连写句）。"
  },
  {
    id: 12,
    question: "Which of the following is a good thesis statement?",
    question_zh: "下列哪项是一个好的中心思想句（Thesis）？",
    options: [
      { text: "I want to talk about my parents.", isCorrect: false, text_zh: "我想谈谈我的父母。" },
      { text: "The subject of my paper is family love.", isCorrect: false, text_zh: "我论文的主题是家庭之爱。" },
      { text: "I’d like to tell you something about traffic jams in Guangzhou.", isCorrect: false, text_zh: "我想告诉你一些关于广州交通拥堵的事情。" },
      { text: "There are significant differences between family love in China and the United States.", isCorrect: true, text_zh: "中国和美国在家庭之爱方面存在着显著的差异。" }
    ],
    tag: "Thesis Statement (中心思想句筛选)",
    hook: "前三项都是在‘宣布话题’，只有 D 提出了具体、可展开辩论的‘清晰观点’。"
  },
  {
    id: 13,
    question: "Which of the following is a good thesis statement?",
    question_zh: "下列哪项是一个好的中心思想句（Thesis）？",
    options: [
      { text: "Men and women are very different.", isCorrect: false, text_zh: "男人和女人是非常不同的。" },
      { text: "Disease has shaped human history.", isCorrect: false, text_zh: "疾病塑造了人类历史。" },
      { text: "A typhoon hit Shenzhen this summer.", isCorrect: false, text_zh: "今年夏天一场台风袭击了深圳。" },
      { text: "Television is harmful because it creates passivity, discourages communication, and presents a false picture of reality.", isCorrect: true, text_zh: "电视是有害的，因为它会让人变得消极、阻碍交流并呈现虚假的现实。" }
    ],
    tag: "Thesis Statement (中心思想句筛选)",
    hook: "A和B太宽泛，C只是客观事实。D有清晰的态度、因果关系（because）和明确的分论点，最标准。"
  },
  {
    id: 14,
    question: "Which of the following description appeals to the sense of touch?",
    question_zh: "下列哪项描写诉诸于触觉？",
    options: [
      { text: "The only sounds I heard were the quiet squeaking of sensible white shoes.", isCorrect: false, text_zh: "我唯一听到的声音是那双务实的白色鞋子发出的轻微吱吱声。（听觉）" },
      { text: "The clean white corridors of the hospital resembled the set of a science fiction movie.", isCorrect: false, text_zh: "医院干净的白色走廊就像科幻电影的布景。（视觉）" },
      { text: "The hospital bed sheet felt as rough and heavy as a feed sack.", isCorrect: true, text_zh: "医院的床单感觉像饲料袋一样又粗糙又沉重。（触觉）" },
      { text: "The green beams on the hospital cafeteria tray smelled stale and waxy.", isCorrect: false, text_zh: "医院食堂托盘上的绿豆闻起来有一股陈旧和蜡味。（嗅觉）" }
    ],
    tag: "Sensory Details (感官细节描写)",
    hook: "摸到了粗糙（rough） and 沉重（heavy） ➔ 锁定 touch（触觉）。"
  },
  {
    id: 15,
    question: "Which of the following is NOT helpful for writing a good conclusion?",
    question_zh: "下列哪项对写好结论（结尾段）没有帮助？",
    options: [
      { text: "a summary of the essay’s major points", isCorrect: false, text_zh: "文章主要观点的总结" },
      { text: "an evaluation of the importance of the essay’s subject", isCorrect: false, text_zh: "对文章主题重要性的评估" },
      { text: "a recommendation or call to action", isCorrect: false, text_zh: "建议或呼吁行动" },
      { text: "a further example", isCorrect: true, text_zh: "进一步的例子" }
    ],
    tag: "Essay Conclusion (结尾段写作)",
    hook: "结尾段的任务是收网和总结，绝对不能再‘挖新坑’去举新的例子（a further example）。"
  },
  {
    id: 16,
    question: "Which of the following is NOT helpful in writing a good conclusion?",
    question_zh: "下列哪项对写好结论没有帮助？",
    options: [
      { text: "a summary of the essay’s major points", isCorrect: false, text_zh: "文章主要观点的总结" },
      { text: "a warning", isCorrect: false, text_zh: "警告" },
      { text: "a quotation", isCorrect: false, text_zh: "引用" },
      { text: "a comparison of reasons", isCorrect: true, text_zh: "理由的对比" }
    ],
    tag: "Essay Conclusion (结尾段写作)",
    hook: "结尾段不适合再展开复杂的‘新一轮理由对比’（a comparison of reasons），那属于正文段的工作。"
  },
  {
    id: 17,
    question: "Which of the following is NOT helpful in writing a good beginning?",
    question_zh: "下列哪项对写好开头段没有帮助？",
    options: [
      { text: "Asking a question", isCorrect: false, text_zh: "提问" },
      { text: "Giving a definition", isCorrect: false, text_zh: "下定义" },
      { text: "Using a quotation", isCorrect: false, text_zh: "使用引用" },
      { text: "A warning", isCorrect: true, text_zh: "一个警告" }
    ],
    tag: "Essay Beginning (开头段写作)",
    hook: "开头是为了引入和建立联系，上来就给‘警告’（A warning）不妥。"
  },
  {
    id: 18,
    question: "Which sentence is considered concise writing?",
    question_zh: "哪句话被认为是精炼的写作？",
    options: [
      { text: "He repeated the winning bingo number over again.", isCorrect: false, text_zh: "他把中奖的宾果游戏号码又重复了一遍。（repeat 和 over again 语义冗余）" },
      { text: "The group consensus of opinion was that the pizza crust tasted like cardboard.", isCorrect: false, text_zh: "小组的共同意见是披萨皮吃起来像纸板。（consensus 本身就是共同意见）" },
      { text: "The reason why the starving novelist drove fifty miles to a new restaurant was because it was serving his favorite chicken dish, Pullet Surprise.", isCorrect: false, text_zh: "原因是因为...（The reason why... was because 句式结构冗余）" },
      { text: "The stolen gateway car turned the corner.", isCorrect: true, text_zh: "那辆被盗的逃跑车辆转了弯。" }
    ],
    tag: "Concise Style (精炼句式)",
    hook: "排除所有语义、同义词堆砌的累赘。最干净利落的短句 D 最精炼。"
  },
  {
    id: 19,
    question: "Which sentence is considered concise writing?",
    question_zh: "哪句话被认为是精炼的写作？",
    options: [
      { text: "The gateway car, which was stolen, turned the corner.", isCorrect: false, text_zh: "那辆逃跑的车（它是被偷的）转了弯。（定语从句啰嗦）" },
      { text: "Each candidate will be evaluated on an individual basis.", isCorrect: false, text_zh: "每个候选人都将在个人的基础上接受评估。（on an individual basis 属于废话词组）" },
      { text: "Now new innovation is important for the development of technology.", isCorrect: false, text_zh: "现在，新的创新对于技术的发展很重要。（new 和 innovation 语义重复）" },
      { text: "People expect to live at least seventy years.", isCorrect: true, text_zh: "人们期望至少活七十岁。" }
    ],
    tag: "Concise Style (精炼句式)",
    hook: "排除冗余，最纯粹、最平实的表达 D 是精炼风格的最佳体现。"
  },
  {
    id: 20,
    question: "Which sentence is a run-on sentence?",
    question_zh: "哪句话是连写句（逗号粘连错误）？",
    options: [
      { text: "No one came to the party, it was a complete failure.", isCorrect: true, text_zh: "没有人来参加派对，这是一次彻底的失败。" },
      { text: "It being Christmas, the government offices were closed.", isCorrect: false, text_zh: "因为是圣诞节，政府办公室关闭了。（独立主格，正确）" },
      { text: "The man, as you know, is good for nothing.", isCorrect: false, text_zh: "正如你所知，那个人一无是处。（正确）" },
      { text: "She enjoys listening to pop music; however, her sister doesn’t like it.", isCorrect: false, text_zh: "她喜欢听流行音乐；然而，她的姐姐不喜欢。（分号分隔，正确）" }
    ],
    tag: "Run-ons (连写句缺陷)",
    hook: "两个完整的大句子（No one came... / it was...），只丢一个逗号在中间直接连接，没有连词，是经典的语法错误。"
  },
  {
    id: 21,
    question: "Which information is optional in the main heading of resumes and cover letters?",
    question_zh: "在简历和自荐信的主标题区域，以下哪项信息是可选（非必填）的？",
    options: [
      { text: "name", isCorrect: false, text_zh: "姓名" },
      { text: "educational background", isCorrect: true, text_zh: "教育背景" },
      { text: "address", isCorrect: false, text_zh: "地址" },
      { text: "telephone numbers", isCorrect: false, text_zh: "电话号码" }
    ],
    tag: "Business Writing (简历常识)",
    hook: "最顶部的‘主标题区（Main heading）’属于个人联系卡片，只需要姓名 and 联系方式。教育背景应在下方专有板块展示。"
  },
  {
    id: 22,
    question: "Which of the following is grammatically wrong?",
    question_zh: "下列哪项在语法上是错误的？",
    options: [
      { text: "The cat jumped from step to step, it gracefully landed with each jump.", isCorrect: true, text_zh: "猫从台阶跳到台阶，它每次跳跃都优雅地着陆。" },
      { text: "The cat jumped from step to step; it gracefully landed with each jump.", isCorrect: false, text_zh: "（使用分号连接，正确）" },
      { text: "The cat jumped from step to step. It gracefully landed with each jump.", isCorrect: false, text_zh: "（拆成两句，正确）" },
      { text: "The cat jumped from step to step, and it gracefully landed with each jump.", isCorrect: false, text_zh: "（加连词and，正确）" }
    ],
    tag: "Run-ons (连写句缺陷)",
    hook: "依然在考逗号粘连的 Run-on 错误。两句没加连词时，逗号必错，必须用分号（;）或 and 救场。"
  },
  {
    id: 23,
    question: "Which of the following is grammatically wrong?",
    question_zh: "下列哪项在语法上是错误的？",
    options: [
      { text: "Dream of the Red Mansion is a best-known novel.", isCorrect: false, text_zh: "《红楼梦》是一部闻名的小说。" },
      { text: "How to operate this computer?", isCorrect: true, text_zh: "如何操作这台电脑？" },
      { text: "The owner and captain refused to leave his distressed ship.", isCorrect: false, text_zh: "船长和船主拒绝离开他遇险的船只。" },
      { text: "His hair is longer than yours.", isCorrect: false, text_zh: "他的头发比你的长。" }
    ],
    tag: "Sentence Fragment (句子残缺)",
    hook: "‘How to operate...’ 只是一个动词不定式短语，缺主语 and 谓语，属于‘句子残缺’（Fragment），不能单独留着当疑问句。"
  },
  {
    id: 24,
    question: "_______ form the core of English vocabulary.",
    question_zh: "_______构成了英语词汇的核心。",
    options: [
      { text: "Colloquial words", isCorrect: false, text_zh: "口语词" },
      { text: "Common words", isCorrect: true, text_zh: "常用词" },
      { text: "Formal words", isCorrect: false, text_zh: "正式词" },
      { text: "Slang words", isCorrect: false, text_zh: "俚语词" }
    ],
    tag: "Vocabulary Categories (词汇范畴)",
    hook: "语言金字塔的核心和基石永远是大罗大众都在使用的 Common words（常用词）。"
  },
  {
    id: 25,
    question: "______ are usually used in everyday conversation and informal writing.",
    question_zh: "______通常用于日常对话和非正式写作中。",
    options: [
      { text: "Colloquial words", isCorrect: true, text_zh: "口语词" },
      { text: "Formal words", isCorrect: false, text_zh: "正式词" },
      { text: "Common words", isCorrect: false, text_zh: "常用词" },
      { text: "Slang words", isCorrect: false, text_zh: "俚语词" }
    ],
    tag: "Vocabulary Categories (词汇范畴)",
    hook: "日常对话（conversation）就是拉家常，对应的正是 Colloquial words（口语词）。"
  },
  {
    id: 26,
    question: "Which of the following information is NOT included in the category of “Work Experience” in a resume?",
    question_zh: "以下哪项信息不属于简历中“工作经验”这一类别？",
    options: [
      { text: "The employer’s name and city", isCorrect: false, text_zh: "雇主的姓名和城市" },
      { text: "Dates of employment", isCorrect: false, text_zh: "任职日期" },
      { text: "Most significant job title", isCorrect: false, text_zh: "最重要的职衔" },
      { text: "Date of graduation", isCorrect: true, text_zh: "毕业日期" }
    ],
    tag: "Business Writing (简历常识)",
    hook: "毕业日期（Date of graduation）属于你的‘教育经历’（Education Background），不属于工作经验。"
  },
  {
    id: 27,
    question: "Which of the following is a supporting detail of the statement “The washing machine is unreliable.”?",
    question_zh: "以下哪项是“这台洗衣机不可靠”这一表述的支持性细节？",
    options: [
      { text: "The water temperature can’t be predicted.", isCorrect: true, text_zh: "水温无法预测。" },
      { text: "The first washing machine was invented in the 1850s.", isCorrect: false, text_zh: "第一台洗衣机发明于19世纪50年代。" },
      { text: "Smart washing machines come with built-in Wi-Fi.", isCorrect: false, text_zh: "智能洗衣机带有内置Wi-Fi。" },
      { text: "Washing machines work by agitating the fabric with water and detergent.", isCorrect: false, text_zh: "洗衣机通过用水和洗涤剂搅拌织物来工作。" }
    ],
    tag: "Paragraph Supporting Details (段落支持细节)",
    hook: "控诉洗衣机不可靠（unreliable），支持句就要给它挑毛病：水温无法预测，忽冷忽热。"
  },
  {
    id: 28,
    question: "Which of the following is put between two coordinated clauses linked without a conjunction.?",
    question_zh: "在没有连词连接的两个并列分句之间，应该放什么标点符号？",
    options: [
      { text: "semicolon.", isCorrect: true, text_zh: "分号" },
      { text: "comma", isCorrect: false, text_zh: "逗号" },
      { text: "period", isCorrect: false, text_zh: "句号" },
      { text: "colon.", isCorrect: false, text_zh: "冒号" }
    ],
    tag: "Punctuation Rules (标点规范)",
    hook: "没有并列连词时，代替连词连接两个大并列分句的核心标点是分号（semicolon）。"
  },
  {
    id: 29,
    question: "Which of the following is NOT an example of reasoning?",
    question_zh: "下列哪项不是逻辑推理的例子？",
    options: [
      { text: "All dogs bark. This animal barks. Therefore, this animal is a dog.", isCorrect: false, text_zh: "所有的狗都会叫。这个动物会叫。因此，这个动物是一只狗。" },
      { text: "Because it is winter, there will probably be snow.", isCorrect: false, text_zh: "因为是冬天，所以可能会下雪。" },
      { text: "She walked slowly through the lush green forest.", isCorrect: true, text_zh: "她缓缓走过茂密翠绿的森林。" },
      { text: "I can’t give you the report for the simple reason that it isn’t yet finished.", isCorrect: false, text_zh: "我不能把报告给你，原因很简单，它还没完成。" }
    ],
    tag: "Paragraph Development (论证与推理)",
    hook: "C 选项是一段纯粹的环境 and 动作‘描写（description）’，不包含任何逻辑推论（reasoning）。"
  },
  {
    id: 30,
    question: "Which of the following cannot help make sentences more lively?",
    question_zh: "下列哪项不能帮助使句子更加生动？",
    options: [
      { text: "Varying sentence style", isCorrect: false, text_zh: "改变句子风格" },
      { text: "Emphasizing people when possible", isCorrect: false, text_zh: "尽可能强调人" },
      { text: "Avoiding overusing the same construction in one sentence", isCorrect: false, text_zh: "避免在同一句中过度使用相同的结构" },
      { text: "Using repetitions", isCorrect: true, text_zh: "使用重复" }
    ],
    tag: "Lively Sentence Style (句式生动技巧)",
    hook: "单调、死板的词汇句型‘重复（repetitions）’不会让句子生动，只会使其索然无味。"
  },
  {
    id: 31,
    question: "English essay writing is mainly divided into the following modes: _______.",
    question_zh: "英语短文写作主要分为以下几种模式：_______。",
    options: [
      { text: "narration and description", isCorrect: false, text_zh: "记叙文和描写文" },
      { text: "argumentation and exposition", isCorrect: false, text_zh: "议论文和说明文" },
      { text: "narration, description, argumentation and exposition", isCorrect: true, text_zh: "记叙文、描写文、议论文和说明文" },
      { text: "narration and argumentation", isCorrect: false, text_zh: "记叙文和议论文" }
    ],
    tag: "Writing Modes (写作模式分类)",
    hook: "四大文体最完整的大合集 ➔ 锁定 narration, description, argumentation and exposition。"
  },
  {
    id: 32,
    question: "_______ produces images or pictures in the readers’ minds, helping them to understand unfamiliar or abstract subjects.",
    question_zh: "_______在读者的脑海中产生图像或画面，帮助他们理解陌生或抽象的主题。",
    options: [
      { text: "Figurative language", isCorrect: true, text_zh: "修辞语言/比喻语言" },
      { text: "Synonym", isCorrect: false, text_zh: "同义词" },
      { text: "Antonym", isCorrect: false, text_zh: "反义词" },
      { text: "Statistics", isCorrect: false, text_zh: "统计数据" }
    ],
    tag: "Rhetorical Devices (修辞手法)",
    hook: "脑海中画画（images or pictures）对应的是 Figurative language（修辞/比喻语言）。"
  },
  {
    id: 33,
    question: "A ______ is an expression that has been worn out through constant use.",
    question_zh: "______是指由于经常使用而显得陈旧陈腐的表达方式。",
    options: [
      { text: "cliché", isCorrect: true, text_zh: "陈词滥调" },
      { text: "slang", isCorrect: false, text_zh: "俚语" },
      { text: "jargon", isCorrect: false, text_zh: "行话" },
      { text: "metaphor", isCorrect: false, text_zh: "暗喻" }
    ],
    tag: "Style and Diction (文体与选词)",
    hook: "用烂了、穿破了的词话（worn out） ➔ 锁定 cliché（陈词滥调）。"
  },
  {
    id: 34,
    question: "Which of the following is NOT a main purpose of descriptive writing?",
    question_zh: "以下哪项不是描写文的主要目的？",
    options: [
      { text: "To inform", isCorrect: false, text_zh: "告知" },
      { text: "To clarify", isCorrect: false, text_zh: "阐明" },
      { text: "To entertain", isCorrect: true, text_zh: "娱乐" },
      { text: "To create a mood", isCorrect: false, text_zh: "营造某种氛围" }
    ],
    tag: "Descriptive Writing (描写文目的)",
    hook: "描写文旨在烘托氛围、告知和阐明，‘娱乐（To entertain）’不是它的核心学术目的。"
  },
  {
    id: 35,
    question: "Which is NOT included as sensory details in description?",
    question_zh: "在描写文中，以下哪项不包括在感官细节中？",
    options: [
      { text: "sight and hearing", isCorrect: false, text_zh: "视觉和听觉" },
      { text: "taste", isCorrect: false, text_zh: "味觉" },
      { text: "smell and touch", isCorrect: false, text_zh: "嗅觉和触觉" },
      { text: "emotion", isCorrect: true, text_zh: "情绪" }
    ],
    tag: "Sensory Details (感官细节)",
    hook: "感官（sensory）指眼耳鼻舌身接收的物理刺激，而‘情绪（emotion）’属于心理活动。"
  },
  {
    id: 36,
    question: "Which of the following is NOT a linking word or expression used to indicate the passage of time?",
    question_zh: "下列哪项不是用来表示时间推移的衔接词或表达方式？",
    options: [
      { text: "the next morning", isCorrect: false, text_zh: "第二天清晨" },
      { text: "behind the building", isCorrect: true, text_zh: "在建筑物后方" },
      { text: "on the second day", isCorrect: false, text_zh: "在第二天" },
      { text: "two weeks later", isCorrect: false, text_zh: "两周后" }
    ],
    tag: "Transitions (过渡衔接词)",
    hook: "behind the building 表示的是‘空间方位’，完全与时间推移（passage of time）无关。"
  },
  {
    id: 37,
    question: "Which of the following is NOT a major element of narrative writing?",
    question_zh: "下列哪项不是记叙文的主要要素？",
    options: [
      { text: "plot", isCorrect: false, text_zh: "情节" },
      { text: "characters", isCorrect: false, text_zh: "角色" },
      { text: "setting", isCorrect: false, text_zh: "背景" },
      { text: "analysis", isCorrect: true, text_zh: "分析" }
    ],
    tag: "Narrative Writing (记叙文要素)",
    hook: "故事三要素是情节(plot)、人物(characters)、背景(setting)，理性的‘分析（analysis）’不属于故事要素。"
  },
  {
    id: 38,
    question: "Which of the following is NOT a resume category?",
    question_zh: "以下哪项不属于简历的常规类别？",
    options: [
      { text: "Career Objective", isCorrect: false, text_zh: "求职目标" },
      { text: "Education", isCorrect: false, text_zh: "教育背景" },
      { text: "Expected Salary", isCorrect: true, text_zh: "期望薪资" },
      { text: "Awards and Activities", isCorrect: false, text_zh: "奖项与活动" }
    ],
    tag: "Business Writing (简历常识)",
    hook: "标准英文专业简历中‘不主动写’期望薪资（Expected Salary），这属于后续谈判内容。"
  },
  {
    id: 39,
    question: "Which of the following is NOT a basic element of letter writing?",
    question_zh: "下列哪项不是书信写作的基本要素？",
    options: [
      { text: "Salutation/Greeting", isCorrect: false, text_zh: "称呼/问候语" },
      { text: "Body", isCorrect: false, text_zh: "正文" },
      { text: "Evidence", isCorrect: true, text_zh: "证据" },
      { text: "Complimentary close", isCorrect: false, text_zh: "结语/谦称" }
    ],
    tag: "Business Writing (书信要素)",
    hook: "书信格式包含称呼、正文、结语，而‘证据（Evidence）’是议论文（Argumentation）的要素。"
  },
  {
    id: 40,
    question: "Which of the following is NOT a natural or easily recognized order of paragraph?",
    question_zh: "下列哪项不是自然或容易被读者识别的段落展开顺序？",
    options: [
      { text: "Chronological order", isCorrect: false, text_zh: "按时间顺序" },
      { text: "Emphatic order", isCorrect: false, text_zh: "按强调/重要性顺序" },
      { text: "The order of space", isCorrect: false, text_zh: "空间顺序" },
      { text: "Random order", isCorrect: true, text_zh: "随机顺序" }
    ],
    tag: "Paragraph Development (段落组织顺序)",
    hook: "学术写作极其讲究逻辑结构，杂乱无章的‘随机顺序（Random order）’不被允许。"
  },
  {
    id: 41,
    question: "Which statement about the purpose of writing is incorrect?",
    question_zh: "关于写作目的的下列哪种表述是错误的？",
    options: [
      { text: "The writer of argumentation intends to convince or persuade.", isCorrect: false, text_zh: "议论文的作者旨在说服或劝导。" },
      { text: "The writer of exposition intends to explain or inform.", isCorrect: false, text_zh: "说明文的作者旨在解释或告知。" },
      { text: "The writer of narration intends to tell a story or recount an event.", isCorrect: false, text_zh: "记叙文的作者旨在讲述一个故事或叙述一个事件。" },
      { text: "The writer of description intends to convince or persuade.", isCorrect: true, text_zh: "描写文的作者旨在说服或劝导。（错误，描写文是为了刻画特征而非说服）" }
    ],
    tag: "Writing Purposes (写作目的辨析)",
    hook: "只有议论文（argumentation）的核心目的才是去‘说服别人（convince or persuade）’。"
  },
  {
    id: 42,
    question: "Which of the following is NOT a typical form of exposition?",
    question_zh: "下列哪项不是说明文（Exposition）的典型形式？",
    options: [
      { text: "Encyclopedias", isCorrect: false, text_zh: "百科全书" },
      { text: "Dictionaries", isCorrect: false, text_zh: "词典" },
      { text: "Book reports", isCorrect: false, text_zh: "读书报告" },
      { text: "Novels", isCorrect: true, text_zh: "小说" }
    ],
    tag: "Expository Writing (说明文体裁)",
    hook: "小说（Novels）的主要功能是讲故事，属于典型的‘记叙文（Narration）’。"
  },
  {
    id: 43,
    question: "Which of the following is a major pattern of comparison and contrast?",
    question_zh: "以下哪项是比较与对比（比较对照文）的主要组织模式？",
    options: [
      { text: "Subject by subject", isCorrect: true, text_zh: "依主体逐个对比" },
      { text: "Word by word", isCorrect: false, text_zh: "依单词逐个对比" },
      { text: "Sentence by sentence", isCorrect: false, text_zh: "依句子逐个对比" },
      { text: "Paragraph by paragraph", isCorrect: false, text_zh: "依段落逐个对比" }
    ],
    tag: "Comparison and Contrast (对比组织模式)",
    hook: "对比文两大黄金组织模式：Subject by subject（整体主体对比）和 Point by point（逐点横向对比）。"
  },
  {
    id: 44,
    question: "Definition often appears _______ of an expository or persuasive essay.",
    question_zh: "定义（Definition）通常出现在说明文或议论文的_______。",
    options: [
      { text: "at the beginning", isCorrect: true, text_zh: "开头" },
      { text: "at the end", isCorrect: false, text_zh: "结尾" },
      { text: "in the middle", isCorrect: false, text_zh: "中间" },
      { text: "in the second paragraph", isCorrect: false, text_zh: "第二段" }
    ],
    tag: "Expository Techniques (下定义的位置)",
    hook: "在深入论述前必须先界定核心概念，因此定义通常放在文章‘开头（at the beginning）’。"
  },
  {
    id: 45,
    question: "Classification systematically groups a number of things into _______ to make the information easier to grasp.",
    question_zh: "分类法（Classification）系统地将许多事物归入_______中，以使信息更容易掌握。",
    options: [
      { text: "topics", isCorrect: false, text_zh: "主题" },
      { text: "categories", isCorrect: true, text_zh: "类别" },
      { text: "argument", isCorrect: false, text_zh: "论点" },
      { text: "paragraphs", isCorrect: false, text_zh: "段落" }
    ],
    tag: "Expository Techniques (分类法运用)",
    hook: "分类法（Classification）就是把一堆东西分门别类 ➔ 锁定 categories（类别）。"
  },
  {
    id: 46,
    question: "Which of the following is a major type of narration?",
    question_zh: "下列哪项是记叙文的主要类型？",
    options: [
      { text: "Fiction", isCorrect: true, text_zh: "小说/虚构文学" },
      { text: "Analysis", isCorrect: false, text_zh: "分析" },
      { text: "Plot", isCorrect: false, text_zh: "情节" },
      { text: "Theme", isCorrect: false, text_zh: "主题" }
    ],
    tag: "Narrative Categories (记叙文大类)",
    hook: "情节和主题是故事内部的组成要素，而‘小说（Fiction）’本身是记叙文最大的二级分类体裁。"
  },
  {
    id: 47,
    question: "Love means positive feeling for someone else.",
    question_zh: "“爱意味着对别人的积极情感。”这句定义如何评价？",
    options: [
      { text: "It is a good definition.", isCorrect: false, text_zh: "这是一个极好的定义。" },
      { text: "The definition is inadequate.", isCorrect: true, text_zh: "这个定义不够充分/不严谨。" },
      { text: "The definition is too detailed.", isCorrect: false, text_zh: "定义过于详细。" },
      { text: "It is not a definition.", isCorrect: false, text_zh: "这完全不是定义。" }
    ],
    tag: "Definition Writing (定义规范性判定)",
    hook: "对别人有好感（positive feeling）的事情太多了（如同僚之情、喜欢），不能精准界定爱 ➔ The definition is inadequate。"
  },
  {
    id: 48,
    question: "Which of the following is NOT a business writing?",
    question_zh: "下列哪项不属于商务/职场写作？",
    options: [
      { text: "Fiction", isCorrect: true, text_zh: "小说/虚构文学" },
      { text: "Memos", isCorrect: false, text_zh: "备忘录" },
      { text: "Professional emails", isCorrect: false, text_zh: "专业电子邮件" },
      { text: "Cover letters", isCorrect: false, text_zh: "求职信" }
    ],
    tag: "Business Writing (商务公文类别)",
    hook: "Fiction（小说）属于文学纯艺术创作，绝对不属于职场公文。"
  },
  {
    id: 49,
    question: "__________ is NOT a way of greeting an unknown addressee.",
    question_zh: "__________不是向未知的收件人写问候语（称呼）的方式。",
    options: [
      { text: "Dear Sir/Madame", isCorrect: false, text_zh: "尊敬的先生/女士" },
      { text: "Dear Mr. Wang", isCorrect: true, text_zh: "尊敬的王先生" },
      { text: "To Whom It May Concern", isCorrect: false, text_zh: "致相关人士" },
      { text: "Dear Hiring Manager", isCorrect: false, text_zh: "尊敬的招聘经理" }
    ],
    tag: "Business Writing (书信称呼规范)",
    hook: "既然明确叫出了‘Mr. Wang（王先生）’，说明你已经知道了收件人的姓氏，不再是 unknown（未知）。"
  },
  {
    id: 50,
    question: "The _______ of the school will resign because of poor health.",
    question_zh: "这所学校的_______将因身体状况不佳而辞职。",
    options: [
      { text: "principle", isCorrect: false, text_zh: "原则/原理" },
      { text: "principal", isCorrect: true, text_zh: "校长" },
      { text: "municipal", isCorrect: false, text_zh: "市政的" },
      { text: "ectypal", isCorrect: false, text_zh: "复制的" }
    ],
    tag: "Confusable Words (易混词辨析)",
    hook: "拼写易混词：‘校长是你的好朋友（principal 后缀包含 al / pal ）’，而原则是一项规矩（principle 后缀为 le）。"
  },
  {
    id: 51,
    question: "We should bear in _______ all these important rules.",
    question_zh: "我们应当把所有这些重要的规则牢记在_______。",
    options: [
      { text: "heart", isCorrect: false, text_zh: "心脏" },
      { text: "mind", isCorrect: true, text_zh: "脑海" },
      { text: "eye", isCorrect: false, text_zh: "眼睛" },
      { text: "shoulder", isCorrect: false, text_zh: "肩膀" }
    ],
    tag: "Idiomatic Collocations (固定搭配)",
    hook: "固定习惯表达：牢记在心、铭记在脑海里使用的是 bear in mind。"
  },
  {
    id: 52,
    question: "The aristocrat often speaks in a (an) _______ tone.",
    question_zh: "贵族说起话来往往带着一种_______的语气。",
    options: [
      { text: "proud", isCorrect: false, text_zh: "自豪的" },
      { text: "arrogant", isCorrect: true, text_zh: "傲慢的/目中无人的" },
      { text: "dignified", isCorrect: false, text_zh: "有尊严的" },
      { text: "proudly", isCorrect: false, text_zh: "骄傲地（副词）" }
    ],
    tag: "Diction and Tone (选词与语境语气)",
    hook: "西方学术文体语境中，旧贵族（aristocrat）由于阶级优越感，开口说话往往是傲慢的（arrogant）。"
  },
  {
    id: 53,
    question: "Which of the following is NOT an important way to achieve paragraph coherence?",
    question_zh: "下列哪项不是实现段落连贯性的重要途径？",
    options: [
      { text: "a natural or easily recognized order", isCorrect: false, text_zh: "自然或易于识别的顺序" },
      { text: "transitional words and phrases", isCorrect: false, text_zh: "过渡词和短语" },
      { text: "repetition of key words", isCorrect: false, text_zh: "关键词的重复" },
      { text: "antonyms", isCorrect: true, text_zh: "反义词" }
    ],
    tag: "Paragraph Coherence (段落连贯性手法)",
    hook: "自然顺序、衔接词、重复关键词都是把句子拧紧的方法。频繁用‘反义词（antonyms）’会导致跳跃，无法产生连贯性。"
  },
  {
    id: 54,
    question: "Quick examples must be _____________.",
    question_zh: "随手拈来的快速举例（Quick examples）必须是_______的。",
    options: [
      { text: "specific", isCorrect: true, text_zh: "具体的/明确的" },
      { text: "abstract", isCorrect: false, text_zh: "抽象的" },
      { text: "long", isCorrect: false, text_zh: "长的" },
      { text: "complicated", isCorrect: false, text_zh: "复杂的" }
    ],
    tag: "Expository Techniques (举例说明规范)",
    hook: "随手抛出的快速举例，最核心、最有力的要求就是具体、一针见血（specific）。"
  },
  {
    id: 55,
    question: "which of the following contains a mistake in punctuations?",
    question_zh: "下列哪项在标点符号的使用上存在错误？",
    options: [
      { text: "Here “ register” refers to a particular type of vocabulary.", isCorrect: false, text_zh: "在这里，“register”指的是一种特定的词汇。（正确）" },
      { text: "You can find Byron’s poems “ She Walks in Beauty” and “ When the Two Parted” in The Romantic Poets.", isCorrect: false, text_zh: "你可以在《浪漫主义诗人》中找到拜伦的诗...（正确）" },
      { text: "He promised to come to the meeting, however, he didn’ t appear.", isCorrect: true, text_zh: "He promised to come to the meeting, however, he didn’ t appear. He promised to come to the meeting, however, he didn’ t appear. He promised to come to the meeting, however, he didn’ t appear." },
      { text: "“Which American poet do you like best?” Bill asked.", isCorrect: false, text_zh: "“你最喜欢哪位美国诗人？”比尔问。（正确）" }
    ],
    tag: "Punctuation and Run-ons (标点错误与副词粘连)",
    hook: "however 属性是副词不是并列连词，不能像 and 那样直接跟在逗号后面连句子。正确做法是前面改用分号（; however,）。"
  },
  {
    id: 56,
    question: "Which of the following is an objective description of a young boy?",
    question_zh: "下列哪项是对一个小男孩的客观描写？",
    options: [
      { text: "The young boy was as thin as a walking skeleton.", isCorrect: false, text_zh: "这个小男孩瘦得像一具行走的骷髅。（主观修辞比喻）" },
      { text: "The nineteen-year-old boy was 1.85 meters tall and weighed 112 pounds.", isCorrect: true, text_zh: "这个十九岁的男孩身高1.85米，体重112磅。（纯数据与客观事实）" },
      { text: "The young man stood tall and lean, his figure stretching upwards like a slender tower against the sky.", isCorrect: false, text_zh: "那个年轻人高大挺拔...像一座细长塔楼。（主观文学渲染）" },
      { text: "The young boy is dangerously underweight.", isCorrect: false, text_zh: "这个小男孩处于危险的体重不足状态。（带有强烈主观判断词dangerously）" }
    ],
    tag: "Objective Description (客观描写规范)",
    hook: "客观描写（objective description）不允许带任何情绪色彩和修辞，必须全部依靠冰冷、量化的‘数字和度量衡事实’说话。"
  },
  {
    id: 57,
    question: "Statistics in writing must be _____________.",
    question_zh: "写作中引用的统计数据（Statistics）必须 be _______的。",
    options: [
      { text: "abstract", isCorrect: false, text_zh: "抽象的" },
      { text: "unambiguous", isCorrect: true, text_zh: "清晰无歧义的" },
      { text: "ambiguous", isCorrect: false, text_zh: "模棱两可的" },
      { text: "vivid", isCorrect: false, text_zh: "生动的" }
    ],
    tag: "Use of Statistics (统计数据规范)",
    hook: "数据是严谨的科学铁证，绝不能含糊不清 ➔ 必须具有 unambiguous（清晰明确、毫无二义性）的特征。"
  },
  {
    id: 58,
    question: "Which of the following is NOT a good support of the topic sentence “The main benefit of studying abroad is an academic one”?",
    question_zh: "针对“出国留学的主要好处是学术上的好处”这一主题句，下列哪项不是一个好的支持句？",
    options: [
      { text: "The accommodation is much better.", isCorrect: true, text_zh: "住宿条件要好得多。" },
      { text: "The laboratories are more sophisticated, and book resourced more up-to-date.", isCorrect: false, text_zh: "实验室更先进，图书资源更新。" },
      { text: "They have first-rate professors.", isCorrect: false, text_zh: "他们有一流的教授。" },
      { text: "The standard of teaching is much higher.", isCorrect: false, text_zh: "教学水平要高得多。" }
    ],
    tag: "Paragraph Relevance (支持句与主题句相关性)",
    hook: "主题句定调在‘学术好处（academic benefit）’上。B、C、D都在聊硬件、师资和教学。只有 A 在扯‘住宿生活条件（accommodation）’，偏离学术核心。"
  },
  {
    id: 59,
    question: "Which of the following tips to develop concise style in sentence writing is incorrect?",
    question_zh: "关于在句子写作中培养精炼风格的下列建议，哪项是错误的？",
    options: [
      { text: "Avoid deadwood construction", isCorrect: false, text_zh: "避免空洞死板的废话结构" },
      { text: "Avoid simplicity", isCorrect: true, text_zh: "避免朴素简练的写法" },
      { text: "Avoid redundancy", isCorrect: false, text_zh: "避免语义冗余" },
      { text: "Avoid pretentiousness", isCorrect: false, text_zh: "避免做作自负的词汇" }
    ],
    tag: "Concise Style Principles (精炼风格原则)",
    hook: "精炼风格的核心和灵魂就是追求简单质朴（simplicity）。说要‘避免简单（Avoid simplicity）’完全和原则反着来。"
  },
  {
    id: 60,
    question: "Which the following expressions should NOT be taken as common redundancy?",
    question_zh: "下列哪项表达不应该被看作是常见的语义冗余（Redundancy）？",
    options: [
      { text: "Reflect back", isCorrect: false, text_zh: "往回反射（reflect本身自带往回，加back冗余）" },
      { text: "Look over", isCorrect: true, text_zh: "查看/仔细检查" },
      { text: "A true fact", isCorrect: false, text_zh: "真实的事实（fact本身就是真实的，加true冗余）" },
      { text: "Resulting effect", isCorrect: false, text_zh: "导致的结果（effect本身就是结果，加resulting冗余）" }
    ],
    tag: "Concise Style (冗余语素判定)",
    hook: "Look over 是一个极其地道、健康的日常固定短语，表示查看、检查，没有任何叠床架屋的冗余语素。"
  }
];

const trueFalseQuestions = [
  // ==================== 一、 词汇辨析篇 (1-20题) ====================
  {
    id: 1,
    category: "words",
    question: "Their hard work effected rapid progress in the work.",
    question_zh: "他们的努力工作使工作取得了快速进展。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "effect 作动词时有‘带来、实现、产生’的意思，搭配 progress 完美无瑕。"
  },
  {
    id: 2,
    category: "words",
    question: "She is an imminent artist in this city.",
    question_zh: "她在这个城市里是一位‘迫在眉睫’的艺术家。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "imminent 意为‘迫在眉睫的’（常形容灾难）；形容艺术家卓越，应改为 eminent。"
  },
  {
    id: 3,
    category: "words",
    question: "One of her questions is that she is pressed for time.",
    question_zh: "她的‘提问’之一是她时间不够了。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "时间不够是客观困难和问题（problem），口头向别人提问才是 question。"
  },
  {
    id: 4,
    category: "words",
    question: "From his statement the listeners imply that there will be a change in the economic policy.",
    question_zh: "听众从他的发言中‘暗示’出经济政策将会有所改变。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "说话者发出暗示（imply），听众作为接收方，只能是推断出（infer）。"
  },
  {
    id: 5,
    category: "words",
    question: "Reforms have brought about rapid economic growth in China in recent years.",
    question_zh: "近年来，改革给中国带来了经济的快速增长。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "bring about 意为‘带来、导致’，语义和时态完全正确。"
  },
  {
    id: 6,
    category: "words",
    question: "Smoking does harm to one’s lungs, it can severely hurt one’s health.",
    question_zh: "吸烟对人的肺有害，它能严重伤害人的健康。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "又是逗号粘连的连写句错误！两句独立完整的话中间只用逗号连接，必错。"
  },
  {
    id: 7,
    category: "words",
    question: "The main cause of the stoppage was the insufficient supply of raw material.",
    question_zh: "停工的主要原因是原材料供应不足。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "主谓一致，cause（原因）与 supply（供应）词义搭配无误。"
  },
  {
    id: 8,
    category: "words",
    question: "She doesn’t suggest opinions or do judgements.",
    question_zh: "她不提出建议，也不做评判。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "固定搭配错误：提出建议用 express/state，做出评判必须用 make judgements。"
  },
  {
    id: 9,
    category: "words",
    question: "A child, in growing up, may meet and study from three various kinds of discipline.",
    question_zh: "一个孩子在成长过程中，可能会遇到并‘研究’三种不同的纪律。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "词义和搭配错误：应该是在纪律中‘学习’（learn from），而不是去‘研究、课题研究’（study from）。"
  },
  {
    id: 10,
    category: "words",
    question: "A little girl never questioned the commands of Mother and Father, unless prepared to receive painful consequences.",
    question_zh: "一个小女孩从不质疑父母的命令，除非她准备好承担痛苦的后果。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "unless（除非）引导条件状语从句的省略结构，语法和语意通顺。"
  },
  {
    id: 11,
    category: "words",
    question: "Many people here have got other income except their wages.",
    question_zh: "除了工资之外（扣除掉工资），这儿的许多人就没有其他收入了。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "原意指除了工资还有别的外快（包含关系），应用 besides。except 表示排除在外。"
  },
  {
    id: 12,
    category: "words",
    question: "The chairman made some complimentary remarks about the speaker.",
    question_zh: "主席对发言人发表了一些赞美之词。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "complimentary 意为‘赞美的、恭维的’，搭配 remarks（言论）非常地道。"
  },
  {
    id: 13,
    category: "words",
    question: "He lay his pen on the desk and began reading.",
    question_zh: "他把钢笔‘躺’在桌子上，开始看书。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "放置钢笔（lay）的过去式应该是 laid。这里的 lay 是 lie（躺）的过去式，词义乱套。"
  },
  {
    id: 14,
    category: "words",
    question: "We should bear in mind all these important rules.",
    question_zh: "我们应当把所有这些重要的规则牢记在心。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "单选题51题原题，bear in mind 是最纯正的牢记于心固定短语。"
  },
  {
    id: 15,
    category: "words",
    question: "I suspect whether this plan will work.",
    question_zh: "我怀疑这个计划是否可行。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "suspect 表示‘倾向于相信有’，后接 that ；怀疑其没有、不确定是否可行，用 doubt whether。"
  },
  {
    id: 16,
    category: "words",
    question: "Dobermans make good pets if you train them with enough patients.",
    question_zh: "如果你用足够的‘医院患者’去训练杜宾犬，它们会成为很好的宠物。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "拼写大翻车：训练动物需要的是‘耐心’（patience），写成 patients（病人）判错。"
  },
  {
    id: 17,
    category: "words",
    question: "Denotation refers to the implied meaning and has the emotional associations of a word.",
    question_zh: "字面直译（Denotation）指的是词汇的字面外隐含意思和情感联想。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "概念颠倒。Denotation 是字面本义，隐含情感意思的是内涵义（Connotation）。"
  },
  {
    id: 18,
    category: "words",
    question: "Steve is tall and thin, and has brown hair.",
    question_zh: "史蒂夫长得又高又瘦，留着棕色的头发。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "客观、健康的日常描述，无任何语法毛病。"
  },
  {
    id: 19,
    category: "words",
    question: "We sometimes use slang to improve our writing skills.",
    question_zh: "我们有时用俚语来提高我们的写作技巧。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "学术写作原则：为了保证语言的级别与规范，应当在英文书面写作中避免俚语（slang）。"
  },
  {
    id: 20,
    category: "words",
    question: "Formal language is often used in conversation with your friends, classmates, and family.",
    question_zh: "正式语言经常用于与朋友、同学和家人的谈话中。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "和朋友家人聊天属于亲密场合，应使用非正式口语（Informal），用正式语言太官僚。"
  },

  // ==================== 二、 语法句子缺陷篇 (21-35题) ====================
  {
    id: 21,
    category: "sentences",
    question: "Having missed lessons for a week, a written excuse was needed.",
    question_zh: "缺了一周的课，一封书面请假条是被需要的。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "悬挂修饰语错位。缺课（Having missed lessons）的逻辑主语只能是人，不能是假条。"
  },
  {
    id: 22,
    category: "sentences",
    question: "Stuck in the mud, they had to push the car.",
    question_zh: "陷在泥泞里，他们不得不去推车。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "陷在泥里（Stuck in the mud）修饰的是后半句的主语，这里变成了‘他们’陷在泥里，实际应是‘车’陷在泥里。"
  },
  {
    id: 23,
    category: "sentences",
    question: "Standing on the top of the mountain, the lake looked very beautiful.",
    question_zh: "站在山顶上，湖泊看起来非常美丽。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "悬挂修饰。站在山顶上（Standing on the top）的逻辑主语必须是看风景的人，不能是湖泊（lake）。"
  },
  {
    id: 24,
    category: "sentences",
    question: "Smoking cigarettes are dangerous to your health.",
    question_zh: "吸烟对你的健康是有危险的。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "主谓一致翻车：动名词短语 Smoking cigarettes 充当主语时，谓语动词必须用单数 is，不能用 are。"
  },
  {
    id: 25,
    category: "sentences",
    question: "How he found those precious paintings are of great interest to us all.",
    question_zh: "他是如何找到那些珍贵画作的，我们大家都对此非常感兴趣。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "主谓一致翻车：整个主语从句 How he found... 作为一个完整事件充当主语，谓语应使用单数 is。"
  },
  {
    id: 26,
    category: "sentences",
    question: "Either Bill or John will bring a sample of his own work.",
    question_zh: "比尔或约翰都会带一份他自己的作品样本。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "Either... or... 遵循就近原则，单数 John 对应单数代词 his，完全正确。"
  },
  {
    id: 27,
    category: "sentences",
    question: "Battles between American Indians and white men came about because they oppressed them.",
    question_zh: "美洲印第安人与白人之间的战斗之所以发生，是因为他们压迫了他们。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "代词指代不明缺陷：句中的 they 和 them 完全无法分清谁指代印第安人、谁指代白人。"
  },
  {
    id: 28,
    category: "sentences",
    question: "Every winter many people go to Hainan, because they feel that the winter climate there is better than any place.",
    question_zh: "每年冬天许多人都去海南，因为他们觉得那里的冬季气候比任何地方都好。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "比较对象不对等缺陷：能和海南的‘冬季气候’（winter climate）做比较的，只能是其他地方的‘气候’，不能直接和‘任何地方（any place）’做比较。"
  },
  {
    id: 29,
    category: "sentences",
    question: "He said he would take the exam but was not certain whether he could pass it.",
    question_zh: "他说他会参加考试，但不确定是否能通过。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "Whether 引导名词性宾语从句表示‘是否’，连词和时态均无懈可击。"
  },
  {
    id: 30,
    category: "sentences",
    question: "Helen believes in and advocates women’s right.",
    question_zh: "海伦相信并倡导女性的权益。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "并列谓语搭配正确，believes 紧跟 in 构成固定短语，共用宾语 women's right。"
  },
  {
    id: 31,
    category: "sentences",
    question: "There is only one way to correct run-on sentences: add a comma and a coordinating conjunction between sentences.",
    question_zh: "修正连写句只有一种方法：在两个句子之间加上逗号和并列连词。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "说‘只有（only）一种方法’必错，改成两句、改用分号（;）都是行之有效的修正手段。"
  },
  {
    id: 32,
    category: "sentences",
    question: "Grandparents always held a special place in caring for the little ones. Because they had more time to devote to them. The second sentence is a fragment sentence.",
    question_zh: "“祖父母在照顾孩子方面总是占有特殊地位。因为他们有更多的时间奉献给他们。”第二个句子是一个残缺句。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "因为 Because 引导的是原因状语从句，不能单独断开成句，强行断开就是片段残缺句（Fragment）。"
  },
  {
    id: 33,
    category: "sentences",
    question: "Economic problems are difficult to handle such as inflation and unemployment.",
    question_zh: "经济问题很难处理，例如通货膨胀和失业。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "修饰词远离缺陷：such as 作为举例修饰成分，离它所修饰的核心名词 Economic problems 太远了，应紧跟其后。"
  },
  {
    id: 34,
    category: "sentences",
    question: "Don’t interfere with each other is the best way to keep friends.",
    question_zh: "‘不要互相干涉’是保持朋友关系最好的方式。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "祈使句不能强行充当主语，必须把句首的祈使动词改为动名词形式 Not interfering..."
  },
  {
    id: 35,
    category: "sentences",
    question: "The England is a country that is part of the United Kingdom.",
    question_zh: "英格兰是一个属于联合王国一部分的国家。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "专有名词冠词错误：England 是国名专有名词，前面绝对不能加定冠词 The。"
  },

  // ==================== 三、 篇章文体篇 (36-45题) ====================
  {
    id: 36,
    category: "paragraphs",
    question: "An effective paragraph generally has four fundamental features: opening remarks, a central idea, supporting evidence, and close connection between the sentences.",
    question_zh: "一个有效的段落通常具有四个基本特征：开篇评论、中心思想、支持证据以及句子间的紧密衔接。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "多写了一个特征！官方英文写作教材公认好段落有三大基本特征：Unity（统一性）、Coherence（连贯性）和 Transition（过渡）。"
  },
  {
    id: 37,
    category: "paragraphs",
    question: "The introductory paragraph of an essay should provide the central idea, the thesis of the essay.",
    question_zh: "文章的引言段（开头段）应当提供中心思想，即文章的中心论点（Thesis）。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "开头段最核心的使命就是开门见山丢出全文的 Thesis 论点。"
  },
  {
    id: 38,
    category: "paragraphs",
    question: "An English note is also similar to a short English letter, but the form of the note is simpler and the language used is often formal.",
    question_zh: "英文便签也类似于一封简短的英文信件，但便签的形式更简单，使用的语言通常很正式。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "便签（note）是日常随手留言，格式极简，语言通常是非常随意的非正式体（informal），而非 formal。"
  },
  {
    id: 39,
    category: "paragraphs",
    question: "When planning a narrative, we should consider five aspects: purpose, selection of details, context, organization, and the point of view.",
    question_zh: "在规划一篇记叙文时，我们应当考虑五个方面：目的、细节的选择、语境、组织结构以及视角。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "官方教材记叙文（narrative）大纲标准考点，五个要素齐全，死记硬背即可。"
  },
  {
    id: 40,
    category: "paragraphs",
    question: "In English and Chinese essays, a paragraph is a logical unit and can only deal with one main idea.",
    question_zh: "在英文和中文短文中，段落都是一个逻辑单元，并且只能处理一个中心思想。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "英文段落强制要求有且只有一个 Topic Sentence，但中文段落受传统意合思维影响，经常包含多个核心小意群。"
  },
  {
    id: 41,
    category: "paragraphs",
    question: "There are two patterns of organization used in comparison and contrast: the subject-by-subject pattern and the point-by-point pattern.",
    question_zh: "在比较对照文中有两种主要的组织模式：整体主体对比模式和横向逐点对比模式。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "单选43题对应原理，组织对比文只有这两大王牌模式。"
  },
  {
    id: 42,
    category: "paragraphs",
    question: "There are mainly two ways to support a paragraph: examples and statistics.",
    question_zh: "展开和支持一个段落主要有两种方式：举例子和列统计数据。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "写作教材标准考点，举例（examples）与数据（statistics）是最普遍的段落佐证手段。"
  },
  {
    id: 43,
    category: "paragraphs",
    question: "Each sentence in the body paragraph should clearly support the topic sentence.",
    question_zh: "正文段落中的每一句话都应当明确地支持该段的主题句。",
    isCorrect: true, // Key: T
    card_map: "考场请涂 A (True)",
    hook: "这是段落‘统一性（Unity）’的核心铁律，所有句子都要围着 Topic Sentence 众星拱月。"
  },
  {
    id: 44,
    category: "paragraphs",
    question: "English essay writing is mainly divided into the following modes: argumentation and exposition.",
    question_zh: "英语短文写作主要分为以下几种模式：议论文和说明文。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "残缺不全。单选31题对应原点，主要分为四种（记叙、描写、议论、说明），少写了两种判错。"
  },
  {
    id: 45,
    category: "paragraphs",
    question: "More examples in English writing will be more effective.",
    question_zh: "在英语写作中，例子越多就越有效。",
    isCorrect: false, // Key: F
    card_map: "考场请涂 B (False)",
    hook: "写作大忌。举例讲究精准、典型、具体（specific），盲目堆砌乱编只会显得废话连篇、降低说服力。"
  }
];

const sentenceCombiningQuestions = [
  {
    id: 1,
    raw_sentences: [
      "The man handed a photo of a girl.",
      "The photo was to me.",
      "He did that silently.",
      "The man was old.",
      "The girl was pretty."
    ],
    correct_answers: [
      "The old man handed a photo of a pretty girl to me silently.",
      "The old man handed me a photo of a pretty girl silently."
    ],
    hint: "普通合并：注意形容词前置修饰名词，状语置于句末。",
    translation: "那个老人默默地把一张漂亮女孩的照片递给了我。",
    hook: "主干是 The man handed a photo...，把形容词 old 塞给 man，pretty 塞给 girl，副词 silently 放句尾。"
  },
  {
    id: 2,
    raw_sentences: [
      "We have moved into a house.",
      "We did that recently.",
      "The house was new.",
      "It was single-storied."
    ],
    correct_answers: [
      "We have recently moved into a new single-storied house."
    ],
    hint: "普通合并：注意多个形容词修饰同一个名词时的先后顺序。",
    translation: "我们最近搬进了一栋单层的全亲房子。",
    hook: "recently 修饰动词 moved 放在前面，new（新旧）和 single-storied（层高）共同修饰 house。"
  },
  {
    id: 3,
    raw_sentences: [
      "People find this sort of joke.",
      "These people are foreign.",
      "This sort of joke is distasteful."
    ],
    correct_answers: [
      "Foreign people find this sort of joke distasteful."
    ],
    hint: "普通合并：使用形容词作定语和宾语补足语。",
    translation: "外国人们发现这种笑话很令人反感。",
    hook: "foreign 变成定语修饰 people，distasteful 直接做宾补接在 joke 后面（find sth. adj.）。"
  },
  {
    id: 4,
    raw_sentences: [
      "I was being tested.",
      "The test was for a driving license.",
      "It was the third time."
    ],
    correct_answers: [
      "For the third time, I was being tested for a driving license."
    ],
    hint: "普通合并：介词短语作状语置于句首以示强调。",
    translation: "我已经是第三次接受驾照考试了。",
    hook: "把第三次（For the third time）当成时间状语大提速提到最句首，后面接主句主体。"
  },
  {
    id: 5,
    raw_sentences: [
      "A murderer crossed the road.",
      "The road was in front of me.",
      "He did that suddenly."
    ],
    correct_answers: [
      "A murderer crossed the road in front of me suddenly."
    ],
    hint: "普通合并：介词短语作后置定语，副词作状语。",
    translation: "一个凶手突然穿过了我面前的马路。",
    hook: "in front of me 紧跟在马路（road）后面做后置定语，suddenly 放在句尾收官。"
  },
  {
    id: 6,
    raw_sentences: [
      "The book will tell a great deal.",
      "It will tell us about the age of the universe.",
      "It will tell us about the size of the universe."
    ],
    correct_answers: [
      "The book will tell a great deal about the age and size of the universe."
    ],
    hint: "并列结构：合并相同成分，使用 and 连接并列宾语。",
    translation: "这本书将大量讲述关于宇宙的年龄和大小。",
    hook: "age 和 size 都是宇宙（the universe）的属性，合并同类项，用 and 连起来。"
  },
  {
    id: 7,
    raw_sentences: [
      "Jeff was a business planner.",
      "Jeff was at a Fortune 500 company.",
      "Jeff was successful."
    ],
    correct_answers: [
      "Jeff was a successful business planner at a Fortune 500 company."
    ],
    hint: "普通合并：前置形容词与后置介词短语联合修饰。",
    translation: "杰夫是一家财富500强企业里一位成功的商业策划师。",
    hook: "successful 塞到 planner 前面，地点状语 at a Fortune 500 company 甩在后面。"
  },
  {
    id: 8,
    raw_sentences: [
      "He put forward a good suggestion.",
      "The suggestion is for students.",
      "The students are going to study abroad."
    ],
    correct_answers: [
      "He put forward a good suggestion for students going to study abroad.",
      "He put forward a good suggestion for students who are going to study abroad."
    ],
    hint: "定语结构：可使用现在分词短语或定语从句修饰学生。",
    translation: "他为即将出国留学的学生们提出了一个很好的建议。",
    hook: "students 后面可以直接用 who are 引导定语从句，也可以直接省略 who are 留下现在分词短语。"
  },
  {
    id: 9,
    raw_sentences: [
      "The hotel is not spacious.",
      "The hotel is not comfortable."
    ],
    correct_answers: [
      "The hotel is neither spacious nor comfortable."
    ],
    hint: "否定并列：涉及“既不……也不……”的经典并列连词。",
    translation: "这家旅馆既不宽敞也不舒服。",
    hook: "看到两个 not ... 且形容词并列，必考连词 **neither... nor...** 结构。"
  },
  {
    id: 10,
    raw_sentences: [
      "I want to visit the British Museum.",
      "I want to visit the Tower of London.",
      "The desire is particular."
    ],
    correct_answers: [
      "I particularly want to visit the British Museum and the Tower of London."
    ],
    hint: "并列与副词：将名词变成副词修饰动词，并列宾语。",
    translation: "我特别想参观大英博物馆和伦敦塔。",
    hook: "desire is particular 转化为副词 particularly 扔在 want 前面，两个地点用 and 连结。"
  },
  {
    id: 11,
    raw_sentences: [
      "Technology has changed our life.",
      "It has done that over the past two decades.",
      "The change is total."
    ],
    correct_answers: [
      "Technology has totally changed our life over the past two decades."
    ],
    hint: "普通合并：状态变副词，修饰谓语动词。",
    translation: "在过去的二十年里，技术已经完全改变了我们的生活。",
    hook: "total 变成副词 totally 紧贴在助动词和实义动词之间（has totally changed）。"
  },
  {
    id: 12,
    raw_sentences: [
      "Thomas Jefferson may be less famous than George Washington.",
      "Thomas Jefferson may be less famous than Abraham Lincoln.",
      "Thomas Jefferson is the third president of the United States."
    ],
    correct_answers: [
      "Thomas Jefferson, the third president of the United States, may be less famous than George Washington and Abraham Lincoln."
    ],
    hint: "同位语与并列：使用同位语解释主语身份，并列比较对象。",
    translation: "美国第三任总统托马斯·杰斐逊的名气可能不如乔治·华盛顿和亚伯拉罕·林肯。",
    hook: "把第三任总统这句掐头去尾，变成逗号夹击的‘同位语’紧跟在杰斐逊后面，后面合并 Lincoln 和 Washington。"
  },
  {
    id: 13,
    raw_sentences: [
      "The team came onto the court.",
      "We jumped to our feet.",
      "We cheered.",
      "We were Rocket fans."
    ],
    correct_answers: [
      "As Rocket fans, we jumped to our feet and cheered when the team came onto the court."
    ],
    hint: "状语从句：使用 As 引导身份状语，when 引导时间状语。",
    translation: "作为火箭队球迷，当球队入场时，我们跳起来欢呼。",
    hook: "We were Rocket fans 提炼成 As Rocket fans（作为球迷）放句首，后面用 when 接时间状语从句。"
  },
  {
    id: 14,
    raw_sentences: [
      "Our department head will review the memo.",
      "After that the memo is circulated.",
      "Our department head is a careful reader.",
      "Our department head is an outspoken critic."
    ],
    correct_answers: [
      "Our department head, a careful reader and outspoken critic, will review the memo before the memo is circulated."
    ],
    hint: "同位语与时间状语：多重同位语修饰，注意 after that 转化为主从连词的位置。",
    translation: "我们的部门主管——一位细心的读者兼直言不讳的评论家，将在备忘录传阅之前对其进行审查。",
    hook: "主管身份叠 Buff：`a careful reader and outspoken critic` 做同位语。‘审查完再传阅’等于‘传阅 before 审查’。"
  },
  {
    id: 15,
    raw_sentences: [
      "We are in the same boat now.",
      "We have to cooperate.",
      "We have to back up each other."
    ],
    correct_answers: [
      "Since we are in the same boat now, we have to cooperate and back up each other."
    ],
    hint: "原因状语从句：使用 Since/Because 引导原因分句。",
    translation: "既然我们现在在同一条船上，我们就必须互相合作、互相支持。",
    hook: "同一条船是原因 ➔ 句首加 **Since** 变原因状语从句，后半句用 and 合并两个 have to 后面的动作。"
  },
  {
    id: 16,
    raw_sentences: [
      "He was still mumbling something.",
      "These things were about hospitals.",
      "He was mumbling at the end of the party."
    ],
    correct_answers: [
      "He was still mumbling something about hospitals at the end of the party."
    ],
    hint: "普通合并：介词短语作后置定语与时间状语。",
    translation: "在聚会结束时，他还在咕哝着一些关于医院的事情。",
    hook: "about hospitals 修饰 something 紧跟其后，时间 at the end... 扔句尾。"
  },
  {
    id: 17,
    raw_sentences: [
      "They had got away.",
      "They had taken diamonds.",
      "The diamonds are worth of thousands of pounds."
    ],
    correct_answers: [
      "They had got away with diamonds worth of thousands of pounds.",
      "They had got away with thousands of pounds worth of diamonds."
    ],
    hint: "常见俗语搭配：注意 get away with（携款逃跑）的固定搭配用法。",
    translation: "他们带着价值数千英镑的钻石逃跑了。",
    hook: "连着两句 had... ➔ 核心动作是带着钻石逃跑（got away with diamonds），后面补上价值形容词短语。"
  },
  {
    id: 18,
    raw_sentences: [
      "He was in hospital.",
      "He would have to stay there.",
      "He would have to spend another two weeks."
    ],
    correct_answers: [
      "He would have to stay in hospital for another two weeks."
    ],
    hint: "精简合并：合并地点和时间状语，剔除重复的 stay there 废话。",
    translation: "他将不得不继续在医院呆上两周。",
    hook: "stay there 和 in hospital 重合，合二为一变成 `stay in hospital`，后面加上时间跨度 for another two weeks。"
  },
  {
    id: 19,
    raw_sentences: [
      "She must appear in the play.",
      "She must wear a dress.",
      "She must wear stockings.",
      "The dress is red.",
      "The stockings are long."
    ],
    correct_answers: [
      "In the play, she must appear in a red dress and long stockings."
    ],
    hint: "普通合并：巧妙运用介词 in 表示“穿着……”的并列结构。",
    translation: "在剧中，她必须身穿红色连衣裙，穿长筒袜出场。",
    hook: "In the play 提最前。穿着衣服用介词 in ➔ `in a red dress and long stockings` 一网打尽。"
  },
  {
    id: 20,
    raw_sentences: [
      "He was defeated by a boxer.",
      "The boxer was called Gentleman Jackson.",
      "People quickly forgot him."
    ],
    correct_answers: [
      "Defeated by a boxer called Gentleman Jackson, he was quickly forgotten."
    ],
    hint: "过去分词作状语：将前两句被动句缩减为分词短语置于句首。",
    translation: "被一个名叫‘绅士杰克逊’的拳击手击败后，他很快就被人们遗忘了。",
    hook: "前两句核心状态是‘被拳击手打败’，直接缩水成过去分词短语 `Defeated by...` 放在句首开局，主句换成被动语态。"
  },
  {
    id: 21,
    raw_sentences: [
      "The couple has seen their son off.",
      "They returned home.",
      "They didn’t say anything."
    ],
    correct_answers: [
      "After seeing their son off, the couple returned home without saying anything."
    ],
    hint: "介词短语化：使用 After 引导动名词短语，without 引导否定伴随。",
    translation: "送走儿子后，这对夫妇回到家，一言不发。",
    hook: "第一句动作发生在前 ➔ 改为 `After seeing...`，‘没说话’ ➔ 提炼成地道的介词短语 `without saying anything`。"
  },
  {
    id: 22,
    raw_sentences: [
      "Mary knelt.",
      "She shut her eyes.",
      "She prayed to the goddess."
    ],
    correct_answers: [
      "Mary knelt and shut her eyes, praying to the goddess.",
      "Kneeling and shutting her eyes, Mary prayed to the goddess."
    ],
    hint: "伴随状语：主句动作并列，后接现在分词短语作伴随状态。",
    translation: "玛丽跪了下来，闭上眼睛，向女神祈祷。",
    hook: "跪下和闭眼是连贯动作（knelt and shut），祈祷（praying）是伴随这个姿势发生的动作，变现在分词。"
  },
  {
    id: 23,
    raw_sentences: [
      "I got rid of him.",
      "It took me over half an hour."
    ],
    correct_answers: [
      "It took me over half an hour to get rid of him."
    ],
    hint: "经典句型：采用 It takes sb. time to do sth. 固定主语从句格式。",
    translation: "摆脱他花了我半个多小时的时间。",
    hook: "看到 It took me time ... 后面闭着眼睛都要接不带主语的动词不定式 `to do sth.` 。"
  },
  {
    id: 24,
    raw_sentences: [
      "I decided.",
      "I would not buy anything.",
      "Then I got off the ship."
    ],
    correct_answers: [
      "Having decided not to buy anything, I got off the ship."
    ],
    hint: "完成分词短语：先决方案转化为 Having done 结构置于句首。",
    translation: "决定了什么都不买之后，我下了船。",
    hook: "‘决定’发生在‘下船’之前 ➔ 必须用完成时态的现在分词短语 **Having decided not to...** 扔在最前。"
  },
  {
    id: 25,
    raw_sentences: [
      "It was raining.",
      "The rain was heavy.",
      "He was asked to carry an umbrella.",
      "He refused."
    ],
    correct_answers: [
      "Even though it was raining heavily, he refused to carry an umbrella."
    ],
    hint: "让步状语从句：使用 Even though/Although 引导让步从句，强调拒绝行为。",
    translation: "尽管下着大雨，他还是拒绝撑伞。",
    hook: "下大雨和拒绝带伞是强烈转折 ➔ 句首加 **Even though** 引导让步从句，后面套主句。"
  },
  {
    id: 26,
    raw_sentences: [
      "I pretended.",
      "I had not seen him.",
      "It was no use."
    ],
    correct_answers: [
      "It was no use pretending that I had not seen him."
    ],
    hint: "动名词固定句型：采用 It is no use doing sth.（做某事是徒劳的）。",
    translation: "假装没看见他是没有用的。",
    hook: "固定句型公式：`It was no use + 动名词doing` ➔ 后面接 pretending 引导的宾语从句。"
  },
  {
    id: 27,
    raw_sentences: [
      "The woman simply took the parcel.",
      "She walked out of the shop.",
      "She didn’t pay."
    ],
    correct_answers: [
      "The woman simply took the parcel and walked out of the shop without paying."
    ],
    hint: "并列与介词短语：并列核心动作，没付钱变 without 结构。",
    translation: "那个女人只是拿了包裹就走出了商店，没有付钱。",
    hook: "拿包裹和走出去并列（took ... and walked），没付钱转化为介词短语 `without paying` 压轴。"
  },
  {
    id: 28,
    raw_sentences: [
      "The boy led the way.",
      "We had no trouble.",
      "We found the cave.",
      "The cave was strange."
    ],
    correct_answers: [
      "The boy leading the way, we had no trouble finding the strange cave."
    ],
    hint: "⚠️ 独立主格强制题：前句转化为独立主格结构，后句注意 have trouble doing 结构。",
    translation: "在这个小男孩领路的情况下，我们毫无困难地找到了那个奇怪的洞穴。",
    hook: "考场死令：要求用独立主格！把第一句主语留下，动词变分词 ➔ **The boy leading the way,** 后半句套用 have trouble doing 公式。"
  },
  {
    id: 29,
    raw_sentences: [
      "He lay at full length.",
      "He was upon his stomach.",
      "His head rested upon his left forearm．"
    ],
    correct_answers: [
      "He lay at full length upon his stomach, his head resting upon his left forearm."
    ],
    hint: "⚠️ 独立主格强制题：后句转化为名词+分词的独立主格形式作伴随描写。",
    translation: "他肚子朝下平躺着，头枕在左前臂上。",
    hook: "考场死令：独立主格！后半句的主语 his head 和前面主语 he 不同，保留之，动词变分词 ➔ **, his head resting upon...**"
  },
  {
    id: 30,
    raw_sentences: [
      "The big clock used to strike the hours day and night.",
      "It was damaged many years ago."
    ],
    correct_answers: [
      "The big clock which used to strike the hours day and night was damaged many years ago.",
      "The big clock that used to strike the hours day and night was damaged many years ago."
    ],
    hint: "定语从句：以物为主语，使用 which/that 引导定语从句。",
    translation: "那座过去日夜报时的大钟在很多年前就被毁坏了。",
    hook: "大钟（The big clock）是定语从句的先行词，后面直接插入 `which/that used to...` 定语从句，速度接上谓语动词。"
  },
  {
    id: 31,
    raw_sentences: [
      "A man broke his right leg.",
      "People took him to hospital.",
      "It happened a few weeks before Christmas."
    ],
    correct_answers: [
      "A man who broke his right leg was taken to hospital a few weeks before Christmas."
    ],
    hint: "定语从句与被动：使用 who 引导人称定语从句，主句采用被动语态。",
    translation: "一个摔断了右腿的男人在圣诞节前几周被送进了医院。",
    hook: "摔断腿的男人 ➔ `A man who broke...`。‘人们送他去’升级为学术文体喜欢的被动语态 `was taken to hospital`。"
  },
  {
    id: 32,
    raw_sentences: [
      "A desert island is a sort of paradise.",
      "There the sun always shines.",
      "We sometimes imagine so."
    ],
    correct_answers: [
      "We sometimes imagine that a desert island is a sort of paradise where the sun always shines."
    ],
    hint: "多重从句：imagine 后接 that 宾语从句，天国后接 where 关系副词引导的定语从句。",
    translation: "我们有时会想象，荒岛是一种阳光普照的天堂。",
    hook: "主干是 We imagine that... ➔ 后面 paradise 是地点先行词，把 There 转化为关系副词 **where** 引导定语从句。"
  },
  {
    id: 33,
    raw_sentences: [
      "I bought a book of maps.",
      "I found it most helpful.",
      "It is helpful on the journey.",
      "The journey is cross-country."
    ],
    correct_answers: [
      "The book of maps I bought proved most helpful on the cross-country journey."
    ],
    hint: "定语从句与系动词：省略关系代词的定语从句，并采用 prove + adj. 表达‘证明是……’。",
    translation: "我买的那本地图册在这次横穿全国的旅行中被证明是非常有帮助的。",
    hook: "我买的地图册作主语（The book of maps I bought），‘发现它很有用’高级提炼成系动词短语 `proved most helpful`。"
  },
  {
    id: 34,
    raw_sentences: [
      "The man slept on the floor.",
      "He was tired of that.",
      "He saved up for years.",
      "He wanted to buy a real bed."
    ],
    correct_answers: [
      "The man was tired of sleeping on the floor so that he saved up for years to buy a real bed.",
      "Tired of sleeping on the floor, the man saved up for years to buy a real bed."
    ],
    hint: "因果或分词状语：可采用 so that 引导因果，或形容词短语置于句首作原因状语。",
    translation: "这个男人厌倦了睡在地板上，所以他攒了多年的钱想买一张真正的床。",
    hook: "最地道的高分改法是直接把原因变成形容词短语 `Tired of sleeping...` 扔在句首，后面接主句目的。"
  },
  {
    id: 35,
    raw_sentences: [
      "Someone gave the alarm.",
      "The great ship turned.",
      "The turning is sharp.",
      "The ship wanted to avoid a collision.",
      "A collision was direct."
    ],
    correct_answers: [
      "After someone gave the alarm, the great ship turned sharply to avoid a direct collision."
    ],
    hint: "时间与目的状语：After 引导时间状语，sharp 变副词，后接不定式 to avoid 表目的。",
    translation: "在有人发出警报后，这艘巨轮急转弯以避免正面相撞。",
    hook: "发警报在先（After someone gave...），转弯剧烈（turned sharply），为了避免相撞是目的（to avoid a direct collision）。"
  },
  {
    id: 36,
    raw_sentences: [
      "You are coming to London.",
      "That is the best news.",
      "I have heard some news recently."
    ],
    correct_answers: [
      "That you are coming to London is the best news that I have heard recently."
    ],
    hint: "主语与定语从句结合：That 引导主语从句，news 后接 that 引导的定语从句。",
    translation: "你将要来伦敦，这是我最近听到的最好的消息。",
    hook: "‘你将来伦敦’整体做主语 ➔ **That you are coming... is the best news**，消息后面用定语从句 `that I have heard` 限制修饰。"
  },
  {
    id: 37,
    raw_sentences: [
      "The curious thing was this.",
      "The lake was not marked.",
      "It was not on the map."
    ],
    correct_answers: [
      "The curious thing was that the lake was not marked on the map."
    ],
    hint: "表语从句：使用 that 引导表语从句解释 this 的具体内容。",
    translation: "奇怪的是，地图上并没有标出这座湖。",
    hook: "看到 The curious thing was this... 闭着眼睛转换为 **was that + 表语从句** 结构，后面合并 marked 和 on the map。"
  },
  {
    id: 38,
    raw_sentences: [
      "What invariably happens?",
      "A great number of things choose to go wrong.",
      "They occur at precisely the same moment."
    ],
    correct_answers: [
      "What invariably happens is that a great number of things choose to go wrong at precisely the same moment."
    ],
    hint: "主语与表语从句：What 引导主语从句，is 后接 that 引导的表语从句。",
    translation: "总是雷打不动发生的事情是 food，许多事情偏偏在完全相同的时刻同时出错。",
    hook: "单选38题原理原句。主语从句 `What invariably happens` 充当主语，后面系动词接表语从句 **is that...** 。"
  },
  {
    id: 39,
    raw_sentences: [
      "One of the boxes was extremely heavy.",
      "No one could account for the fact."
    ],
    correct_answers: [
      "No one could account for the fact that one of the boxes was extremely heavy."
    ],
    hint: "同位语从句：the fact 后面使用 that 引导同位语从句补充事实内容。",
    translation: "没有人能解释其中一个箱子极其沉重这一事实。",
    hook: "看到 account for the fact... 后面百分之百是用 **that 引导的同位语从句** 去具体说明 fact 的具体内容。"
  },
  {
    id: 40,
    raw_sentences: [
      "The wallet must have been found by one of the villagers.",
      "Sam was sure of that.",
      "It was not returned to him."
    ],
    correct_answers: [
      "Sam was sure that the wallet must have been found by one of the villagers, but it was not returned to him."
    ],
    hint: "宾语从句与并列转折：sure 后接宾语从句，最后一句使用 but 进行并列转折。",
    translation: "萨姆确信钱包一定是被某个村民捡到了，但并没有还给他。",
    hook: "Sam was sure of that 转化为宾语从句 `Sam was sure that...`，没还给他形成强烈对比，后面拉上并列连词 **but**。"
  },
  {
    id: 41,
    raw_sentences: [
      "Daniel heard the news.",
      "He was most surprised."
    ],
    correct_answers: [
      "Daniel was most surprised when he heard the news."
    ],
    hint: "时间状语从句：使用 when 引导最简单的时间状语从句。",
    translation: "当丹尼尔听到这个消息时，他感到惊讶极了。",
    hook: "主句是他非常惊讶（Daniel was most surprised），听到消息是触发点，用 when 引导接在后面。"
  },
  {
    id: 42,
    raw_sentences: [
      "Robert and I went into the living room.",
      "There we talked.",
      "Our talk lasted for a couple of hours."
    ],
    correct_answers: [
      "Robert and I went into the living room, where we talked for a couple of hours."
    ],
    hint: "非限制性定语从句：地点 There 转化为关系副词 where 引导定语从句修饰客厅。",
    translation: "罗伯特和我走进客厅，在那里我们聊了几个小时。",
    hook: "走进客厅（living room）是地点先行词，后面的 There 转化为关系副词 **, where** 引导非限制性定语从句修饰整个客厅空间。"
  },
  {
    id: 43,
    raw_sentences: [
      "He returns home at night.",
      "He always finds this.",
      "Someone has parked a car.",
      "The car is outside his gate."
    ],
    correct_answers: [
      "When he returns home at night, he always finds that someone has parked a car outside his gate."
    ],
    hint: "时间状语与宾语从句：when 引导时间状态，find 后接 that 引导的宾语从句。",
    translation: "当他晚上回到家时，总是发现有人把车停在了他的大门外。",
    hook: "句首 when 引导时间，主句是 he always finds，发现的内容用宾语从句 `that someone has parked...` 承接。"
  },
  {
    id: 44,
    raw_sentences: [
      "My nephew is named George.",
      "He has a box.",
      "The box is used to save money.",
      "It is always empty."
    ],
    correct_answers: [
      "My nephew George has a money-saving box that is always empty."
    ],
    hint: "同位语与定语从句：George 作同位语，box 后面使用复合形容词及关系代词 that 引导定语从句。",
    translation: "我的侄子乔治有一个总是空空如也的存钱罐。",
    hook: "名字直接做同位语（My nephew George），`box used to save money` 升级提炼为前置复合形容词 `money-saving box`，后面紧跟 `that is always empty`。"
  },
  {
    id: 45,
    raw_sentences: [
      "What can be eaten?",
      "What cannot be eaten?",
      "People try to make a decision.",
      "At that time, they usually become quite illogical."
    ],
    correct_answers: [
      "When people try to decide what can and cannot be eaten, they usually become quite illogical."
    ],
    hint: "时间状语与并列宾语：把问句合并为 decide 的并列宾语从句，整体嵌套在 when 时间状语中。",
    translation: "当人们试图决定什么能吃、什么不能吃的时候，他们通常会变得非常不合逻辑。",
    hook: "make a decision what... 提炼为优雅的动词 decide what...，将能吃不能吃并列 `what can and cannot be eaten` 嵌入 when 引导的时间状语从句中。"
  }
];