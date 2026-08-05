import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    'bg-[#2563EB] text-white hover:bg-[#1d4ed8] focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#05070B]',
  secondary:
    'bg-[#0E131B] text-white hover:bg-[#1F2937] border border-[#1F2937]',
  outline:
    'border border-[#1F2937] text-white hover:bg-[#0E131B] hover:border-[#9CA3AF]',
  ghost: 'text-[#9CA3AF] hover:text-white hover:bg-[#0E131B]',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
