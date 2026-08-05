import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Code2, Server, Globe } from 'lucide-react';
import { constructSEO, buildPersonJsonLd } from '@/lib/seo';

export const metadata: Metadata = constructSEO({
  title: 'About Stanley Ukeje | Full Stack Software Engineer',
  description:
    'Background, technical experience, and software development engineering approach of Stanley Ukeje.',
  path: '/about',
});

export default function AboutPage() {
  const personJsonLd = buildPersonJsonLd();

  const principles = [
    {
      title: 'Full Stack Software Engineering',
      desc: 'Designing and building complete web applications with Next.js, React, TypeScript, Node.js and PostgreSQL from concept to release.',
      icon: Code2,
    },
    {
      title: 'Production Infrastructure & DevOps',
      desc: 'Deploying and managing web servers, Docker containers, Cloudflare networking and Coolify infrastructure for reliable uptime.',
      icon: Server,
    },
    {
      title: 'API & Payment Systems',
      desc: 'Integrating third-party APIs, webhooks, payment gateways, and email dispatch services with high reliability.',
      icon: Globe,
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#0B1220] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Container size="xl" className="flex flex-col gap-16 max-w-4xl">
        <Section className="flex flex-col gap-4">
          <Badge variant="primary" className="w-fit">
            Full Stack Software Engineer
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Engineering Production Web Applications.
          </h1>
          <p className="text-lg text-[#CBD5E1] leading-[1.7]">
            Full Stack Software Engineer with experience building, deploying and maintaining production web applications across fintech, marketplaces, SaaS and social platforms.
          </p>
        </Section>

        <Section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white border-b border-[#334155] pb-3">
            Practical Engineering Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <Card key={p.title} className="flex flex-col gap-3">
                <div className="p-2 rounded-lg bg-[#2563EB]/10 text-[#38BDF8] w-fit">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white text-base">{p.title}</h3>
                <p className="text-xs text-[#CBD5E1] leading-[1.7]">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white border-b border-[#334155] pb-3">
            Why Work With Me
          </h2>
          <div className="flex flex-col gap-3">
            {[
              'Complete ownership of the software lifecycle from database schema design to cloud deployment.',
              'Comfortable joining existing codebases, shipping new features, and solving production issues.',
              'Strong emphasis on code quality, long-term maintainability, and clean architecture.',
              'Available immediately for Remote, Contract, Freelance and Full-Time Software Engineering roles.',
            ].map((text, idx) => (
              <Card key={idx} className="flex items-start gap-3 p-4">
                <CheckCircle2 className="h-5 w-5 text-[#22C55E] shrink-0 mt-0.5" />
                <span className="text-sm text-[#CBD5E1] leading-[1.7]">{text}</span>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="flex flex-col items-center justify-center text-center gap-6 p-8 rounded-2xl bg-[#111827] border border-[#334155]">
          <h2 className="text-2xl font-bold text-white">Let’s Discuss Your Engineering Goals</h2>
          <p className="text-sm text-[#CBD5E1] max-w-lg leading-[1.7]">
            Available for Remote, Contract, Freelance and Full-Time Software Engineering opportunities.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/resume/Stanley_Ukeje_CV.pdf"
              download="Stanley_Ukeje_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors"
            >
              <span>Download CV</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#334155] bg-[#1E293B] text-white font-semibold text-sm hover:bg-[#334155] transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </Container>
    </div>
  );
}
