import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import DepthCarousel from "@/components/DepthCarousel";

const aboutFaqs = [
  {
    question: "What qualifications does Monika Arora hold?",
    answer: "I hold an academic background in Psychology, Guidance & Counselling, and Child Guidance & Counselling."
  },
  {
    question: "What is your experience in counselling?",
    answer: "Since starting Soulcare in May 2025, I have supported over 100 clients. Prior to this, I gained valuable experience working in educational settings like MKP College and interning at rehabilitation centres such as Maanavta."
  },
  {
    question: "What therapeutic approaches do you use?",
    answer: "I primarily use Cognitive Behaviour Therapy (CBT) and a Psychodynamic-Informed Approach, always tailoring my methods to create a safe, non-judgmental space for each individual."
  },
  {
    question: "Who do you typically work with?",
    answer: "I work with adolescents and adults navigating a wide range of concerns including stress, anxiety, relationship and family issues, academic or career challenges, and life transitions."
  },
  {
    question: "Do I need to have a major psychological problem to seek counselling?",
    answer: "Not at all. Life can simply feel overwhelming at times. Counselling is a valuable space for anyone who wants to slow down, understand themselves better, and talk freely without judgment."
  }
];

export const metadata = {
  title: 'About Monika Arora | Counselling Psychologist',
  description: 'Meet Monika Arora, a Counselling Psychologist and Guidance Professional offering a warm, supportive space for adolescents and adults through Soulcare.',
};

export default function About() {
  return (
    <div className="bg-[#FAF9F6] font-body text-[#3E4A3D] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Approx 45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <h4 className="text-[#3E4A3D] tracking-[0.2em] text-xs sm:text-sm uppercase font-bold mb-5 md:mb-6">
              ABOUT MONIKA ARORA
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading text-[#3E4A3D] mb-4 md:mb-6 leading-[1.15]">
              Hello, I'm Monika Arora
            </h1>
            <p className="text-xl md:text-2xl text-[#3E4A3D] font-serif mb-6 md:mb-8">
              Counselling Psychologist | Psychological Support | CBT &amp; Psychodynamic-Informed Approach
            </p>
            <p className="text-[#545D52] text-lg md:text-[17px] leading-[1.7] border-l-2 border-[#C86D39] pl-6 py-1 italic max-w-lg">
              "I believe counselling begins with creating a space where you can feel heard, understood and free to be yourself."
            </p>
          </div>
          
          {/* Right Column (Approx 55%) — DepthCarousel */}
          <div className="w-full lg:w-[55%] mt-6 lg:mt-0">
            <div className="w-full aspect-[4/3] md:aspect-[5/4] relative overflow-hidden rounded-2xl">
              <DepthCarousel
                items={[
                  { image: '/images/carousel_counselling_session.jpg', alt: 'Counselling session in a warm therapy room' },
                  { image: '/images/carousel_therapy_room.jpg', alt: 'Inviting counselling space with plants and natural light' },
                  { image: '/images/carousel_peaceful_woman.jpg', alt: 'Woman reflecting peacefully by a window' },
                  { image: '/images/carousel_journal.jpg', alt: 'Mindfulness journal and herbal tea on a wooden desk' },
                  { image: '/images/carousel_nature_walk.jpg', alt: 'Person walking through a sunlit forest path' },
                ]}
                cardWidth={420}
                cardHeight={520}
                radius={16}
                depth={180}
                spread={70}
                tilt={18}
                tiltDirection="right"
                perspective={1200}
                visibleCards={3}
                falloff={0}
                blur={0}
                autoplay
                autoplayDelay={2800}
                loop
                showIndicators={false}
                showControls={false}
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* EDITORIAL STORY SECTION */}
      <section className="px-6 lg:px-12 py-10 md:py-16 bg-white border-t border-[#EFE6D6]">
        <div className="max-w-[1000px] mx-auto">
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading text-[#3E4A3D] mb-8 md:mb-12">
            A Little About Me
          </h2>
          
          <div className="text-[#545D52] text-[16px] md:text-[17px] leading-[1.7] md:leading-[1.8] font-body">
            
            {/* Block 1: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-stretch mb-10 md:mb-16">
              <div className="w-full md:w-1/2 shrink-0 relative min-h-[300px] md:min-h-0">
                <div className="absolute inset-0 rounded-2xl overflow-hidden mt-1">
                  <Image 
                    src="/images/cozy-window.webp" 
                    alt="Warm, inviting space representing emotional wellbeing" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 md:space-y-7 py-2 flex flex-col justify-center">
                <p>
                  I’m Monika Arora, a Counselling Psychologist and Guidance Professional with an academic background in Psychology, Guidance & Counselling, and Child Guidance & Counselling. For me, counselling is about creating a safe, non-judgmental space to help individuals understand their emotions, thoughts, and relationships.
                </p>
                <p>
                  My journey has been shaped by both academic learning and real-world experience, which helped me develop a deeper understanding of human behaviour, emotional wellbeing, and the challenges people face at different stages of life.
                </p>
                <p>
                  During my time in educational settings, including MKP College, I was involved in student support, emotional wellbeing initiatives, and awareness campaigns. These experiences reinforced the importance of having someone who listens without judgement when dealing with academic or personal challenges.
                </p>
              </div>
            </div>

            {/* VISUAL BREAK: PULL QUOTE */}
            <div className="my-12 md:my-20 px-4 md:px-10 text-center max-w-[850px] mx-auto border-t border-b border-[#C86D39]/20 py-8 md:py-12">
              <p className="text-2xl md:text-[1.75rem] font-serif text-[#3E4A3D] italic leading-relaxed">
                "Sometimes, people don't need immediate answers. They simply need a safe space to be heard."
              </p>
            </div>

            {/* Block 2: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse gap-8 lg:gap-16 items-stretch mb-10 md:mb-16">
              <div className="w-full md:w-1/2 shrink-0 relative min-h-[300px] md:min-h-0">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-sm z-10">
                  <Image 
                    src="/images/therapy_abstract_1.jpg" 
                    alt="Abstract watercolor representing emotional healing" 
                    fill
                    className="object-cover opacity-90" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 md:space-y-7 py-2 flex flex-col justify-center">
                <p>
                  My exposure at a rehabilitation centre and internship with Maanavta brought me face-to-face with diverse emotional concerns. These experiences taught me that everyone has a unique story and that people don't always need immediate advice—sometimes, they simply need a safe space to reflect and make sense of what they are feeling.
                </p>
                <p>
                  Since starting Soulcare in May 2025, I’ve had the opportunity to support more than 100 clients. I work with adolescents and adults navigating stress, anxiety, emotional difficulties, relationship and family concerns, academic or career challenges, life transitions, and addiction-related concerns.
                </p>
                <p>
                  You do not need to be experiencing a major psychological problem to seek counselling; life can simply feel overwhelming at times. I created Soulcare to make this process approachable, private, and meaningful—giving you the space to slow down and understand yourself.
                </p>
              </div>
            </div>
            
            {/* LARGE PERSONAL QUOTE */}
            <div className="mt-16 md:mt-24 mb-4 md:mb-8 text-center max-w-[850px] mx-auto">
              <h3 className="text-3xl md:text-[2.5rem] font-heading font-medium italic text-[#3E4A3D] leading-tight mb-4">
                "Sometimes, change begins with understanding."
              </h3>
              <p className="text-[#545D52] text-xs md:text-sm tracking-[0.1em] uppercase font-bold">
                Understanding. Awareness. Acceptance. And, gradually, change.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection faqs={aboutFaqs} title="Frequently Asked Questions About My Practice" />

      {/* FINAL CLOSING & CTA */}
      <section className="bg-[#FAF9F6] py-12 md:py-16 text-center border-t border-[#EFE6D6]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading text-[#3E4A3D] mb-6 leading-[1.2]">
            If something has been weighing on you, you don't have to carry it alone.
          </h2>
          <p className="text-[#545D52] text-[16px] md:text-[17px] mb-10 font-body max-w-2xl leading-[1.7]">
            Whenever you feel ready, Soulcare is here to give you a space to pause, talk and be heard.
          </p>
          <Link 
            href="/book-a-session" 
            className="inline-flex items-center justify-center bg-[#3E4A3D] text-[#FAF9F6] hover:bg-[#2A3329] px-10 py-4 rounded-full font-bold tracking-widest uppercase text-sm transition-colors"
          >
            Book a Counselling Session
          </Link>
        </div>
      </section>

    </div>
  );
}
