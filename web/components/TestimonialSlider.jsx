"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSlider({ testimonials }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const touchStartX = useRef(null);

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
  const totalPages = Math.ceil(testimonials.length / visibleCards);

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
              className="w-full flex-shrink-0 flex gap-4 px-2 sm:px-4"
            >
              {testimonials
                .slice(pageIdx * visibleCards, pageIdx * visibleCards + visibleCards)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-1 min-w-0"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
            </div>
          ))}
        </div>
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
