import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#334155] bg-[#1E293B]/60 p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to collaborate on your next system?
            </h2>
            <p className="text-base text-[#CBD5E1] leading-[1.7]">
              Let’s connect to discuss architecture design, software quality assurance, or product engineering opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors shadow-md shadow-blue-900/30"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Stanley</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
