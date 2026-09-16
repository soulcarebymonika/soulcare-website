import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteInfo, about, testimonials } from "@/lib/content";
import TestimonialSlider from '@/components/TestimonialSlider';
import ConcernsAccordion from '@/components/ConcernsAccordion';
import FAQSection from '@/components/FAQSection';

const homeFaqs = [
  {
    question: "What is Cognitive Behaviour Therapy (CBT)?",
    answer: "CBT helps clients identify unhelpful thought patterns and develop healthier emotional and behavioural responses."
  },
  {
    question: "What is a Person-Centred Approach?",
    answer: "It focuses on creating a safe, empathetic and non-judgmental space where clients can explore their emotions and experiences openly."
  },
  {
    question: "How does the Psychodynamic-Informed Approach work?",
    answer: "This approach explores underlying emotional patterns, past experiences, defence mechanisms and relationship dynamics that may influence present difficulties."
  },
  {
    question: "What is Rational Emotive Behaviour Therapy (REBT)?",
    answer: "REBT works with unhelpful or irrational beliefs that contribute to emotional distress and helps in developing more balanced ways of thinking."
  },
  {
    question: "What is Solution-Focused Brief Therapy?",
    answer: "This therapy focuses on strengths, practical solutions and achievable goals to help clients move forward."
  },
  {
    question: "What does Supportive Counselling involve?",
    answer: "It involves providing emotional support, coping strategies and guidance during challenging periods and life transitions."
  },
  {
    question: "How are Mindfulness-Based Techniques used?",
    answer: "These techniques use mindfulness and awareness to support emotional regulation, stress management and greater self-awareness."
  }
];

// Sandy Shores palette (from globals.css)
// --color-primary:    #CBA378  (warm tan)
// --color-secondary:  #EFE6D6  (sandy cream)
// --color-accent:     #C86D39  (burnt orange)
// --color-navy:       #2E4C63  (deep teal)
// --color-text:       #2C2927  (near black)
// --color-text-muted: #B8B8AC  (sage grey)

export const metadata = {
  title: 'Online Counselling in India & Dehradun | Soulcare',
  description:
    'Online counselling in India and in-person counselling in Dehradun with Monika Arora, counselling psychologist. Support available in Hindi and English.',
  openGraph: {
    title: 'Online Counselling in India & Dehradun | Soulcare',
    description:
      'Online counselling in India and in-person counselling in Dehradun with Monika Arora, counselling psychologist.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div>
      {/* Preload critical LCP images */}
      <link rel="preload" href="/images/about-split-poster.webp" as="image" fetchPriority="high" />
      <link rel="preload" href="/images/hero-bg-beach-poster.webp" as="image" fetchPriority="high" />

      {/* ─── 1. HERO ─────────────────────────────────────────────────────────────
           Full-screen video background, editorial serif headline, short tagline,
           single CTA. Vertically centered.                                      */}
      <section
        className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#EFE6D6]"
      >
        {/* Background Image for lazy loading */}
        <div className="absolute inset-0 w-full h-full z-0 select-none">
          <Image
            src="/images/hero-bg-beach-poster.webp"
            alt="Calming beach background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg-beach-poster.webp"
          aria-label="Calming beach background video"
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/videos/hero-bg-beach-compressed.mp4" type="video/mp4" />
          <track kind="captions" src="data:text/vtt," label="No captions" default />
        </video>

        {/* Subtle Dark Blue Overlay (15–20% opacity + 5% stronger) */}
        <div className="absolute inset-0 bg-navy/23 z-10 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full">

          {/* Text with Blue Glass Effect */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center mt-8 sm:mt-12 p-8 md:p-10 rounded-2xl bg-navy/20 backdrop-blur-md border border-white/20 shadow-xl">

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] mb-6 max-w-3xl mx-auto text-[#F7F4EE]">
              A safe place to heal, grow, and feel understood.
            </h1>
            <p className="text-[11px] sm:text-[12.5px] font-semibold tracking-[0.15em] uppercase mb-6 text-[#F7F4EE] max-w-xl sm:max-w-none">
              Online in India &amp; Abroad &middot; In-person in Dehradun &middot; <span className="whitespace-nowrap">Hindi &amp; English</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                href="/book-a-session"
                id="hero-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 bg-accent"
              >
                Book a Session <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
          <div className="w-px h-10 bg-navy opacity-50" />
        </div>
      </section>


      {/* ─── 3. WELCOME / ABOUT SPLIT ────────────────────────────────────────────
           Left: photo, Right: intro text + arrow link. Matches Julia Fletcher's
           editorial two-column "about" strip on the homepage.                 */}
      <section className="py-0 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:gap-6 py-6 px-4">

            {/* Left — video */}
            <div className="w-full md:w-[40%] min-h-[280px] md:min-h-full relative shadow-sm rounded-sm overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/about-split-poster.webp"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="Calming background video"
              >
                <source src="/videos/about-split-bg.mp4" type="video/mp4" />
                <track kind="captions" src="data:text/vtt," label="No captions" default />
              </video>
              <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/60 to-transparent opacity-100">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-secondary">
                  Monika Arora · Counseling Psychologist
                </span>
              </div>
            </div>

            {/* Right — text */}
            <div className="w-full md:flex-1 flex flex-col justify-center px-6 md:px-8 py-6 md:py-8 shadow-sm rounded-sm bg-secondary">
              <span className="font-heading italic text-xl md:text-2xl block mb-2 text-accent">
                Hello
              </span>
              <h2 className="font-heading text-2xl md:text-3xl mb-4 leading-tight text-navy">
                I&rsquo;m Monika. You Don&rsquo;t Have to Hold It All Inside.
              </h2>
              <div className="w-16 h-px mb-6 bg-primary" />
              <div className="space-y-4 text-sm leading-[1.8] max-w-xl text-text">
                <p>
                  I&rsquo;m Monika Arora, a counselling psychologist providing online counselling and in-person sessions in Dehradun. This is a warm, confidential space where you can talk openly, feel heard, and explore whatever has been weighing on you.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="mt-6 pt-5 border-t border-primary/40 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#545D52]">Counselling Psychologist</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#545D52]">Online &amp; In-Person Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#545D52]">Support In India &amp; Abroad</span>
                </div>
              </div>

              <Link
                href="/about"
                id="about-read-more"
                className="mt-6 self-start inline-flex items-center justify-center gap-2 px-6 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5 border text-navy border-navy"
              >
                More About Monika
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ─── NEW SECTION: WHAT'S BEEN ON YOUR MIND ─────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 text-accent">
            WHAT I CAN HELP WITH
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] leading-tight text-navy mb-4">
            What&rsquo;s Been on Your Mind?
          </h2>
          <p className="text-base md:text-[17.5px] text-text max-w-2xl mx-auto leading-relaxed">
            You don&rsquo;t need to know exactly what to call what you&rsquo;re feeling. You can start with whatever has been difficult lately.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

            {/* Left: Image (50% width on desktop) */}
            <div className="w-full lg:w-1/2 shrink-0 min-h-[300px] lg:min-h-auto relative rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/images/cozy-window.webp"
                alt="Cozy window with a warm sunset light view"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Concerns Accordion (50% width on desktop) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              <ConcernsAccordion />
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/sessions"
            id="concerns-cta"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase text-white bg-accent transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
          >
            Explore All Areas I Work With <ArrowRight size={16} />
          </Link>
        </div>
      </section>


      {/* ─── 4. SERVICES — PERSONALIZED APPROACH ────────────────────────────────
           Centered editorial layout: large serif heading, italic pull-quote,
           colour-highlighted body text, botanical corner decor, single CTA.   */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-secondary">
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <div className="text-left max-w-lg mx-auto lg:mx-0">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl leading-[1.15] mb-5 text-navy">
                Counselling That Adapts to You
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 text-text">
                Everyone comes to counselling with different experiences, concerns, and needs. How we work together will depend on what feels helpful for you.
              </p>
              <div className="w-12 h-px mb-6 bg-primary" />

              {/* Three Points */}
              <div className="space-y-5 mb-8">
                <div>
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-1">
                    Understanding What&rsquo;s Going On
                  </h3>
                  <p className="text-sm leading-relaxed text-[#545D52]">
                    Making sense of your thoughts, feelings, and experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-1">
                    Finding What Helps
                  </h3>
                  <p className="text-sm leading-relaxed text-[#545D52]">
                    Exploring ways to cope with difficulties and make things feel more manageable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-1">
                    Moving At Your Own Pace
                  </h3>
                  <p className="text-sm leading-relaxed text-[#545D52]">
                    There is no pressure to have all the answers or rush the process.
                  </p>
                </div>
              </div>

              <div>
                <Link
                  href="/how-it-works"
                  id="services-approach-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5 border text-navy border-navy"
                >
                  About My Approach <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/images/table-top-image.webp"
                alt="Table top counselling setup"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── EXISTING SECTION: SUPPORT FOR EVERY STAGE ──────────────── */}
      <section className="relative w-full bg-[#FAF9F6] flex flex-col justify-start pt-8 md:pt-12 pb-16 px-6 md:px-8 overflow-hidden">
        <div className="w-full mx-auto flex flex-col items-center z-10">

          <div className="text-center mb-8 max-w-2xl flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-[#3E4A3D] leading-[1.15] tracking-tight mb-2">
              Who I Work With
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-[#545D52]">
              Counselling for teenagers, adults, couples, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-7xl mx-auto">

            {/* Card 1: Adolescence */}
            <Link
              href="/sessions/adolescence"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/services_adolescence.webp"
                  alt="Adolescence Therapy"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-1">
                  Adolescents
                </span>
                <h3 className="text-white font-heading text-xl sm:text-2xl font-semibold mb-2">
                  Adolescence
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-[100px] group-hover:translate-y-0 transition-all duration-500 ease-out">
                  Supporting teenagers through emotional turbulence, self-identity discovery, academic stress, and relationships.
                </p>
                <div className="mt-3 flex items-center text-white/90 text-xs font-bold tracking-wider uppercase gap-2 group-hover:text-white transition-colors">
                  Learn More <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Individual Adults */}
            <Link
              href="/sessions/individual-adults"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/services_individual_adults.webp"
                  alt="Individual Adults Therapy"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-1">
                  Individuals
                </span>
                <h3 className="text-white font-heading text-xl sm:text-2xl font-semibold mb-2">
                  Individual Adults
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-[100px] group-hover:translate-y-0 transition-all duration-500 ease-out">
                  One-on-one virtual counseling to address anxiety, depression, trauma recovery, and life transitions.
                </p>
                <div className="mt-3 flex items-center text-white/90 text-xs font-bold tracking-wider uppercase gap-2 group-hover:text-white transition-colors">
                  Learn More <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </Link>

            {/* Card 3: Couple Therapy */}
            <Link
              href="/sessions/couple-therapy"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/services_couple_therapy.webp"
                  alt="Couple Therapy"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-1">
                  Couples
                </span>
                <h3 className="text-white font-heading text-xl sm:text-2xl font-semibold mb-2">
                  Couple Therapy
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-[100px] group-hover:translate-y-0 transition-all duration-500 ease-out">
                  Rebuilding trust, improving connection, and navigating communication issues or infidelity.
                </p>
                <div className="mt-3 flex items-center text-white/90 text-xs font-bold tracking-wider uppercase gap-2 group-hover:text-white transition-colors">
                  Learn More <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </Link>

            {/* Card 4: Family Therapy */}
            <Link
              href="/sessions/family-therapy"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/services_family_therapy.webp"
                  alt="Family Therapy"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-1">
                  Families
                </span>
                <h3 className="text-white font-heading text-xl sm:text-2xl font-semibold mb-2">
                  Family Therapy
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-[100px] group-hover:translate-y-0 transition-all duration-500 ease-out">
                  Supporting blended families, resolving generational conflict, and navigating grief or parenting challenges.
                </p>
                <div className="mt-3 flex items-center text-white/90 text-xs font-bold tracking-wider uppercase gap-2 group-hover:text-white transition-colors">
                  Learn More <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ─── THERAPEUTIC APPROACHES (FAQ) ───────────────────────────────────────── */}
      <FAQSection faqs={homeFaqs} title="Therapeutic Approaches" bgClass="bg-white" />

      {/* ─── 6. CLOSING CTA ──────────────────────────────────────────────────────
           Navy full-bleed section. Headline + CTA. No dead ends.             */}
      <section className="relative py-10 md:py-13 px-6 text-center overflow-hidden bg-navy">
        <div className="relative z-10 max-w-xl mx-auto">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase block mb-2 text-secondary">
            Whenever you feel ready
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 text-secondary">
            You don&rsquo;t have to navigate it alone.
          </h2>
          <p className="text-xs md:text-sm leading-relaxed mb-8 max-w-md mx-auto text-secondary/80">
            You can start wherever you are.
          </p>
          <Link
            href="/book-a-session"
            id="closing-cta"
            className="inline-flex items-center gap-2 px-8 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-md bg-accent text-white"
          >
            Book a Session <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── 7. CLIENT EXPERIENCES ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 text-accent">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl leading-tight text-navy">
              Words Shared With Me
            </h2>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

    </div>
  );
}
