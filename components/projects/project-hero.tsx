import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { TechStack } from './tech-stack';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-[#1F2937]/80 pb-12">
      <div className="flex items-center gap-3">
        <Badge variant={project.status === 'production' ? 'success' : 'warning'}>
          {project.status}
        </Badge>
        <span className="text-xs font-mono text-[#9CA3AF]">Case Study</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
        {project.title}
      </h1>

      <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-3xl leading-relaxed">
        {project.longDescription || project.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1d4ed8] transition-colors"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1F2937] bg-[#0E131B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1F2937] transition-colors"
          >
            <span>View Source on GitHub</span>
          </Link>
        )}
      </div>

      <div className="pt-4">
        <TechStack stack={project.stack} />
      </div>
    </div>
  );
}
