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
    name: 'Alex Chen',
    nameZh: '陈安',
    formerRole: 'Former PhD Student',
    formerRoleZh: '原博士生',
    year: '2025',
    destination: 'Research Scientist at the Institute for Intelligent Systems',
    destinationZh: '智能系统研究院研究科学家',
  },
  {
    name: 'Maya Liu',
    nameZh: '刘玥',
    formerRole: 'Former Master Student',
    formerRoleZh: '原硕士生',
    year: '2024',
    destination: 'PhD Student at Example University',
    destinationZh: 'Example University 博士生',
  },
];
