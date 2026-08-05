import React from 'react';
import { Card } from './card';
import { Subheading, Body } from './typography';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card hoverEffect className={cn('flex flex-col gap-4', className)}>
      {icon && <div className="text-[#2563EB] h-8 w-8">{icon}</div>}
      <Subheading as="h3" className="text-xl font-bold text-white">
        {title}
      </Subheading>
      <Body className="text-sm text-[#9CA3AF] leading-relaxed">{description}</Body>
    </Card>
  );
}
