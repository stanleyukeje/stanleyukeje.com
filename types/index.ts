export type ProjectStatus = 'production' | 'in-development' | 'archived' | 'open-source';

export interface ProjectSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectTechnologyStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infrastructure?: string[];
  integrations?: string[];
}

export interface Project {
  name: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  githubRepository: string;
  githubOwner: string;
  defaultBranch: string;
  demoUrl?: string;
  caseStudy: string;
  status: ProjectStatus;
  supabaseProject?: string;
  deploymentProvider: 'Hetzner + Coolify' | 'Vercel' | 'Cloudflare Pages' | 'Docker';
  deploymentUrl?: string;
  tags: string[];
  featured: boolean;
  stack: string[];
  detailedStack?: ProjectTechnologyStack;
  github?: string;
  demo?: string;
  coverImage: string;
  seo: ProjectSEO;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  challenges?: ProjectChallenge[];
  lessons?: string[];
  screenshots?: string[];
  gallery?: string[];
  integrations?: string[];
  futureImprovements?: string[];
}

export interface EcosystemTelemetry {
  stars: number;
  forks: number;
  openIssues: number;
  lastCommit?: string;
  language: string;
  isAvailable: boolean;
}

export interface EcosystemProject {
  project: Project;
  telemetry: EcosystemTelemetry;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterNavigationGroup {
  title: string;
  items: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  iconName: string;
}

export interface Article {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export interface GitHubRepository {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  defaultBranch?: string;
  openIssues?: number;
  topics?: string[];
}

export interface GitHubProfile {
  username: string;
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  htmlUrl: string;
  createdAt?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface SiteMetadata {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    role: string;
    bio: string;
    location: string;
  };
}

export interface ThemeConfig {
  mode: 'dark';
  defaultPrimary: string;
}
