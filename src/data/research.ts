export const researchAreaIds = [
  'multimodal-llms',
  'agent',
  'leo-communication',
  'eo-applications',
] as const;

export type ResearchAreaId = typeof researchAreaIds[number];

export interface ResearchDirection {
  id: ResearchAreaId;
  number: string;
  image: string;
  alt: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
}

export const researchDirections: ResearchDirection[] = [
  {
    id: 'multimodal-llms',
    number: '01',
    image: '/assets/research/01-multimodal.webp',
    alt: 'Satellite view of a river winding through farmland',
    title: 'Multi-Modal LLMs',
    titleZh: '多模态大模型',
    description: 'Vision-language models that align imagery with text: multimodal pre-training and instruction tuning, in-context learning, model compression and pruning, and benchmarks that measure what these models actually understand.',
    descriptionZh: '构建对齐图像与文本的视觉语言模型，涵盖多模态预训练与指令微调、上下文学习、模型压缩与剪枝，以及衡量模型真实理解能力的评测基准。',
  },
  {
    id: 'agent',
    number: '02',
    image: '/assets/research/02-few-shot.webp',
    alt: 'Satellite view of snow-covered mountain ranges',
    title: 'Agent',
    titleZh: '智能体',
    description: 'Autonomous systems that plan, call tools and verify their own work — hierarchical multi-agent architectures for long-horizon tasks, tool-augmented reasoning, and agents that operate real analysis pipelines end to end.',
    descriptionZh: '研究能够自主规划、调用工具并自我校验的智能体系统，包括面向长程任务的分层多智能体架构、工具增强推理，以及端到端执行完整分析流程的智能体。',
  },
  {
    id: 'leo-communication',
    number: '03',
    image: '/assets/research/03-vision-language.webp',
    alt: 'Satellite view of a coastal city and turquoise sea',
    title: 'Intelligence for LEO Communication and Network',
    titleZh: '低轨通信与网络智能',
    description: 'Learning-based signal and network intelligence for low-Earth-orbit systems: specific emitter identification, intelligent signal processing, and the integration of communication with remote sensing on a single platform.',
    descriptionZh: '面向低轨系统的信号与网络智能，研究特定辐射源识别、智能信号处理，以及通信与遥感在同一平台上的一体化融合。',
  },
  {
    id: 'eo-applications',
    number: '04',
    image: '/assets/research/04-remote-sensing.webp',
    alt: 'Satellite view of a lake and surrounding landscape',
    title: 'Earth Observation Applications',
    titleZh: '对地观测应用',
    description: 'Turning satellite and UAV observations into usable measurements: scene classification, change detection, height and depth estimation, multi-view stereo, and UAV visual localization.',
    descriptionZh: '将卫星与无人机观测转化为可用的测量结果，涵盖场景分类、变化检测、高程与深度估计、多视立体重建以及无人机视觉定位。',
  },
];
