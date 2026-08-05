import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

export function Section({
  containerSize = 'xl',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-12 md:py-20 lg:py-24', className)} {...props}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
