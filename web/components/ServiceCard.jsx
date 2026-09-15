import { Heart, Infinity as Spiral, Sparkles, Leaf } from 'lucide-react';

const iconMap = {
  "counseling": <Heart size={24} strokeWidth={1.5} />,
  "emotional-wellbeing": <Spiral size={24} strokeWidth={1.5} />,
  "self-growth": <Sparkles size={24} strokeWidth={1.5} />,
  "mental-wellness": <Leaf size={24} strokeWidth={1.5} />,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.id] || <Leaf size={24} strokeWidth={1.5} />;

  return (
    <div
      className="group p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full bg-white border border-primary/20"
    >
      <div
        className="w-8 h-0.5 transition-all duration-300 group-hover:w-16 bg-accent"
      />
      <div className="text-primary">
        {Icon}
      </div>
      <h3
        className="font-heading text-xl leading-snug text-navy"
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-grow text-text"
      >
        {service.description}
      </p>
    </div>
  );
}
