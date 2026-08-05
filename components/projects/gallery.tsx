import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { Heading } from '@/components/ui/typography';

export interface GalleryProps {
  project: Project;
}

export function Gallery({ project }: GalleryProps) {
  const images = project.gallery || project.screenshots;
  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 py-12 border-b border-[#1F2937]/80">
      <Heading as="h2">Project Screenshots & Media</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F2937] bg-[#0E131B]"
          >
            <Image
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
