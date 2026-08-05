import React from 'react';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';

export function PhilosophySection() {
  return (
    <Section containerSize="xl" className="py-16 md:py-20 border-b border-[#1F2937]/80">
      <div className="flex flex-col gap-6 max-w-4xl">
        <Badge variant="primary" className="w-fit">
          Engineering Mindset
        </Badge>
        <Heading as="h2" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Engineering First
        </Heading>
        <Card className="border-[#1F2937] bg-[#0E131B] p-6 sm:p-8 md:p-10">
          <Body className="text-base sm:text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
            Software isn&apos;t finished when it compiles. Reliable systems are designed, tested, deployed, monitored and continuously improved.
          </Body>
        </Card>
      </div>
    </Section>
  );
}
