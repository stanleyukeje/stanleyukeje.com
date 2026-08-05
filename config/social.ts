import { SocialLink } from '@/types';

export const SOCIAL_URLS = {
  github: 'https://github.com/stanleyukeje',
  linkedin: 'https://linkedin.com/in/stanleyukeje',
  twitter: 'https://x.com/StanleyUkeje_',
  youtube: 'https://www.youtube.com/@stanley_ukeje',
  email: 'mailto:stan@stanleyukeje.com',
} as const;

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: SOCIAL_URLS.github,
    username: 'stanleyukeje',
    iconName: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: SOCIAL_URLS.linkedin,
    username: 'stanleyukeje',
    iconName: 'Linkedin',
  },
  {
    platform: 'X (Twitter)',
    url: SOCIAL_URLS.twitter,
    username: 'StanleyUkeje_',
    iconName: 'Twitter',
  },
  {
    platform: 'YouTube',
    url: SOCIAL_URLS.youtube,
    username: '@stanley_ukeje',
    iconName: 'Youtube',
  },
  {
    platform: 'Email',
    url: SOCIAL_URLS.email,
    username: 'stan@stanleyukeje.com',
    iconName: 'Mail',
  },
];
