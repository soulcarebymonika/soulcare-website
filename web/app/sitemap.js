import { blogPosts, categoryServices } from "@/lib/content";

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://soulcare.example.com';
  
  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/sessions',
    '/how-it-works',
    '/blog',
    '/testimonials',
    '/book-a-session',
    '/faq',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // 3. Dynamic Service Category Routes
  const categoryRoutes = Object.keys(categoryServices).map((category) => ({
    url: `${baseUrl}/sessions/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes];
}
