import { projectsConfig } from '@/config/projects';
import { getGitHubRepoDetails } from './service';
import { EcosystemProject } from '@/types';

/**
 * Multi-Repository Ecosystem Aggregator
 * Retrieves live telemetry for all configured ecosystem projects.
 */
export async function getEcosystemTelemetry(): Promise<EcosystemProject[]> {
  const telemetryPromises = projectsConfig.map(async (project) => {
    const repoDetails = await getGitHubRepoDetails(project.githubRepository);

    if (repoDetails) {
      return {
        project,
        telemetry: {
          stars: repoDetails.stars,
          forks: repoDetails.forks,
          openIssues: repoDetails.openIssues || 0,
          lastCommit: repoDetails.updatedAt,
          language: repoDetails.language,
          isAvailable: true,
        },
      };
    }

    return {
      project,
      telemetry: {
        stars: 0,
        forks: 0,
        openIssues: 0,
        language: project.stack[0] || 'TypeScript',
        isAvailable: false,
      },
    };
  });

  return Promise.all(telemetryPromises);
}
