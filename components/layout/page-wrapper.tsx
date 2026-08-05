import React from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageWrapper({ className, children, ...props }: PageWrapperProps) {
  return (
    <div
      className={cn('flex min-h-screen flex-col bg-[#05070B] text-white', className)}
      {...props}
    >
      {children}
    </div>
  );
}
