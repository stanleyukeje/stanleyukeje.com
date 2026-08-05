import { getGitHubProfile } from './service';
import { GitHubProfile } from '@/types';

export async function fetchContributionStats(): Promise<GitHubProfile | null> {
  return getGitHubProfile();
}
