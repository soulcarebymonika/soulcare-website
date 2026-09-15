import Link from "next/link";
import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata = {
  title: 'Counseling Services | Individual, Couple & Family Therapy',
  description: 'Explore online and in-person counseling services for adults, adolescents, couples, and families. Confidential support from psychologist Monika Arora.',
};

import { User, Users, GraduationCap, Leaf, Heart, ArrowRight } from "lucide-react";

const sessionCategories = [
  {
    id: "01",
    title: "Individual Counselling",
    subtitle: "FOR A HEALTHIER, HAPPIER YOU",
    description: "Personalised support to help you understand yourself better, manage challenges and improve your mental well-being.",
    icon: User,
    items: [
      "Adult Counselling", "Panic Attacks", "Anxiety", "Social Anxiety",
      "Depression", "Anger Management", "Phobias", "Grief & Loss",
      "PTSD & Trauma", "Sleep Disorders", "Stress & Burnout", "OCD"
    ],
    link: "/sessions/individual-adults"
  },
  {
    id: "02",
    title: "Relationships & Family",
    subtitle: "STRONGER CONNECTIONS",
    description: "Support for couples and families to improve communication, resolve conflicts and build healthier relationships.",
    icon: Users,
    items: [
      "Couples Counselling", "Family Counselling", "Parenting", "Divorce & Separation"
    ],
    link: "/sessions/couple-therapy"
  },
  {
    id: "03",
    title: "Children & Students",
    subtitle: "SUPPORT AT EVERY STAGE",
    description: "Guidance for children, teens and students to navigate academic, emotional and social challenges.",
    icon: GraduationCap,
    items: [
      "Children & Teen Counselling", "Student & Faculty Counselling"
    ],
    link: "/sessions/adolescence"
  },
  {
    id: "04",
    title: "Personal Growth",
    subtitle: "DISCOVER A STRONGER YOU",
    description: "Develop self-awareness, build confidence and create a more meaningful and fulfilling life.",
    icon: Leaf,
    items: [
      "Psychosynthesis Life Coaching", "Emotional Intelligence",
      "Life Coaching", "Guided Meditation",
      "Personality Development", "Self-Esteem & Confidence"
    ],
    link: "/sessions"
  },
  {
    id: "05",
    title: "Specialized Support",
    subtitle: "TARGETED CARE FOR COMPLEX CHALLENGES",
    description: "Specialized approaches to help you heal from trauma, manage specific conditions and build lasting resilience.",
    icon: Heart,
    items: [
      "EMDR & Trauma Support", "Addiction Support", "Group Therapy"
    ],
    link: "/sessions"
  }
];

export default function Services() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Preload critical LCP images */}
      <link rel="preload" href="/images/about-split-poster.webp" as="image" fetchPriority="high" />
      
      {/* ─── HOW I CAN HELP ────────────────────────────── */}
      <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Video Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full aspect-[3/4] max-w-[400px] overflow-hidden shadow-[0_20px_50px_rgba(62,74,61,0.15)] bg-[#EFEFEF]">
              <video 
                autoPlay
                loop
                muted
                playsInline
                poster="/images/about-split-poster.webp"
                className="absolute inset-0 w-full h-full object-cover" 
              >
                <source src="/videos/about-split-bg.mp4" type="video/mp4" />
                <track kind="captions" src="data:text/vtt," label="No captions" default />
              </video>
            </div>
          </div>
          
          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="max-w-lg w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#3E4A3D] mb-4 leading-tight">
                How I Can Help
              </h2>
              <p className="text-lg md:text-xl text-[#545D52] font-serif mb-6">
                You can start with what feels most important to you.
              </p>
              <div className="w-12 h-px bg-[#3E4A3D]/30 mb-8"></div>
              <p className="text-[#545D52] leading-relaxed text-base md:text-lg">
                People come to counselling for different reasons. You may be feeling overwhelmed, going through a difficult time, struggling in a relationship, or trying to understand yourself better. We can start with whatever has been weighing on you.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* ─── CATEGORIES SECTION ────────────────────────────── */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-[#EFE6D6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C86D39]/40"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C86D39]">
                Support for a meaningful life
              </span>
              <div className="h-px w-12 bg-[#C86D39]/40"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#3E4A3D] mb-6">
              Areas of Focus
            </h2>
            <p className="text-base md:text-lg text-[#545D52] max-w-2xl mx-auto">
              Explore the areas where I offer support. Each service is designed to help you navigate challenges, build resilience and move towards a more balanced and fulfilling life.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {sessionCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.id} 
                  className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#FAF9F6] rounded-2xl p-8 shadow-sm border border-[#EFE6D6] hover:shadow-md transition-shadow relative overflow-hidden flex flex-col"
                >


                  {/* Top Row: Icon & Number */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#3E4A3D]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-heading text-[#C86D39] opacity-70">
                      {category.id}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-heading font-semibold text-[#3E4A3D] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#545D52]/70 mb-4">
                    {category.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#545D52] leading-relaxed mb-8">
                    {category.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="mb-10 flex-grow">
                    <ul className={`grid gap-y-3 gap-x-2 ${category.items.length > 5 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-xs sm:text-sm text-[#545D52]">
                          <span className="w-2 h-2 rounded-full bg-[#EFE6D6] mr-2.5 mt-1.5 flex-shrink-0"></span>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-auto">
                    <Link 
                      href={category.link}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-xs font-bold tracking-[0.1em] uppercase text-[#3E4A3D] border border-[#EFE6D6] hover:bg-[#EFE6D6] transition-colors"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
