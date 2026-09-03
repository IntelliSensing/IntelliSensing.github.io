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
    name: 'Chuchu Huang',
    nameZh: '黄楚楚',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2025',
  },
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
    name: 'Jiaqi Cao',
    nameZh: '曹佳琦',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
  },
  {
    name: 'Yaxuan Yao',
    nameZh: '姚雅轩',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
    destination: 'Information & Communication Branch, State Grid Jibei Electric Power Co., Ltd.',
    destinationZh: '国网冀北电力有限公司信息通信分公司',
  },
];
