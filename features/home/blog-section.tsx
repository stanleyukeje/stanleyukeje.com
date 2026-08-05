import React from 'react';
import { Section } from '@/components/layout/section';
import { Grid } from '@/components/layout/grid';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { BlogCard } from '@/components/blog/blog-card';
import { articlesConfig } from '@/config/articles';

export function BlogSection() {
  return (
    <Section containerSize="xl" className="py-20 border-b border-[#1F2937]">
      <div className="flex flex-col gap-4 mb-12">
        <Badge variant="primary" className="w-fit">
          Technical Writing
        </Badge>
        <Heading as="h2">Latest Engineering Articles</Heading>
        <Body className="max-w-2xl">
          Articles on system design, performance optimization, and web application architecture.
        </Body>
      </div>

      <Grid cols={2} gap="lg">
        {articlesConfig.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </Grid>
    </Section>
  );
}
