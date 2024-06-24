export type HeaderItem = {
  id?: string;
  title: string;
  isCategory?: boolean;
  href?: string;
  isLast?: boolean;
  isExternalLink?: boolean;
  children?: HeaderItem[];
};

const initialHeaderConfig = {
  about: {
    title: 'About',
    href: '/about',
  },
  services: {
    title: 'Services',
    children: [
      {
        title: 'Overview',
        isCategory: true,
        isLast: true,
        children: [{ title: 'Service Overview', href: '/services/overview' }],
      },
    ],
  },
  document: {
    title: 'Document',
    href: '/document',
  },
  support: {
    title: 'Support',
    children: [
      {
        title: 'News',
        isCategory: true,
        isLast: true,
      },
      {
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
      },
    ],
  },
};

export const baseHeaderConfig: HeaderItem[] = [
  initialHeaderConfig.about,
  initialHeaderConfig.services,
  initialHeaderConfig.document,
  initialHeaderConfig.support,
];
