import { NavigationItem, FooterNavigationGroup } from '@/types';
import { SOCIAL_URLS } from './social';

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
      { label: 'GitHub', href: SOCIAL_URLS.github, isExternal: true },
      { label: 'LinkedIn', href: SOCIAL_URLS.linkedin, isExternal: true },
      { label: 'X (Twitter)', href: SOCIAL_URLS.twitter, isExternal: true },
      { label: 'YouTube', href: SOCIAL_URLS.youtube, isExternal: true },
    ],
  },
];
