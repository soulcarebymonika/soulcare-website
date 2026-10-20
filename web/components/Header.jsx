"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteInfo } from '@/lib/content';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Divide links for left and right of the logo
  const leftLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SESSIONS', href: '/sessions' },
  ];

  const rightLinks = [
    { name: 'APPROACH', href: '/how-it-works' },
    { name: 'BLOGS', href: '/blog' },
    { name: 'CONTACT', href: '/book-a-session' },
  ];

  const mobileLinks = [...leftLinks, ...rightLinks];

  // Extract name parts for the logo to match the visual style
  const mainTitle = "SOULCARE";
  const subTitle = "BY MONIKA ARORA";

  const headerBgClass = isHome
    ? (isScrolled
        ? 'fixed top-0 shadow-sm backdrop-blur-sm bg-navy'
        : 'absolute top-0 bg-transparent')
    : 'sticky top-0 shadow-sm bg-navy';
  const textColorClass = isHome && !isScrolled ? 'text-text' : 'text-secondary';

  return (
    <header className={`w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className={`p-3 min-w-[48px] min-h-[48px] flex items-center justify-center ${textColorClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Left Nav */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 flex-1 justify-end pr-8 lg:pr-16 items-center">
            {leftLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${textColorClass} hover:opacity-70 font-medium tracking-widest text-[10px] lg:text-xs transition-opacity whitespace-nowrap`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex flex-col items-center flex-shrink-0 mx-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-full bg-white shadow-sm transition-transform duration-500 ease-out group-hover:scale-105">
                <Image 
                  src="/images/logo_soulcare.webp" 
                  alt="Soulcare Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl lg:text-2xl font-heading font-medium tracking-wide transition-opacity duration-300 group-hover:opacity-80 ${textColorClass}`}>
                  {mainTitle}
                </span>
                <span className={`text-[9px] lg:text-[10px] font-body font-semibold tracking-[0.2em] lg:tracking-[0.25em] mt-1 uppercase ${textColorClass}`}>
                  {subTitle}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 flex-1 pl-8 lg:pl-16">
            {rightLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${textColorClass} hover:opacity-70 font-medium tracking-widest text-[10px] lg:text-xs transition-opacity whitespace-nowrap`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Spacer for mobile balance */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t absolute w-full shadow-lg bg-navy border-secondary/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {mobileLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-3 py-3 text-secondary hover:bg-white/10 rounded-lg font-medium tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${siteInfo.phoneRaw || '+917017178277'}`}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-secondary bg-white/10 hover:bg-white/15 text-sm font-medium tracking-wider"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{siteInfo.phone || '+91 7017178277'}</span>
              </a>
              <a
                href={siteInfo.whatsappLink || "https://wa.me/917017178277"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-white bg-[#25D366] hover:bg-[#20ba5a] text-sm font-medium tracking-wider transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
