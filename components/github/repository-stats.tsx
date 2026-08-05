import React from 'react';
import { Star, GitFork, AlertCircle } from 'lucide-react';

export interface RepositoryStatsProps {
  stars: number;
  forks: number;
  openIssues?: number;
}

export function RepositoryStats({ stars, forks, openIssues }: RepositoryStatsProps) {
  return (
    <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
      <div className="flex items-center gap-1.5" title="Stars">
        <Star className="h-3.5 w-3.5 text-[#F59E0B]" />
        <span>{stars}</span>
      </div>
      <div className="flex items-center gap-1.5" title="Forks">
        <GitFork className="h-3.5 w-3.5" />
        <span>{forks}</span>
      </div>
      {typeof openIssues === 'number' && (
        <div className="flex items-center gap-1.5" title="Open Issues">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>{openIssues} issues</span>
        </div>
      )}
    </div>
  );
}
