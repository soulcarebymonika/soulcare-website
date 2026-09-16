import BlogPostCard from "@/components/BlogPostCard";
import { getPosts } from "@/lib/api";


export const metadata = {
  title: "Blog",
  description:
    "Insights and articles on mental wellness and emotional healing.",
};

export default async function Blog() {
  const posts = await getPosts();

  const formattedPosts = posts.map((post) => {
    return {
      slug: post.slug,
      title: post.title || "",
      excerpt: post.excerpt || (post.content
        ? post.content.replace(/<[^>]*>/g, "").substring(0, 150).trim() + "..."
        : ""),
      image: post.image_path || "/images/colorful-sky-sunset-lake.webp",
    };
  });

  return (
    <div>
      {/* SECTION 1: BLOG HERO BANNER */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden flex flex-col justify-center items-center min-h-[50vh] bg-[#EFE6D6]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/colorful-sky-sunset-lake.webp"
          aria-label="Calming landscape video background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-multiply"
        >
          <source src="/videos/blogs-banner-video-compressed.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="data:text/vtt,"
            label="No captions"
            default
          />
        </video>

        <div className="relative z-10 text-center max-w-3xl mx-auto pt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#3E4A3D] mb-6">
            Journal
          </h1>

          <p className="text-base md:text-lg text-[#6A80A6] leading-relaxed font-body max-w-xl mx-auto font-bold">
            Thoughts, insights, and resources for your mental wellbeing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-secondary)]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {formattedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formattedPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[var(--color-text-muted)] font-serif italic text-base md:text-lg">
              No articles have been published yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}