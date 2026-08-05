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
  featured?: boolean;
}

export const articlesConfig: Article[] = [
  {
    slug: 'architecting-resilient-nextjs-16-apps',
    title: 'Architecting Resilient Enterprise Next.js 16 Applications',
    excerpt:
      'A deep dive into decoupled service boundaries, server components, strict type safety, and zero-trust Supabase integration.',
    content: `
# Architecting Resilient Enterprise Next.js 16 Applications

Building production web applications requires prioritizing maintainability, performance, and clear structural boundaries over ad-hoc component design.

## 1. Decoupled Service Boundaries

Never import database or cloud SDK instances directly inside UI components. Always wrap third-party API communication inside a clean service layer:

- \`lib/supabase/\` — Workspace database queries and auth handling
- \`lib/resend/\` — Transactional email dispatchers
- \`lib/github/\` — External API telemetry integration

## 2. Strict Type Safety Without Shortcuts

Using \`any\` in TypeScript introduces latent runtime defects. Enforce strict schema validation and interface typing for domain objects.

## 3. Containerized Standalone Deployment

Deploying with Docker multi-stage builds and Next.js \`output: 'standalone'\` ensures lightweight container footprints and predictable container orchestration via Coolify on Hetzner VPS.
`,
    publishedAt: '2026-08-01',
    readTime: '6 min read',
    author: {
      name: 'Stanley Ukeje',
      role: 'Product Engineer',
      avatar: '/images/profile/stanley.png',
    },
    tags: ['Next.js', 'Architecture', 'TypeScript', 'Docker'],
    featured: true,
  },
  {
    slug: 'software-quality-assurance-in-modern-web-apps',
    title: 'Enforcing Software Quality Assurance in Web Platforms',
    excerpt:
      'How automated linting, strict static analysis, type checking, and Docker multi-stage builds guarantee code quality.',
    content: `
# Enforcing Software Quality Assurance in Web Platforms

Software quality assurance is built directly into modern continuous integration pipelines rather than tested manually after deployment.

## Core QA Gates

1. **Automated Static Analysis**: Catching potential linting defects and unused variables with ESLint before commit execution.
2. **Strict TypeScript Compilation**: Running \`tsc --noEmit\` to verify zero implicit type conversions across all domain interfaces.
3. **Containerized Build Verification**: Testing Docker multi-stage builds locally to guarantee identical behavior in staging and production environments.
`,
    publishedAt: '2026-07-20',
    readTime: '5 min read',
    author: {
      name: 'Stanley Ukeje',
      role: 'Product Engineer',
      avatar: '/images/profile/stanley.png',
    },
    tags: ['QA', 'TypeScript', 'Docker', 'Testing'],
    featured: true,
  },
];
