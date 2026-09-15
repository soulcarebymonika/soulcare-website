import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'My Approach | Soulcare by Monika Arora',
  description: 'A relational & whole-person approach to emotional well-being and therapy.',
};

export default function HowItWorks() {
  return (
    <div className="bg-[#FAF9F6] font-body text-[#545D52]">
      
      {/* SECTION 1: MY APPROACH */}
      <section className="relative pt-16 pb-16 px-6 md:px-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        {/* Background Blob (decorative) */}
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#EFEFEF] rounded-full mix-blend-multiply opacity-50 blur-3xl z-0" aria-hidden="true" />
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="aspect-[4/5] max-w-md mx-auto relative shadow-sm overflow-hidden rounded-md">
            <Image 
              src="/images/approach_hero.jpg" 
              alt="Calming nature landscape representing the therapeutic approach" 
              fill
              className="object-cover" 
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 relative z-10">
          <h1 className="text-3xl md:text-4xl font-heading text-[#3E4A3D] mb-6">
            My Approach
          </h1>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-6">
            A Relational & Whole-Person Approach
          </h3>
          
          <div className="space-y-5">
            <p className="leading-relaxed text-base md:text-lg">
              I believe emotional well-being is not only about managing thoughts and emotions. It is also about understanding yourself, finding inner balance, and developing a deeper sense of connection, meaning, and purpose.
            </p>
            <p className="leading-relaxed text-base md:text-lg">
              My approach is warm, collaborative, and tailored to the individual. Therapy is a space where you can explore what you are experiencing, understand your patterns, and gradually develop healthier ways of responding to life.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: GUIDED THERAPY */}
      <section className="py-20 px-6 relative text-center bg-[#FDFCFB]">
        {/* Decorative Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-[#F2E8E4] rounded-full blur-2xl z-0" aria-hidden="true" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#6A80A6] mb-4">
            Support, Direction & Self-Discovery
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading text-[#3E4A3D] leading-[1.3] mb-8">
            Guided Therapy
          </h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#545D52]">
            <p className="font-bold text-[#3E4A3D]">
              Therapy does not always mean figuring everything out on your own.
            </p>
            <p>
              I provide gentle guidance throughout the therapeutic process, helping you understand what you are experiencing, identify patterns, and work towards meaningful changes at a pace that feels comfortable for you.
            </p>
            <p>
              Together, we explore what may be contributing to your current struggles and identify practical ways to build greater emotional awareness, confidence, and resilience.
            </p>
            <p className="italic text-[#6A80A6]">
              The goal is not to tell you what to do, but to help you develop the understanding and tools to make choices that feel right for you.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CBT */}
      <section className="py-20 px-6 md:px-8 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
            Understanding the Connection Between Thoughts, Feelings & Behaviours
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading text-[#3E4A3D] mb-8">
            Cognitive Behavioural Therapy
          </h2>
          
          <div className="space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Cognitive Behavioural Therapy (CBT) can be helpful when unhelpful thought patterns, behaviours, or emotional responses begin to affect everyday life.
            </p>
            <p>
              Through CBT-informed work, we can explore the connection between your thoughts, emotions, and behaviours and identify patterns that may be keeping you stuck.
            </p>
            <p>
              The focus is on developing greater awareness and learning practical strategies to respond to difficult situations in healthier and more balanced ways.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square max-w-md mx-auto relative overflow-hidden bg-[#EFEFEF] rounded-md shadow-sm">
            <Image 
              src="/images/cbt_concept.jpg" 
              alt="Therapist actively listening during an individual counseling session" 
              fill
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: SPIRITUAL WELL-BEING (FULL BLEED) */}
      <section className="relative py-24 px-6 overflow-hidden my-12">
        <div className="absolute inset-0 bg-[#EFEFEF]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/images/colorful-sky-sunset-lake.jpg"
            aria-label="Abstract calm background video"
            className="w-full h-full object-cover mix-blend-multiply opacity-50"
          >
            <source src="/videos/whole-person-bg.mp4" type="video/mp4" />
            <track kind="captions" src="data:text/vtt," label="No captions" default />
          </video>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto bg-[#FAF9F6]/95 backdrop-blur-sm p-10 md:p-14 text-center shadow-lg rounded-xl">
          {/* Decorative Icon */}
          <div className="w-10 h-10 mx-auto mb-8 flex flex-col gap-1.5 justify-center items-center">
            <div className="w-8 h-1.5 bg-[#6A80A6] rounded-full" />
            <div className="w-8 h-1.5 bg-[#3E4A3D] rounded-full" />
            <div className="w-8 h-1.5 bg-[#D4A373] rounded-full" />
          </div>
          
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4">
            Making Space for Inner Peace & Meaning
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading text-[#3E4A3D] mb-8">
            Spiritual Well-Being
          </h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#545D52] max-w-2xl mx-auto text-left md:text-center">
            <p>
              I believe that emotional well-being is not only about managing thoughts and emotions; for many people, it is also about finding inner peace, meaning, purpose, and connection.
            </p>
            <p>
              Spirituality can be a deeply personal experience. It may come through faith, prayer, meditation, gratitude, self-reflection, nature, silence, or simply developing a deeper connection with oneself.
            </p>
            <p>
              In my personal philosophy, spirituality is about finding an inner sense of calm, strength, acceptance, and hope, especially during challenging phases of life.
            </p>
            <p className="italic font-medium">
              I respect every individual's beliefs and spiritual path. I do not impose any particular belief system; instead, when appropriate and comfortable for the individual, spirituality can be acknowledged as one of the personal resources that may support emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINDING YOUR INNER GROUND */}
      <section className="py-20 px-6 relative text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#D4A373] mb-4">
            Pause. Reflect. Reconnect. Grow.
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading text-[#3E4A3D] leading-[1.3] mb-8">
            Finding Your Inner Ground
          </h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#545D52]">
            <p>
              Life can sometimes leave us feeling emotionally overwhelmed, disconnected, or uncertain about our direction. In such moments, reconnecting with yourself can become an important part of healing.
            </p>
            <p>
              For me, SoulCare represents this connection between self-awareness, emotional well-being, and inner balance.
            </p>
            <p className="font-bold text-[#6A80A6] text-xl md:text-2xl mt-8">
              Sometimes healing begins when we become quiet enough to listen to what is happening within us.
            </p>
            <p className="font-heading text-2xl tracking-widest text-[#3E4A3D] mt-8 uppercase">
              Pause. Reflect. Reconnect. Grow.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: GETTING STARTED */}
      <section className="relative w-full mt-12">
        {/* Split Backgrounds */}
        <div className="absolute inset-0 flex flex-col md:flex-row z-0">
          <div className="w-full md:w-1/2 bg-[#FAF9F6]"></div>
          <div className="w-full md:w-1/2 bg-[#F2F4F6]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-stretch">
          
          {/* Left: Text */}
          <div className="w-full md:w-1/2 py-16 px-6 md:pr-8 md:pl-8 lg:pl-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-heading text-[#6A80A6] mb-10">
              Getting Started
            </h2>

            <div className="mb-10">
              <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#3E4A3D] mb-3">
                Initial Consultation
              </h4>
              <p className="text-base md:text-lg leading-relaxed text-[#6A80A6] max-w-sm">
                We'll start with a complimentary 15-minute consultation call. It's a chance to see if we're a good fit and for you to ask questions.
              </p>
            </div>


            <div className="mb-12">
              <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#3E4A3D] mb-3">
                Flexible Scheduling
              </h4>
              <p className="text-base md:text-lg leading-relaxed text-[#6A80A6] max-w-sm">
                I offer both virtual and in-person sessions.
              </p>
            </div>

            <div>
              <Link 
                href="/book-a-session"
                className="inline-block px-10 py-4 bg-[#6A80A6] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#3E4A3D] rounded-md shadow-sm hover:shadow-md"
              >
                Book a Session
              </Link>
            </div>
          </div>

          {/* Right: Image Frame */}
          <div className="w-full md:w-1/2 py-16 px-6 md:px-8 flex justify-center items-center">
            <div className="relative max-w-[320px] w-full">
              {/* Background offset frame */}
              <div className="absolute top-6 left-6 w-full h-full border border-[#6A80A6]/30 z-0 rounded-md" />
              <div className="aspect-[3/4] relative z-10 bg-[#EFEFEF] overflow-hidden shadow-lg rounded-md">
                <Image 
                  src="/images/monika_portrait_new.jpg" 
                  alt="Monika Arora, Licensed Clinical Psychologist portrait" 
                  fill
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
