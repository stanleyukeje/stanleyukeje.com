import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { articlesConfig } from '@/config/articles';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Technical Articles',
  description:
    'Engineering insights on full-stack web applications, deployment workflows, and quality assurance strategies by Stanley Ukeje.',
};

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20 bg-[#0B1220] text-white">
      <Container size="xl" className="flex flex-col gap-12 max-w-7xl">
        <Section className="flex flex-col gap-4 max-w-2xl">
          <Badge variant="primary" className="w-fit">
            Engineering Blog
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Technical Articles & Case Notes
          </h1>
          <p className="text-base text-[#CBD5E1] leading-[1.7]">
            Practical articles on full-stack web development with Next.js, React, TypeScript, Supabase, and cloud deployment workflows.
          </p>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {articlesConfig.map((article) => (
            <Card key={article.slug} hoverEffect className="flex flex-col justify-between gap-6 h-full p-0 overflow-hidden border-[#334155] bg-[#111827]">
              {article.coverImage && (
                <Link href={`/blog/${article.slug}`} className="relative w-full h-48 bg-[#0B1220] border-b border-[#334155] block overflow-hidden group">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              )}

              <div className="flex flex-col justify-between h-full p-6 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-[#CBD5E1]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#2563EB]" />
                      <span>{article.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#38BDF8]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="text-lg font-bold text-white hover:text-[#38BDF8] transition-colors leading-snug">
                      {article.title}
                    </h2>
                  </Link>

                  <p className="text-xs text-[#CBD5E1] line-clamp-3 leading-[1.7]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-[#334155]">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-[10px] py-0.5 px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-xs font-semibold text-[#38BDF8] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
