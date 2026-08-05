import React from 'react';
import Link from 'next/link';
import { projectsConfig } from '@/config/projects';
import { ProjectCard } from '@/components/projects/project-card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjectsSection() {
  const featuredProjects = projectsConfig.filter((p) => p.featured);

  return (
    <section className="py-20 bg-[#0B1220] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#334155] pb-6">
          <div className="flex flex-col gap-2">
            <Badge variant="primary" className="w-fit">
              Engineering Case Studies
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Production Platforms
            </h2>
            <p className="text-base text-[#CBD5E1] leading-[1.7]">
              Case studies detailing architecture decisions, challenges, and telemetry outcomes.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 w-fit"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
