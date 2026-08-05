import { siteConfig } from '@/config/site';

export function generateRobots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

export default function robots() {
  return generateRobots();
}
