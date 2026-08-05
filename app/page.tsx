import { Metadata } from 'next';
import { HeroSection } from '@/features/home/hero-section';
import { TrustIndicators } from '@/features/home/trust-indicators';
import { PhilosophySection } from '@/features/home/philosophy-section';
import { FeaturedProjectsSection } from '@/features/home/featured-projects-section';
import { ExpertiseSection } from '@/features/home/expertise-section';
import { ProcessSection } from '@/features/home/process-section';
import { ExperienceSection } from '@/features/home/experience-section';
import { GitHubSection } from '@/features/home/github-section';
import { BlogSection } from '@/features/home/blog-section';
import { CTASection } from '@/features/home/cta-section';
import { constructSEO, generatePersonJSONLD } from '@/lib/seo';

export const metadata: Metadata = constructSEO({
  title: 'Stanley Ukeje | Product Engineer',
  description:
    'Product Engineer specializing in production-ready web applications, full-stack development, software quality assurance and scalable engineering systems.',
  path: '/',
});

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
      <BlogSection />
      <CTASection />
    </>
  );
}
