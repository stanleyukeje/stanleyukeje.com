import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const variantClasses = {
  default: 'bg-[#1F2937] text-[#9CA3AF] border border-[#1F2937]',
  primary: 'bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20',
  success: 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20',
  warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20',
  error: 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20',
};

export function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
