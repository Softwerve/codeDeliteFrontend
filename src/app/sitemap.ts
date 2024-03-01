import { components, templateCategories } from '@/components/Sitemap/sitemapApiActions'
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const codedeliteUrl = process.env.NEXT_CODEDELITE_URL
  const componentCategories = components;
  const templateAllCategories = await templateCategories();

  const componentCategoryEntries :MetadataRoute.Sitemap = componentCategories.map((category)=>({
      url: `${codedeliteUrl}/components/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
  }));

  const templateCategoryEntries :MetadataRoute.Sitemap = templateAllCategories.map((categoryObject)=>({
    url: `${codedeliteUrl}/webtemplates?category=${categoryObject?.category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
}));



  return [
    {
      url: `${codedeliteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${codedeliteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.softwerve.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/components`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${codedeliteUrl}/pricingandcharges`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/paymentpolicy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/author`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${codedeliteUrl}/author/all`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${codedeliteUrl}/webtemplates/search?keyword=`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/components/search?keyword=`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },

    ...templateCategoryEntries,
    ...componentCategoryEntries,
    {
      url: `${codedeliteUrl}/webtemplates/1`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/components/1`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/following`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/components`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/loveditems`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/orders`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${codedeliteUrl}/dashboard/purchased`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    
  ]
}