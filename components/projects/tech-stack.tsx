import React from 'react';
import { TechBadge } from './tech-badge';

export interface TechStackProps {
  stack: string[];
}

export function TechStack({ stack }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <TechBadge key={item} name={item} />
      ))}
    </div>
  );
}
