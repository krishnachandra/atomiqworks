import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AtomiqWorks | Expert Web & App Development',
    short_name: 'AtomiqWorks',
    description: 'Engineering the Future of Digital. We build scalable, high-performance digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ef4444',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/atomiq-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
