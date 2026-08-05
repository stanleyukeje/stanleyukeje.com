import React from 'react';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { experienceConfig } from '@/config/experience';

export function ExperienceSection() {
  return (
    <Section containerSize="xl" className="py-20 border-b border-[#1F2937]">
      <div className="flex flex-col gap-4 mb-12">
        <Badge variant="primary" className="w-fit">
          Track Record
        </Badge>
        <Heading as="h2">Selected Experience</Heading>
        <Body className="max-w-2xl">
          Demonstrated impact building software systems, collaborating with engineering teams, and shipping production applications.
        </Body>
      </div>

      <div className="flex flex-col gap-6">
        {experienceConfig.map((exp) => (
          <Card key={exp.company} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F2937] pb-3">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                <span className="text-sm font-medium text-[#2563EB]">{exp.company}</span>
              </div>
              <span className="text-xs font-mono text-[#9CA3AF] bg-[#05070B] px-3 py-1 rounded-full border border-[#1F2937] w-fit">
                {exp.period}
              </span>
            </div>

            <Body className="text-sm text-[#9CA3AF] leading-relaxed">{exp.description}</Body>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-[#9CA3AF] bg-[#05070B] px-2.5 py-1 rounded border border-[#1F2937]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
