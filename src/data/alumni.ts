export interface AlumniMember {
  name: string;
  nameZh?: string;
  formerRole: string;
  formerRoleZh: string;
  year?: string;
  destination?: string;
  destinationZh?: string;
  homepage?: string;
}

export const alumni: AlumniMember[] = [
  {
    name: 'Zijian Yu',
    nameZh: '余子建',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
    destination: 'Alibaba International Digital Commerce Group',
    destinationZh: '阿里巴巴国际数字商业集团',
  },
  {
    name: 'Yixu Wang',
    nameZh: '王一旭',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
    destination: 'China Mobile, Henan Branch',
    destinationZh: '中国移动河南省公司',
  },
  {
    name: 'Yaxuan Yao',
    nameZh: '姚雅轩',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
    destination: 'State Grid Corporation of China',
    destinationZh: '国家电网',
  },
  {
    name: 'Jiaqi Cao',
    nameZh: '曹佳琦',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
    destination: 'China Bond Financial Technology Co., Ltd.',
    destinationZh: '中债金科信息技术有限公司',
  },
  {
    name: 'Chuchu Huang',
    nameZh: '黄楚楚',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2025',
    destination: 'Administrative Committee of Ningbo Jiangbei Hi-Tech Industrial Park',
    destinationZh: '宁波江北高新技术产业园区管委会',
  },
];
