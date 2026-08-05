import { Metadata } from 'next';
import { defaultSEO } from '@/config/seo';
import { siteConfig } from '@/config/site';

export * from './helpers';

export interface SEOParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function constructSEO(params?: SEOParams): Metadata {
  if (!params) return defaultSEO;

  const url = params.path ? `${siteConfig.url}${params.path}` : siteConfig.url;
  const ogImage = params.image ? (params.image.startsWith('http') ? params.image : `${siteConfig.url}${params.image}`) : `${siteConfig.url}/og-image.png`;
  const titleText = params.title ? (params.title.includes('Stanley Ukeje') ? params.title : `${params.title} | Stanley Ukeje`) : (siteConfig.title as string);

  return {
    ...defaultSEO,
    metadataBase: new URL(siteConfig.url),
    title: titleText,
    description: params.description || siteConfig.description,
    keywords: params.keywords || defaultSEO.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultSEO.openGraph,
      title: titleText,
      description: params.description || siteConfig.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: titleText,
        },
      ],
    },
    twitter: {
      ...defaultSEO.twitter,
      title: titleText,
      description: params.description || siteConfig.description,
      images: [ogImage],
    },
  };
}
