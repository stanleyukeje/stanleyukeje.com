import React from 'react';
import { Badge } from '@/components/ui/badge';

export interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <Badge variant="default" className="bg-[#0E131B] text-[#9CA3AF] border-[#1F2937] text-xs font-mono">
      {name}
    </Badge>
  );
}
