import React from 'react';
import { Card } from './card';
import { cn } from '@/lib/utils';

export interface EmptyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function EmptyCard({ className, children, ...props }: EmptyCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center border-dashed border-[#1F2937] bg-transparent',
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
