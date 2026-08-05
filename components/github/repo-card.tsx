import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitHubRepository } from '@/types';
import { RepositoryLanguageBadge } from './repository-language-badge';
import { RepositoryStats } from './repository-stats';
import { ExternalLink, GitBranch } from 'lucide-react';

export interface RepositoryCardProps {
  repo: GitHubRepository;
}

export function RepoCard({ repo }: RepositoryCardProps) {
  return (
    <Card hoverEffect className="flex flex-col justify-between gap-5 h-full border-[#1F2937] bg-[#0E131B]">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg text-white hover:text-[#2563EB] transition-colors flex items-center gap-1.5 line-clamp-1"
          >
            <span>{repo.name}</span>
            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
          </Link>
          <RepositoryLanguageBadge language={repo.language} />
        </div>

        <p className="text-sm text-[#9CA3AF] line-clamp-2 leading-relaxed">{repo.description}</p>

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {repo.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="default" className="text-[10px] px-2 py-0">
                {topic}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 pt-3 border-t border-[#1F2937]">
        <div className="flex items-center justify-between">
          <RepositoryStats stars={repo.stars} forks={repo.forks} openIssues={repo.openIssues} />
          {repo.defaultBranch && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-[#9CA3AF]">
              <GitBranch className="h-3 w-3" />
              <span>{repo.defaultBranch}</span>
            </span>
          )}
        </div>
        <span className="text-[11px] text-[#9CA3AF]">
          Updated {new Date(repo.updatedAt).toLocaleDateString()}
        </span>
      </div>
    </Card>
  );
}
