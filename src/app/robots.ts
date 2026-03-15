import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ctijen.com/sitemap.xml',
    host: 'https://ctijen.com',
  };
}
