import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechStack } from './tech-stack';
import { ArrowUpRight, Server } from 'lucide-react';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverEffect className="flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Badge variant={project.status === 'production' ? 'success' : 'warning'}>
            {project.status}
          </Badge>

          <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] bg-[#05070B] px-2.5 py-1 rounded-full border border-[#1F2937]">
            <Server className="h-3 w-3 text-[#2563EB]" />
            <span>{project.deploymentProvider}</span>
          </div>
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-white tracking-tight hover:text-[#2563EB] transition-colors">
            {project.name}
          </h3>
        </Link>
        <p className="text-sm text-[#9CA3AF] line-clamp-3">{project.description}</p>
      </div>

      <div className="flex flex-col gap-4 pt-4 border-t border-[#1F2937]">
        <TechStack stack={project.stack} />

        <div className="flex items-center justify-between text-xs pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="text-[#2563EB] font-semibold hover:underline flex items-center gap-1"
          >
            <span>Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-white transition-colors"
            >
              Live Demo ↗
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
