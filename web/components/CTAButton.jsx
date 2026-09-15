import Link from 'next/link';

export default function CTAButton({ children, href, className = "" }) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md";
  
  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
}
