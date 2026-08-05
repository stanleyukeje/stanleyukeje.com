import { SiteMetadata } from '@/types';
import { SOCIAL_URLS } from './social';

export const siteConfig: SiteMetadata = {
  name: 'Stanley Ukeje',
  title: 'Stanley Ukeje — Full Stack Software Engineer | Product Engineer',
  description:
    'Official portfolio of Stanley Ukeje — Full Stack Software Engineer building production web applications with Next.js, React, TypeScript and PostgreSQL.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stanleyukeje.com',
  ogImage: 'https://stanleyukeje.com/og-image.png',
  author: {
    name: 'Stanley Ukeje',
    role: 'Full Stack Software Engineer | Product Engineer',
    bio: 'Full Stack Software Engineer building production web applications from idea to deployment with Next.js, React, TypeScript, PostgreSQL, Supabase and modern cloud infrastructure.',
    location: 'Sharjah, United Arab Emirates (Remote, Worldwide)',
  },
};

export const siteLinks = {
  github: SOCIAL_URLS.github,
  linkedin: SOCIAL_URLS.linkedin,
  twitter: SOCIAL_URLS.twitter,
  youtube: SOCIAL_URLS.youtube,
  email: SOCIAL_URLS.email,
};
