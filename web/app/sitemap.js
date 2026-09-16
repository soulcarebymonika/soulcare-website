import { categoryServices } from "@/lib/content";
import { getPosts } from "@/lib/api";

export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://soulcarebymonika.com';
  
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

  // Fetch dynamic posts from API
  const posts = await getPosts();

  // 2. Dynamic Blog Routes
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : new Date(post.created_at || new Date()),
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
