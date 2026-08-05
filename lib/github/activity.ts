import { githubConfig } from '@/config/github';

export interface GitHubActivityEvent {
  id: string;
  type: string;
  repo: string;
  createdAt: string;
}

export async function fetchRecentActivity(): Promise<GitHubActivityEvent[]> {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'StanleyUkeje-Platform',
    };

    if (githubConfig.token) {
      headers.Authorization = `token ${githubConfig.token}`;
    }

    const response = await fetch(
      `${githubConfig.apiUrl}/users/${githubConfig.username}/events/public?per_page=10`,
      {
        headers,
        next: { revalidate: githubConfig.revalidate },
      }
    );

    if (!response.ok) return [];
    const data = await response.json();

    return data.map((event: Record<string, unknown>) => ({
      id: event.id as string,
      type: event.type as string,
      repo: (event.repo as { name: string })?.name || '',
      createdAt: event.created_at as string,
    }));
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return [];
  }
}
