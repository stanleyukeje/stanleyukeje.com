export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  coverImage?: string;
  featured?: boolean;
}

export const articlesConfig: Article[] = [
  {
    slug: 'building-five-production-web-applications-nextjs-supabase',
    title: 'Building Five Production Web Applications with Next.js & Supabase',
    excerpt:
      'A practical look at building and deploying full-stack web platforms across fintech, real estate, social discovery, and property management.',
    content: `
# Building Five Production Web Applications with Next.js & Supabase

Over the past several years, I have engineered and deployed five production web platforms—**BayRight**, **Yike**, **BamSignal**, **Rentovix**, and **LogicVault**.

## Core Web Stack Selection

Choosing Next.js, React, TypeScript, and Supabase provided a unified full-stack foundation across all five projects:

1. **Next.js (App Router)**: Enables fast server-side rendering, static page generation, and clean API routing.
2. **TypeScript**: Provides compile-time type safety across frontend components and backend payload interfaces.
3. **Supabase & PostgreSQL**: Delivers relational database storage, authentication, and file storage buckets.
4. **Tailwind CSS**: Speeds up UI design while guaranteeing responsive layout support on desktop and mobile.

## Key Engineering Takeaways

- **Decoupled API Layers**: Wrapping Supabase database queries inside dedicated service modules prevents component bloat.
- **Form State Validation**: Handling user input validation on both client and server prevents invalid database mutations.
- **Containerized Deployment**: Dockerizing Next.js standalone builds makes Coolify deployment on Hetzner VPS smooth and repeatable.
`,
    publishedAt: '2026-08-01',
    readTime: '6 min read',
    author: {
      name: 'Stanley Ukeje',
      role: 'Full Stack Software Engineer',
      avatar: '/images/profile/stanley.png',
    },
    tags: ['Next.js', 'Supabase', 'TypeScript', 'PostgreSQL'],
    coverImage: '/images/projects/bayright.png',
    featured: true,
  },
  {
    slug: 'end-to-end-workflow-for-shipping-full-stack-applications',
    title: 'My End-to-End Workflow for Shipping Full-Stack Applications',
    excerpt:
      'How I take web applications from architecture and database design to Docker containerization, Cloudflare proxying, and production deployment.',
    content: `
# My End-to-End Workflow for Shipping Full-Stack Applications

Shipping production web applications requires an organized lifecycle workflow covering database modeling, frontend UI development, quality assurance, and cloud hosting.

## 1. Database Schema & Auth Setup

Before writing UI components, I design PostgreSQL tables with clear foreign keys and configure Supabase user authentication.

## 2. Component & API Development

Building with Next.js Server Components allows fetching data close to the database, keeping client JavaScript bundles small.

## 3. Quality Assurance & Static Checks

- **ESLint**: Catches unused variables and syntax warnings.
- **TypeScript Compilation (\`tsc --noEmit\`)**: Verifies data interfaces.
- **Playwright Testing**: Tests critical user paths like login and contact submissions.

## 4. Container Deployment with Coolify & Cloudflare

Next.js standalone output is packaged into a multi-stage Dockerfile and deployed via Coolify orchestrator on a Hetzner VPS behind Cloudflare CDN proxying.
`,
    publishedAt: '2026-07-25',
    readTime: '5 min read',
    author: {
      name: 'Stanley Ukeje',
      role: 'Full Stack Software Engineer',
      avatar: '/images/profile/stanley.png',
    },
    tags: ['Workflow', 'Docker', 'Coolify', 'DevOps'],
    coverImage: '/images/projects/bamsignal.png',
    featured: true,
  },
  {
    slug: 'lessons-learned-building-production-software-across-fintech-real-estate-saas',
    title: 'Lessons Learned Building Production Software Across Fintech, Real Estate and SaaS',
    excerpt:
      'Engineering insights on payment webhook handling, listing search indexing, media uploads, and database schema design.',
    content: `
# Lessons Learned Building Production Software Across Fintech, Real Estate and SaaS

Building applications for different industries highlights specific technical challenges in data handling, user workflows, and state synchronization.

## 1. Digital Payments (BayRight)

- **Webhook Idempotency**: Payment gateways trigger async webhooks that require idempotent database update handlers to prevent duplicate processing.

## 2. Real Estate Search (Yike)

- **Database Query Indexing**: Filtering listings by price, location, and property type requires indexed PostgreSQL columns for fast query execution.

## 3. Social Media Uploads (BamSignal)

- **Media Storage Buckets**: Offloading user profile photos to Supabase Storage buckets prevents database bloat and speeds up profile page rendering.

## 4. Rental Management Schemas (Rentovix)

- **Relational Data Integrity**: Designing clear foreign key relationships between property units, tenants, and lease records prevents billing discrepancies.
`,
    publishedAt: '2026-07-15',
    readTime: '7 min read',
    author: {
      name: 'Stanley Ukeje',
      role: 'Full Stack Software Engineer',
      avatar: '/images/profile/stanley.png',
    },
    tags: ['Fintech', 'Real Estate', 'SaaS', 'Lessons Learned'],
    coverImage: '/images/projects/yike.png',
    featured: true,
  },
];
