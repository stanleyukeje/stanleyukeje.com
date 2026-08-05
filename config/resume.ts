import { SOCIAL_URLS } from '@/config/social';

export interface ResumeProject {
  name: string;
  subtitle: string;
  url: string;
  description: string;
  stack: string[];
}

export interface ResumeExperience {
  role: string;
  period: string;
  summary: string;
  bulletPoints: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  year: string;
}

export interface CanonicalResumeData {
  name: string;
  title: string;
  contact: {
    location: string;
    phone: string;
    whatsappUrl: string;
    email: string;
    website: string;
    github: string;
    linkedin: string;
  };
  pdfPath: string;
  professionalSummary: string;
  coreCompetencies: string[];
  technicalSkills: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloudDevOps: string[];
    tools: string[];
  };
  experience: ResumeExperience;
  productionProjects: ResumeProject[];
  education: ResumeEducation[];
  certification: ResumeCertification;
  availability: string;
}

export const canonicalResumeData: CanonicalResumeData = {
  name: 'STANLEY UKEJE',
  title: 'FULL STACK SOFTWARE ENGINEER | PRODUCT ENGINEER',
  pdfPath: '/resume/Stanley_Ukeje_CV.pdf',
  contact: {
    location: 'Sharjah, United Arab Emirates',
    phone: '+971 50 390 0735',
    whatsappUrl: SOCIAL_URLS.whatsapp,
    email: 'stan@stanleyukeje.com',
    website: 'https://stanleyukeje.com',
    github: SOCIAL_URLS.github,
    linkedin: SOCIAL_URLS.linkedin,
  },
  professionalSummary:
    'Full Stack Software Engineer with experience building, deploying and maintaining production web applications across fintech, marketplaces, SaaS and social platforms. Skilled in Next.js, React, TypeScript, PostgreSQL, Supabase, Docker and cloud infrastructure. Comfortable joining existing codebases, shipping new features, solving production issues and delivering reliable software in fast-moving teams. Available immediately for remote, contract, freelance and full-time software engineering opportunities.',
  coreCompetencies: [
    'Full Stack Development',
    'API Integration',
    'Database Design',
    'Cloud Deployment',
    'Performance Optimization',
    'Production Support',
  ],
  technicalSkills: {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'REST APIs', 'Supabase'],
    database: ['PostgreSQL'],
    cloudDevOps: ['Docker', 'Cloudflare', 'Coolify', 'Linux'],
    tools: ['Git', 'GitHub', 'Playwright', 'ESLint', 'VS Code'],
  },
  experience: {
    role: 'Full Stack Software Engineer',
    period: '2020 – Present',
    summary:
      'Design, build, deploy and maintain production web applications, owning the complete software lifecycle from architecture and database design to deployment, monitoring and continuous improvement.',
    bulletPoints: [
      'Designed and developed full-stack applications using Next.js, React, TypeScript and Tailwind CSS.',
      'Designed PostgreSQL databases and implemented secure authentication using Supabase.',
      'Integrated payment services, email infrastructure, webhooks and third-party APIs.',
      'Managed end-to-end production deployments, domain configuration, Docker containers, Cloudflare networking and Coolify infrastructure.',
      'Diagnosed production issues, optimized application performance and continuously shipped product improvements.',
      'Implemented scalable, maintainable solutions with a strong focus on code quality, reliability and long-term maintainability.',
    ],
  },
  productionProjects: [
    {
      name: 'BayRight',
      subtitle: 'Digital Payments Platform',
      url: 'https://bayright.com',
      description: 'Engineered a fintech platform for utility payments and digital transactions.',
      stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Docker'],
    },
    {
      name: 'Yike',
      subtitle: 'Marketplace Platform',
      url: 'https://yike.ng',
      description: 'Engineered a real estate marketplace with advanced search, listings and user management.',
      stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    },
    {
      name: 'BamSignal',
      subtitle: 'Social Discovery Platform',
      url: 'https://bamsignal.com',
      description: 'Engineered a social discovery platform with authentication, messaging and premium subscriptions.',
      stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    },
    {
      name: 'Rentovix',
      subtitle: 'Property Rental Platform',
      url: 'https://rentovix.com',
      description: 'Engineered a rental management platform with dashboards and property workflows.',
      stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    },
    {
      name: 'LogicVault',
      subtitle: 'Business Operations Platform',
      url: 'https://logicvault.org',
      description: 'Engineered a business operations platform for workflow automation and operational management.',
      stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    },
  ],
  education: [
    {
      institution: 'Enugu State University of Science and Technology (ESUT)',
      degree: 'Bachelor of Science (B.Sc.), Computer Science',
    },
    {
      institution: 'Institute of Management Technology (IMT)',
      degree: 'Higher National Diploma (HND), Computer Science',
    },
  ],
  certification: {
    title: 'Full-Stack Development Bootcamp',
    issuer: 'upGrad Campus',
    year: '2022',
  },
  availability:
    'Available immediately for Remote, Contract, Freelance and Full-Time Software Engineering roles.',
};
