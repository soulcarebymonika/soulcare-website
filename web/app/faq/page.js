import Hero from "@/components/Hero";
import { faqs } from "@/lib/content";

export const metadata = {
  title: 'Therapy FAQ & Session Details | Soulcare',
  description: 'Find answers to common questions about online counseling, confidentiality, session booking, and fees with psychologist Monika Arora.',
};

export default function FAQ() {
  return (
    <div>
      <Hero 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about starting therapy."
        align="center"
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[var(--color-secondary)]/30 rounded-2xl p-6 border border-[var(--color-primary)]/10 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-heading font-semibold text-[var(--color-text)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
