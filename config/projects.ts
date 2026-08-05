import { Project } from '@/types';

export const projectsConfig: Project[] = [
  {
    name: 'BayRight',
    title: 'BayRight',
    slug: 'bayright',
    description:
      'Enterprise platform for workflow automation, real-time analytics, and data pipeline management.',
    longDescription:
      'BayRight is a full-featured enterprise management platform built for speed, resilience, and high-throughput data processing.',
    githubRepository: 'bayright',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://bayright.com',
    caseStudy: '/projects/bayright',
    status: 'production',
    supabaseProject: 'bayright-prod',
    deploymentProvider: 'Vercel',
    deploymentUrl: 'https://bayright.com',
    tags: ['Workflow Automation', 'Next.js', 'PostgreSQL', 'Real-time Telemetry'],
    featured: true,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    detailedStack: {
      frontend: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes', 'Edge Functions', 'Supabase Services'],
      database: ['PostgreSQL', 'Row Level Security (RLS)'],
      infrastructure: ['Vercel Platform', 'Cloudflare CDN'],
      integrations: ['Stripe Payments', 'Resend Email API'],
    },
    github: 'https://github.com/stanleyukeje/bayright',
    demo: 'https://bayright.com',
    coverImage: '/images/projects/bayright.png',
    seo: {
      title: 'BayRight Engineering Ecosystem Study',
      description:
        'Detailed case study on BayRight: scalable data processing, architecture design, and performance optimizations.',
      keywords: ['BayRight', 'Workflow Automation', 'Next.js', 'PostgreSQL'],
    },
    overview:
      'BayRight was built to automate complex multi-stage data pipelines and provide engineering teams with real-time operational analytics.',
    problem:
      'Organizations struggled with manual data orchestration, high-latency status updates, and unreliable third-party integrations.',
    solution:
      'Architected a unified reactive event-driven workflow engine with real-time state synchronization via WebSockets and Supabase PostgreSQL.',
    architecture:
      'The architecture delegates API requests to serverless edge routes while utilizing PostgreSQL RLS policies for zero-trust data access control.',
    features: [
      'Automated multi-stage data pipeline orchestration',
      'Real-time metrics and system health telemetry dashboard',
      'Granular role-based access control (RBAC)',
      'Automated email notifications via Resend',
    ],
    challenges: [
      {
        title: 'High-Throughput State Synchronization',
        description: 'Managing concurrent state updates across hundreds of connected dashboard clients.',
        solution: 'Implemented debounced state batching and optimized Supabase Realtime subscriptions.',
      },
      {
        title: 'Zero-Downtime Data Migrations',
        description: 'Executing database schema alterations without disrupting active workflow executions.',
        solution: 'Used blue/green schema migration patterns with automated fallback checks.',
      },
    ],
    lessons: [
      'Decoupling external third-party SDKs into clean boundary modules prevents vendor lock-in.',
      'Server Components drastically reduce client JS bundle sizes for complex dashboard layouts.',
    ],
    screenshots: ['/images/projects/bayright.png'],
    gallery: ['/images/projects/bayright.png'],
    integrations: ['Supabase', 'Resend', 'Stripe', 'Cloudflare'],
    futureImprovements: [
      'Implement GraphQL API gateway for multi-tenant query customization.',
      'Add distributed tracing telemetry via OpenTelemetry.',
    ],
  },
  {
    name: 'Yike',
    title: 'Yike',
    slug: 'yike',
    description:
      'High-performance collaborative platform designed for modern product engineering teams.',
    longDescription:
      'Yike simplifies cross-functional engineering collaboration with real-time updates and low-latency state synchronization.',
    githubRepository: 'yike',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://yike.app',
    caseStudy: '/projects/yike',
    status: 'production',
    supabaseProject: 'yike-prod',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://yike.app',
    tags: ['Real-time Collaboration', 'WebSockets', 'Redis', 'TypeScript'],
    featured: true,
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Node.js'],
    detailedStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'WebSocket Server'],
      database: ['Redis', 'PostgreSQL'],
      infrastructure: ['Hetzner Cloud', 'Docker Container'],
    },
    github: 'https://github.com/stanleyukeje/yike',
    demo: 'https://yike.app',
    coverImage: '/images/projects/yike.png',
    seo: {
      title: 'Yike Engineering Ecosystem Study',
      description:
        'Engineering case study on building Yike with real-time WebSockets and modern UI patterns.',
      keywords: ['Yike', 'Collaboration', 'WebSockets', 'TypeScript'],
    },
    overview:
      'Yike offers modern engineering teams a unified space for collaborative sprint planning and technical spec reviews.',
    problem:
      'Engineers needed a fast, low-friction tool for real-time document editing and task tracking without bloat.',
    solution:
      'Designed a lightweight React frontend powered by a custom Node.js WebSocket engine backed by Redis state caching.',
    architecture:
      'Client state is updated instantly via local optimistic UI mutations, synchronized asynchronously over WebSockets.',
    features: [
      'Real-time collaborative document editing',
      'Optimistic state updates for instant responsiveness',
      'Custom markdown parser and syntax highlighter',
    ],
    challenges: [
      {
        title: 'Conflict Resolution in Concurrent Edits',
        description: 'Handling overlapping edits from simultaneous remote sessions.',
        solution: 'Utilized Operational Transformation (OT) primitives for message ordering.',
      },
    ],
    lessons: ['Optimistic UI patterns require robust rollbacks when network requests fail.'],
    screenshots: ['/images/projects/yike.png'],
    gallery: ['/images/projects/yike.png'],
    integrations: ['Redis', 'WebSockets'],
    futureImprovements: ['Add CRDT-based offline editing support.'],
  },
  {
    name: 'BamSignal',
    title: 'BamSignal',
    slug: 'bamsignal',
    description:
      'Real-time incident monitoring and automated alert dispatch engine.',
    longDescription:
      'BamSignal aggregates metrics and logs from multi-cloud infrastructure to dispatch high-priority alerts under 100ms.',
    githubRepository: 'bamsignal',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://bamsignal.io',
    caseStudy: '/projects/bamsignal',
    status: 'production',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://bamsignal.io',
    tags: ['Monitoring', 'Incident Response', 'Go', 'Redis'],
    featured: true,
    stack: ['Go', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redis'],
    detailedStack: {
      frontend: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
      backend: ['Go (Golang)', 'Gin Framework'],
      database: ['Redis', 'PostgreSQL'],
      infrastructure: ['Hetzner VPS', 'Docker'],
    },
    github: 'https://github.com/stanleyukeje/bamsignal',
    demo: 'https://bamsignal.io',
    coverImage: '/images/projects/bamsignal.png',
    seo: {
      title: 'BamSignal Engineering Ecosystem Study',
      description:
        'How BamSignal processes thousands of signals per second with sub-100ms latency.',
      keywords: ['BamSignal', 'Monitoring', 'Incident Response', 'Go'],
    },
    overview:
      'BamSignal acts as an early warning monitoring gateway for cloud infrastructure alerts.',
    problem:
      'Existing alerting platforms incurred high latency delays and expensive per-seat pricing models.',
    solution:
      'Built a high-performance Go backend service capable of evaluating 10,000+ signals/sec with sub-100ms alert dispatching.',
    architecture:
      'Go goroutines process inbound log streams into a Redis ring buffer before fanning out webhook payloads.',
    features: [
      'Sub-100ms webhook alert dispatch engine',
      'Configurable noise-reduction alert escalation policies',
      'Infrastructure uptime telemetry dashboard',
    ],
    challenges: [
      {
        title: 'Garbage Collection Pressure Under Spikes',
        description: 'Preventing memory spikes during sudden alert volume spikes.',
        solution: 'Implemented buffer pooling via sync.Pool in Go.',
      },
    ],
    lessons: ['Go is exceptional for microservices requiring predictable low-latency throughput.'],
    screenshots: ['/images/projects/bamsignal.png'],
    gallery: ['/images/projects/bamsignal.png'],
    integrations: ['Twilio', 'PagerDuty API', 'Redis'],
    futureImprovements: ['Support eBPF system kernel monitoring hooks.'],
  },
  {
    name: 'LogicVault',
    title: 'LogicVault',
    slug: 'logicvault',
    description:
      'Zero-trust security vault and policy engine for cloud environment secrets.',
    longDescription:
      'LogicVault provides end-to-end encrypted secret distribution and dynamic policy enforcement for microservices.',
    githubRepository: 'logicvault',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    caseStudy: '/projects/logicvault',
    status: 'in-development',
    deploymentProvider: 'Cloudflare Pages',
    tags: ['Security', 'Zero Trust', 'Cryptography'],
    featured: false,
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vault'],
    detailedStack: {
      frontend: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Supabase Edge Functions'],
      database: ['PostgreSQL', 'Vault Encryption'],
    },
    github: 'https://github.com/stanleyukeje/logicvault',
    coverImage: '/images/projects/logicvault.png',
    seo: {
      title: 'LogicVault Engineering Ecosystem Study',
      description:
        'Architectural design of LogicVault zero-trust secret management engine.',
      keywords: ['LogicVault', 'Security', 'Zero Trust', 'Cryptography'],
    },
    overview:
      'LogicVault allows developer teams to manage and rotate application secrets securely.',
    problem:
      'Secrets were frequently committed to code repositories or shared insecurely over messaging channels.',
    solution:
      'Created an AES-256 client-side encrypted vault with hardware key support and audit logs.',
    features: ['Client-side AES-256 secret encryption', 'Audit trail log telemetry'],
    challenges: [],
    lessons: ['Encryption at rest must be paired with zero-trust key distribution policies.'],
    screenshots: ['/images/projects/logicvault.png'],
    gallery: ['/images/projects/logicvault.png'],
  },
  {
    name: 'Rentovix',
    title: 'Rentovix',
    slug: 'rentovix',
    description:
      'Property management and automated lease compliance engine.',
    longDescription:
      'Rentovix streamlines tenant onboarding, digital contract signing, and automated rent collection.',
    githubRepository: 'rentovix',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://rentovix.com',
    caseStudy: '/projects/rentovix',
    status: 'production',
    deploymentProvider: 'Vercel',
    deploymentUrl: 'https://rentovix.com',
    tags: ['Fintech', 'Stripe', 'Property Management'],
    featured: false,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    detailedStack: {
      frontend: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL'],
      integrations: ['Stripe Billing', 'DocuSign API'],
    },
    github: 'https://github.com/stanleyukeje/rentovix',
    demo: 'https://rentovix.com',
    coverImage: '/images/projects/rentovix.png',
    seo: {
      title: 'Rentovix Engineering Ecosystem Study',
      description:
        'Case study on building automated payment flows and lease compliance with Rentovix.',
      keywords: ['Rentovix', 'Fintech', 'Stripe', 'Next.js'],
    },
    overview:
      'Rentovix automates lease management, tenant background checks, and recurring rent payments.',
    problem:
      'Property managers spent hours tracking manual bank transfers and physical lease agreements.',
    solution:
      'Engineered an end-to-end automated billing portal backed by Stripe Connect and webhooks.',
    features: ['Automated recurring ACH and Card billing', 'Digital lease signature workflow'],
    challenges: [],
    lessons: ['Handling asynchronous payment webhooks requires strict idempotency keys.'],
    screenshots: ['/images/projects/rentovix.png'],
    gallery: ['/images/projects/rentovix.png'],
  },
];
