'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { mainNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#9CA3AF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-[#05070B]/95 backdrop-blur-md px-6 py-8 border-t border-[#1F2937] flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#1F2937]">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-semibold text-white">{siteConfig.name}</span>
          </div>
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#9CA3AF] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
