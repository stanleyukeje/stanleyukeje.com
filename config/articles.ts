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
    slug: 'sub-100ms-alert-telemetry-in-go',
    title: 'Building Sub-100ms Incident Alert Telemetry in Go',
    excerpt:
      'How BamSignal evaluates thousands of incoming log signals per second using Go goroutines and Redis ring buffers.',
    content: `
# Building Sub-100ms Incident Alert Telemetry in Go

High-availability infrastructure monitoring requires sub-second signal evaluation and low garbage collection latency under sudden traffic spikes.

## Key Architectural Patterns

1. **Ring Buffer Queuing**: Ingesting incoming webhooks into Redis memory buffers before worker fan-out.
2. **Sync Pool Buffers**: Reducing memory allocation churn in Go goroutines using \`sync.Pool\`.
3. **Automated Escalation**: Evaluating notification rules within sub-100ms dispatch targets.
`,
    publishedAt: '2026-07-20',
    readTime: '8 min read',
    author: {
      name: 'Stanley Ukeje',
      role: 'Product Engineer',
      avatar: '/images/profile/stanley.png',
    },
    tags: ['Go', 'Redis', 'Telemetry', 'Performance'],
    featured: true,
  },
];
