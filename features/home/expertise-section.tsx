import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExpertiseSection() {
  const categories = [
    {
      title: 'Frontend Engineering',
      skills: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Server Components', 'Web Vitals Optimization'],
    },
    {
      title: 'Backend & Systems',
      skills: ['Node.js API Routes', 'Go (Golang)', 'PostgreSQL', 'Supabase RLS', 'Redis Ring Buffers', 'WebSocket Gateways'],
    },
    {
      title: 'DevOps & Quality Assurance',
      skills: ['Docker Multi-stage', 'Coolify Orchestrator', 'Hetzner VPS', 'Cloudflare Proxy/SSL', 'ESLint / Jest / Playwright', 'GitHub CI/CD'],
    },
  ];

  return (
    <section className="py-20 bg-[#111827] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Technical Matrix
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Core Expertise & Technologies
          </h2>
          <p className="text-base text-[#CBD5E1] leading-[1.7]">
            Tools and frameworks utilized to construct high-availability systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Card key={cat.title} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white border-b border-[#334155] pb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="default" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
