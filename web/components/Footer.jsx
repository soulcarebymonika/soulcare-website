import Link from 'next/link';
import Image from 'next/image';
import { siteInfo } from '@/lib/content';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  const serviceLinks = [
    { name: 'Individual Adults', href: '/sessions/individual-adults' },
    { name: 'Couple Therapy', href: '/sessions/couple-therapy' },
    { name: 'Family Therapy', href: '/sessions/family-therapy' },
    { name: 'Adolescence Therapy', href: '/sessions/adolescence' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'License Verification', href: 'https://www.op.nysed.gov/verification-search' },
  ];

  return (
    <footer className="mt-auto border-t border-white/15 relative overflow-hidden bg-navy text-secondary">
      
      {/* Background Video with subtle opacity and slight blur */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 blur-[3px] scale-105 pointer-events-none"
      >
        <source src="/videos/footer-bg.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt," label="No captions" default />
      </video>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12 sm:pt-24 sm:pb-16 relative z-10">
        <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-start gap-x-8 gap-y-10 lg:gap-0">
          
          {/* 1. Brand */}
          <div className="col-span-2 lg:col-span-1 lg:w-[32%] lg:max-w-[340px]">
            <Link href="/" className="flex items-center gap-4 mb-4 sm:mb-5 group cursor-pointer inline-flex lg:-mt-1.5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-white shadow-md transition-transform duration-500 ease-out group-hover:scale-105">
                <Image 
                  src="/images/logo_soulcare.webp" 
                  alt="Soulcare Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3
                  className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium leading-none mb-1.5 transition-opacity duration-300 group-hover:opacity-80 text-secondary"
                >
                  Soulcare
                </h3>
                <p
                  className="text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase leading-none text-secondary/80"
                >
                  by Monika Arora
                </p>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-[340px] text-secondary/70"
            >
              {siteInfo.tagline}
            </p>
            <div className="flex gap-4 mt-7">
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 transition-all hover:bg-white/20 hover:-translate-y-0.5 text-white"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 transition-all hover:bg-white/20 hover:-translate-y-0.5 text-white"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Services */}
          <div className="col-span-1 lg:w-[20%]">
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6 text-secondary"
            >
              What I Can Help With
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-100 text-secondary/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Navigation */}
          <div className="col-span-1 lg:w-[15%]">
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6 text-secondary"
            >
              Explore
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-100 text-secondary/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Connect & Trust Signals */}
          <div className="col-span-2 lg:col-span-1 lg:w-[23%]">
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6 text-secondary"
            >
              Get in Touch
            </h4>
            
            <div className="space-y-4 text-sm text-secondary/70">
              <div>
                <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-secondary mb-1">In-person sessions</p>
                <p className="text-[13.5px] text-secondary/75">Race Course, Dehradun</p>
              </div>
              <div>
                <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-secondary mb-1">Online counselling</p>
                <p className="text-[13.5px] text-secondary/75">Available in India and Abroad</p>
              </div>
              <div>
                <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-secondary mb-1">Languages</p>
                <p className="text-[13.5px] text-secondary/75">Hindi & English</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Divider, Copyright, Legal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-white/15" />
        <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-4">
          <p
            className="text-xs text-secondary/50"
          >
            © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs transition-colors duration-200 hover:opacity-100 text-secondary/50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
