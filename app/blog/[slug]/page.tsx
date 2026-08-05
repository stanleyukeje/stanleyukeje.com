import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { articlesConfig } from '@/config/articles';
import { constructSEO, buildBlogPostingJsonLd } from '@/lib/seo';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articlesConfig.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesConfig.find((a) => a.slug === slug);
  if (!article) return {};

  return constructSEO({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.coverImage,
    keywords: article.tags,
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesConfig.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const blogPostingJsonLd = buildBlogPostingJsonLd(article);

  return (
    <div className="py-12 md:py-20 bg-[#0B1220] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Container size="xl" className="flex flex-col gap-10 max-w-3xl">
        <Link
          href="/blog"
          className="text-xs font-semibold text-[#CBD5E1] hover:text-white transition-colors flex items-center gap-1.5 w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>

        <Section className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="primary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight text-white">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-[#CBD5E1] border-y border-[#334155] py-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#2563EB]" />
              <span>{article.publishedAt}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#38BDF8]" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <span>By {article.author.name}</span>
          </div>

          {article.coverImage && (
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#334155] bg-[#111827] shadow-xl mt-2">
              <Image
                src={article.coverImage}
                alt={`Illustration for ${article.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          )}
        </Section>

        <article className="prose prose-invert max-w-none text-[#CBD5E1] leading-relaxed space-y-6">
          <p className="text-lg text-white font-medium">{article.excerpt}</p>
          <div className="whitespace-pre-line text-sm sm:text-base border-t border-[#334155] pt-6">
            {article.content}
          </div>
        </article>
      </Container>
    </div>
  );
}
