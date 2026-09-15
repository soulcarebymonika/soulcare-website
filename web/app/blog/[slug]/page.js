import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { getPosts, getPost } from "@/lib/api";

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    if (!posts || posts.length === 0) {
      return [{ slug: "placeholder-post" }];
    }
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params from WordPress:", error);
    return [{ slug: "placeholder-post" }];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = "https://soulcarebymonika.com";

  const defaults = {
    title: "Blog Post | Soulcare by Monika Arora",
    description: "Thoughts, insights, and resources for your mental wellbeing.",
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: "Blog Post | Soulcare by Monika Arora",
      description: "Thoughts, insights, and resources for your mental wellbeing.",
      url: `${baseUrl}/blog/${slug}`,
      type: "article",
      images: [
        {
          url: `${baseUrl}/images/colorful-sky-sunset-lake.webp`,
          alt: "Soulcare by Monika Arora",
        }
      ]
    }
  };

  try {
    const post = await getPost(slug);
    if (!post) {
      return {
        title: "Post Not Found",
        description: "This blog article could not be found."
      };
    }

    const title = post.meta_title || post.title || "Blog Post";
    const excerpt = post.meta_description || post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, "").substring(0, 150).trim() + "..." : "Thoughts, insights, and resources for your mental wellbeing.");
    const image = post.image_path || `${baseUrl}/images/colorful-sky-sunset-lake.webp`;

    return {
      title: title,
      description: excerpt,
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
      openGraph: {
        title: title,
        description: excerpt,
        url: `${baseUrl}/blog/${slug}`,
        type: "article",
        images: [
          {
            url: image,
            alt: title,
          }
        ]
      }
    };
  } catch (error) {
    console.error("Error generating metadata for slug:", slug, error);
    return defaults;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let post = null;
  let posts = [];

  try {
    post = await getPost(slug);
    posts = await getPosts();
  } catch (error) {
    console.error("Error loading blog details from WordPress:", error);
  }

  if (!post) notFound();

  const title = post.title || "";
  const content = post.content || "";
  const excerpt = post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, "").substring(0, 150).trim() + "..." : "");
  const image = post.image_path || "/images/colorful-sky-sunset-lake.webp";
  const imageAlt = post.image_alt || title;
  const categoryName = post.category || "Mental Wellness";
  const authorName = post.author || "Monika Arora";

  // Reading time estimate (approx 200 words per minute)
  const words = content.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(words / 200));

  // Prev / Next Navigation in the retrieved posts list
  const idx = posts.findIndex((p) => p.slug === slug);
  const navigation = {
    prev: idx > 0 ? { slug: posts[idx - 1].slug, title: posts[idx - 1].title } : null,
    next: idx >= 0 && idx < posts.length - 1 ? { slug: posts[idx + 1].slug, title: posts[idx + 1].title } : null,
  };

  // Related Articles (filter current and take 3)
  const relatedPosts = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => {
      return {
        slug: p.slug,
        title: p.title || "",
        excerpt: p.excerpt || (p.content ? p.content.replace(/<[^>]*>/g, "").substring(0, 150).trim() + "..." : ""),
        image: p.image_path || "/images/colorful-sky-sunset-lake.webp",
      };
    });

  const baseUrl = "https://soulcarebymonika.com";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": "Licensed Clinical Psychologist",
      "url": `${baseUrl}/about`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Soulcare by Monika Arora",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo_soulcare.jpeg`,
      },
    },
  };

  if (image) {
    articleSchema.image = image.startsWith('http') ? image : `${baseUrl}${image}`;
  }

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-white">
        {/* ── Premium cropped hero container ─────────────────────────── */}
        {image ? (
          <div className="relative w-full h-[320px] md:h-[400px] bg-[#FAF9F6] border-y border-[var(--color-primary)]/10 overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-24 bg-[var(--color-secondary)]" />
        )}

        {/* ── Outer Shell (760px - 780px text grid inside max-w-5xl) ──── */}
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* ── Breadcrumbs ───────────────────────────────────────────── */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase mt-12 mb-10 max-w-[760px] md:max-w-[780px] mx-auto"
          >
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[var(--color-primary)]/60" aria-hidden="true">›</span>
            <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors duration-200">
              Blog
            </Link>
            <span className="text-[var(--color-primary)]/60" aria-hidden="true">›</span>
            <span className="text-[var(--color-navy)] truncate max-w-[220px] sm:max-w-sm md:max-w-none normal-case font-medium tracking-normal">
              {title}
            </span>
          </nav>

          {/* ── Article Header ────────────────────────────────────────── */}
          <header className="max-w-[760px] md:max-w-[780px] mx-auto mb-14">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6 text-xs font-bold tracking-[0.14em] uppercase text-[var(--color-accent)]">
              <span>{readingTime} min read</span>
              <span className="text-[var(--color-primary)]/60" aria-hidden="true">•</span>
              <span className="bg-[var(--color-secondary)] text-[var(--color-navy)] px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest">
                {categoryName}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.35rem] font-semibold text-[var(--color-navy)] leading-[1.1] mb-8 tracking-[-0.01em]">
              {title}
            </h1>

            {/* Premium excerpt block */}
            {excerpt && (
              <div className="border-l-[4px] border-[var(--color-accent)] pl-7 pr-4 py-1 my-10 bg-[var(--color-secondary)]/10 rounded-r-xl">
                <p className="text-xl md:text-[22px] leading-[1.7] text-[var(--color-text)] font-light italic">
                  {excerpt}
                </p>
              </div>
            )}
          </header>

          {/* ── Article Body (max-w-[760px]/[780px]) ───────────────────── */}
          <div className="max-w-[760px] md:max-w-[780px] mx-auto mb-20">
            <div 
              className="leading-[1.95] text-[18.5px] text-[var(--color-text)] tracking-[0.012em] space-y-9 blog-content" 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>

          {/* ── Prev/Next Article Navigation ──────────────────────────── */}
          <div className="max-w-[760px] md:max-w-[780px] mx-auto">
            <div className="flex justify-between items-center py-8 border-t border-b border-[var(--color-primary)]/20 my-16">
              {navigation.prev ? (
                <Link
                  href={`/blog/${navigation.prev.slug}`}
                  className="group flex flex-col text-left max-w-[45%] transition-opacity duration-200 hover:opacity-90"
                >
                  <span className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-1.5 flex items-center gap-1 group-hover:text-[var(--color-accent)] transition-colors">
                    ← Previous Article
                  </span>
                  <span className="text-sm font-semibold font-heading text-[var(--color-navy)] group-hover:underline truncate">
                    {navigation.prev.title}
                  </span>
                </Link>
              ) : (
                <div className="w-10" />
              )}
              {navigation.next ? (
                <Link
                  href={`/blog/${navigation.next.slug}`}
                  className="group flex flex-col text-right max-w-[45%] transition-opacity duration-200 hover:opacity-90"
                >
                  <span className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-1.5 flex items-center gap-1 justify-end group-hover:text-[var(--color-accent)] transition-colors">
                    Next Article →
                  </span>
                  <span className="text-sm font-semibold font-heading text-[var(--color-navy)] group-hover:underline truncate">
                    {navigation.next.title}
                  </span>
                </Link>
              ) : (
                <div className="w-10" />
              )}
            </div>
          </div>

          {/* ── Author Card ───────────────────────────────────────────── */}
          <div className="max-w-[760px] md:max-w-[780px] mx-auto mb-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-[var(--color-secondary)] rounded-3xl p-8 sm:p-11 shadow-sm border border-[var(--color-primary)]/15">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-full overflow-hidden shadow-md ring-4 ring-white">
                <Image
                  src="/images/monika-portrait.webp"
                  alt="Monika Arora, Counselling Psychologist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-accent)] mb-2">
                  Written by
                </p>
                <h2 className="font-heading text-2xl text-[var(--color-navy)] font-semibold mb-1 leading-tight">
                  {authorName}
                </h2>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--color-primary)] mb-4">
                  Counselling Psychologist
                </p>
                <p className="text-[15.5px] text-[var(--color-text)] leading-[1.8] max-w-xl">
                  Monika is a counselling psychologist providing online sessions across India and abroad, and in-person sessions in Dehradun. She creates a warm, confidential space where clients can talk openly, feel heard, and move at your own pace.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 mt-6 text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] hover:gap-2.5 transition-all duration-200"
                >
                  More about Monika <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── CTA Block ─────────────────────────────────────────────── */}
          <div className="max-w-[760px] md:max-w-[780px] mx-auto mt-8 mb-36">
            <div className="bg-[var(--color-navy)] rounded-3xl px-8 py-20 sm:py-24 text-center shadow-xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.03] pointer-events-none" />

              <p className="relative text-[11px] font-bold tracking-[0.28em] uppercase text-[var(--color-primary)] mb-4">
                Whenever you feel ready
              </p>
              <h2 className="relative font-heading text-3xl sm:text-4xl text-white font-semibold mb-6 leading-tight max-w-sm mx-auto">
                Ready to take the next step?
              </h2>
              <p className="relative text-white/65 mb-11 max-w-sm mx-auto text-base leading-relaxed">
                If this article resonated with you, consider exploring these themes further in a one-on-one session. You can start wherever you are.
              </p>
              <CTAButton
                href="/book-a-session"
                className="px-14 py-5 text-[14px] font-bold tracking-[0.18em] uppercase rounded-2xl shadow-md hover:scale-[1.02]"
              >
                Book a Session
              </CTAButton>
            </div>
          </div>
        </div>

        {/* ── Related Articles (full-bleed section) ──────────────────── */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="bg-[var(--color-secondary)]/50 py-24 px-5 sm:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-accent)] mb-3">
                  More to explore
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl text-[var(--color-navy)] font-semibold leading-tight">
                  Continue Reading
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {relatedPosts.map((related) => {
                  const imgUrl = related.image || null;
                  return (
                    <article
                      key={related.slug}
                      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-primary)]/10"
                    >
                      <div className="relative h-52 w-full overflow-hidden bg-[var(--color-secondary)]">
                        {imgUrl ? (
                          <Image
                            src={imgUrl}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[var(--color-primary)]/10">
                            <span className="text-[var(--color-primary)]/40 text-sm font-medium">
                              Article Image
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-grow p-7">
                        <h3 className="mb-4 text-[17px] font-heading font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-accent)] transition-colors duration-200 leading-snug">
                          <Link href={`/blog/${related.slug}`} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {related.title}
                          </Link>
                        </h3>
                        {related.excerpt && (
                          <p className="mb-6 flex-grow text-[14px] leading-relaxed text-[var(--color-text-muted)] line-clamp-3">
                            {related.excerpt}
                          </p>
                        )}
                        <div className="mt-auto flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-navy)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                          Read Article
                          <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Footer spacer */}
        <div className="h-8 bg-white" />
      </article>
    </>
  );
}