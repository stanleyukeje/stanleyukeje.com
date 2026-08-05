import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Terminal, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#111827] text-xs font-mono text-[#38BDF8]">
              <Terminal className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Full Stack Software Engineer | Product Engineer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building Production Web Applications from Idea to Deployment.
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl leading-[1.7]">
              Specializing in Next.js, React, TypeScript, PostgreSQL, Supabase and modern cloud infrastructure. Available for Remote, Contract and Full-Time Software Engineering opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/resume/Stanley_Ukeje_CV.pdf"
                download="Stanley_Ukeje_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors shadow-md shadow-blue-900/30"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#334155] bg-[#111827] text-white font-semibold text-sm hover:bg-[#1E293B] hover:border-[#475569] transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#334155] shadow-2xl bg-[#111827]">
              <Image
                src="/images/profile/stanley.png"
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
