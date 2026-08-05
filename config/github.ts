export const githubConfig = {
  username: process.env.GITHUB_USERNAME || 'stanleyukeje',
  token: process.env.GITHUB_TOKEN || '',
  apiUrl: 'https://api.github.com',
  revalidate: 3600, // 1 hour cache
};
