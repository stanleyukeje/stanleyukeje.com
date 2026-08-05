import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/typography';

export interface LessonSectionProps {
  project: Project;
}

export function LessonSection({ project }: LessonSectionProps) {
  if (!project.lessons || project.lessons.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 py-12 border-b border-[#1F2937]/80">
      <Heading as="h2">Lessons Learned & Key Takeaways</Heading>

      <div className="flex flex-col gap-3">
        {project.lessons.map((lesson, idx) => (
          <Card key={idx} className="border-[#1F2937] bg-[#0E131B] p-4 text-sm text-[#9CA3AF] flex items-start gap-3">
            <span className="font-mono text-xs font-bold text-[#2563EB] mt-0.5">0{idx + 1}</span>
            <span>{lesson}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
