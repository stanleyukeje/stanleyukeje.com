import React from 'react';
import Link from 'next/link';
import { articlesConfig } from '@/config/articles';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogSection() {
  return (
    <section className="py-16 bg-[#05070B] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div className="flex flex-col gap-2">
            <Badge variant="primary" className="w-fit">
              Technical Writing
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Engineering Deep Dives & Articles
            </h2>
            <p className="text-sm text-[#9CA3AF]">
              Architectural analyses, performance optimizations, and systems design principles.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 w-fit"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesConfig.map((article) => (
            <Card key={article.slug} hoverEffect className="flex flex-col justify-between gap-6 h-full">
              <div className="flex flex-col gap-3">
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
                  <h3 className="text-lg font-bold text-white hover:text-[#2563EB] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-sm text-[#9CA3AF] line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#1F2937] text-xs">
                <div className="flex gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-[#2563EB] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
