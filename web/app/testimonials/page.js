import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/content";

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
    </div>
  );
}
