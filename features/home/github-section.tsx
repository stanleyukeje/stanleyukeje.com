import React from 'react';
import { Section } from '@/components/layout/section';
import { Grid } from '@/components/layout/grid';
import { Badge } from '@/components/ui/badge';
import { Heading, Body } from '@/components/ui/typography';
import { RepoCard } from '@/components/github/repo-card';
import { GitHubProfileCard } from '@/components/github/github-profile';
import { Skeleton } from '@/components/ui/skeleton';
import { getGitHubRepositories, getGitHubProfile } from '@/lib/github';

export async function GitHubSection() {
  const [repos, profile] = await Promise.all([
    getGitHubRepositories(6),
    getGitHubProfile(),
  ]);

  return (
    <Section containerSize="xl" className="py-20 border-b border-[#1F2937]/80">
      <div className="flex flex-col gap-4 mb-8">
        <Badge variant="primary" className="w-fit">
          Open Source & Telemetry
        </Badge>
        <Heading as="h2">GitHub Activity & Live Repositories</Heading>
        <Body className="max-w-2xl">
          Real-time open source telemetry and repositories dynamically cached from the GitHub REST API.
        </Body>
      </div>

      <div className="flex flex-col gap-8">
        <GitHubProfileCard profile={profile} />

        {repos.length > 0 ? (
          <Grid cols={3} gap="lg">
            {repos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </Grid>
        ) : (
          <Grid cols={3} gap="lg">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </Grid>
        )}
      </div>
    </Section>
  );
}
