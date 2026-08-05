import { Article } from '@/types';

export const articlesConfig: Article[] = [
  {
    title: 'Architecting Production-Ready Next.js 16 Applications',
    slug: 'architecting-production-nextjs-16',
    summary:
      'A deep dive into Server Components, decoupled platform services, and self-hosted container deployments with Docker & Coolify.',
    publishedAt: '2026-08-01',
    readingTime: '5 min read',
    tags: ['Next.js', 'Architecture', 'TypeScript'],
    content: 'Article content coming soon...',
  },
  {
    title: 'Zero-Vendor Lock-in Deployment Strategies',
    slug: 'zero-vendor-lockin-deployment-strategies',
    summary:
      'How to structure web applications to seamlessly run on self-hosted Hetzner servers via Coolify or deploy serverless to Vercel.',
    publishedAt: '2026-07-20',
    readingTime: '7 min read',
    tags: ['DevOps', 'Docker', 'Cloudflare'],
    content: 'Article content coming soon...',
  },
];
