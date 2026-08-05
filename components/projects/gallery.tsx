import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

export interface GalleryProps {
  project: Project;
}

export function Gallery({ project }: GalleryProps) {
  const images = project.gallery || project.screenshots;
  if (!images || images.length === 0) return null;

  const desktopImage = images.find((src) => src.includes('desktop')) || images[0];
  const mobileImage = images.find((src) => src.includes('mobile')) || images[1];

  return (
    <section className="flex flex-col gap-6 py-6 border-b border-[#334155]">
      <h2 className="text-xl font-bold text-white border-b border-[#334155] pb-2">
        Project Preview
      </h2>

      <div className="flex flex-col gap-8">
        {/* Desktop Screenshot Container */}
        {desktopImage && (
          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#334155] bg-[#111827] shadow-2xl">
              <Image
                src={desktopImage}
                alt={`${project.name} desktop homepage`}
                fill
                sizes="(max-width: 1200px) 100vw, 896px"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <span className="text-xs text-[#CBD5E1] font-mono">
              Desktop Homepage
            </span>
          </div>
        )}

        {/* Mobile Screenshot Container */}
        {mobileImage && (
          <div className="flex flex-col gap-2 max-w-xs sm:max-w-sm">
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-[#334155] bg-[#111827] shadow-2xl">
              <Image
                src={mobileImage}
                alt={`${project.name} mobile homepage`}
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <span className="text-xs text-[#CBD5E1] font-mono">
              Mobile Homepage
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
