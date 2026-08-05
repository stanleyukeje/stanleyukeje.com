import { Project } from '@/types';

export const projectsConfig: Project[] = [
  {
    name: 'BayRight',
    title: 'BayRight',
    slug: 'bayright',
    description:
      'Digital payments platform for utility payments and digital transactions.',
    longDescription:
      'BayRight is a digital payments platform engineered for utility bill payments, user account management, and reliable transaction processing.',
    githubRepository: 'bayright',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://bayright.com',
    caseStudy: '/projects/bayright',
    status: 'production',
    supabaseProject: 'bayright-prod',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://bayright.com',
    tags: ['Digital Payments', 'Fintech', 'Next.js', 'PostgreSQL', 'Supabase'],
    featured: true,
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Docker'],
    detailedStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes', 'Supabase Services'],
      database: ['PostgreSQL'],
      infrastructure: ['Docker', 'Coolify', 'Cloudflare'],
      integrations: ['Payment Gateways', 'Resend Email API'],
    },
    github: 'https://github.com/stanleyukeje/bayright',
    demo: 'https://bayright.com',
    coverImage: '/images/projects/bayright/desktop-home.webp',
    seo: {
      title: 'BayRight Digital Payments Case Study',
      description:
        'Case study on BayRight: digital payments platform for utility bill payments and transaction management.',
      keywords: ['BayRight', 'Digital Payments', 'Fintech', 'Next.js', 'PostgreSQL'],
    },
    overview:
      'BayRight is a digital payments platform designed to handle utility bill payments, transaction processing, and user account management.',
    problem:
      'Users needed a simple, fast, and dependable web portal to complete utility payments without complex navigation or high transaction latency.',
    solution:
      'Engineered a responsive Next.js application backed by PostgreSQL and Supabase for secure data storage and authentication.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN & Proxy"]
    Cloudflare --> Coolify["Coolify Orchestrator (Hetzner VPS)"]
    Coolify --> NextApp["Next.js Server Container"]
    NextApp --> Supabase["Supabase (PostgreSQL & Auth)"]`,
    features: [
      'Utility bill payment workflow processing',
      'Secure user authentication and account dashboard',
      'Transaction receipt and email notifications',
    ],
    challenges: [
      {
        title: 'Transaction State Handling',
        description: 'Ensuring transaction statuses are correctly recorded and updated during payment processor webhooks.',
        solution: 'Implemented idempotent database mutation handlers for payment webhooks.',
      },
    ],
    lessons: [
      'Using server-side data fetching ensures transaction records load quickly without exposing sensitive API keys.',
    ],
    screenshots: [
      '/images/projects/bayright/desktop-home.webp',
      '/images/projects/bayright/mobile-home.webp',
    ],
    gallery: [
      '/images/projects/bayright/desktop-home.webp',
      '/images/projects/bayright/mobile-home.webp',
    ],
    integrations: ['Supabase', 'Resend', 'Cloudflare'],
    futureImprovements: [
      'Planned Improvement: Add automated recurring bill payment schedules.',
    ],
  },
  {
    name: 'Yike',
    title: 'Yike',
    slug: 'yike',
    description:
      'Real estate marketplace platform connecting buyers, sellers and agents.',
    longDescription:
      'Yike is a real estate marketplace platform engineered with property search, listing management, and user profiles.',
    githubRepository: 'yike',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://yike.ng',
    caseStudy: '/projects/yike',
    status: 'production',
    supabaseProject: 'yike-prod',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://yike.ng',
    tags: ['Real Estate', 'Marketplace', 'Next.js', 'PostgreSQL', 'Supabase'],
    featured: true,
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    detailedStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL', 'Supabase'],
      infrastructure: ['Hetzner VPS', 'Coolify', 'Docker'],
    },
    github: 'https://github.com/stanleyukeje/yike',
    demo: 'https://yike.ng',
    coverImage: '/images/projects/yike/desktop-home.webp',
    seo: {
      title: 'Yike Real Estate Marketplace Case Study',
      description:
        'Case study on Yike: real estate marketplace platform with property search and listing management.',
      keywords: ['Yike', 'Real Estate', 'Marketplace', 'Next.js', 'PostgreSQL'],
    },
    overview:
      'Yike is a web marketplace that allows property sellers and real estate agents to publish listings and connect with buyers.',
    problem:
      'Buyers and agents needed a clean, fast real estate portal to search property listings without clutter or heavy page load times.',
    solution:
      'Built a web application using Next.js, React, and TypeScript with PostgreSQL data persistence for property listings.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN & Proxy"]
    Cloudflare --> Coolify["Coolify Orchestrator (Hetzner VPS)"]
    Coolify --> NextApp["Next.js Server Container"]
    NextApp --> Supabase["Supabase (PostgreSQL & Auth)"]`,
    features: [
      'Property listing search and filter workflows',
      'Agent listing submission portal',
      'User contact and inquiry management',
    ],
    challenges: [
      {
        title: 'Listing Search Performance',
        description: 'Optimizing property filter queries across location, price, and property type categories.',
        solution: 'Added indexed database query columns in PostgreSQL for fast filter execution.',
      },
    ],
    lessons: [
      'Structured database indexing drastically speeds up multi-parameter listing searches.',
    ],
    screenshots: [
      '/images/projects/yike/desktop-home.webp',
      '/images/projects/yike/mobile-home.webp',
    ],
    gallery: [
      '/images/projects/yike/desktop-home.webp',
      '/images/projects/yike/mobile-home.webp',
    ],
    integrations: ['Supabase', 'Cloudflare'],
    futureImprovements: [
      'Planned Improvement: Add interactive map location search.',
    ],
  },
  {
    name: 'BamSignal',
    title: 'BamSignal',
    slug: 'bamsignal',
    description:
      'Social discovery platform built for meaningful connections.',
    longDescription:
      'BamSignal is a social discovery platform featuring user authentication, profile messaging, and subscription management.',
    githubRepository: 'bamsignal',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://bamsignal.com',
    caseStudy: '/projects/bamsignal',
    status: 'production',
    deploymentProvider: 'Hetzner + Coolify',
    deploymentUrl: 'https://bamsignal.com',
    tags: ['Social Discovery', 'Next.js', 'PostgreSQL', 'Supabase'],
    featured: true,
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    detailedStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL', 'Supabase'],
      infrastructure: ['Hetzner VPS', 'Docker Container'],
    },
    github: 'https://github.com/stanleyukeje/bamsignal',
    demo: 'https://bamsignal.com',
    coverImage: '/images/projects/bamsignal/desktop-home.webp',
    seo: {
      title: 'BamSignal Social Discovery Platform Case Study',
      description:
        'Case study on BamSignal: social discovery platform with messaging and subscription management.',
      keywords: ['BamSignal', 'Social Discovery', 'Next.js', 'PostgreSQL', 'Supabase'],
    },
    overview:
      'BamSignal is a web platform created to facilitate social connections, profile discovery, and member messaging.',
    problem:
      'Users needed an intuitive social discovery web interface with secure authentication and reliable messaging workflows.',
    solution:
      'Engineered a responsive Next.js application using React and TypeScript backed by Supabase for authentication and database management.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN & Proxy"]
    Cloudflare --> Coolify["Coolify Orchestrator (Hetzner VPS)"]
    Coolify --> NextApp["Next.js Server Container"]
    NextApp --> Supabase["Supabase (PostgreSQL & Auth)"]`,
    features: [
      'Member discovery and profile browsing',
      'User messaging and notification dispatch',
      'Subscription management workflows',
    ],
    challenges: [
      {
        title: 'User Profile Image Uploads',
        description: 'Handling profile picture uploads securely and storing them efficiently.',
        solution: 'Utilized Supabase Storage buckets with public CDN URL generation.',
      },
    ],
    lessons: [
      'Offloading media uploads to object storage keeps database size manageable and page loads fast.',
    ],
    screenshots: [
      '/images/projects/bamsignal/desktop-home.webp',
      '/images/projects/bamsignal/mobile-home.webp',
    ],
    gallery: [
      '/images/projects/bamsignal/desktop-home.webp',
      '/images/projects/bamsignal/mobile-home.webp',
    ],
    integrations: ['Supabase', 'Cloudflare'],
    futureImprovements: [
      'Planned Improvement: Add push notifications for new message alerts.',
    ],
  },
  {
    name: 'Rentovix',
    title: 'Rentovix',
    slug: 'rentovix',
    description:
      'Property rental management platform with dashboards and property workflows.',
    longDescription:
      'Rentovix is a rental management web platform engineered to simplify tenant record tracking, rent payment logs, and property workflows.',
    githubRepository: 'rentovix',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://rentovix.com',
    caseStudy: '/projects/rentovix',
    status: 'production',
    deploymentProvider: 'Vercel',
    deploymentUrl: 'https://rentovix.com',
    tags: ['Property Rental', 'Next.js', 'TypeScript', 'PostgreSQL'],
    featured: false,
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    detailedStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL'],
    },
    github: 'https://github.com/stanleyukeje/rentovix',
    demo: 'https://rentovix.com',
    coverImage: '/images/projects/rentovix/desktop-home.webp',
    seo: {
      title: 'Rentovix Property Rental Platform Case Study',
      description:
        'Case study on Rentovix: property rental management platform with tenant and lease tracking.',
      keywords: ['Rentovix', 'Property Rental', 'Next.js', 'PostgreSQL', 'TypeScript'],
    },
    overview:
      'Rentovix is a property management web portal built for property managers and landlords to organize tenant records and rental workflows.',
    problem:
      'Property managers spent substantial manual effort tracking lease agreements and rent payments across spreadsheets.',
    solution:
      'Built a centralized web dashboard using Next.js, TypeScript, and PostgreSQL database schemas.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare CDN"]
    Cloudflare --> Vercel["Vercel Edge Platform"]
    Vercel --> NextApp["Next.js Application Server"]
    NextApp --> Postgres["PostgreSQL Database"]`,
    features: [
      'Tenant lease record management',
      'Rent payment tracking dashboard',
    ],
    challenges: [
      {
        title: 'Tenant Record Organization',
        description: 'Structuring database tables to handle property units, tenants, and lease dates cleanly.',
        solution: 'Designed relational PostgreSQL schemas with clear foreign key constraints.',
      },
    ],
    lessons: [
      'Proper relational database modeling prevents duplicate tenant records and simplifies query logic.',
    ],
    screenshots: [
      '/images/projects/rentovix/desktop-home.webp',
      '/images/projects/rentovix/mobile-home.webp',
    ],
    gallery: [
      '/images/projects/rentovix/desktop-home.webp',
      '/images/projects/rentovix/mobile-home.webp',
    ],
    futureImprovements: [
      'Planned Improvement: Add automated digital lease signing features.',
    ],
  },
  {
    name: 'LogicVault',
    title: 'LogicVault',
    slug: 'logicvault',
    description:
      'Business operations platform for workflow automation and operational management.',
    longDescription:
      'LogicVault is a business operations web platform built to automate operational workflows and manage administrative tasks.',
    githubRepository: 'logicvault',
    githubOwner: 'stanleyukeje',
    defaultBranch: 'main',
    demoUrl: 'https://logicvault.org',
    caseStudy: '/projects/logicvault',
    status: 'production',
    deploymentProvider: 'Cloudflare Pages',
    deploymentUrl: 'https://logicvault.org',
    tags: ['Business Operations', 'Workflow Automation', 'Next.js', 'Supabase'],
    featured: false,
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    detailedStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js API Routes'],
      database: ['PostgreSQL', 'Supabase'],
    },
    github: 'https://github.com/stanleyukeje/logicvault',
    demo: 'https://logicvault.org',
    coverImage: '/images/projects/logicvault/desktop-home.webp',
    seo: {
      title: 'LogicVault Business Operations Platform Case Study',
      description:
        'Case study on LogicVault: business operations platform for workflow automation.',
      keywords: ['LogicVault', 'Business Operations', 'Next.js', 'Supabase', 'TypeScript'],
    },
    overview:
      'LogicVault is a business operations web platform built to automate task workflows and maintain operational records.',
    problem:
      'Small business teams needed an organized internal dashboard to track operational tasks and team workflows without complex software setups.',
    solution:
      'Developed a clean Next.js web application utilizing React, TypeScript, and Supabase for real-time task status tracking.',
    architecture: `graph TD
    Client["Browser Client"] --> Cloudflare["Cloudflare Pages"]
    Cloudflare --> NextApp["Next.js Application Engine"]
    NextApp --> Supabase["Supabase (PostgreSQL & Auth)"]`,
    features: [
      'Operational task workflow management',
      'Team activity logging dashboard',
    ],
    challenges: [
      {
        title: 'Task Status Synchronization',
        description: 'Keeping team task statuses updated across multiple open browser tabs.',
        solution: 'Leveraged Supabase realtime subscriptions for instant state updates.',
      },
    ],
    lessons: [
      'Realtime database triggers provide immediate feedback to users working on shared team tasks.',
    ],
    screenshots: [
      '/images/projects/logicvault/desktop-home.webp',
      '/images/projects/logicvault/mobile-home.webp',
    ],
    gallery: [
      '/images/projects/logicvault/desktop-home.webp',
      '/images/projects/logicvault/mobile-home.webp',
    ],
    futureImprovements: [
      'Planned Improvement: Add automated email task reminders.',
    ],
  },
];
