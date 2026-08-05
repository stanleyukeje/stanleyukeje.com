'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/config/navigation';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-white',
              isActive ? 'text-white font-semibold' : 'text-[#9CA3AF]'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
