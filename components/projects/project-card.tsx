import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <Card hoverEffect className="flex flex-col justify-between gap-6 h-full p-0 overflow-hidden border-[#334155] bg-[#111827]">
      {project.coverImage && (
        <Link href={`/projects/${project.slug}`} className="relative w-full h-48 bg-[#0B1220] border-b border-[#334155] block overflow-hidden group">
          <Image
            src={project.coverImage}
            alt={`${project.name} desktop dashboard`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}

      <div className="flex flex-col justify-between h-full p-6 gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Badge variant={project.status === 'production' ? 'success' : 'warning'}>
              {project.status}
            </Badge>

            <div className="flex items-center gap-1.5 text-[10px] text-[#CBD5E1] bg-[#0B1220] px-2.5 py-1 rounded-full border border-[#334155]">
              <Server className="h-3 w-3 text-[#2563EB]" />
              <span>{project.deploymentProvider}</span>
            </div>
          </div>

          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold text-white tracking-tight hover:text-[#38BDF8] transition-colors">
              {project.name}
            </h3>
          </Link>
          <p className="text-xs text-[#CBD5E1] line-clamp-3 leading-[1.7]">{project.description}</p>
        </div>

        <div className="flex flex-col gap-4 pt-4 border-t border-[#334155]">
          <TechStack stack={project.stack} />

          <div className="flex items-center justify-between text-xs pt-1">
            <Link
              href={`/projects/${project.slug}`}
              className="text-[#38BDF8] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] hover:text-white transition-colors"
              >
                Live Demo ↗
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
