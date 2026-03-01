import PageHeader from '../../components/PageHeader';
import MasonryGrid from '../../components/MasonryGrid';
import { streetPortfolio } from '../../data/portfolio';

export default function StreetPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Portfolio / Street"
        title="Captured on the Street"
        subtitle="Unposed, unfiltered, undeniable. The documentary truth of cities in motion — caught between one heartbeat and the next."
      />
      <div className="max-w-7xl mx-auto px-6">
        <MasonryGrid items={streetPortfolio} variant="grayscale" />
      </div>
    </div>
  );
}
