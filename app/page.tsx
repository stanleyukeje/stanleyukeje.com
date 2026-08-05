import React from 'react';
import { HeroSection } from '@/features/home/hero-section';
import { TrustIndicators } from '@/features/home/trust-indicators';
import { PhilosophySection } from '@/features/home/philosophy-section';
import { FeaturedProjectsSection } from '@/features/home/featured-projects-section';
import { ExpertiseSection } from '@/features/home/expertise-section';
import { ProcessSection } from '@/features/home/process-section';
import { ExperienceSection } from '@/features/home/experience-section';
import { GitHubSection } from '@/features/home/github-section';
import { CTASection } from '@/features/home/cta-section';
import { generatePersonJSONLD } from '@/lib/seo';

export default function Home() {
  const jsonLd = generatePersonJSONLD();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustIndicators />
      <PhilosophySection />
      <FeaturedProjectsSection />
      <ExpertiseSection />
      <ProcessSection />
      <ExperienceSection />
      <GitHubSection />
      <CTASection />
    </>
  );
}
