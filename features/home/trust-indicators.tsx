import React from 'react';

export function TrustIndicators() {
  const indicators = [
    { label: 'Engineering Focus', value: 'Full Stack & SQA' },
    { label: 'Core Language', value: 'TypeScript' },
    { label: 'Cloud Host', value: 'Hetzner + Coolify' },
    { label: 'Database Engine', value: 'PostgreSQL + Supabase' },
  ];

  return (
    <section className="py-12 bg-[#111827] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {indicators.map((ind) => (
            <div key={ind.label} className="flex flex-col gap-1 p-4 rounded-xl bg-[#1E293B]/40 border border-[#334155]">
              <span className="text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold">{ind.label}</span>
              <span className="text-base font-bold text-white">{ind.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
