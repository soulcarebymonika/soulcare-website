import { blogPosts } from "./content";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://admin.soulcarebymonika.com";

export function formatImageUrl(img) {
  if (!img) return "/images/colorful-sky-sunset-lake.webp";
  // If API prepended domain to local /images/ relative path, extract local path
  if (typeof img === "string" && img.includes("/images/")) {
    return img.substring(img.indexOf("/images/"));
  }
  return img;
}

export async function getPosts() {
  let apiPosts = [];
  try {
    const res = await fetch(`${API_BASE_URL}/api.php`, {
      next: { revalidate: 60 }, // revalidate every 60s in production
    });
    if (res.ok) {
      const json = await res.json();
      if (json.status === "success" && Array.isArray(json.data)) {
        apiPosts = json.data;
      }
    }
  } catch (error) {
    console.error("Error fetching posts from API:", error);
  }

  // Normalize API posts to have clean `image` property
  const normalizedApiPosts = apiPosts.map((p) => ({
    ...p,
    image: formatImageUrl(p.image_path || p.image),
    image_path: formatImageUrl(p.image_path || p.image),
  }));

  // Merge API posts with static blogPosts (API posts take precedence if slug matches)
  const apiSlugs = new Set(normalizedApiPosts.map((p) => p.slug));
  const fallbackPosts = blogPosts.map((p) => ({
    ...p,
    image: formatImageUrl(p.image || p.image_path),
    image_path: formatImageUrl(p.image || p.image_path),
  })).filter((p) => !apiSlugs.has(p.slug));

  return [...normalizedApiPosts, ...fallbackPosts];
}

export async function getPost(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/api.php?slug=${slug}`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.status === "success" && json.data) {
        const post = json.data;
        const formattedImg = formatImageUrl(post.image_path || post.image);
        return {
          ...post,
          image: formattedImg,
          image_path: formattedImg,
        };
      }
    }
  } catch (error) {
    console.error("Error fetching post from API:", error);
  }

  // Fallback to static blogPosts from content.js
  const staticPost = blogPosts.find((p) => p.slug === slug);
  if (staticPost) {
    const formattedImg = formatImageUrl(staticPost.image || staticPost.image_path);
    return {
      ...staticPost,
      image: formattedImg,
      image_path: formattedImg,
    };
  }

  return null;
}


