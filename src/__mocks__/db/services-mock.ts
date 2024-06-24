// =====Introduction=====

import { HeaderItem } from '@/components/header/config';

const serviceIntroductionDevTools: HeaderItem[] = [
  {
    title: 'Translation Management Tool',
    href: '/services/translation-management-tool',
  },
  {
    title: 'WebView Support',
    href: '/services/webview-support',
  },
];

const serviceIntroductionDistribution: HeaderItem[] = [
  {
    title: 'Distribution Tool',
    href: '/services/distribution-tool',
  },
  {
    title: 'Cross Platform',
    href: '/services/cross-platform',
  },
];

const serviceIntroductionUserSegment: HeaderItem[] = [
  {
    title: 'User segment 1',
    href: '/services/user-segment-1',
  },
  {
    title: 'User segment 2',
    href: '/services/user-segment-2',
  },
];

const serviceIntroductionAnalyze: HeaderItem[] = [
  {
    title: 'Analyze management',
    href: '/services/analyze-management',
  },
  {
    title: 'Analyze platform',
    href: '/services/analyze-platform',
  },
];

// =====Service Category=====
const serviceCategoryOverview: HeaderItem = {
  title: 'Service Overview',
  href: '/services/overview',
};

const serviceCategoryDevTools: HeaderItem = {
  id: 'dev-tools',
  title: 'Dev Tools',
  isLast: true,
  children: serviceIntroductionDevTools,
};

const serviceCategoryDevToolsWithoutIntroduction: HeaderItem = {
  id: 'dev-tools',
  title: 'Dev Tools',
  isLast: true,
};

const serviceCategoryDistribution: HeaderItem = {
  id: 'distribution',
  title: 'Distribution',
  isLast: true,
  children: serviceIntroductionDistribution,
};

const serviceCategoryDistributionWithoutIntroduction: HeaderItem = {
  id: 'distribution',
  title: 'Distribution',
  isLast: true,
};

const serviceCategoryUserSegment: HeaderItem = {
  id: 'user-segment',
  title: 'User segment',
  isLast: true,
  children: serviceIntroductionUserSegment,
};

const serviceCategoryUserSegmentWithoutIntroduction: HeaderItem = {
  id: 'user-segment',
  title: 'User segment',
  isLast: true,
};

const serviceCategoryAnalyze: HeaderItem = {
  id: 'analyze',
  title: 'Analyze',
  isLast: true,
  children: serviceIntroductionAnalyze,
};

const serviceCategoryAnalyzeWithoutIntroduction: HeaderItem = {
  id: 'analyze',
  title: 'Analyze',
  isLast: true,
};

// =====Category=====
const categoryOverview: HeaderItem = {
  title: 'Overview',
  isCategory: true,
  isLast: true,
  children: [serviceCategoryOverview],
};

const categoryDevelopment: HeaderItem = {
  id: 'development',
  title: 'Development & Launch Prep',
  isCategory: true,
  children: [serviceCategoryDevTools, serviceCategoryDistribution],
};

const categoryDevelopmentTemp: HeaderItem = {
  id: 'development',
  title: 'Development & Launch Prep',
  isCategory: true,
  children: [
    serviceCategoryDevToolsWithoutIntroduction,
    serviceCategoryDistributionWithoutIntroduction,
  ],
};

const categoryUserManagement: HeaderItem = {
  id: 'user-management',
  title: 'User Management',
  isCategory: true,
  children: [serviceCategoryUserSegment, serviceCategoryAnalyze],
};

const categoryUserManagementTemp: HeaderItem = {
  id: 'user-management',
  title: 'User Management',
  isCategory: true,
  children: [
    serviceCategoryUserSegmentWithoutIntroduction,
    serviceCategoryAnalyzeWithoutIntroduction,
  ],
};

const categoryNews: HeaderItem = {
  title: 'News',
  isCategory: true,
  isLast: true,
  children: [
    {
      title: 'Release Notes',
      href: '/support/release-notes',
    },
    {
      title: 'Announcements',
      href: '/support/announcements',
    },
    {
      title: 'Tech blog',
      href: '/tech-blog',
      isExternalLink: true,
    },
  ],
};

const categoryResources: HeaderItem = {
  title: 'Resources',
  isCategory: true,
  isLast: true,
  children: [
    {
      title: 'FAQ',
      href: '/resources/faq',
    },
    {
      title: 'Glossary',
      href: '/glossary',
      isExternalLink: true,
    },
  ],
};

// =====Header configs=====
export const headerMock: HeaderItem[] = [
  {
    title: 'About',
    href: '/about',
  },
  {
    id: 'services',
    title: 'Services',
    children: [categoryOverview, categoryDevelopment, categoryUserManagement],
  },
  {
    title: 'Document',
    href: '/document',
  },
  {
    title: 'Support',
    children: [categoryNews, categoryResources],
  },
];

// category => service => introduction

const listIntroduction = {
  'dev-tools': serviceIntroductionDevTools,
  distribution: serviceIntroductionDistribution,
  'user-segment': serviceIntroductionUserSegment,
  analyze: serviceIntroductionAnalyze,
};

// =====Mocks=====
export const listCategoryMock = () => {
  return [categoryDevelopmentTemp, categoryUserManagementTemp];
};

export const listServiceIntroductionMock = (service: string) => {
  return listIntroduction[service as 'distribution'];
};
