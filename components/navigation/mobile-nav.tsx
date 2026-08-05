'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Download } from 'lucide-react';
import { mainNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#CBD5E1] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-lg border border-[#334155] bg-[#111827]"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-14 z-[110] bg-[#0B1220] px-6 py-8 flex flex-col justify-between border-t border-[#334155] overflow-y-auto">
          <div className="flex flex-col gap-8">
            <div className="flex items-center pb-4 border-b border-[#334155]">
              <Image
                src="/logo.webp"
                alt={siteConfig.name}
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </div>
            <nav className="flex flex-col gap-5" aria-label="Mobile Navigation">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white hover:text-[#38BDF8] transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#334155] flex flex-col gap-4">
            <a
              href="/resume/Stanley_Ukeje_CV.pdf"
              download="Stanley_Ukeje_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-bold text-sm hover:bg-[#3B82F6] transition-colors shadow-md shadow-blue-900/30"
            >
              <Download className="h-4 w-4" />
              <span>Download CV (PDF)</span>
            </a>
            <p className="text-xs text-center text-[#CBD5E1]">
              © {new Date().getFullYear()} Stanley Ukeje
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
