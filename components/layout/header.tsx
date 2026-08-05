import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { MainNav } from '@/components/navigation/main-nav';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#334155] bg-[#0B1220]/95 backdrop-blur-md transition-all">
      <Container size="xl" className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label={siteConfig.name}>
          <Image
            src="/logo.webp"
            alt={siteConfig.name}
            width={140}
            height={36}
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>
        <MainNav />
        <MobileNav />
      </Container>
    </header>
  );
}
