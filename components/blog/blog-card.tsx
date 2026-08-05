import React from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

export interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Card hoverEffect className="flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
            <Clock className="h-3.5 w-3.5" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold text-white tracking-tight hover:text-[#2563EB] transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-[#9CA3AF] line-clamp-3">{article.summary}</p>
      </div>

      <div className="text-xs text-[#9CA3AF] pt-4 border-t border-[#1F2937]">
        Published on {new Date(article.publishedAt).toLocaleDateString()}
      </div>
    </Card>
  );
}
