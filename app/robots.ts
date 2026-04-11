import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/vendor/dashboard', '/api/'],
      },
    ],
    sitemap: 'https://noshtio.com/sitemap.xml',
  };
}
