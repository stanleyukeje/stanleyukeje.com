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
    'Product Engineer with expertise in building scalable web applications, event-driven backends, and cloud infrastructure. Strong focus on software quality assurance, resilient architecture, zero-trust security, and high-throughput telemetry.',
  contact: {
    email: 'stanley@stanleyukeje.com',
    github: 'https://github.com/stanleyukeje',
    linkedin: 'https://linkedin.com/in/stanleyukeje',
    location: 'Lagos, Nigeria',
    website: 'https://stanleyukeje.com',
  },
  skillCategories: [
    {
      category: 'Languages & Core',
      skills: ['TypeScript', 'JavaScript (ESNext)', 'Go (Golang)', 'SQL', 'HTML5/CSS3'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Next.js (App Router)', 'React 19', 'Node.js', 'Express', 'Tailwind CSS'],
    },
    {
      category: 'Database & Cloud Storage',
      skills: ['PostgreSQL', 'Supabase', 'Redis', 'Row Level Security (RLS)'],
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
        'Architecting and deploying production-grade SaaS applications, workflow automation engines, and high-throughput alert telemetry services.',
      highlights: [
        'Engineered BayRight workflow platform using Next.js 16, Supabase, and PostgreSQL with sub-100ms API response times.',
        'Built BamSignal incident alert engine in Go handling over 10,000 telemetry signals/sec with ring-buffer caching in Redis.',
        'Containerized production deployments using Docker multi-stage builds managed via Coolify on Hetzner VPS.',
      ],
      techStack: ['TypeScript', 'Next.js', 'Go', 'PostgreSQL', 'Supabase', 'Docker', 'Redis'],
    },
    {
      company: 'Enterprise Software Solutions',
      role: 'Full Stack Engineer & SQA Specialist',
      location: 'Remote',
      period: '2021 — 2023',
      description:
        'Designed end-to-end full stack web platforms and led automated software quality assurance workflows.',
      highlights: [
        'Designed and implemented zero-trust PostgreSQL Row Level Security policies reducing data access risks.',
        'Created automated CI/CD quality gates using GitHub Actions, Jest, and ESLint enforcing zero-warning code quality standards.',
        'Architected real-time WebSocket communication modules for collaborative web applications.',
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
