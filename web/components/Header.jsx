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
          </div>
        </div>
      )}
    </header>
  );
}
