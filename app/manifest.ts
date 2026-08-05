import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Stanley Ukeje — Product Engineer',
    short_name: 'Stanley Ukeje',
    description: 'Official portfolio and engineering platform of Stanley Ukeje.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05070B',
    theme_color: '#05070B',
    icons: [
      {
        src: '/icon.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
