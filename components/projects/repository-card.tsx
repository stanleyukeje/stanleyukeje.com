import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getGitHubRepoDetails } from '@/lib/github';
import { RepositoryLanguageBadge } from '@/components/github/repository-language-badge';
import { RepositoryStats } from '@/components/github/repository-stats';
import { ExternalLink, GitBranch, GitCommit } from 'lucide-react';

export interface ProjectRepositoryCardProps {
  repoName: string;
}

export async function ProjectRepositoryCard({ repoName }: ProjectRepositoryCardProps) {
  const repo = await getGitHubRepoDetails(repoName);

  if (!repo) {
    return (
      <Card className="flex flex-col gap-3 border-[#1F2937] bg-[#0E131B] p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">GitHub Repository</span>
          <Badge variant="default">Public</Badge>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          Source code repository configured at https://github.com/stanleyukeje/{repoName}.
        </p>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col gap-4 border-[#1F2937] bg-[#0E131B] p-6">
      <div className="flex items-center justify-between">
        <Link
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg text-white hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
        >
          <span>{repo.name}</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
        <RepositoryLanguageBadge language={repo.language} />
      </div>

      <p className="text-sm text-[#9CA3AF]">{repo.description}</p>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#1F2937]">
        <RepositoryStats stars={repo.stars} forks={repo.forks} openIssues={repo.openIssues} />
        <div className="flex items-center gap-4 text-xs font-mono text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <GitBranch className="h-3.5 w-3.5 text-[#2563EB]" />
            <span>{repo.defaultBranch}</span>
          </span>
          <span className="flex items-center gap-1">
            <GitCommit className="h-3.5 w-3.5 text-[#22C55E]" />
            <span>Updated {new Date(repo.updatedAt).toLocaleDateString()}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
