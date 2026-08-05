import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Display({ as: Component = 'h1', className, children, ...props }: TypographyProps) {
  return (
    <Component
      className={cn('font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Heading({ as: Component = 'h2', className, children, ...props }: TypographyProps) {
  return (
    <Component
      className={cn('font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Subheading({ as: Component = 'h3', className, children, ...props }: TypographyProps) {
  return (
    <Component
      className={cn('font-semibold text-xl sm:text-2xl text-white tracking-tight', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Body({ as: Component = 'p', className, children, ...props }: TypographyProps) {
  return (
    <Component
      className={cn('text-base text-[#9CA3AF] leading-relaxed', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Caption({ as: Component = 'span', className, children, ...props }: TypographyProps) {
  return (
    <Component
      className={cn('text-xs text-[#9CA3AF] tracking-wide uppercase font-medium', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Code({ className, children, ...props }: TypographyProps) {
  return (
    <code
      className={cn(
        'rounded bg-[#0E131B] px-1.5 py-0.5 font-mono text-sm text-[#2563EB] border border-[#1F2937]',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function Blockquote({ className, children, ...props }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        'border-l-2 border-[#2563EB] pl-4 italic text-[#9CA3AF] my-4',
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
