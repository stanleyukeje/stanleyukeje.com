import React from 'react';
import { Section } from '@/components/layout/section';
import { CheckCircle } from 'lucide-react';

const trustItems = [
  'Production Applications',
  'Full Stack Engineering',
  'Quality Assurance',
  'Modern Web Stack',
  'Continuous Learning',
];

export function TrustIndicators() {
  return (
    <div className="border-y border-[#1F2937] bg-[#0E131B]/50 py-6">
      <Section containerSize="xl" className="py-0">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#9CA3AF]">
              <CheckCircle className="h-4 w-4 text-[#22C55E]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
