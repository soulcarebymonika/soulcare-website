import { siteInfo } from "@/lib/content";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";

const bookFaqs = [
  {
    question: "How long does a session last?",
    answer: "Standard therapy sessions are typically 50-60 minutes long."
  },
  {
    question: "How do I make a payment?",
    answer: "Payment details will be provided to you upon booking confirmation. Session fees must be paid prior to the start of the session."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I request that cancellations be made at least 24 hours in advance. Late cancellations or missed appointments may incur a cancellation fee."
  },
  {
    question: "Is what I share in sessions confidential?",
    answer: "Yes, all sessions are completely confidential. There are a few standard legal exceptions (such as if you are at risk of harming yourself or others), which we will discuss during our first consultation."
  },
  {
    question: "How does online counselling work?",
    answer: "We will meet via a secure video conferencing link. All you need is a quiet, private space where you will not be disturbed, and a stable internet connection."
  },
  {
    question: "Can I switch between online and in-person sessions?",
    answer: "Yes, if you are located in or visiting Dehradun, you can request to switch between online and in-person sessions, subject to availability."
  }
];

export const metadata = {
  title: 'Book a Therapy Session | Online Counseling Inquiry',
  description: 'Book your first therapy session with psychologist Monika Arora. Get started on your healing and self-growth journey today.',
};

export default function BookASession() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column */}
      <div className="w-full md:w-[45%] relative flex items-center justify-center p-8 lg:p-16 min-h-[50vh] md:min-h-0 overflow-hidden">
        <Image
          src="/images/colorful-sky-sunset-lake.webp"
          alt="Sunset lake background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Light overlay to make the image pop */}
        <div className="absolute inset-0 bg-white/60 z-10"></div>
        
        <div className="w-full max-w-sm aspect-[3/4] relative z-20 shadow-2xl rounded-sm overflow-hidden">
          {/* Placeholder Image */}
          <Image 
            src="/images/mid-shot-woman-therapist-with-clipboard.webp" 
            alt="Therapist with clipboard ready for consultation" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[55%] bg-[#7180A6] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-xl w-full mx-auto md:mx-0 text-white">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            Getting Started
          </h1>
          <p className="text-white/80 font-serif italic mb-8">
            Please fill out the form below or email me at: {siteInfo.email}
          </p>

          <BookingForm />
        </div>
      </div>
      </div>
      
      {/* FAQ SECTION */}
      <FAQSection faqs={bookFaqs} title="Frequently Asked Questions About Booking & Sessions" />
    </>
  );
}
