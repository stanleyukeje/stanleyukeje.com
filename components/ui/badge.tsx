import React from 'react';
import { clsx } from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'default';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className, ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-[#2563EB]/10 text-[#38BDF8] border-[#2563EB]/40',
    success: 'bg-[#22C55E]/10 text-[#4ADE80] border-[#22C55E]/30',
    warning: 'bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/30',
    error: 'bg-[#EF4444]/10 text-[#F87171] border-[#EF4444]/30',
    default: 'bg-[#1E293B] text-[#CBD5E1] border-[#334155]',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-mono font-medium border transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
