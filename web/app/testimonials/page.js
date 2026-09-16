import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/content";
import FAQSection from "@/components/FAQSection";

const testimonialFaqs = [
  {
    question: "Are these testimonials from real clients?",
    answer: "Yes, all the testimonials featured here are from real clients who have generously chosen to share their experiences."
  },
  {
    question: "How do you ensure client confidentiality when sharing feedback?",
    answer: "Client privacy is paramount. All identifying information is strictly removed or modified, and testimonials are only shared with explicit, voluntary permission."
  },
  {
    question: "Am I expected to leave a testimonial after my sessions?",
    answer: "No, there is absolutely no expectation or pressure to leave a testimonial. Your therapy journey is entirely yours and remains private."
  },
  {
    question: "Are the results mentioned in testimonials guaranteed?",
    answer: "Therapy is a deeply personal and collaborative process. While many clients experience significant positive changes, outcomes naturally vary depending on individual circumstances."
  },
  {
    question: "What if I am unhappy with my own counselling experience?",
    answer: "I encourage open communication. If you feel that our sessions are not meeting your needs, we can openly discuss this and adjust our approach to better support you."
  }
];

export const metadata = {
  title: 'Client Testimonials & Feedback | Soulcare',
  description: 'Read reviews and personal stories from clients who have experienced emotional healing and self-growth through therapy with Monika Arora.',
};

export default function Testimonials() {
  return (
    <div>
      <Hero 
        title="Client Stories" 
        subtitle="Real experiences from those who have committed to their healing journey."
        align="center"
      />
      <section className="py-16 bg-[var(--color-secondary)]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <FAQSection faqs={testimonialFaqs} title="Frequently Asked Questions About Client Experiences" />
    </div>
  );
}
