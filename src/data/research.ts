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
    title: 'Multimodal LLMs',
    titleZh: '多模态大模型',
    description: 'Studying the joint modeling of vision, language, and knowledge to explore how multimodal large language models understand complex scenes, connect information from multiple sources, and reason.',
    descriptionZh: '研究视觉、语言与知识的融合建模，探索多模态大模型如何理解复杂场景、关联多源信息，并开展推理。',
  },
  {
    id: 'agent',
    number: '02',
    image: '/assets/research/02-few-shot.webp',
    alt: 'Satellite view of snow-covered mountain ranges',
    title: 'Agents',
    titleZh: '智能体',
    description: 'Studying how agents understand tasks, make plans, use tools, and collaborate, and exploring methods for completing complex tasks in open and dynamic environments.',
    descriptionZh: '研究智能体如何理解任务、制定计划、调用工具与协同工作，探索其在开放动态环境中完成复杂任务的方法。',
  },
  {
    id: 'leo-communication',
    number: '03',
    image: '/assets/research/03-vision-language.webp',
    alt: 'Satellite view of a coastal city and turquoise sea',
    title: 'LEO Communications and Network Intelligence',
    titleZh: '低轨通信与网络智能',
    description: 'Studying theories and methods for coordinating sensing, communication, computing, and decision-making under changing connectivity and resource constraints in low-Earth-orbit satellite networks.',
    descriptionZh: '面向低轨卫星网络的动态连接与资源约束，研究感知、通信、计算与决策协同的理论与方法。',
  },
  {
    id: 'eo-applications',
    number: '04',
    image: '/assets/research/04-remote-sensing.webp',
    alt: 'Satellite view of a lake and surrounding landscape',
    title: 'Earth Observation Applications',
    titleZh: '对地观测应用',
    description: 'Integrating satellite observations, UAV data, and geospatial information from multiple sources to investigate methods for characterizing land-surface environments, analyzing changes, and reconstructing spatial structure, supporting the interpretation and application of Earth observation data.',
    descriptionZh: '融合卫星、无人机与多源地理信息，研究地表环境的识别、变化分析与空间重建，支撑对地观测数据的理解与应用。',
  },
];
