import { siteInfo } from "@/lib/content";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: 'Book a Therapy Session | Online Counseling Inquiry',
  description: 'Book your first therapy session with psychologist Monika Arora. Get started on your healing and self-growth journey today.',
};

export default function BookASession() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column */}
      <div className="w-full md:w-[45%] relative flex items-center justify-center p-8 lg:p-16 min-h-[50vh] md:min-h-0 overflow-hidden">
        <Image
          src="/images/colorful-sky-sunset-lake.jpg"
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
  );
}
