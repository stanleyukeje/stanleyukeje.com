export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsConfig: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Web performance (CWV)', 'HTML5 / Semantic UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'GraphQL', 'Go', 'Express', 'Serverless Functions'],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['Cloudflare (DNS / CDN / Edge)', 'Hetzner + Coolify', 'Vercel', 'Docker containerization', 'AWS basics'],
  },
  {
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'Supabase', 'Redis', 'SQL Schema Design', 'ORM / Query optimization'],
  },
  {
    title: 'Quality Assurance & Testing',
    skills: ['Unit & Integration Testing', 'End-to-End Automation', 'CI/CD pipeline testing', 'Accessibility (a11y) auditing'],
  },
  {
    title: 'DevOps & Tooling',
    skills: ['Git / GitHub Workflows', 'Docker orchestration', 'Coolify self-hosting', 'Automated deployments'],
  },
  {
    title: 'AI-assisted Development',
    skills: ['Prompt engineering', 'AI SDK integrations', 'Agentic workflow automation', 'LLM API integration'],
  },
];
