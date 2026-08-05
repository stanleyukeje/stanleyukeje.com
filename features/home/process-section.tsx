import React from 'react';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { ChevronRight } from 'lucide-react';

const processSteps = [
  { step: '01', title: 'Discover' },
  { step: '02', title: 'Design' },
  { step: '03', title: 'Build' },
  { step: '04', title: 'Test' },
  { step: '05', title: 'Deploy' },
  { step: '06', title: 'Monitor' },
  { step: '07', title: 'Improve' },
];

export function ProcessSection() {
  return (
    <Section containerSize="xl" className="py-16 md:py-20 border-b border-[#1F2937]/80">
      <div className="flex flex-col gap-3 mb-10">
        <Badge variant="primary" className="w-fit">
          Methodology
        </Badge>
        <Heading as="h2">Engineering Process</Heading>
        <Body className="max-w-xl text-sm sm:text-base">
          Systematic workflow for shipping reliable, maintainable, and resilient software products.
        </Body>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#1F2937] bg-[#0E131B] p-5 sm:p-6 md:p-8">
        {processSteps.map((item, index) => (
          <React.Fragment key={item.step}>
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-[#2563EB] font-bold">{item.step}</span>
              <span className="font-semibold text-white text-sm sm:text-base">{item.title}</span>
            </div>
            {index < processSteps.length - 1 && (
              <ChevronRight className="hidden lg:block h-4 w-4 text-[#1F2937]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}
