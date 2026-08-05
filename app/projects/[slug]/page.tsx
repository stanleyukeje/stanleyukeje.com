import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layout/section';
import { ProjectHero } from '@/components/projects/project-hero';
import { ProjectOverview } from '@/components/projects/project-overview';
import { ArchitectureSection } from '@/components/projects/architecture-section';
import { TechnologyGrid } from '@/components/projects/technology-grid';
import { ChallengeList } from '@/components/projects/challenge-list';
import { LessonSection } from '@/components/projects/lesson-section';
import { Gallery } from '@/components/projects/gallery';
import { RelatedProjects } from '@/components/projects/related-projects';
import { ProjectRepositoryCard } from '@/components/projects/repository-card';
import { projectsConfig } from '@/config/projects';
import { constructSEO } from '@/lib/seo';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsConfig.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsConfig.find((p) => p.slug === slug);

  if (!project) {
    return constructSEO({
      title: 'Project Not Found',
      description: 'The requested engineering case study could not be found.',
    });
  }

  return constructSEO({
    title: `${project.title} — Engineering Case Study`,
    description: project.seo.description || project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsConfig.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section containerSize="xl" className="py-12 md:py-20">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ArchitectureSection project={project} />
      <TechnologyGrid project={project} />
      <ProjectRepositoryCard repoName={project.slug} />
      <ChallengeList project={project} />
      <LessonSection project={project} />
      <Gallery project={project} />
      <RelatedProjects currentSlug={project.slug} />
    </Section>
  );
}
