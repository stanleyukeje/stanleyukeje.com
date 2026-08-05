import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#3B82F6] shadow-md shadow-blue-900/30 border border-transparent',
    secondary: 'bg-[#1E293B] text-white hover:bg-[#334155] border border-[#334155]',
    outline: 'bg-[#111827] text-white border border-[#334155] hover:bg-[#1E293B] hover:border-[#475569]',
    ghost: 'bg-transparent text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]/50 border border-transparent',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm font-semibold',
    lg: 'px-6 py-3.5 text-base font-bold',
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
