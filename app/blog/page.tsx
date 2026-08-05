import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { articlesConfig } from '@/config/articles';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Articles',
  description:
    'Engineering insights, software architecture deep dives, performance optimization, and quality assurance strategies by Stanley Ukeje.',
};

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20 bg-[#05070B] text-white">
      <Container size="xl" className="flex flex-col gap-12 max-w-5xl">
        <Section className="flex flex-col gap-4 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Engineering Blog
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Technical Deep Dives & Systems Architecture
          </h1>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Articles on building resilient web applications, high-performance backends, zero-trust security, and software quality assurance.
          </p>
        </Section>

        <Section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesConfig.map((article) => (
            <Card key={article.slug} hoverEffect className="flex flex-col justify-between gap-6 h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#2563EB]" />
                    <span>{article.publishedAt}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <h2 className="text-xl font-bold text-white hover:text-[#2563EB] transition-colors leading-snug">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-sm text-[#9CA3AF] line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 border-t border-[#1F2937]">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 mt-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </Section>
      </Container>
    </div>
  );
}
