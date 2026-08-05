import { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Grid } from '@/components/layout/grid';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { ProjectCard } from '@/components/projects/project-card';
import { projectsConfig } from '@/config/projects';
import { constructSEO } from '@/lib/seo';

export const metadata: Metadata = constructSEO({
  title: 'Engineering Projects & Case Studies | Stanley Ukeje',
  description:
    'Comprehensive engineering case studies detailing system architecture, technical trade-offs, performance optimizations, and full-stack software development.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <Section containerSize="xl" className="py-16 md:py-24">
      <div className="flex flex-col gap-4 mb-12">
        <Badge variant="primary" className="w-fit">
          Engineering Portfolio
        </Badge>
        <Heading as="h1" className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Engineering Projects & Case Studies
        </Heading>
        <Body className="max-w-2xl text-base sm:text-lg text-[#9CA3AF]">
          Technical documentation and architecture breakdowns of production software built for performance, resilience, and scale.
        </Body>
      </div>

      <Grid cols={3} gap="lg">
        {projectsConfig.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </Section>
  );
}
