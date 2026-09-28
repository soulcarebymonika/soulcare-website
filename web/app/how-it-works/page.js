import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

const howItWorksFaqs = [
  {
    question: "What is your general approach to therapy?",
    answer: "I take a relational and whole-person approach. This means we look beyond just managing symptoms and focus on understanding yourself, finding inner balance, and developing a deeper sense of connection and meaning."
  },
  {
    question: "Will you tell me what to do during sessions?",
    answer: "No. Therapy with me is a guided, collaborative process. The goal is not to tell you what to do, but to help you develop the understanding and tools to make choices that feel right for you."
  },
  {
    question: "How does Cognitive Behavioural Therapy (CBT) work?",
    answer: "Through CBT-informed work, we explore the connection between your thoughts, emotions, and behaviours. We identify patterns that may be keeping you stuck and develop practical strategies to respond to difficult situations in healthier ways."
  },
  {
    question: "Do you incorporate spirituality into therapy?",
    answer: "I respect every individual's beliefs. While I do not impose any particular belief system, spirituality can be acknowledged as a personal resource that supports emotional well-being, if it is appropriate and comfortable for you."
  },
  {
    question: "How do I get started?",
    answer: "We begin with a complimentary 15-minute consultation call. This gives us a chance to see if we're a good fit and allows you to ask any questions before committing to a full session."
  },
  {
    question: "Do you offer virtual or in-person sessions?",
    answer: "I offer flexible scheduling with both virtual online sessions and in-person sessions in Dehradun."
  }
];

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

      {/* ── TREATMENT METHODS ────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-[#6A80A6] mb-3">
              How I Work With You
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#3E4A3D] leading-tight">
              Treatment Methods
            </h2>
            <div className="w-12 h-px mx-auto mt-5 bg-[#D4A373]" />
          </div>

          {/* Methods — alternating layout */}
          <div className="space-y-24">

            {/* 1. CBT — text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Understanding the Connection Between Thoughts, Feelings &amp; Behaviours
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Cognitive Behavioural Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Cognitive Behavioural Therapy (CBT) can be helpful when unhelpful thought patterns, behaviours, or emotional responses begin to affect everyday life.</p>
                  <p>Through CBT-informed work, we can explore the connection between your thoughts, emotions, and behaviours and identify patterns that may be keeping you stuck.</p>
                  <p>The focus is on developing greater awareness and learning practical strategies to respond to difficult situations in healthier and more balanced ways.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_cbt.jpg" alt="Cognitive Behavioural Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 2. REBT — image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Challenging Unhelpful Beliefs &amp; Building Emotional Resilience
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Rational Emotive Behaviour Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Rational Emotive Behaviour Therapy (REBT) focuses on identifying and challenging irrational or unhelpful beliefs that contribute to emotional distress and difficult behaviours.</p>
                  <p>Through REBT-informed work, we examine the beliefs and interpretations that underlie your emotional responses and work toward developing more balanced, rational ways of thinking.</p>
                  <p>The aim is to reduce unnecessary emotional suffering and to build greater resilience in the face of life&apos;s inevitable challenges.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_rebt.jpg" alt="Rational Emotive Behaviour Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 3. ACT — text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Embracing What Is &amp; Moving Toward What Matters
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Acceptance &amp; Commitment Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Acceptance and Commitment Therapy (ACT) helps you develop a different relationship with difficult thoughts and emotions — one of openness and acceptance rather than struggle and avoidance.</p>
                  <p>ACT supports you in clarifying your values and committing to actions that are meaningful to you, even in the presence of discomfort or uncertainty.</p>
                  <p>The goal is not to eliminate difficult feelings but to reduce their power over your behaviour, so you can live a richer and more fulfilling life.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_act.jpg" alt="Acceptance and Commitment Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 4. DBT — image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Balancing Acceptance &amp; Change
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Dialectical Behaviour Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Dialectical Behaviour Therapy (DBT) was originally developed for individuals who experience intense and overwhelming emotions. It combines acceptance-based strategies with skills for change.</p>
                  <p>DBT-informed work focuses on building skills in four key areas: mindfulness, emotional regulation, distress tolerance, and interpersonal effectiveness.</p>
                  <p>It can be particularly helpful for those who struggle with emotional intensity, self-destructive behaviours, or difficulties in relationships.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_dbt.jpg" alt="Dialectical Behaviour Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 5. Person-Centred — text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  You Are the Expert on Your Own Life
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Person-Centred Approach
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>The Person-Centred Approach places you at the heart of the therapeutic process. It is rooted in the belief that each person has the inner resources to grow and heal, given the right conditions.</p>
                  <p>In this approach, the therapeutic relationship is built on warmth, empathy, and unconditional positive regard — a non-judgmental space where you can explore your thoughts and feelings freely.</p>
                  <p>Rather than following a prescriptive programme, sessions are guided by what feels most important to you at any given time.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_person_centered.jpg" alt="Person-Centred Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 6. Psychodynamic — image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Exploring Deeper Patterns &amp; Unconscious Processes
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Psychodynamic-Informed Approach
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>A psychodynamic-informed approach explores how unconscious processes, past experiences, and relational patterns may be influencing your thoughts, feelings, and behaviour in the present.</p>
                  <p>This work involves developing greater awareness of recurring emotional themes and relationship dynamics that may be shaping how you experience yourself and others.</p>
                  <p>By bringing these patterns into awareness, it becomes possible to understand yourself more deeply and to gradually shift ways of relating that may no longer be serving you well.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_psychodynamic.jpg" alt="Psychodynamic Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 7. Mindfulness — text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Cultivating Presence &amp; Awareness
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Mindfulness-Based Techniques
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Mindfulness-based techniques involve intentionally bringing attention to the present moment — to thoughts, feelings, and sensations — with an attitude of curiosity and non-judgment.</p>
                  <p>These practices can help reduce the tendency to become caught up in worry, rumination, or avoidance, and instead support a calmer and more grounded way of relating to experience.</p>
                  <p>Mindfulness is often integrated alongside other approaches and can be helpful for stress, anxiety, low mood, and developing greater emotional awareness and self-compassion.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_mindfulness.jpg" alt="Mindfulness-Based Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 8. Solution-Focused — image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Building on Strengths &amp; Moving Forward
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Solution-Focused Brief Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Solution-Focused Brief Therapy (SFBT) is a goal-directed approach that focuses on identifying strengths, resources, and what is already working in your life, rather than on problems and their causes.</p>
                  <p>This approach helps you clarify what you would like to be different and explore the small, concrete steps that can move you in that direction.</p>
                  <p>SFBT can be particularly effective when you are looking for a focused, practical, and time-limited way to address specific difficulties and build momentum toward positive change.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_solution_focused.jpg" alt="Solution-Focused Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 9. Narrative — text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Rewriting the Stories We Tell About Ourselves
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Narrative Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Narrative therapy is built on the idea that the stories we tell about ourselves shape how we see and experience our lives. Some of these stories can be limiting or problem-saturated.</p>
                  <p>Through narrative-informed work, we explore the stories you have been telling about yourself — where they came from, how they have shaped your identity, and whether they truly reflect who you are.</p>
                  <p>The aim is to help you re-author your story and reconnect with your own values, strengths, and preferred ways of being in the world.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_narrative.jpg" alt="Narrative Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 10. EMDR — image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Processing Trauma &amp; Distressing Memories
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  EMDR Therapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Eye Movement Desensitisation and Reprocessing (EMDR) is an evidence-based therapy that helps individuals process traumatic or distressing memories that have become stuck in the nervous system.</p>
                  <p>Through guided bilateral stimulation — typically eye movements — EMDR supports the brain&apos;s natural healing process, allowing distressing memories to be processed and integrated in a less painful way.</p>
                  <p>EMDR is recognised as an effective treatment for post-traumatic stress disorder (PTSD) and can also be helpful for a range of other difficulties rooted in past experiences.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_emdr.jpg" alt="EMDR Therapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 11. Hypnotherapy — text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  Accessing the Deeper Mind for Healing
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Hypnotherapy
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Hypnotherapy uses a state of focused relaxation and heightened attention to help you access deeper levels of the mind where lasting change can take place more readily.</p>
                  <p>In this relaxed state, the mind becomes more open to positive suggestions and therapeutic exploration, allowing us to work with habits, anxieties, phobias, and emotional blocks that may be difficult to address through purely conscious, analytical approaches.</p>
                  <p>Hypnotherapy is a safe, collaborative process — you remain in full awareness and control throughout the session.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_hypnotherapy.jpg" alt="Hypnotherapy illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* 12. Supportive Counselling — image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4 leading-relaxed">
                  A Safe Space to Be Heard &amp; Supported
                </h4>
                <h3 className="font-heading text-2xl md:text-3xl text-[#3E4A3D] mb-6">
                  Supportive Counselling
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-[#545D52]">
                  <p>Supportive counselling provides a warm, non-judgmental space where you can talk openly about what you are experiencing, without the pressure of following a particular therapeutic model or agenda.</p>
                  <p>Sometimes people simply need to feel heard, to make sense of what they are going through, and to feel less alone with their difficulties. Supportive counselling meets you where you are.</p>
                  <p>This approach can be especially helpful during times of transition, grief, stress, or when you are not yet ready for deeper therapeutic exploration but need consistent emotional support.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md shadow-sm bg-[#EFEFEF]">
                  <Image src="/images/therapy_supportive.jpg" alt="Supportive Counselling illustration" fill className="object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* BOOK A SESSION */}
      <section className="py-20 px-6 bg-[#2E4C63] text-center">
        <div className="max-w-2xl mx-auto">
          <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-[#CBA378] mb-4">
            Ready to Begin?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-5 leading-tight">
            Take the First Step Toward Feeling Better
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
            Book a complimentary 15-minute consultation call. No pressure — just a chance to connect and see if we&apos;re a good fit.
          </p>
          <Link
            href="/book-a-session"
            className="inline-block px-10 py-4 bg-[#CBA378] text-white text-xs font-bold tracking-[0.22em] uppercase hover:bg-[#b8906a] transition-colors duration-300 shadow-md"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection faqs={howItWorksFaqs} title="Frequently Asked Questions About My Approach" />

    </div>
  );
}
