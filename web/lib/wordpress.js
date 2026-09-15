const WP_API = process.env.NEXT_PUBLIC_WP_API || 'https://soulcarebymonika.com/blog/wp-json/wp/v2';

async function fetchAPI(endpoint) {
  const res = await fetch(`${WP_API}${endpoint}`);

  if (!res.ok) {
    throw new Error(`WordPress API Error: ${res.status}`);
  }

  return res.json();
}

export async function getPosts() {
  try {
    return await fetchAPI("/posts?_embed&per_page=100");
  } catch (error) {
    console.error("WordPress API Error in getPosts:", error);
    return []; // sensible default if API fails
  }
}

export async function getPost(slug) {
  try {
    if (!slug) return null;
    const posts = await fetchAPI(`/posts?slug=${slug}&_embed`);
    return posts[0] ?? null;
  } catch (error) {
    console.error(`WordPress API Error in getPost (slug: ${slug}):`, error);
    return null; // sensible default if API fails
  }
}
