import { HeaderItem } from '@/components/header/config';

export const baseHeaderTemp: HeaderItem[] = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    children: [
      {
        title: 'Overview',
        isCategory: true,
        isLast: true,
        children: [{ title: 'Service Overview', href: '/services/overview' }],
      },
      {
        title: 'Development & Launch Prep',
        isCategory: true,
        children: [
          {
            title: 'Dev Tools',
            isLast: true,
            children: [
              {
                title: 'Translation Management Tool',
                href: '/services/translation-management-tool',
              },
              {
                title: 'WebView Support',
                href: '/services/webview-support',
              },
            ],
          },
          {
            title: 'Distribution',
            isLast: true,
            children: [
              {
                title: 'Distribution Tool',
                href: '/services/distribution-tool',
              },
              {
                title: 'Cross Platform',
                href: '/services/cross-platform',
              },
            ],
          },
        ],
      },
      {
        title: 'User Management',
        isCategory: true,
        children: [
          {
            title: 'User segment',
            isLast: true,
            children: [
              {
                title: 'User segment 1',
                href: '/services/user-segment-1',
              },
              {
                title: 'User segment 2',
                href: '/services/user-segment-2',
              },
            ],
          },
          {
            title: 'Analyze',
            isLast: true,
            children: [
              {
                title: 'Analyze management',
                href: '/services/analyze-management',
              },
              {
                title: 'Analyze platform',
                href: '/services/analyze-platform',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Document',
    href: '/document',
  },
  {
    title: 'Support',
    children: [
      {
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
];
