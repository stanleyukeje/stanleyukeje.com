import { githubConfig } from '@/config/github';

export const GITHUB_CACHE = {
  revalidate: githubConfig.revalidate, // 3600s / 1hr
  tags: ['github-stats', 'github-repos'],
};
