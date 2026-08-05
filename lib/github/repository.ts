import { getGitHubRepositories } from './service';
import { GitHubRepository } from '@/types';

export async function fetchRepositories(limit = 6): Promise<GitHubRepository[]> {
  return getGitHubRepositories(limit);
}
