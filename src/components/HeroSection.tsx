import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  image: string;
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function HeroSection({
  image,
  headline,
  subheadline,
  ctaLabel = 'View Portfolio',
  ctaTo = '/portfolio/places',
}: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105"
        style={{
          backgroundImage: `url(${image})`,
          opacity: loaded ? 1 : 0,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 cinematic-hero" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1200 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
          Cinematic Travel Photography
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
          {headline}
        </h1>

        {subheadline && (
          <p
            className="font-sans text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ transitionDelay: '500ms' }}
          >
            {subheadline}
          </p>
        )}

        {ctaLabel && (
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-3 border border-[var(--gold)] text-[var(--gold)] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans hover:bg-[var(--gold)] hover:text-black transition-all duration-500"
          >
            {ctaLabel}
          </Link>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase text-white font-sans">
          Scroll
        </span>
        <ChevronDown size={16} className="text-white" />
      </div>
    </section>
  );
}
