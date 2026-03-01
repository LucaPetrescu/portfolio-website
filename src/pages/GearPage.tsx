import PageHeader from '../components/PageHeader';
import GearCard from '../components/GearCard';
import { gearItems } from '../data/gear';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function GearPage() {
  const ref = useScrollReveal();

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="The Tools"
        title="Gear I Use"
        subtitle="Minimalist kit. Maximum intentionality. These are the tools that have crossed deserts, climbed minarets, and waited patiently for light."
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {gearItems.map((item, i) => (
            <GearCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Philosophy section */}
        <div
          ref={ref}
          className="scroll-reveal border-t border-[var(--border)] pt-16 grid md:grid-cols-2 gap-12"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-4">
              Equipment Philosophy
            </p>
            <h2 className="font-display text-3xl text-[var(--text-primary)] mb-4 leading-tight">
              Less gear. <br />
              <em>More presence.</em>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="font-sans text-[var(--text-secondary)] leading-relaxed">
              I made a deliberate choice to travel light. When you carry too much, you become
              gear-conscious. You start solving technical problems instead of seeing photographs.
            </p>
            <p className="font-sans text-[var(--text-secondary)] leading-relaxed">
              Four lenses cover everything I need: intimate portraits, dramatic compression,
              wide-angle storytelling, and the versatile middle range. The rest is light and
              patience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
