import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, ShieldCheck, Zap } from 'lucide-react';

export function PhilosophySection() {
  const points = [
    {
      icon: Code2,
      title: 'Practical Software Architecture',
      description:
        'Building full-stack web applications with clean component boundaries, maintainable TypeScript types, and straightforward database schemas.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance & Testing',
      description:
        'Ensuring code reliability with strict linting, TypeScript compilation checks, and Playwright automated tests before deploying to production.',
    },
    {
      icon: Zap,
      title: 'Performance & Deployment',
      description:
        'Optimizing web applications for fast page loads, responsive user interfaces, and containerized deployment with Docker and Coolify.',
    },
  ];

  return (
    <section className="py-20 bg-[#111827] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Engineering Approach
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How I Build Software
          </h2>
          <p className="text-base text-[#CBD5E1] leading-[1.7]">
            Practical principles focused on reliability, performance, and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt) => (
            <Card key={pt.title} hoverEffect className="flex flex-col gap-4">
              <div className="p-2.5 rounded-lg bg-[#2563EB]/10 text-[#38BDF8] w-fit">
                <pt.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{pt.title}</h3>
              <p className="text-sm text-[#CBD5E1] leading-[1.7]">{pt.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
