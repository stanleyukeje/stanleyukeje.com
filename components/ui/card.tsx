import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = false, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border p-6 md:p-8 text-[#E5E7EB] transition-all duration-200 border-[#334155] bg-[#111827] shadow-md shadow-black/20',
        hoverEffect && 'hover:border-[#2563EB]/60 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
