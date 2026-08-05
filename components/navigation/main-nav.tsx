'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/config/navigation';
import { clsx } from 'clsx';

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'text-sm font-semibold transition-colors duration-150 py-1 border-b-2',
              isActive
                ? 'text-white border-[#2563EB]'
                : 'text-[#CBD5E1] border-transparent hover:text-white hover:border-[#38BDF8]'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
