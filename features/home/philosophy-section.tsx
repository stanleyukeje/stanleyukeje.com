import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

export function PhilosophySection() {
  const points = [
    {
      icon: Cpu,
      title: 'Systems & Architecture Design',
      description:
        'Software should be built with clear boundaries, modular design, and loose coupling. Every platform service is isolated behind standard interface contracts.',
    },
    {
      icon: ShieldCheck,
      title: 'Software Quality Assurance',
      description:
        'Quality is not an afterthought; it is built into the workflow. Comprehensive static analysis, type safety, automated tests, and fail-fast assertions prevent regressions.',
    },
    {
      icon: Zap,
      title: 'Performance & Telemetry',
      description:
        'Latency matters. Sub-100ms API response targets, server-side caching, and real-time observability telemetry ensure peak user experiences.',
    },
  ];

  return (
    <section className="py-20 bg-[#111827] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Core Philosophy
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Engineering Principles & Craftsmanship
          </h2>
          <p className="text-base text-[#CBD5E1] leading-[1.7]">
            How software systems are architected, verified, and deployed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt) => (
            <Card key={pt.title} hoverEffect className="flex flex-col gap-4">
              <div className="p-2.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] w-fit">
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
