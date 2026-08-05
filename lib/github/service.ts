import { githubConfig } from '@/config/github';
import { GitHubProfile, GitHubRepository } from '@/types';

/**
 * Fetch GitHub user profile data
 */
export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'StanleyUkeje-Platform',
    };

    if (githubConfig.token) {
      headers.Authorization = `token ${githubConfig.token}`;
    }

    const response = await fetch(`${githubConfig.apiUrl}/users/${githubConfig.username}`, {
      headers,
      next: { revalidate: githubConfig.revalidate },
    });

    if (!response.ok) return null;
    const data = await response.json();

    return {
      username: data.login,
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
      createdAt: data.created_at,
    };
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
}

/**
 * Fetch top user GitHub repositories
 */
export async function getGitHubRepositories(limit = 6): Promise<GitHubRepository[]> {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'StanleyUkeje-Platform',
    };

    if (githubConfig.token) {
      headers.Authorization = `token ${githubConfig.token}`;
    }

    const response = await fetch(
      `${githubConfig.apiUrl}/users/${githubConfig.username}/repos?sort=updated&per_page=${limit}`,
      {
        headers,
        next: { revalidate: githubConfig.revalidate },
      }
    );

    if (!response.ok) return [];
    const data = await response.json();

    return data.map((repo: Record<string, unknown>) => ({
      name: repo.name as string,
      description: (repo.description as string) || '',
      url: repo.html_url as string,
      stars: repo.stargazers_count as number,
      forks: repo.forks_count as number,
      language: (repo.language as string) || 'TypeScript',
      updatedAt: repo.updated_at as string,
      defaultBranch: (repo.default_branch as string) || 'main',
      openIssues: repo.open_issues_count as number,
      topics: (repo.topics as string[]) || [],
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

/**
 * Fetch specific repository details by repo name
 */
export async function getGitHubRepoDetails(repoName: string): Promise<GitHubRepository | null> {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'StanleyUkeje-Platform',
    };

    if (githubConfig.token) {
      headers.Authorization = `token ${githubConfig.token}`;
    }

    const response = await fetch(
      `${githubConfig.apiUrl}/repos/${githubConfig.username}/${repoName}`,
      {
        headers,
        next: { revalidate: githubConfig.revalidate },
      }
    );

    if (!response.ok) return null;
    const data = await response.json();

    return {
      name: data.name,
      description: data.description || '',
      url: data.html_url,
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language || 'TypeScript',
      updatedAt: data.updated_at,
      defaultBranch: data.default_branch || 'main',
      openIssues: data.open_issues_count,
      topics: data.topics || [],
    };
  } catch (error) {
    console.error(`Error fetching GitHub repo details for ${repoName}:`, error);
    return null;
  }
}
