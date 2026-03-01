import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import MasonryGrid from '../../components/MasonryGrid';
import { placesPortfolio } from '../../data/portfolio';

const categories = ['All', 'Morocco', 'Turkey', 'Prague', 'Belgium', 'Poland', 'Paris', 'Greece'];

export default function PlacesPage() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? placesPortfolio
      : placesPortfolio.filter((p) => p.location === active);

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Portfolio / Places"
        title="Places"
        subtitle="Landscapes, cities, and sacred spaces from across the world — each image a document of light and time."
      />

      {/* Category filter */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] tracking-[0.25em] uppercase font-sans px-4 py-2 border transition-all duration-300 ${
                active === cat
                  ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/10'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <MasonryGrid items={filtered} />
      </div>
    </div>
  );
}
