import type { MetadataRoute } from 'next';

const baseUrl = 'https://ctijen.com';

const routes = [
  '',
  '/about',
  '/experience',
  '/resources',
  '/where-to-start',
  '/trainings',
  '/tools',
  '/people-orgs-communities',
  '/certifications',
  '/conferences',
  '/podcasts',
  '/jobs',
  '/threat-actors',
  '/mentorship',
  '/faqs',
  '/blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
