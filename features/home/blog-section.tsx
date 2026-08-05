import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articlesConfig } from '@/config/articles';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogSection() {
  return (
    <section className="py-20 bg-[#111827] border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#334155] pb-6">
          <div className="flex flex-col gap-2">
            <Badge variant="primary" className="w-fit">
              Technical Writing
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineering Articles & Case Notes
            </h2>
            <p className="text-base text-[#CBD5E1] leading-[1.7]">
              Practical articles on full-stack web development, deployment workflows, and lessons learned.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-[#38BDF8] hover:underline flex items-center gap-1 w-fit"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesConfig.map((article) => (
            <Card key={article.slug} hoverEffect className="flex flex-col justify-between gap-6 h-full p-0 overflow-hidden">
              {article.coverImage && (
                <div className="relative w-full h-48 bg-[#0B1220] border-b border-[#334155]">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 p-6">
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
                  <h3 className="text-base font-bold text-white hover:text-[#38BDF8] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs text-[#CBD5E1] line-clamp-3 leading-[1.7]">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#334155] mt-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-[10px] py-0.5 px-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
