"use client";

import { useState } from "react";

export default function FAQSection({ faqs, title = "Frequently Asked Questions", bgClass = "bg-[#FAF9F6]" }) {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={`py-12 md:py-16 px-6 ${bgClass}`}>
      {/* JSON-LD Schema for AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 text-accent">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl leading-tight text-navy mb-4">
            {title}
          </h2>
        </div>

        <div className="w-full divide-y divide-[#CBA378]/20">
          {faqs.map((item, idx) => {
            const isOpen = activeId === idx;
            return (
              <div key={idx} className="group">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-base md:text-[17px] font-semibold transition-colors duration-200 ${
                      isOpen ? "text-accent" : "text-navy group-hover:text-accent"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-accent"
                        : "rotate-0 text-navy/40 group-hover:text-accent"
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-[800px] opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[15px] md:text-base text-text leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
