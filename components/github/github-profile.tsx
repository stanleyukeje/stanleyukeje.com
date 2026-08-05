import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { GitHubProfile } from '@/types';
import { FolderGit2, Users, Calendar } from 'lucide-react';

export interface GitHubProfileCardProps {
  profile: GitHubProfile | null;
}

export function GitHubProfileCard({ profile }: GitHubProfileCardProps) {
  if (!profile) return null;

  return (
    <Card className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 border-[#1F2937] bg-[#0E131B]">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden border border-[#1F2937]">
          <Image
            src={profile.avatarUrl}
            alt={profile.username}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={profile.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-white hover:text-[#2563EB] transition-colors"
          >
            @{profile.username}
          </Link>
          <span className="text-xs text-[#9CA3AF]">GitHub Engineering Profile</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm text-[#9CA3AF]">
        <div className="flex items-center gap-2">
          <FolderGit2 className="h-4 w-4 text-[#2563EB]" />
          <span className="font-semibold text-white">{profile.publicRepos}</span> Repositories
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-[#22C55E]" />
          <span className="font-semibold text-white">{profile.followers}</span> Followers
        </div>
        {profile.createdAt && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#9CA3AF]" />
            <span>Since {new Date(profile.createdAt).getFullYear()}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
