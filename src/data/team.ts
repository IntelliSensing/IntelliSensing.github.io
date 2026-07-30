export interface TeamMember {
  slug: string;
  name: string;
  nameZh?: string;
  publicationNames?: string[];
  role: string;
  roleZh: string;
  img: string;
  desc: string;
  descZh: string;
  email?: string;
  github?: string;
  x?: string;
  scholar?: string;
  homepage?: string;
  huggingface?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  wechat?: string;
  weibo?: string;
  bilibili?: string;
  honors: string[];
  honorsZh: string[];
  personal: string;
  personalZh: string;
}

export const team: TeamMember[] = [
  {
    slug: 'wenjia-xu',
    name: 'Wenjia Xu',
    nameZh: '许文嘉',
    publicationNames: ['Wenjia Xu', '许文嘉'],
    role: 'Associate Professor · PhD Supervisor',
    roleZh: '副教授 · 博士生导师',
    img: '/assets/team/wenjia-xu.jpeg',
    desc: 'Associate Professor at the School of Information and Communication Engineering, BUPT. Research interests span computer vision, natural language processing, remote sensing, multimodal large language models, agents, and few-shot learning.',
    descZh: '北京邮电大学信息与通信工程学院副教授、博士生导师。研究方向横跨计算机视觉、自然语言处理与遥感，聚焦多模态大模型、智能体与小样本学习。',
    email: 'xuwenjia@bupt.edu.cn',
    github: 'https://github.com/wenjiaXu',
    scholar: 'https://scholar.google.com/citations?user=mW2Jtu0AAAAJ&hl=en',
    homepage: 'https://teacher.bupt.edu.cn/xuwenjia/zh_CN/index.htm',
    honors: ['National Scholarship for Graduate Students, Ministry of Education'],
    honorsZh: ['教育部研究生国家奖学金'],
    personal: '',
    personalZh: '',
  },
  {
    slug: 'aleksandra',
    name: 'Aleksandra',
    role: 'PhD Student',
    roleZh: '博士生',
    img: '/assets/team/aleksandra.avif',
    desc: 'Research interests in computer vision and multimodal learning.\nFocused on 3D scene reconstruction.',
    descZh: '研究方向为计算机视觉和多模态学习。',
    honors: [
      'Best Student Paper Honorable Mention — ICCV 2025',
      'Outstanding Research Award — University, 2024',
    ],
    honorsZh: [
      '最佳学生论文荣誉提名 — ICCV 2025',
      '杰出研究奖 — 大学, 2024',
    ],
    personal: 'Enjoys hiking and photography.',
    personalZh: '喜欢徒步和摄影。',
  },
  {
    slug: 'anna',
    name: 'Anna',
    role: 'PhD Student',
    roleZh: '博士生',
    img: '/assets/team/anna.avif',
    desc: 'Working on natural language processing and large language models.',
    descZh: '研究方向为自然语言处理和大语言模型。',
    honors: [],
    honorsZh: [],
    personal: '',
    personalZh: '',
  },
  {
    slug: 'isla',
    name: 'Isla',
    role: 'Master Student',
    roleZh: '硕士生',
    img: '/assets/team/isla.avif',
    desc: 'Focused on deep learning and neural architecture design.',
    descZh: '专注于深度学习和神经网络架构设计。',
    honors: [],
    honorsZh: [],
    personal: '',
    personalZh: '',
  },
  {
    slug: 'kat',
    name: 'Kat',
    role: 'Research Assistant',
    roleZh: '科研助理',
    img: '/assets/team/kat.avif',
    desc: 'Exploring generative models and representation learning.',
    descZh: '探索生成模型和表征学习。',
    honors: [],
    honorsZh: [],
    personal: '',
    personalZh: '',
  },
  {
    slug: 'laura',
    name: 'Laura',
    role: 'Master Student',
    roleZh: '硕士生',
    img: '/assets/team/laura.avif',
    desc: 'Interested in 3D vision and scene understanding.',
    descZh: '研究方向为 3D 视觉和场景理解。',
    honors: [],
    honorsZh: [],
    personal: '',
    personalZh: '',
  },
  {
    slug: 'member6',
    name: 'Member 6',
    role: 'Research Assistant',
    roleZh: '科研助理',
    img: '/assets/team/screenshot-2026-03-20-at-3.avif',
    desc: 'Research in multimodal alignment and vision-language models.',
    descZh: '研究方向为多模态对齐和视觉语言模型。',
    honors: [],
    honorsZh: [],
    personal: '',
    personalZh: '',
  },
  {
    slug: 'jackson',
    name: 'Zhishan Zou',
    role: 'Master Student',
    roleZh: '硕士生',
    img: '/assets/team/screenshot-2026-03-23-at-3.avif',
    desc: 'Working on efficient training and model compression.',
    descZh: '研究方向为高效训练和模型压缩。',
    honors: [],
    honorsZh: [],
    personal: '',
    personalZh: '',
  },
];
