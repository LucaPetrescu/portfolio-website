import type { PortfolioItem } from '../data/portfolio';
import CinematicImageCard from './CinematicImageCard';

interface MasonryGridProps {
  items: PortfolioItem[];
  variant?: 'default' | 'grayscale';
}

export default function MasonryGrid({ items, variant = 'default' }: MasonryGridProps) {
  return (
    <div className="masonry-grid">
      {items.map((item) => (
        <CinematicImageCard key={item.id} item={item} variant={variant} />
      ))}
    </div>
  );
}
