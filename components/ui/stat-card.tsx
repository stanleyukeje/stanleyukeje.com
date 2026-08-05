import React from 'react';
import { Card } from './card';
import { Subheading, Body } from './typography';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  label: string;
  value: string | number;
  description?: string;
  trend?: string;
  className?: string;
}

export function StatCard({ label, value, description, trend, className }: StatCardProps) {
  return (
    <Card className={cn('flex flex-col gap-2', className)}>
      <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-medium">
        {label}
      </span>
      <div className="flex items-baseline justify-between gap-2">
        <Subheading className="text-3xl sm:text-4xl text-white font-bold tracking-tight">
          {value}
        </Subheading>
        {trend && <span className="text-xs font-semibold text-[#22C55E]">{trend}</span>}
      </div>
      {description && <Body className="text-xs text-[#9CA3AF]">{description}</Body>}
    </Card>
  );
}
