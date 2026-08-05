import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { projectsConfig } from '@/config/projects';
import { ProjectHero } from '@/components/projects/project-hero';
import { Gallery } from '@/components/projects/gallery';
import { ArchitectureSection } from '@/components/projects/architecture-section';
import { LessonSection } from '@/components/projects/lesson-section';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsConfig.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsConfig.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsConfig.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-[#0B1220] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <Link
          href="/projects"
          className="text-xs font-semibold text-[#CBD5E1] hover:text-white transition-colors flex items-center gap-1.5 w-fit"
        >
          ← Back to Projects
        </Link>

        <ProjectHero project={project} />

        <div className="flex flex-col gap-10">
          <Gallery project={project} />

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-2">
              1. Executive Summary
            </h2>
            <p className="text-[#CBD5E1] leading-[1.7] text-sm sm:text-base">
              {project.overview || project.longDescription}
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-2">
              2. Problem Statement
            </h2>
            <p className="text-[#CBD5E1] leading-[1.7] text-sm sm:text-base">
              {project.problem}
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-2">
              3. Solution Engineering
            </h2>
            <p className="text-[#CBD5E1] leading-[1.7] text-sm sm:text-base">
              {project.solution}
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-2">
              4. System Architecture
            </h2>
            <ArchitectureSection />
          </section>

          {project.lessons && project.lessons.length > 0 && (
            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-2">
                5. Engineering Trade-offs & Lessons Learned
              </h2>
              <LessonSection lessons={project.lessons} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
