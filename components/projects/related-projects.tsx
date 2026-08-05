import React from 'react';
import { ProjectCard } from './project-card';
import { Heading } from '@/components/ui/typography';
import { Grid } from '@/components/layout/grid';
import { projectsConfig } from '@/config/projects';

export interface RelatedProjectsProps {
  currentSlug: string;
}

export function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
  const related = projectsConfig.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 py-12">
      <Heading as="h2">Related Engineering Projects</Heading>

      <Grid cols={3} gap="md">
        {related.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </div>
  );
}
