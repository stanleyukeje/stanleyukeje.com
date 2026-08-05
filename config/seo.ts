import { Metadata } from 'next';
import { siteConfig } from './site';

export const defaultSEO: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  keywords: [
    'Stanley Ukeje',
    'Product Engineer',
    'Senior Software Engineer',
    'Next.js',
    'TypeScript',
    'Full Stack Engineer',
    'System Architecture',
  ],
  icons: {
    icon: '/icon.webp',
    shortcut: '/icon.webp',
    apple: '/icon.webp',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/icon.webp',
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/icon.webp'],
    creator: '@stanleyukeje',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
