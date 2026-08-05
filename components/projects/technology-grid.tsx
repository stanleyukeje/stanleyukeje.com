import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/typography';
import { Grid } from '@/components/layout/grid';

export interface TechnologyGridProps {
  project: Project;
}

export function TechnologyGrid({ project }: TechnologyGridProps) {
  const stack = project.detailedStack;
  if (!stack) return null;

  const categories = [
    { title: 'Frontend', items: stack.frontend },
    { title: 'Backend', items: stack.backend },
    { title: 'Database & Storage', items: stack.database },
    { title: 'Infrastructure', items: stack.infrastructure },
    { title: 'Integrations', items: stack.integrations },
  ].filter((cat) => cat.items && cat.items.length > 0);

  if (categories.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 py-12 border-b border-[#1F2937]/80">
      <Heading as="h2">Technology Stack Breakdown</Heading>

      <Grid cols={3} gap="md">
        {categories.map((cat) => (
          <Card key={cat.title} className="flex flex-col gap-3 border-[#1F2937] bg-[#0E131B]">
            <h3 className="text-sm font-bold text-white tracking-tight border-b border-[#1F2937] pb-2">
              {cat.title}
            </h3>
            <ul className="flex flex-col gap-1.5">
              {cat.items?.map((item) => (
                <li key={item} className="text-xs text-[#9CA3AF] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
