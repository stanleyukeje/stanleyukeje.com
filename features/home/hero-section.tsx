import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Display, Body } from '@/components/ui/typography';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  return (
    <Section containerSize="xl" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div>
            <Badge variant="primary" className="mb-4">
              Product Engineer
            </Badge>
            <Display as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-2xl">
              Build production-ready software with confidence.
            </Display>
          </div>

          <Body className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed">
            I design, build, test, deploy and continuously improve reliable web applications using modern full-stack technologies and engineering best practices.
          </Body>

          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#05070B] transition-all duration-200"
            >
              View Engineering Projects
            </Link>
            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#1F2937] bg-[#0E131B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1F2937] hover:border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#05070B] transition-all duration-200"
            >
              Download Resume
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0E131B] p-2 shadow-2xl shadow-black/50">
            <Image
              src="/images/profile/stanley.png"
              alt={siteConfig.name}
              width={360}
              height={450}
              priority
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
