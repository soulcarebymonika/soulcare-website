import Image from 'next/image';
import CTAButton from './CTAButton';

export default function Hero({ title, subtitle, ctaText = "Book a Session", ctaLink = "/book-a-session", align = "center", image, video, rightContent, imageAlt = "Hero Illustration" }) {
  return (
    <section className="relative w-full min-h-[100svh] bg-white flex flex-col justify-center pb-8 md:pb-16 overflow-hidden m-0 p-0 box-border">
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center lg:justify-between gap-8 md:gap-12 relative z-10">
        
        {/* TEXT CONTENT - Stacked top on mobile, left on desktop */}
        <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-5 z-20 shrink-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#3E4A3D] leading-[1.15] tracking-tight max-w-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-[#545D52] max-w-xl">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start pt-6 space-y-4 sm:space-y-0 sm:space-x-6 w-full">
            <CTAButton 
              href={ctaLink} 
              className="min-h-[44px] min-w-[200px] flex items-center justify-center px-8 py-4 text-base md:text-lg shadow-xl font-semibold tracking-wide transition-all rounded-xl"
            >
              {ctaText}
            </CTAButton>
          </div>
        </div>

        {/* ILLUSTRATION - Stacked bottom on mobile, right on desktop */}
        {image && (
          <div className="w-full md:w-1/2 lg:w-7/12 relative flex justify-center md:justify-end mt-0 z-10 max-w-[100vw]">
            {/* 
               The wrapper uses w-full and an aspect ratio. By using object-cover and object-right, 
               we force the image to completely fill the box without ANY letterboxing gaps, perfectly 
               cropping out the empty white space on the left.
            */}
            <div className="relative w-full aspect-[4/3] lg:aspect-video shrink-0">
              <Image 
                src={image} 
                alt={imageAlt} 
                fill
                priority
                className="object-cover object-center md:object-right mix-blend-multiply grayscale contrast-125"
              />
            </div>
          </div>
        )}

        {/* CUSTOM RIGHT CONTENT */}
        {rightContent && (
          <div className="w-full md:w-1/2 lg:w-7/12 relative flex justify-center mt-12 md:mt-0 z-10 w-full">
            {rightContent}
          </div>
        )}

      </div>
    </section>
  );
}
