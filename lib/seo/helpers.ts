import { SOCIAL_URLS } from '@/config/social';

/**
 * Builds standard Person JSON-LD schema for Stanley Ukeje
 */
export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Stanley Ukeje',
    url: 'https://stanleyukeje.com',
    image: 'https://stanleyukeje.com/images/profile/stanley.png',
    jobTitle: 'Product Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'StanleyUkeje Engineering',
    },
    sameAs: [
      SOCIAL_URLS.github,
      SOCIAL_URLS.linkedin,
      SOCIAL_URLS.twitter,
      SOCIAL_URLS.youtube,
    ],
  };
}

/**
 * Builds WebSite JSON-LD schema
 */
export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Stanley Ukeje Platform',
    url: 'https://stanleyukeje.com',
  };
}
