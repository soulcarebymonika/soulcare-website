"use client";

import { useState } from "react";

const concerns = [
  {
    id: "anxiety",
    title: "Anxiety & Stress",
    tags: ["Anxiety", "Overwhelm", "Burnout", "Panic", "Constant overthinking"],
  },
  {
    id: "mood",
    title: "Low Mood & Emotions",
    tags: ["Low mood", "Loneliness", "Difficult emotions", "Anger", "Low confidence"],
  },
  {
    id: "relationships",
    title: "Relationships",
    tags: ["Dating", "Breakups", "Communication difficulties", "Couples", "Family conflict"],
  },
  {
    id: "life",
    title: "Life Changes & Difficult Experiences",
    tags: ["Major decisions", "Grief", "Bullying", "Difficult experiences", "Questions about yourself"],
  },
  {
    id: "habits",
    title: "Habits & Wellbeing",
    tags: ["Sleep", "Procrastination", "Body image", "Screen time", "Unhelpful coping patterns"],
  },
];

export default function ConcernsAccordion() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <div className="w-full divide-y divide-[#CBA378]/20">
      {concerns.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div key={item.id} className="group">
            {/* Clickable header row */}
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3
                className={`text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isOpen ? "text-accent" : "text-navy group-hover:text-accent"
                }`}
              >
                {item.title}
              </h3>
              {/* Animated chevron */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                  isOpen ? "rotate-180 text-accent" : "rotate-0 text-navy/40 group-hover:text-accent"
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Collapsible tags row */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-20 opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-0 gap-y-1">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="flex items-center">
                    <span className="text-[14.5px] text-[#4a5247] leading-relaxed">{tag}</span>
                    {idx < item.tags.length - 1 && (
                      <span className="mx-2 text-primary/60 text-base leading-none select-none" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
