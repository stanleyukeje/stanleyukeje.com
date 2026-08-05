import { SOCIAL_URLS } from '@/config/social';
import { Project } from '@/types';
import { Article } from '@/config/articles';

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
    jobTitle: 'Full Stack Software Engineer | Product Engineer',
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
    name: 'Stanley Ukeje Portfolio',
    url: 'https://stanleyukeje.com',
    author: {
      '@type': 'Person',
      name: 'Stanley Ukeje',
    },
  };
}

/**
 * Builds SoftwareApplication JSON-LD schema for project case studies
 */
export function buildSoftwareApplicationJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    url: project.demoUrl || `https://stanleyukeje.com/projects/${project.slug}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: 'Stanley Ukeje',
      url: 'https://stanleyukeje.com',
    },
  };
}

/**
 * Builds BlogPosting JSON-LD schema for individual blog articles
 */
export function buildBlogPostingJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    url: `https://stanleyukeje.com/blog/${article.slug}`,
    image: article.coverImage ? `https://stanleyukeje.com${article.coverImage}` : 'https://stanleyukeje.com/og-image.png',
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: 'https://stanleyukeje.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Stanley Ukeje',
      url: 'https://stanleyukeje.com',
    },
  };
}
