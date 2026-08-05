import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { footerNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#334155] bg-[#0B1220] py-12 text-[#CBD5E1]">
      <Container size="xl" className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="flex items-center group" aria-label={siteConfig.name}>
              <Image
                src="/logo.webp"
                alt={siteConfig.name}
                width={140}
                height={36}
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-[#CBD5E1] max-w-md leading-[1.7]">
              Full Stack Software Engineer building production web applications with Next.js, React, TypeScript and PostgreSQL.
            </p>
          </div>

          {footerNavItems.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-xs text-[#CBD5E1] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#334155] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
          <p>© {currentYear} Stanley Ukeje. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/api/health" className="hover:text-white transition-colors">
              System Health Status
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
