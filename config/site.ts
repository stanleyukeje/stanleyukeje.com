import { SiteMetadata } from '@/types';
import { SOCIAL_URLS } from './social';

export const siteConfig: SiteMetadata = {
  name: 'Stanley Ukeje',
  title: 'Stanley Ukeje — Product Engineer & Systems Architect',
  description:
    'Official portfolio and engineering platform of Stanley Ukeje — Product Engineer specializing in full-stack development, software quality assurance, and production-ready web applications.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stanleyukeje.com',
  ogImage: 'https://stanleyukeje.com/og-image.png',
  author: {
    name: 'Stanley Ukeje',
    role: 'Product Engineer',
    bio: 'Product Engineer specializing in resilient systems architecture, software quality assurance, and high-performance web applications.',
    location: 'Abuja, Nigeria (Remote, Worldwide)',
  },
};

export const siteLinks = {
  github: SOCIAL_URLS.github,
  linkedin: SOCIAL_URLS.linkedin,
  twitter: SOCIAL_URLS.twitter,
  youtube: SOCIAL_URLS.youtube,
  email: SOCIAL_URLS.email,
};
