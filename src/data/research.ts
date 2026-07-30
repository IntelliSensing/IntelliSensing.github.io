export const researchAreaIds = [
  'multimodal-agents',
  'few-zero-shot',
  'vision-language',
  'remote-sensing',
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
    id: 'multimodal-agents',
    number: '01',
    image: '/assets/research/01-multimodal.webp',
    alt: 'Satellite view of a river winding through farmland',
    title: 'Multi-modal LLMs & Agents',
    titleZh: '多模态大模型与智能体',
    description: 'Vision-language multi-modal LLMs, in-context learning, model compression and pruning, and agent systems for real-world tasks such as remote sensing.',
    descriptionZh: '研究视觉语言多模态大模型、上下文学习、模型压缩与剪枝，以及面向遥感等真实任务的智能体系统。',
  },
  {
    id: 'few-zero-shot',
    number: '02',
    image: '/assets/research/02-few-shot.webp',
    alt: 'Satellite view of snow-covered mountain ranges',
    title: 'Few-shot / Zero-shot Learning',
    titleZh: '小样本 / 零样本学习',
    description: 'Attribute prototype networks and visual-semantic embeddings that recognize novel categories from few or zero labeled samples.',
    descriptionZh: '通过属性原型网络与视觉语义嵌入，从少量或零标注样本中识别新类别。',
  },
  {
    id: 'vision-language',
    number: '03',
    image: '/assets/research/03-vision-language.webp',
    alt: 'Satellite view of a coastal city and turquoise sea',
    title: 'Vision-Language Understanding',
    titleZh: '视觉-语言理解',
    description: 'Image captioning, distinctive captioning and visual-semantic alignment - so models not only see, but describe.',
    descriptionZh: '研究图像描述、差异化描述与视觉语义对齐，让模型不仅能够看见，也能够准确表达。',
  },
  {
    id: 'remote-sensing',
    number: '04',
    image: '/assets/research/04-remote-sensing.webp',
    alt: 'Satellite view of a lake and surrounding landscape',
    title: 'Remote Sensing Intelligence',
    titleZh: '遥感智能',
    description: 'Super-resolution, UAV visual localization, height estimation and change detection for Earth observation and sustainability.',
    descriptionZh: '面向地球观测与可持续发展，研究超分辨率、无人机视觉定位、高度估计与变化检测。',
  },
];
