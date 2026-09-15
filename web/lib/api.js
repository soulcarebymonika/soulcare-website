export async function getPosts() {
  try {
    const res = await fetch("http://localhost:8000/api.php", {
      next: { revalidate: 0 }, // no cache for dev
    });
    if (!res.ok) throw new Error("Failed to fetch posts");
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPost(slug) {
  try {
    const res = await fetch(`http://localhost:8000/api.php?slug=${slug}`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("Failed to fetch post");
    const json = await res.json();
    if (json.status === "success") {
      return json.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
