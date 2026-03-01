import { useScrollReveal } from '../hooks/useScrollReveal';

const timeline = [
  { year: '2016', event: 'First trip to Morocco. The medinas changed everything.' },
  { year: '2018', event: 'Purchased the Nikon D750. Committed to film-like digital work.' },
  { year: '2019', event: 'Solo journey through Turkey, Greece, and Eastern Europe.' },
  { year: '2021', event: 'First editorial feature in a European travel magazine.' },
  { year: '2022', event: 'Belgium and Poland — discovering the soul of Central Europe.' },
  { year: '2024', event: 'Back to Morocco. Still chasing that same golden light.' },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="scroll-reveal flex gap-6"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-[var(--gold)] mt-1.5 flex-shrink-0" />
        {index < timeline.length - 1 && (
          <div className="w-px flex-1 bg-[var(--border)] mt-2" />
        )}
      </div>
      <div className="pb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-sans mb-1">
          {item.year}
        </p>
        <p className="font-sans text-[var(--text-secondary)] leading-relaxed">{item.event}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const introRef = useScrollReveal();
  const bioRef = useScrollReveal();
  const whyRef = useScrollReveal();

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-3">
            The Photographer
          </p>
          <h1 className="font-display text-6xl md:text-7xl text-white leading-none">
            Luca Petrescu
          </h1>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Bio */}
          <div>
            <div ref={introRef} className="scroll-reveal mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-6">
                Biography
              </p>
              <h2 className="font-display text-4xl text-[var(--text-primary)] mb-6 leading-tight">
                Born in Rome. <br />
                <em>Shaped by the road.</em>
              </h2>
            </div>

            <div ref={bioRef} className="scroll-reveal space-y-4">
              <p className="font-sans text-[var(--text-secondary)] leading-relaxed">
                I grew up in Rome surrounded by beauty — cobblestones worn by centuries, golden
                afternoon light streaming through baroque archways. But it was a chance encounter
                with a Berber elder in the Marrakech medina that made me understand photography
                not as documentation, but as connection.
              </p>
              <p className="font-sans text-[var(--text-secondary)] leading-relaxed">
                I shoot with a Nikon D750 and a small collection of lenses that have traveled
                more miles than most cars. My approach is unhurried: I stay in a place long
                enough to understand its rhythms, to know where the light falls at 6am, to earn
                the trust of its people.
              </p>
              <p className="font-sans text-[var(--text-secondary)] leading-relaxed">
                The result is work that doesn't look like travel photography. It looks like
                time — suspended, luminous, and real.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12">
              <p
                className="font-display text-4xl italic text-[var(--text-primary)]"
                style={{ fontStyle: 'italic', letterSpacing: '0.02em' }}
              >
                Luca Petrescu
              </p>
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--text-muted)] font-sans mt-1">
                Rome, Italy
              </p>
            </div>
          </div>

          {/* Right: Why I Travel + Timeline */}
          <div>
            <div ref={whyRef} className="scroll-reveal mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-6">
                Philosophy
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] mb-4">
                Why I Travel
              </h2>
              <p className="font-sans text-[var(--text-secondary)] leading-relaxed mb-4">
                I travel because home is everywhere the light is extraordinary. I travel because
                a photograph taken ten thousand kilometers from your bed carries a weight that
                comfort cannot.
              </p>
              <p className="font-sans text-[var(--text-secondary)] leading-relaxed">
                Each journey is a negotiation between what I plan to see and what the world
                decides to show me. The best images always come from the latter.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-8">
                Timeline
              </p>
              {timeline.map((item, i) => (
                <TimelineItem key={item.year} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
