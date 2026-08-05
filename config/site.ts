import { SiteMetadata } from '@/types';

export const siteConfig: SiteMetadata = {
  name: 'Stanley Ukeje',
  title: 'Stanley Ukeje — Senior Product Engineer',
  description:
    'Official engineering platform & portfolio of Stanley Ukeje. Specializing in high-performance web applications, scalable system design, and AI integrations.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stanleyukeje.com',
  ogImage: '/icon.png',
  author: {
    name: 'Stanley Ukeje',
    role: 'Senior Product Engineer',
    bio: 'Architecting scalable platforms, performant web applications, and resilient cloud solutions.',
    location: 'Global / Remote',
  },
};
