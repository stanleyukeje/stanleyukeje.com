import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Heading, Body } from '@/components/ui/typography';

export interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  if (!project.problem && !project.solution && !project.overview) return null;

  return (
    <div className="flex flex-col gap-8 py-12 border-b border-[#1F2937]/80">
      <Heading as="h2">Project Overview</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.problem && (
          <Card className="flex flex-col gap-3 border-[#1F2937] bg-[#0E131B]">
            <h3 className="text-lg font-bold text-white tracking-tight">The Problem</h3>
            <Body className="text-sm text-[#9CA3AF] leading-relaxed">{project.problem}</Body>
          </Card>
        )}

        {project.solution && (
          <Card className="flex flex-col gap-3 border-[#1F2937] bg-[#0E131B]">
            <h3 className="text-lg font-bold text-[#2563EB] tracking-tight">The Solution</h3>
            <Body className="text-sm text-[#9CA3AF] leading-relaxed">{project.solution}</Body>
          </Card>
        )}
      </div>
    </div>
  );
}
