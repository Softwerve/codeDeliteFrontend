import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/dashboard/*',
      }
    ],
    sitemap: 'https://codedelite.vercel.app/sitemap.xml',
  }
}