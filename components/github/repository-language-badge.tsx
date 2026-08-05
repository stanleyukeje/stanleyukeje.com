import React from 'react';
import { cn } from '@/lib/utils';

export interface RepositoryLanguageBadgeProps {
  language: string;
  className?: string;
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/30',
  JavaScript: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30',
  Go: 'bg-[#00ADD8]/10 text-[#00ADD8] border-[#00ADD8]/30',
  Python: 'bg-[#3572A5]/10 text-[#3572A5] border-[#3572A5]/30',
  HTML: 'bg-[#e34c26]/10 text-[#e34c26] border-[#e34c26]/30',
  CSS: 'bg-[#563d7c]/10 text-[#563d7c] border-[#563d7c]/30',
};

export function RepositoryLanguageBadge({ language, className }: RepositoryLanguageBadgeProps) {
  const colorClass = languageColors[language] || 'bg-[#1F2937] text-[#9CA3AF] border-[#1F2937]';

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-medium border',
        colorClass,
        className
      )}
    >
      {language}
    </span>
  );
}
