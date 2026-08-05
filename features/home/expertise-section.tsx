import React from 'react';
import { Section } from '@/components/layout/section';
import { Grid } from '@/components/layout/grid';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { skillsConfig } from '@/config/skills';

export function ExpertiseSection() {
  return (
    <Section containerSize="xl" className="py-20 border-b border-[#1F2937]">
      <div className="flex flex-col gap-4 mb-12">
        <Badge variant="primary" className="w-fit">
          Technical Stack
        </Badge>
        <Heading as="h2">Technical Expertise</Heading>
        <Body className="max-w-2xl">
          Core competencies and modern technologies utilized in building production systems.
        </Body>
      </div>

      <Grid cols={3} gap="md">
        {skillsConfig.map((category) => (
          <Card key={category.title} className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-[#1F2937] pb-3">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-sm text-[#9CA3AF] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
