import React from 'react';
import { Section } from '@/components/layout/section';
import { Grid } from '@/components/layout/grid';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { ProjectCard } from '@/components/projects/project-card';
import { projectsConfig } from '@/config/projects';

export function FeaturedProjectsSection() {
  return (
    <Section id="projects" containerSize="xl" className="py-20 border-b border-[#1F2937]">
      <div className="flex flex-col gap-4 mb-12">
        <Badge variant="primary" className="w-fit">
          Case Studies & Portfolio
        </Badge>
        <Heading as="h2">Featured Engineering Projects</Heading>
        <Body className="max-w-2xl">
          Production software built with focus on performance, system architecture, resilience, and user experience.
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
