import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({
  hoverEffect = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#1F2937] bg-[#0E131B] p-6 text-white transition-all duration-300',
        hoverEffect &&
          'hover:border-[#2563EB]/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
