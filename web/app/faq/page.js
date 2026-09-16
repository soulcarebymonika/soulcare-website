import Hero from "@/components/Hero";
import { faqs } from "@/lib/content";
import FAQSection from "@/components/FAQSection";

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
      
      <FAQSection faqs={faqs} title="All Frequently Asked Questions" />
    </div>
  );
}
