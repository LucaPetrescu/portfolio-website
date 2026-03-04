import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { heroImage, featuredDestinations, placesPortfolio } from '../data/portfolio';

function FeaturedDestCard({
  dest,
  index,
}: {
  dest: (typeof featuredDestinations)[0];
  index: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="scroll-reveal group relative overflow-hidden aspect-[3/4] cursor-pointer"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <img
        src={dest.image}
        alt={dest.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-[var(--gold)] mb-1">
          {dest.country}
        </p>
        <h3 className="font-display text-2xl text-white">{dest.name}</h3>
        <p className="text-xs text-white/50 font-sans mt-1">{dest.imageCount} images</p>
      </div>
    </div>
  );
}

function StorySection() {
  const ref = useScrollReveal();
  const featured = placesPortfolio.find((p) => p.featured && p.id === 'morocco-1');

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div ref={ref} className="scroll-reveal">
          {featured && (
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          )}
        </div>

        <div ref={useScrollReveal()} className="scroll-reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-6">
            The Story Behind the Lens
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
            Light is my language. <br />
            <em>The world is my subject.</em>
          </h2>
          <p className="font-sans text-[var(--text-secondary)] leading-relaxed mb-6">
            Every journey begins before sunrise. It begins with the ritual of packing lenses, the
            anticipation of golden hour, the quiet discipline of waiting for the perfect moment
            when light transforms the ordinary into something transcendent.
          </p>
          <p className="font-sans text-[var(--text-secondary)] leading-relaxed mb-8">
            From the medinas of Morocco to the volcanic landscapes of Cappadocia, I travel not as
            a tourist but as a witness — documenting the textures, faces, and ephemeral light
            that define each place.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-[var(--gold)] border-b border-[var(--gold)] pb-1 hover:gap-4 transition-all duration-300"
          >
            Read My Story <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=60)`,
        }}
      />
      <div className="absolute inset-0 bg-[var(--bg-primary)]/80" />
      <div ref={ref} className="scroll-reveal relative z-10 text-center max-w-3xl mx-auto px-6">
        <div className="font-display text-7xl text-[var(--gold)] opacity-30 leading-none mb-4">"</div>
        <blockquote className="font-display text-3xl md:text-4xl italic text-[var(--text-primary)] leading-relaxed mb-6">
          Photography is the art of frozen time — the ability to store emotion and feelings within
          a frame.
        </blockquote>
        <cite className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] font-sans not-italic">
          — Meshack Otieno
        </cite>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection
        image={heroImage}
        headline="Chasing Light Across the World"
        subheadline="Focusing on portraits, travel and candid moments."
        ctaLabel="Explore Portfolio"
        ctaTo="/portfolio/places"
      />

      {/* Featured Destinations */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-3">
              Featured Destinations
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--text-primary)]">
              Destinations
            </h2>
          </div>
          <Link
            to="/portfolio/places"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            View all <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredDestinations.map((dest, i) => (
            <FeaturedDestCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      </section>

      <StorySection />
      <QuoteSection />

      {/* CTA Strip */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <div ref={useScrollReveal()} className="scroll-reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-4">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-8">
            Have a project in mind?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-[var(--gold)] text-[var(--gold)] px-8 py-4 text-xs tracking-[0.2em] uppercase font-sans hover:bg-[var(--gold)] hover:text-black transition-all duration-500"
          >
            Get in Touch <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
