import { categoryServices } from "@/lib/content";
import { getPosts } from "@/lib/api";

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://soulcarebymonika.com';

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
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  let posts = [];
  try {
    posts = await getPosts();
  } catch (e) {
    console.error("Failed to fetch posts for sitemap_v2:", e);
  }

  const blogRoutes = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at).toISOString() : new Date(post.created_at || new Date()).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const categoryRoutes = Object.keys(categoryServices).map((category) => ({
    url: `${baseUrl}/sessions/${category}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes, ...categoryRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
