import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projectsConfig } from '@/config/projects';
import { articlesConfig } from '@/config/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/resume',
    '/contact',
  ];

  const projectRoutes = projectsConfig.map((project) => `/projects/${project.slug}`);
  const articleRoutes = articlesConfig.map((article) => `/blog/${article.slug}`);

  const allRoutes = [...staticRoutes, ...projectRoutes, ...articleRoutes];

  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/projects/') || route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
