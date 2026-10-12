"use client";

import { useState } from 'react';

export default function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const nameStr = testimonial?.name || testimonial?.author || "Anonymous";
  const initials = nameStr.split(' — ')[0].replace(/\s/g, '').substring(0, 3) || "A";
  const rawText = (testimonial?.quote || testimonial?.review || '').replace('[Placeholder] ', '').trim();
  
  // A review is considered long if it exceeds 190 characters
  const isLong = rawText.length > 190;

  return (
    <div
      className="flex flex-col justify-between p-6 md:p-7 w-full h-full min-h-[230px] bg-white shadow-sm border border-gray-100 rounded-sm transition-all duration-300 hover:shadow-md"
    >
      <div>
        {/* Quote mark & star rating */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-heading text-4xl leading-none text-primary select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          {testimonial?.rating && (
            <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${testimonial.rating} stars`}>
              {[...Array(Math.min(5, Math.max(1, testimonial.rating)))].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}
        </div>

        {/* Review body text with robust line clamp */}
        <p
          className="font-heading text-[16px] md:text-[17px] leading-relaxed text-text"
          style={
            !expanded && isLong
              ? {
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }
              : {}
          }
        >
          {rawText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-[11px] font-bold text-accent uppercase tracking-wider mt-2.5 hover:underline focus:outline-none cursor-pointer"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Author footer */}
      <div className="flex items-center gap-3 pt-4 mt-5 border-t border-gray-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-navy text-white shadow-xs"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-navy truncate">
            {nameStr}
          </p>
          <p className="text-[10px] text-gray-500 font-medium">
            {testimonial?.meta || "Verified Client"}
          </p>
        </div>
      </div>
    </div>
  );
}
