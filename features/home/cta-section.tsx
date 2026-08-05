import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Heading, Body } from '@/components/ui/typography';

export function CTASection() {
  return (
    <Section containerSize="xl" className="py-16 md:py-24">
      <Card className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 text-center border-[#2563EB]/40 bg-gradient-to-b from-[#0E131B] to-[#05070B] shadow-2xl shadow-blue-950/20">
        <Heading as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Looking for a Product Engineer?
        </Heading>
        <Body className="text-base sm:text-lg text-[#9CA3AF] max-w-md mb-8">
          Let&apos;s build reliable software together.
        </Body>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#05070B] transition-all duration-200"
          >
            Contact Me
          </Link>
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#1F2937] bg-[#0E131B] px-6 py-3 text-sm font-medium text-white hover:bg-[#1F2937] hover:border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#05070B] transition-all duration-200"
          >
            Download Resume
          </Link>
        </div>
      </Card>
    </Section>
  );
}
