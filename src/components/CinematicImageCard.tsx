import { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { PortfolioItem } from '../data/portfolio';

interface CinematicImageCardProps {
  item: PortfolioItem;
  variant?: 'default' | 'grayscale';
}

export default function CinematicImageCard({
  item,
  variant = 'default',
}: CinematicImageCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="masonry-item group relative overflow-hidden bg-[var(--bg-card)] cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${variant === 'grayscale' ? 'grayscale group-hover:grayscale-0' : ''}`}
          style={{
            aspectRatio:
              item.aspectRatio === 'portrait'
                ? '3/4'
                : item.aspectRatio === 'landscape'
                ? '4/3'
                : '1/1',
          }}
        />

        {/* Skeleton */}
        {!loaded && (
          <div
            className="absolute inset-0 bg-[var(--bg-card)] animate-pulse"
            style={{
              aspectRatio:
                item.aspectRatio === 'portrait'
                  ? '3/4'
                  : item.aspectRatio === 'landscape'
                  ? '4/3'
                  : '1/1',
            }}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
          <div className="border-l-2 border-[var(--gold)] pl-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-display text-lg text-white leading-tight">{item.title}</h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={11} className="text-[var(--gold)]" />
              <span className="text-xs font-sans text-white/70 tracking-wider">
                {item.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
