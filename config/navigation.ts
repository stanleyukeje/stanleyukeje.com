import { NavigationItem, FooterNavigationGroup } from '@/types';

export const mainNavItems: NavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'GitHub', href: '/github' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems: FooterNavigationGroup[] = [
  {
    title: 'Platform',
    items: [
      { label: 'Portfolio', href: '/projects' },
      { label: 'Technical Writing', href: '/blog' },
      { label: 'GitHub Dashboard', href: '/github' },
      { label: 'AI Projects', href: '/ai' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Resume', href: '/resume' },
      { label: 'Speaking', href: '/speaking' },
      { label: 'Open Source', href: '/open-source' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Contact', href: '/contact' },
      { label: 'GitHub', href: 'https://github.com', isExternal: true },
      { label: 'LinkedIn', href: 'https://linkedin.com', isExternal: true },
      { label: 'Twitter / X', href: 'https://x.com', isExternal: true },
    ],
  },
];
