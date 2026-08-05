import { SOCIAL_URLS } from '@/config/social';

export interface ResumeExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export interface ResumeCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  summary: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
    website: string;
  };
  skillCategories: ResumeCategory[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
}

export const resumeData: ResumeData = {
  summary:
    'Product Engineer with expertise in building web applications, API services, and cloud infrastructure. Strong focus on software quality assurance, resilient architecture, zero-trust security, and maintainable TypeScript codebases.',
  contact: {
    email: 'stan@stanleyukeje.com',
    github: SOCIAL_URLS.github,
    linkedin: SOCIAL_URLS.linkedin,
    location: 'Abuja, Nigeria (Remote, Worldwide)',
    website: 'https://stanleyukeje.com',
  },
  skillCategories: [
    {
      category: 'Languages & Web Core',
      skills: ['TypeScript', 'JavaScript (ESNext)', 'SQL', 'HTML5/CSS3'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Next.js (App Router)', 'React 19', 'Node.js', 'Express', 'Tailwind CSS'],
    },
    {
      category: 'Database & Security',
      skills: ['PostgreSQL', 'Supabase', 'Row Level Security (RLS)'],
    },
    {
      category: 'Infrastructure & DevOps',
      skills: ['Docker', 'Coolify', 'Hetzner VPS', 'Vercel', 'Cloudflare CDN', 'Git/GitHub'],
    },
    {
      category: 'Testing & Quality Assurance',
      skills: ['Software Quality Assurance', 'Jest', 'Playwright', 'ESLint', 'CI/CD Pipelines'],
    },
  ],
  experience: [
    {
      company: 'StanleyUkeje Engineering',
      role: 'Senior Product Engineer',
      location: 'Remote',
      period: '2023 — Present',
      description:
        'Architecting and deploying production-grade web applications, workflow engines, and backend API services.',
      highlights: [
        'Engineered BayRight workflow platform using Next.js 16, Supabase, and PostgreSQL with zero-trust RLS policies.',
        'Containerized production deployments using Docker multi-stage builds managed via Coolify on Hetzner VPS.',
        'Implemented automated CI/CD static verification pipelines enforcing zero ESLint and TypeScript compilation errors.',
      ],
      techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Supabase', 'Docker', 'Tailwind CSS'],
    },
    {
      company: 'Enterprise Software Solutions',
      role: 'Full Stack Engineer & SQA Specialist',
      location: 'Remote',
      period: '2021 — 2023',
      description:
        'Designed end-to-end full stack web platforms and led automated software quality assurance workflows.',
      highlights: [
        'Designed and implemented PostgreSQL Row Level Security policies to enforce tenant data isolation.',
        'Created automated CI/CD quality gates using GitHub Actions, Jest, and ESLint enforcing code quality standards.',
        'Built responsive web user interfaces adhering to accessibility best practices.',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Jest', 'GitHub Actions'],
    },
  ],
  education: [
    {
      institution: 'University of Engineering & Technology',
      degree: "Bachelor's Degree",
      field: 'Computer Engineering',
      period: '2017 — 2021',
      location: 'Nigeria',
    },
  ],
};
