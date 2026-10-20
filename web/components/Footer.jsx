import Link from 'next/link';
import Image from 'next/image';
import { siteInfo } from '@/lib/content';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
  ];

  const serviceLinks = [
    { name: 'Individual Adults', href: '/sessions/individual-adults' },
    { name: 'Couple Therapy', href: '/sessions/couple-therapy' },
    { name: 'Family Therapy', href: '/sessions/family-therapy' },
    { name: 'Adolescence Therapy', href: '/sessions/adolescence' },
    { name: 'Personal Growth', href: '/sessions/personal-growth' },
    { name: 'Specialized Support', href: '/sessions/specialized-support' },
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
                href={`tel:${siteInfo.phoneRaw || '+917017178277'}`}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 transition-all hover:bg-white/20 hover:-translate-y-0.5 text-white"
                aria-label="Call +91 7017178277"
                title="Call +91 7017178277"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              <a
                href={siteInfo.whatsappLink || "https://wa.me/917017178277"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 transition-all hover:bg-[#25D366] hover:-translate-y-0.5 text-white"
                aria-label="Chat on WhatsApp +91 70171 78277"
                title="Chat on WhatsApp +91 70171 78277"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
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
                <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-secondary mb-1">Phone / WhatsApp</p>
                <a
                  href={`tel:${siteInfo.phoneRaw || '+917017178277'}`}
                  className="inline-flex items-center gap-2 text-[14px] text-secondary/95 hover:text-white transition-colors duration-200 font-medium group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{siteInfo.phone || '+91 7017178277'}</span>
                </a>
              </div>
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
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-secondary/50">
              © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
            </p>
            <a
              href="https://www.divyanshchandra.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-secondary/30 hover:text-secondary/50 transition-colors duration-200"
            >
              Website crafted by Divyansh Chandra
            </a>
          </div>
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
