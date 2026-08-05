import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { mainNavItems } from '@/config/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', ...mainNavItems.map((item) => item.href)];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
