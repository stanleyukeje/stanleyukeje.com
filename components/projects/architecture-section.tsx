import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Heading, Body } from '@/components/ui/typography';
import { Cpu } from 'lucide-react';

export interface ArchitectureSectionProps {
  project: Project;
}

export function ArchitectureSection({ project }: ArchitectureSectionProps) {
  return (
    <div className="flex flex-col gap-6 py-12 border-b border-[#1F2937]/80">
      <Heading as="h2">System Architecture</Heading>

      {project.architecture ? (
        <Body className="text-[#9CA3AF] leading-relaxed">{project.architecture}</Body>
      ) : (
        <Body className="text-[#9CA3AF]">
          System architecture details and data flow models for {project.title}.
        </Body>
      )}

      <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed border-[#1F2937] bg-[#0E131B]/50">
        <Cpu className="h-10 w-10 text-[#2563EB] mb-3" />
        <span className="text-sm font-semibold text-white mb-1">Architecture Diagram Placeholder</span>
        <span className="text-xs text-[#9CA3AF]">
          SVG topology diagram placeholder for {project.title}.
        </span>
      </Card>
    </div>
  );
}
