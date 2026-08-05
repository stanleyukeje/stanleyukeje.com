import { Metadata } from 'next';
import { defaultSEO } from '@/config/seo';
import { buildPersonJsonLd } from './helpers';

export * from './helpers';

export interface SEOParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function constructSEO(params?: SEOParams): Metadata {
  if (!params) return defaultSEO;

  return {
    ...defaultSEO,
    title: params.title ? `${params.title} | Stanley Ukeje` : defaultSEO.title,
    description: params.description || defaultSEO.description,
  };
}

export function generatePersonJSONLD() {
  return buildPersonJsonLd();
}
