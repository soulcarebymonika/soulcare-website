export default function TestimonialCard({ testimonial }) {
  const initials = testimonial.name.split(' — ')[0].replace(/\s/g, ''); // e.g. "A.S." -> "AS"

  return (
    <div
      className="flex flex-col justify-between pt-6 pb-6 px-6 md:px-8 h-full bg-white shadow-sm border border-gray-100 rounded-sm"
    >
      {/* Large opening quote mark */}
      <span
        className="font-heading text-5xl leading-none mb-0 block text-primary"
        aria-hidden="true"
      >
        "
      </span>
      <p
        className="font-heading text-[18px] md:text-[20px] leading-relaxed flex-grow mb-4 text-text"
      >
        {testimonial.quote.replace('[Placeholder] ', '')}
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-navy text-white"
        >
          {initials}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-navy">
            Shared anonymously — PLACEHOLDER
          </p>
        </div>
      </div>
    </div>
  );
}
