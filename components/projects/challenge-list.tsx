import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Heading, Body } from '@/components/ui/typography';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export interface ChallengeListProps {
  project: Project;
}

export function ChallengeList({ project }: ChallengeListProps) {
  if (!project.challenges || project.challenges.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 py-12 border-b border-[#1F2937]/80">
      <Heading as="h2">Engineering Challenges & Solutions</Heading>

      <div className="flex flex-col gap-6">
        {project.challenges.map((challenge, index) => (
          <Card key={index} className="flex flex-col gap-4 border-[#1F2937] bg-[#0E131B]">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[#F59E0B]" />
              <span>{challenge.title}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#1F2937]">
              <div>
                <span className="text-xs uppercase font-medium text-[#9CA3AF]">Challenge</span>
                <Body className="text-sm text-[#9CA3AF] mt-1">{challenge.description}</Body>
              </div>
              <div>
                <span className="text-xs uppercase font-medium text-[#22C55E] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Resolution</span>
                </span>
                <Body className="text-sm text-white mt-1">{challenge.solution}</Body>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
