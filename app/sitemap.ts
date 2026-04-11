import { MetadataRoute } from 'next';
import { cityList } from '@/lib/cities';

const baseUrl = 'https://noshtio.com';

const staticRoutes = [
  { url: baseUrl, priority: 1.0 },
  { url: `${baseUrl}/for-vendors`, priority: 0.9 },
  { url: `${baseUrl}/how-it-works`, priority: 0.7 },
  { url: `${baseUrl}/pricing`, priority: 0.7 },
  { url: `${baseUrl}/about`, priority: 0.7 },
  { url: `${baseUrl}/blog`, priority: 0.7 },
  { url: `${baseUrl}/contact`, priority: 0.7 },
  { url: `${baseUrl}/areas`, priority: 0.7 },
  { url: `${baseUrl}/privacy-policy`, priority: 0.3 },
  { url: `${baseUrl}/terms-of-service`, priority: 0.3 },
  { url: `${baseUrl}/refund-policy`, priority: 0.3 },
  { url: `${baseUrl}/vendor-agreement`, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...cityList.map((city) => ({
      url: `${baseUrl}/areas/${city.slug}`,
      priority: 0.8,
    })),
  ];
}
