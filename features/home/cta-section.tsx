import React from 'react';
import Link from 'next/link';
import { Mail, Download } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#334155] bg-[#1E293B]/60 p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to collaborate on your next project?
            </h2>
            <p className="text-base text-[#CBD5E1] leading-[1.7]">
              Available for Remote, Contract, Freelance and Full-Time Software Engineering opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/resume/Stanley_Ukeje_CV.pdf"
              download="Stanley_Ukeje_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors shadow-md shadow-blue-900/30"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#334155] bg-[#111827] text-white font-semibold text-sm hover:bg-[#1E293B] hover:border-[#475569] transition-colors"
            >
              <Mail className="h-4 w-4 text-[#38BDF8]" />
              <span>Contact Stanley</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
