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
            <div className="pt-2">
              <a
                href={`tel:${siteInfo.phoneRaw || '+917017178277'}`}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-secondary bg-white/10 hover:bg-white/15 text-sm font-medium tracking-wider"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{siteInfo.phone || '+91 7017178277'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
