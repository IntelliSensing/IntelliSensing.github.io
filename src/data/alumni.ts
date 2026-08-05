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
  },
  {
    name: 'Yixu Wang',
    nameZh: '王一旭',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2026',
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
  },
];
