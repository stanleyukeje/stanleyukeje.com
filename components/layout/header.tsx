import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { MainNav } from '@/components/navigation/main-nav';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1F2937]/80 bg-[#05070B]/90 backdrop-blur-md transition-all">
      <Container size="xl" className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={30}
            height={30}
            className="object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-semibold text-base text-white tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav />
        <MobileNav />
      </Container>
    </header>
  );
}
