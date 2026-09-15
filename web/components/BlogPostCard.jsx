import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogPostCard({ post }) {
  const imageUrl = post.image || null;

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[var(--color-primary)]/10">
      <div className="relative h-48 w-full overflow-hidden bg-[var(--color-secondary)]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--color-primary)]/10">
            <span className="text-[var(--color-primary)]/50 font-medium">
              Article Image
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-3 text-xl font-heading font-semibold text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-accent)]">
          <Link
            href={`/blog/${post.slug}`}
            className="focus:outline-none"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        <p className="mb-6 flex-grow text-sm leading-relaxed text-[var(--color-text-muted)] line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-widest text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-accent)]">
          Read Article
          <ArrowRight
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
}