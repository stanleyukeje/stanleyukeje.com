import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function constructSEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
}: SEOOptions = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const metaImage = image || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      images: [{ url: metaImage, width: 1200, height: 1200, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

export function generatePersonJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    sameAs: [
      'https://github.com/stanleyukeje',
      'https://linkedin.com/in/stanleyukeje',
      'https://x.com/stanleyukeje',
    ],
  };
}
