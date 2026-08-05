import { NavigationItem, FooterNavigationGroup } from '@/types';

export const mainNavItems: NavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems: FooterNavigationGroup[] = [
  {
    title: 'Platform',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Resume', href: '/resume' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Contact', href: '/contact' },
      { label: 'GitHub', href: 'https://github.com/stanleyukeje', isExternal: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/stanleyukeje', isExternal: true },
      { label: 'X (Twitter)', href: 'https://x.com/StanleyUkeje_', isExternal: true },
      { label: 'YouTube', href: 'https://www.youtube.com/@stanley_ukeje', isExternal: true },
    ],
  },
];
