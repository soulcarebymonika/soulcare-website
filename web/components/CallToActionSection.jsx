import Image from 'next/image';
import CTAButton from './CTAButton';

export default function CallToActionSection() {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden flex items-center justify-center">
      {/* Background Video - Scaled up by 20% to completely push the corner watermarks/logos out of the frame */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover scale-[1.2] -z-20 transform origin-center"
      >
        <source src="/videos/calming-nature-background.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt," label="No captions" default />
      </video>

      {/* Centered text box */}
      <div className="max-w-2xl w-full mx-auto px-4 relative z-10">
        <div className="bg-[#FAF9F6] p-10 md:p-14 shadow-2xl text-center border border-gray-100">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-[var(--color-text)] mb-4 leading-tight">
            Ready to take the<br/>next step?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base mb-8 italic font-serif">
            I'm here to support you on your journey.
          </p>
          <CTAButton 
            href="/book-a-session" 
            className="bg-[var(--color-accent)] hover:opacity-90 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase px-10 py-4 md:px-12 md:py-5 !rounded-none transition-all"
          >
            CONTACT ME
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
