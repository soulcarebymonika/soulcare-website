import Link from "next/link";
import { categoryServices } from "@/lib/content";
import CategoryCarousel from "@/components/CategoryCarousel";

// Required for static export: tells Next.js which category slugs to pre-render
export function generateStaticParams() {
  return Object.keys(categoryServices).map((category) => ({ category }));
}

const categoryHeaders = {
  "adolescence": {
    title: "Being a teenager can feel like a lot",
    description: "Growing up can bring big emotions, changing friendships, family difficulties, academic pressure, and questions about who you are. Sometimes, it can feel like a lot to carry on your own.",
    metaTitle: "Adolescence"
  },
  "individual-adults": {
    title: "Adulthood comes with its own challenges",
    description: "Whether you are dealing with constant stress, burnout, life transitions, or just feeling stuck, you don't have to navigate it alone. Let's create a paced, confidential space to explore what you're going through.",
    metaTitle: "Individual Adults Therapy"
  },
  "couple-therapy": {
    title: "Every relationship has its difficult phases",
    description: "Whether you are struggling to communicate, rebuilding trust after infidelity, or preparing for marriage, we can work together to break old conflict patterns and find your way back to connection.",
    metaTitle: "Couple Therapy"
  },
  "family-therapy": {
    title: "Family dynamics can be complex and tiring",
    description: "Whether you are navigating parenting challenges, generational gaps, or shared grief and loss, let's build a stronger, more collaborative home environment where everyone feels heard.",
    metaTitle: "Family Therapy"
  }
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const metaTitle = categoryHeaders[category]?.metaTitle || "Service Category";
  return {
    title: `${metaTitle} | Soulcare`,
    description: `Explore our specific services for ${metaTitle}.`
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const headerData = categoryHeaders[category];
  const servicesList = categoryServices[category];

  if (!servicesList || !headerData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6]">
        <h1 className="text-3xl font-heading text-[#3E4A3D] mb-4">Category not found</h1>
        <Link href="/sessions" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity border-b border-black pb-1">
          Back to Sessions
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-12 md:pt-16 pb-20 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 px-4 md:px-12">
          <Link href="/sessions" className="inline-flex items-center text-sm tracking-widest uppercase hover:opacity-70 transition-opacity text-[#545D52]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Sessions
          </Link>
        </div>

        <div className="mb-10 text-center flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-heading text-[#3E4A3D] leading-tight mb-4 max-w-2xl">
            {headerData.title}
          </h1>
          <p className="text-base md:text-[17px] text-[#545D52] max-w-2xl leading-relaxed">
            {headerData.description}
          </p>
        </div>

        <CategoryCarousel items={servicesList} />

        {/* Bottom CTA Banner */}
        <div className="relative mt-8 mb-8 border border-[#D1D1D1]/50 rounded-2xl overflow-hidden shadow-sm max-w-4xl mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/calming-nature-background.mp4" type="video/mp4" />
            <track kind="captions" src="data:text/vtt," label="No captions" default />
          </video>
          
          <div className="relative z-10 p-10 md:p-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-8 leading-tight drop-shadow-md">
              Ready to talk about what you&apos;re going through?
            </h2>
            <Link href="/book-a-session" className="inline-block bg-[#3E4A3D] text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#2A3329] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Book Your First Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
