import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { GearItem } from '../data/gear';

interface GearCardProps {
  item: GearItem;
  index?: number;
}

export default function GearCard({ item, index = 0 }: GearCardProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="scroll-reveal group relative overflow-hidden bg-[var(--bg-card)] cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!loaded && <div className="absolute inset-0 bg-[var(--bg-card)] animate-pulse" />}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {/* Gold accent line */}
            <div className="w-8 h-px bg-[var(--gold)] mb-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-[var(--gold)] mb-1">
              {item.type}
            </p>
            <h3 className="font-display text-2xl text-white mb-2">{item.name}</h3>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 border-t border-[var(--border)]">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-[var(--gold)] mb-1">
              {item.type}
            </p>
            <h3 className="font-display text-xl text-[var(--text-primary)]">{item.name}</h3>
          </div>
        </div>
        <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {item.description}
        </p>
        <ul className="space-y-1.5">
          {item.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
              <span className="text-xs font-sans text-[var(--text-muted)] tracking-wide">
                {spec}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
