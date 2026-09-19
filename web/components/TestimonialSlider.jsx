"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import Link from 'next/link';

export default function TestimonialSlider({ testimonials = [] }) {
  const [allTestimonials, setAllTestimonials] = useState(testimonials);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const touchStartX = useRef(null);

  // Fetch approved live reviews from PHP backend (newest first)
  useEffect(() => {
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;
    if (!adminUrl) return;

    fetch(`${adminUrl}/get_reviews.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data) && data.data.length > 0) {
          const liveReviews = data.data.map((r) => ({
            id: `live-${r.id}`,
            quote: r.review,
            author: r.name,
            meta: "Verified Client",
            rating: parseInt(r.rating, 10),
          }));
          setAllTestimonials([...liveReviews, ...testimonials]);
        }
      })
      .catch(() => {
        // Fallback to initial testimonials if fetch fails
      });
  }, [testimonials]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Total pages based on grouping by visibleCards
  const totalPages = Math.ceil(allTestimonials.length / visibleCards);

  // Reset page on resize if needed
  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [visibleCards, totalPages]);

  const goToPage = (page) => setCurrentPage(page);

  const nextPage = () => setCurrentPage((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  const prevPage = () => setCurrentPage((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));

  // Translate by full page widths
  const translateX = currentPage * visibleCards * (100 / visibleCards);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? nextPage() : prevPage();
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full">
      {/* Slider window */}
      <div
        className="overflow-hidden py-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {/* Group cards into pages */}
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full flex-shrink-0 grid gap-4 px-2 sm:px-4"
              style={{ gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))` }}
            >
              {allTestimonials
                .slice(pageIdx * visibleCards, pageIdx * visibleCards + visibleCards)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-0"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Leave a Review button */}
      <div className="flex justify-center mt-6">
        <Link
          href="/leave-a-review"
          className="inline-flex items-center gap-2 px-8 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-md bg-accent text-white"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
          Leave a Review
        </Link>
      </div>

      {/* Navigation row: prev arrow · dots · next arrow */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
          {/* Prev */}
          <button
            onClick={prevPage}
            aria-label="Previous"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-primary/25 bg-white text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 shadow-sm focus:outline-none flex-shrink-0"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page dots */}
          <div className="hidden sm:flex items-center gap-0">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                className="w-12 h-12 flex items-center justify-center focus:outline-none"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx
                      ? 'w-6 bg-accent'
                      : 'w-2 bg-[#B8B8AC]/40 hover:bg-[#B8B8AC]/70'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextPage}
            aria-label="Next"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-primary/25 bg-white text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 shadow-sm focus:outline-none flex-shrink-0"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
