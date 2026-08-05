import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, ShieldCheck, Zap, Layers, Server, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Engineering philosophy, background, software quality assurance, and systems architecture approach of Stanley Ukeje.',
};

export default function AboutPage() {
  const philosophies = [
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
    {
      icon: Layers,
      title: 'Maintainable Codebases',
      description:
        'Code is read more often than it is written. Writing clean, self-documenting TypeScript with strict zero-any policies maximizes long-term velocity.',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#05070B] text-white">
      <Container size="xl" className="flex flex-col gap-16">
        <Section className="flex flex-col gap-6 max-w-3xl">
          <Badge variant="primary" className="w-fit">
            About Stanley Ukeje
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Engineering software with clarity, quality, and resilience.
          </h1>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            I am a Product Engineer specializing in building enterprise web applications, high-throughput backend services, and scalable cloud infrastructure.
          </p>
        </Section>

        <Section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold tracking-tight border-b border-[#1F2937] pb-4">
            Engineering Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item) => (
              <Card key={item.title} hoverEffect className="flex flex-col gap-4">
                <div className="p-2.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] w-fit">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold tracking-tight border-b border-[#1F2937] pb-4">
            Technical Stack & Ecosystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#2563EB] font-bold">
                <Code className="h-5 w-5" />
                <span>Frontend & UI</span>
              </div>
              <p className="text-sm text-[#9CA3AF]">
                Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Server Components, Web Vitals Optimization.
              </p>
            </Card>

            <Card className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#2563EB] font-bold">
                <Server className="h-5 w-5" />
                <span>Backend & API</span>
              </div>
              <p className="text-sm text-[#9CA3AF]">
                Node.js, Go (Golang), PostgreSQL, Supabase, Redis ring buffers, REST & WebSocket Gateways.
              </p>
            </Card>

            <Card className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#2563EB] font-bold">
                <ShieldCheck className="h-5 w-5" />
                <span>DevOps & Quality</span>
              </div>
              <p className="text-sm text-[#9CA3AF]">
                Docker multi-stage builds, Coolify, Hetzner VPS, Cloudflare CDN, ESLint, Playwright, Jest.
              </p>
            </Card>
          </div>
        </Section>
      </Container>
    </div>
  );
}
