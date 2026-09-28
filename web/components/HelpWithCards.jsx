"use client";

import { useEffect, useRef, useState } from "react";

/* ─── SVG Icons (inline, matching Metta's purple-stroke circle style) ──────*/
const IconAnxiety = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="26" r="14" />
    <path d="M26 22c1-5 12-5 12 2s-8 5-8 10" />
    <circle cx="32" cy="40" r="1.8" fill="currentColor" stroke="none" />
    <path d="M18 52c3-5 8-7 14-7s11 2 14 7" />
  </svg>
);
const IconPhobia = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="24" r="12" />
    <path d="M26 20c0-4 12-5 12 2s-8 6-8 9" />
    <circle cx="32" cy="37" r="1.5" fill="currentColor" stroke="none" />
    <path d="M22 52l3-9h14l3 9" />
    <path d="M19 42c-4 0-6-3-6-6s2-4 5-4" />
    <path d="M45 42c4 0 6-3 6-6s-2-4-5-4" />
  </svg>
);
const IconDepression = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="26" r="14" />
    <path d="M25 32c2-1 4-1 7 0" />
    <circle cx="27" cy="24" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="37" cy="24" r="1.8" fill="currentColor" stroke="none" />
    <path d="M20 52c0-6 5-10 12-10s12 4 12 10" />
  </svg>
);
const IconOcd = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="26" r="13" />
    <path d="M27 22c3-5 10-3 10 3s-6 6-8 10" />
    <circle cx="29" cy="37" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="32" cy="37" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="35" cy="37" r="1.2" fill="currentColor" stroke="none" />
    <path d="M20 52c2-5 7-8 12-8s11 3 12 8" />
  </svg>
);
const IconAdhd = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="24" r="12" />
    <path d="M26 20h4l-2 5h5" />
    <path d="M19 40h26M22 45h20M26 50h12" />
  </svg>
);
const IconPersonality = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="22" cy="22" r="9" />
    <circle cx="42" cy="22" r="9" />
    <path d="M13 46v-6c0-4 3-7 9-7" />
    <path d="M51 46v-6c0-4-3-7-9-7" />
    <path d="M26 34c1 2 3 3 6 3s5-1 6-3" />
    <path d="M32 37v9" />
  </svg>
);
const IconAnger = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="30" r="14" />
    <path d="M25 25l3 3-3 3M39 25l-3 3 3 3" />
    <path d="M25 37c2-2 4-2 7-2s5 0 7 2" />
    <path d="M24 16l-5-5M40 16l5-5M32 14V8" />
  </svg>
);
const IconPain = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="28" r="16" />
    <path d="M32 19v9l5 5" />
    <path d="M20 52c2-4 7-6 12-6s10 2 12 6" />
  </svg>
);
const IconTeenager = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="22" r="11" />
    <path d="M21 52V40c0-4 4-7 11-7s11 3 11 7v12" />
    <path d="M26 18c0-3 4-5 8-3" />
    <path d="M29 52l3-8 3 8" />
  </svg>
);
const IconCouples = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="20" cy="22" r="9" />
    <circle cx="44" cy="22" r="9" />
    <path d="M11 52v-8c0-4 4-7 9-7" />
    <path d="M53 52v-8c0-4-4-7-9-7" />
    <path d="M28 38c1 2 2 3 4 3s3-1 4-3" />
    <path d="M32 41v9" />
  </svg>
);
const IconTrauma = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="26" r="14" />
    <path d="M32 17v9" />
    <path d="M38 21l-6 5-6-5" />
    <path d="M26 32h12" />
    <path d="M20 52c2-5 7-8 12-8s10 3 12 8" />
  </svg>
);
const IconSleep = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <path d="M34 13a20 20 0 1 0 18 18A20 20 0 0 0 34 13z" />
    <path d="M34 13a14 14 0 0 1 0 20" />
    <path d="M26 24l2-5 2 5M34 20l2-5 2 5" />
  </svg>
);
const IconHypno = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="32" r="20" />
    <circle cx="32" cy="32" r="13" />
    <circle cx="32" cy="32" r="6" />
    <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
  </svg>
);
const IconInnerChild = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="20" r="10" />
    <path d="M22 30c-2 2-4 5-4 9v13h28V39c0-4-2-7-4-9" />
    <path d="M28 52v-9c0-3 1-5 4-5s4 2 4 5v9" />
  </svg>
);
const IconMindfulness = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="32" cy="26" r="12" />
    <path d="M32 14V8M44 18l4-4M48 30h6M44 42l4 4M32 44v6M20 42l-4 4M16 30h-6M20 18l-4-4" />
    <circle cx="32" cy="26" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
  </svg>
);
const IconCareer = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <rect x="10" y="28" width="44" height="26" rx="2" />
    <path d="M22 28V22c0-4 3-6 10-6s10 2 10 6v6" />
    <path d="M10 40h44" />
    <circle cx="32" cy="40" r="3" />
    <path d="M29 52h6" />
  </svg>
);
const IconAddiction = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <path d="M32 10c-12 0-20 9-20 20 0 8 5 14 12 18l8 8 8-8c7-4 12-10 12-18 0-11-8-20-20-20z" />
    <path d="M32 22v10l6 4" />
  </svg>
);
const IconStress = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <circle cx="32" cy="28" r="14" />
    <path d="M24 23c2-5 5-6 8-5s6 2 8 5" />
    <path d="M26 32c1 2 3 3 6 3s5-1 6-3" />
    <path d="M24 14l-5-5M40 14l5-5M32 12V6" />
    <path d="M20 52c2-5 7-8 12-8s10 3 12 8" />
  </svg>
);

/* ─── Card data ─────────────────────────────────────────────────────────────*/
const cards = [
  { id: "anxiety",     label: "Anxiety & Panic Attacks",           Icon: IconAnxiety },
  { id: "phobia",      label: "Phobia Therapy",                     Icon: IconPhobia },
  { id: "depression",  label: "Depression Counselling",             Icon: IconDepression },
  { id: "ocd",         label: "OCD",                                Icon: IconOcd },
  { id: "adhd",        label: "ADHD, ASD & Learning Difficulties",  Icon: IconAdhd },
  { id: "personality", label: "Personality Disorder Therapy",       Icon: IconPersonality },
  { id: "anger",       label: "Anger Management",                   Icon: IconAnger },
  { id: "pain",        label: "Pain Management Therapy",            Icon: IconPain },
  { id: "teenager",    label: "Teenage Counselling",                Icon: IconTeenager },
  { id: "couples",     label: "Couples Counselling",                Icon: IconCouples },
  { id: "trauma",      label: "PTSD & Trauma Healing",              Icon: IconTrauma },
  { id: "sleep",       label: "Insomnia & Sleep Concerns",          Icon: IconSleep },
  { id: "hypno",       label: "Hypnotherapy",                       Icon: IconHypno },
  { id: "innerChild",  label: "Inner Child Healing",                Icon: IconInnerChild },
  { id: "mindful",     label: "Mindfulness & Emotional Regulation", Icon: IconMindfulness },
  { id: "career",      label: "Career Counselling",                 Icon: IconCareer },
  { id: "addiction",   label: "Substance Abuse & Addiction",        Icon: IconAddiction },
  { id: "stress",      label: "Stress & Overwhelm",                 Icon: IconStress },
];

const INITIAL_COUNT = 8;

/* ─── Component ─────────────────────────────────────────────────────────────*/
export default function HelpWithCards() {
  const gridRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  /* Scroll-reveal observer — re-run when expanded changes so new cards animate */
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".hwc-card:not(.hwc-card--visible)");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hwc-card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [expanded]);

  const visibleCards = expanded ? cards : cards.slice(0, INITIAL_COUNT);

  return (
    <>
      <style>{`
        /* Base hidden state */
        .hwc-card {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.55s ease,
            transform 0.55s ease,
            box-shadow 0.3s ease;
        }

        /* Stagger delays (row-by-row, 3 per row) */
        .hwc-card:nth-child(3n+1) { transition-delay: 0.05s; }
        .hwc-card:nth-child(3n+2) { transition-delay: 0.15s; }
        .hwc-card:nth-child(3n+3) { transition-delay: 0.25s; }

        /* Visible state — fade + slide in */
        .hwc-card--visible {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 0.55s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
          transition-delay: 0s !important;
        }

        /* Hover lift */
        .hwc-card--visible:hover {
          transform: translateY(-7px) !important;
          box-shadow: 0 18px 44px rgba(46, 76, 99, 0.14) !important;
        }

        /* Icon circle pulse on hover */
        .hwc-icon-circle {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .hwc-card--visible:hover .hwc-icon-circle {
          background-color: rgba(203, 163, 120, 0.22);
          transform: scale(1.06);
        }

        /* View-more card special hover */
        .hwc-card--more:hover .hwc-icon-circle {
          background-color: rgba(46, 76, 99, 0.12);
          transform: scale(1.06);
        }
      `}</style>

      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        role="list"
        aria-label="Areas Monika can help with"
      >
        {/* First 8 (or all) regular cards */}
        {visibleCards.map(({ id, label, Icon }) => (
          <div
            key={id}
            className="hwc-card group bg-white border border-[#CBA378]/25 shadow-sm py-8 px-5 flex flex-col items-center justify-center gap-4 text-center cursor-default select-none"
            role="listitem"
          >
            <div className="hwc-icon-circle w-[130px] h-[130px] rounded-full flex items-center justify-center bg-[#CBA378]/10 text-[#2E4C63]">
              <Icon />
            </div>
            <p className="text-[12px] sm:text-[13px] font-medium leading-snug text-[#2C2927] group-hover:text-[#2E4C63] transition-colors duration-300">
              {label}
            </p>
          </div>
        ))}

        {/* 9th slot — View More / Show Less card */}
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            className="hwc-card hwc-card--more group bg-white border border-[#CBA378]/25 shadow-sm py-8 px-5 flex flex-col items-center justify-center gap-4 text-center cursor-pointer select-none w-full"
            aria-label="View all areas I can help with"
            role="listitem"
          >
            {/* Grid + Plus icon */}
            <div className="hwc-icon-circle w-[130px] h-[130px] rounded-full flex items-center justify-center bg-[#2E4C63]/8 text-[#2E4C63]">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                <rect x="8"  y="8"  width="18" height="18" rx="3" />
                <rect x="8"  y="38" width="18" height="18" rx="3" />
                <rect x="38" y="38" width="18" height="18" rx="3" />
                <line x1="47" y1="8" x2="47" y2="28" />
                <line x1="37" y1="18" x2="57" y2="18" />
              </svg>
            </div>
            <p className="text-[12px] sm:text-[13px] font-medium leading-snug text-[#2E4C63] group-hover:text-accent transition-colors duration-300">
              View More
            </p>
          </button>
        ) : (
          /* "Show Less" pill button after all cards are visible */
          <div className="col-span-2 sm:col-span-3 flex justify-center mt-2">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase border border-[#2E4C63] text-[#2E4C63] hover:bg-[#2E4C63] hover:text-white transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <polyline points="18 15 12 9 6 15" />
              </svg>
              Show Less
            </button>
          </div>
        )}
      </div>
    </>
  );
}
