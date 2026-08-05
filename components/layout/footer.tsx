import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { footerNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-[#1F2937] bg-[#0E131B] py-12 text-[#9CA3AF]">
      <Container size="xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
              <Image
                src="/logo.webp"
                alt={siteConfig.name}
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm max-w-sm text-[#9CA3AF]">
              {siteConfig.author.bio}
            </p>
          </div>

          {footerNavItems.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed & Engineered with Next.js 16 & TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
