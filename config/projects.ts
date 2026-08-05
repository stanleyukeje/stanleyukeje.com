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
    tags: ['Workflow Automation', 'Next.js', 'PostgreSQL', 'Supabase'],
    featured: true,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    detailedStack: {
      frontend: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes', 'Supabase Server Actions'],
      database: ['PostgreSQL', 'Row Level Security (RLS)'],
      infrastructure: ['Vercel Platform', 'Cloudflare CDN'],
      integrations: ['Resend Email API'],
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
      'BayRight is an enterprise platform engineered to automate multi-stage operational workflows, manage data pipelines, and provide real-time dashboard analytics.',
    problem:
      'Organizations struggled with manual data processing workflows, unverified data mutation access rules, and fragmented operational reporting tools.',
    solution:
      'Engineered a structured workflow engine leveraging PostgreSQL Row Level Security (RLS) policies and Next.js 16 Server Components to enforce zero-trust access and fast page loading.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN & Proxy"]
    Cloudflare --> Vercel["Vercel Edge Network"]
    Vercel --> NextApp["Next.js 16 App Router"]
    NextApp --> Supabase["Supabase (PostgreSQL & Auth)"]
    NextApp --> Resend["Resend Email API"]`,
    features: [
      'Multi-stage automated workflow execution',
      'PostgreSQL Row Level Security (RLS) data isolation',
      'Transactional notifications via Resend API',
      'Server-side rendered analytics dashboard',
    ],
    challenges: [
      {
        title: 'Multi-Tenant Data Access Control',
        description: 'Ensuring strict tenant data boundary isolation across complex workflow operations.',
        solution: 'Implemented granular PostgreSQL RLS security policies bound to Supabase Auth user sessions.',
      },
    ],
    lessons: [
      'Utilizing server components drastically reduces client JavaScript bundle sizes for data-heavy dashboards.',
      'Decoupling transactional email dispatching behind clean API layers prevents network blocking during form handling.',
    ],
    screenshots: ['/images/projects/bayright.png'],
    gallery: ['/images/projects/bayright.png'],
    integrations: ['Supabase', 'Resend', 'Cloudflare'],
    futureImprovements: [
      'Planned Improvement: Add automated workflow schedule triggers via background CRON jobs.',
      'Planned Improvement: Implement CSV export and automated reporting tools.',
    ],
  },
  {
    name: 'Yike',
    title: 'Yike',
    slug: 'yike',
    description:
      'Collaborative platform designed for modern product engineering teams.',
    longDescription:
      'Yike simplifies cross-functional engineering collaboration with real-time updates and document management.',
    githubRepository: 'yike',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://yike.app',
    caseStudy: '/projects/yike',
    status: 'production',
    supabaseProject: 'yike-prod',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://yike.app',
    tags: ['Collaboration', 'React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    detailedStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Services'],
      database: ['PostgreSQL', 'Supabase'],
      infrastructure: ['Hetzner VPS', 'Docker Container'],
    },
    github: 'https://github.com/stanleyukeje/yike',
    demo: 'https://yike.app',
    coverImage: '/images/projects/yike.png',
    seo: {
      title: 'Yike Engineering Ecosystem Study',
      description:
        'Engineering case study on building Yike collaborative web application.',
      keywords: ['Yike', 'Collaboration', 'React', 'TypeScript'],
    },
    overview:
      'Yike offers product engineering teams a clean workspace for document sharing, sprint planning, and spec reviews.',
    problem:
      'Engineering teams needed a lightweight, web-native tool to organize technical specifications and project requirements without bloated UI clutter.',
    solution:
      'Built a fast React web interface using TypeScript and Tailwind CSS, backed by Node.js API services and PostgreSQL data persistence.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN & Proxy"]
    Cloudflare --> Coolify["Coolify Orchestrator (Hetzner VPS)"]
    Coolify --> NextApp["Node.js Application Container"]
    NextApp --> Supabase["Supabase (PostgreSQL & Auth)"]`,
    features: [
      'Technical document and spec management',
      'Clean markdown viewing and formatting',
      'Sprint backlog organization interface',
    ],
    challenges: [
      {
        title: 'Responsive Navigation & Layout State',
        description: 'Maintaining layout stability across complex multi-column documentation views on mobile screens.',
        solution: 'Implemented responsive sidebar drawers and flexible CSS container layouts.',
      },
    ],
    lessons: [
      'Keeping state local to document viewer components prevents unintended parent re-renders.',
    ],
    screenshots: ['/images/projects/yike.png'],
    gallery: ['/images/projects/yike.png'],
    integrations: ['Supabase', 'Cloudflare'],
    futureImprovements: [
      'Planned Improvement: Add WebSocket real-time collaborative editing presence.',
      'Planned Improvement: Add offline caching and local draft storage.',
    ],
  },
  {
    name: 'BamSignal',
    title: 'BamSignal',
    slug: 'bamsignal',
    description:
      'Incident monitoring and automated alert dispatch engine.',
    longDescription:
      'BamSignal aggregates logs and system health metrics to dispatch alerts and notifications.',
    githubRepository: 'bamsignal',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://bamsignal.io',
    caseStudy: '/projects/bamsignal',
    status: 'production',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://bamsignal.io',
    tags: ['Monitoring', 'Incident Response', 'Node.js', 'PostgreSQL'],
    featured: true,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    detailedStack: {
      frontend: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Services'],
      database: ['PostgreSQL'],
      infrastructure: ['Hetzner VPS', 'Docker Container'],
    },
    github: 'https://github.com/stanleyukeje/bamsignal',
    demo: 'https://bamsignal.io',
    coverImage: '/images/projects/bamsignal.png',
    seo: {
      title: 'BamSignal Engineering Ecosystem Study',
      description:
        'How BamSignal routes incident monitoring notifications.',
      keywords: ['BamSignal', 'Monitoring', 'Incident Response', 'Next.js'],
    },
    overview:
      'BamSignal serves as an incident alert monitoring hub for application uptime metrics.',
    problem:
      'Development teams needed a simple, predictable monitoring gateway to capture uptime health pings and dispatch webhook notifications.',
    solution:
      'Built a Next.js 16 and Node.js monitoring service backed by PostgreSQL schema tables and HTTP health check listeners.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN & Proxy"]
    Cloudflare --> Coolify["Coolify Orchestrator (Hetzner VPS)"]
    Coolify --> NextApp["Next.js Standalone Container"]
    NextApp --> Postgres["PostgreSQL Database"]`,
    features: [
      'Application uptime health check route',
      'Configurable alert target endpoints',
      'Uptime status history logs',
    ],
    challenges: [
      {
        title: 'Asynchronous Alert Dispatch Handling',
        description: 'Preventing webhook HTTP timeout failures during bulk alert notification dispatches.',
        solution: 'Isolated alert dispatch calls into non-blocking asynchronous event handlers.',
      },
    ],
    lessons: [
      'Explicit HTTP timeout configurations are critical when communicating with third-party webhook targets.',
    ],
    screenshots: ['/images/projects/bamsignal.png'],
    gallery: ['/images/projects/bamsignal.png'],
    integrations: ['Resend', 'Cloudflare'],
    futureImprovements: [
      'Planned Improvement: Add automated SMS notifications via Twilio integration.',
      'Planned Improvement: Add custom escalation schedule policies.',
    ],
  },
  {
    name: 'LogicVault',
    title: 'LogicVault',
    slug: 'logicvault',
    description:
      'Zero-trust security vault and policy engine for secret management.',
    longDescription:
      'LogicVault provides encrypted secret distribution and access logging for environment configurations.',
    githubRepository: 'logicvault',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    caseStudy: '/projects/logicvault',
    status: 'in-development',
    deploymentProvider: 'Cloudflare Pages',
    tags: ['Security', 'Zero Trust', 'TypeScript'],
    featured: false,
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase'],
    detailedStack: {
      frontend: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL'],
    },
    github: 'https://github.com/stanleyukeje/logicvault',
    coverImage: '/images/projects/logicvault.png',
    seo: {
      title: 'LogicVault Engineering Ecosystem Study',
      description:
        'Architectural design of LogicVault secret management vault.',
      keywords: ['LogicVault', 'Security', 'Zero Trust', 'TypeScript'],
    },
    overview:
      'LogicVault is an in-development secret management vault engineered to organize and distribute environment configuration variables securely.',
    problem:
      'Application secrets were frequently shared over insecure messaging channels or stored unencrypted in plain text repositories.',
    solution:
      'Designing a TypeScript secret vault utilizing client-side encryption and granular audit logging.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare Pages"]
    Cloudflare --> NextApp["Next.js App Engine"]
    NextApp --> Supabase["Supabase Storage"]`,
    features: [
      'Environment variable organization interface',
      'Audit log access history tracking',
    ],
    challenges: [],
    lessons: [
      'Secret management platforms must treat all client environments as untrusted boundaries.',
    ],
    screenshots: ['/images/projects/logicvault.png'],
    gallery: ['/images/projects/logicvault.png'],
    futureImprovements: [
      'Planned Improvement: Implement hardware security key authentication.',
      'Planned Improvement: Add automated secret rotation hooks.',
    ],
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
    tags: ['Property Management', 'Next.js', 'TypeScript', 'PostgreSQL'],
    featured: false,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    detailedStack: {
      frontend: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL'],
    },
    github: 'https://github.com/stanleyukeje/rentovix',
    demo: 'https://rentovix.com',
    coverImage: '/images/projects/rentovix.png',
    seo: {
      title: 'Rentovix Engineering Ecosystem Study',
      description:
        'Case study on building Rentovix property management platform.',
      keywords: ['Rentovix', 'Next.js', 'PostgreSQL', 'TypeScript'],
    },
    overview:
      'Rentovix is a property management platform built to organize tenant records, lease documentation, and payment tracking.',
    problem:
      'Property managers spent substantial effort tracking tenant lease records, payment statuses, and maintenance requests across paper forms.',
    solution:
      'Engineered an end-to-end web portal backed by Next.js 16, TypeScript, and PostgreSQL database models.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN"]
    Cloudflare --> Vercel["Vercel Edge Platform"]
    Vercel --> NextApp["Next.js App Server"]
    NextApp --> Postgres["PostgreSQL Database"]`,
    features: [
      'Tenant lease record management',
      'Automated rent status tracking portal',
    ],
    challenges: [],
    lessons: [
      'Maintaining clear data schemas for tenant lease contracts prevents billing state inconsistencies.',
    ],
    screenshots: ['/images/projects/rentovix.png'],
    gallery: ['/images/projects/rentovix.png'],
    futureImprovements: [
      'Planned Improvement: Integrate automated payment gateway billing via Stripe.',
      'Planned Improvement: Add automated digital lease signing workflow.',
    ],
  },
];
