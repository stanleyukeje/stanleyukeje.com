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

  const desktopImage = images.find((src) => src.includes('desktop'));
  const mobileImage = images.find((src) => src.includes('mobile'));

  return (
    <div className="flex flex-col gap-8 py-12 border-b border-[#334155]">
      <Heading as="h2" className="text-[#38BDF8]">Production Interface Screenshots</Heading>

      <div className="flex flex-col gap-8">
        {/* Desktop Screenshot */}
        {desktopImage && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider font-mono">
              Desktop Interface
            </span>
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#334155] bg-[#111827] shadow-xl">
              <Image
                src={desktopImage}
                alt={`${project.title} desktop dashboard`}
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Mobile Screenshot */}
        {mobileImage && (
          <div className="flex flex-col gap-2 max-w-sm">
            <span className="text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider font-mono">
              Mobile Responsive View
            </span>
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-[#334155] bg-[#111827] shadow-xl">
              <Image
                src={mobileImage}
                alt={`${project.title} mobile homepage`}
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
