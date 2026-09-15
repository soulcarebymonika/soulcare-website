"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CategoryCard({ title, description, image, index }) {
  return (
    <div
      className="category-card group flex-shrink-0 w-full bg-[#FBFAF7] rounded-2xl flex flex-col
      border border-[#3E4A3D]/[0.06] shadow-[0_2px_12px_rgba(62,74,61,0.06)]
      transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(62,74,61,0.1)] overflow-hidden h-full"
    >
      {image && (
        <div className="relative overflow-hidden w-full m-0 aspect-[16/10]">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105 saturate-85 brightness-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#3E4A3D]/25 pointer-events-none"></div>
        </div>
      )}
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
        <div>
          <span className="block text-[0.7rem] font-serif text-[#8A9BA8] tracking-[0.1em] mb-2 uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-[#3E4A3D] leading-snug mb-3 text-xl">
            {title}
          </h3>
          <p className="text-[#545D52] text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CategoryCarousel({ items }) {
  if (!items || items.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(null);
  const autoPlayTimer = useRef(null);

  // Determine how many cards are visible based on screen size
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCards);

  // Helper to safely set index and clamp/loop it
  const goToIndex = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Set up auto-play with manual pause/resume functionality
  const startAutoPlay = useCallback(() => {
    clearTimeout(autoPlayTimer.current);
    autoPlayTimer.current = setTimeout(() => {
      nextSlide();
    }, 4500); // Shift every 4.5 seconds
  }, [nextSlide]);

  useEffect(() => {
    startAutoPlay();
    return () => clearTimeout(autoPlayTimer.current);
  }, [currentIndex, startAutoPlay]);

  // Manual navigation helper that pauses auto-play temporarily
  const handleManualNav = (action) => {
    clearTimeout(autoPlayTimer.current);
    action();
    // Re-trigger auto-play after interaction
    autoPlayTimer.current = setTimeout(startAutoPlay, 8000);
  };

  // Touch Swipe Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping || touchStartX.current === null) return;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleManualNav(nextSlide);
      } else {
        handleManualNav(prevSlide);
      }
    }
    touchStartX.current = null;
    setIsSwiping(false);
  };

  // Adjust current index if screen resize renders it out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12 group select-none">
      
      {/* Carousel Container */}
      <div 
        className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              style={{ width: `${100 / visibleCards}%` }}
              className="flex-shrink-0 px-3"
            >
              <CategoryCard index={idx} {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={() => handleManualNav(prevSlide)}
            aria-label="Previous services"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full bg-white shadow-md border border-[#3E4A3D]/10
              flex items-center justify-center text-[#3E4A3D]
              hover:bg-[#3E4A3D] hover:text-white hover:border-[#3E4A3D]
              transition-all duration-300 md:opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => handleManualNav(nextSlide)}
            aria-label="Next services"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full bg-white shadow-md border border-[#3E4A3D]/10
              flex items-center justify-center text-[#3E4A3D]
              hover:bg-[#3E4A3D] hover:text-white hover:border-[#3E4A3D]
              transition-all duration-300 md:opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Slide Indicators / Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualNav(() => goToIndex(idx))}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx
                  ? "w-6 bg-[#3E4A3D]"
                  : "w-1.5 bg-[#B8B8AC]/40 hover:bg-[#B8B8AC]/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
