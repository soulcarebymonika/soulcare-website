import Link from "next/link";
import { categoryServices } from "@/lib/content";
import CategoryCarousel from "@/components/CategoryCarousel";
import FAQSection from "@/components/FAQSection";

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
  },
  "personal-growth": {
    title: "Discovering a stronger, more authentic you",
    description: "Personal growth is an ongoing journey of self-discovery, skill-building, and profound internal shifts. Let's work together to help you build confidence, refine your emotional intelligence, and lead a more intentional life.",
    metaTitle: "Personal Growth"
  },
  "specialized-support": {
    title: "Targeted care for complex emotional challenges",
    description: "Some experiences require specialized therapeutic approaches. Whether you are healing from deep-rooted trauma or navigating addiction, this is a safe, non-judgmental space to build lasting resilience.",
    metaTitle: "Specialized Support"
  }
};

const categoryFaqs = {
  "adolescence": [
    { question: "Is therapy confidential for teenagers?", answer: "Yes, therapy is a safe and confidential space. While parents are involved in the overall process, the specific details discussed remain private unless there is a risk of harm." },
    { question: "How can counselling help my teenager?", answer: "It provides a neutral space for them to process complex emotions, navigate peer relationships, manage academic pressure, and build a stronger sense of self." },
    { question: "Do parents participate in the sessions?", answer: "Therapy is primarily for the adolescent, but occasional check-ins or joint sessions with parents can be arranged if it supports the therapeutic goals." },
    { question: "What if my teenager doesn't want to talk?", answer: "This is common. I use a paced and gentle approach to build trust over time, ensuring they feel safe and not pressured." },
    { question: "How long does adolescent therapy take?", answer: "The duration varies depending on the individual's needs. We regularly review progress to ensure the sessions remain helpful." }
  ],
  "individual-adults": [
    { question: "What should I expect in the first session?", answer: "The first session is about getting to know you, understanding your current challenges, and discussing how we might work together." },
    { question: "How often should I attend therapy?", answer: "Most clients begin with weekly sessions to build momentum, and we may space them out as you start feeling better." },
    { question: "Do I need a specific diagnosis to start?", answer: "No, you don't need a formal diagnosis. Many seek therapy to manage stress, improve relationships, or navigate life transitions." },
    { question: "How long does individual therapy last?", answer: "It can be short-term for specific issues (6-12 sessions) or longer-term for deeper exploration and personal growth." },
    { question: "Can we switch to a different therapeutic approach if needed?", answer: "Yes, my approach is integrative. We can adjust our methods based on what feels most effective for you." }
  ],
  "couple-therapy": [
    { question: "Do both partners need to attend the first session?", answer: "Yes, for couple therapy, it is highly recommended that both partners attend the initial consultation." },
    { question: "What if one partner is hesitant to come?", answer: "It's normal for one partner to be hesitant. We can discuss these concerns openly in the first session to ensure both feel heard and respected." },
    { question: "Can we have individual sessions alongside couple therapy?", answer: "Occasional individual sessions may be helpful, but the primary focus remains on the relationship dynamics." },
    { question: "Is couple therapy only for married couples?", answer: "No, it is for any partners in a committed relationship seeking to improve communication and connection." },
    { question: "Do you take sides during conflict resolution?", answer: "My role is to be a neutral facilitator, helping both of you understand each other's perspectives without taking sides." }
  ],
  "family-therapy": [
    { question: "Who should attend family therapy sessions?", answer: "We usually start with the family members directly involved in the current conflict or dynamic, which we can determine during the consultation." },
    { question: "How is family therapy different from individual therapy?", answer: "Family therapy focuses on the interactions, communication patterns, and dynamics between family members rather than just individual struggles." },
    { question: "Can family therapy help with adult children and their parents?", answer: "Yes, it is very effective for addressing generational gaps, resolving long-standing conflicts, and establishing healthier boundaries." },
    { question: "What if the sessions become too heated?", answer: "I provide a structured and safe environment to ensure that conflicts are managed constructively and everyone has a chance to speak." },
    { question: "How many sessions are typically required?", answer: "Family dynamics can take time to shift. We usually plan for a minimum of 6-8 sessions and evaluate from there." }
  ],
  "personal-growth": [
    { question: "Do I need to have a 'problem' to seek life coaching?", answer: "Not at all. Personal growth focuses on developing your potential, building confidence, and finding clarity, rather than fixing a crisis." },
    { question: "What is Psychosynthesis?", answer: "Psychosynthesis is an approach that integrates the emotional, intellectual, and physical aspects of yourself to foster holistic personal development." },
    { question: "Can emotional intelligence be learned?", answer: "Yes, emotional intelligence is a skill that can be developed through guided self-awareness, practice, and intentional reflection." },
    { question: "How does guided meditation help with personal growth?", answer: "It provides a tool to quiet a busy mind, reduce stress, and create space for deeper self-reflection and emotional regulation." },
    { question: "How long does a personal growth journey take?", answer: "It is an ongoing, individualized process. We set specific goals and pace the sessions according to your unique timeline and needs." }
  ],
  "specialized-support": [
    { question: "What is EMDR?", answer: "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy designed to alleviate the distress associated with traumatic memories." },
    { question: "Is trauma therapy overwhelming?", answer: "We pace the therapy very carefully to ensure you feel safe and grounded. We only process trauma when you are ready." },
    { question: "How does addiction support work in a counselling setting?", answer: "It involves understanding the root causes of the dependency, identifying triggers, and developing healthier coping mechanisms in a non-judgmental space." },
    { question: "What are the benefits of group therapy?", answer: "Group therapy offers a unique opportunity to connect with others facing similar challenges, reducing isolation and fostering shared learning." },
    { question: "Can specialized support be combined with individual therapy?", answer: "Yes, often specialized support like EMDR is integrated into a broader individual therapy plan." }
  ]
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const baseUrl = "https://soulcarebymonika.com";
  const header = categoryHeaders[category];
  const metaTitle = header?.metaTitle || "Service Category";
  const metaDescription = header?.description || `Explore our specific services for ${metaTitle}.`;
  return {
    title: `${metaTitle} | Soulcare`,
    description: metaDescription,
    alternates: {
      canonical: `${baseUrl}/sessions/${category}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const headerData = categoryHeaders[category];
  const servicesList = categoryServices[category];
  const faqs = categoryFaqs[category];

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

  const baseUrl = "https://soulcarebymonika.com";
  const metaTitle = headerData.metaTitle;
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${baseUrl}/sessions/${category}#webpage`,
        "url": `${baseUrl}/sessions/${category}`,
        "name": `${metaTitle} | Soulcare`,
        "description": headerData.description,
        "about": { "@type": "MedicalTherapy", "name": metaTitle },
        "author": { "@id": `${baseUrl}/#monika` },
        "publisher": { "@id": `${baseUrl}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Sessions", "item": `${baseUrl}/sessions` },
          { "@type": "ListItem", "position": 3, "name": metaTitle, "item": `${baseUrl}/sessions/${category}` }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-12 md:pt-16 pb-20 px-6 md:px-8 lg:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
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
        <div className="relative mt-8 mb-16 border border-[#D1D1D1]/50 rounded-2xl overflow-hidden shadow-sm max-w-4xl mx-auto">
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

        {faqs && <FAQSection faqs={faqs} title={`FAQs About ${headerData.metaTitle}`} />}
      </div>
    </div>
  );
}
