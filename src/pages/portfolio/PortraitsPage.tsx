import PageHeader from '../../components/PageHeader';
import MasonryGrid from '../../components/MasonryGrid';
import { portraitsPortfolio } from '../../data/portfolio';

export default function PortraitsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Portfolio / Portraits"
        title="Portraits"
        subtitle="Faces that carry entire worlds within them. Quiet dignity, fierce light, and the stories that live in a single expression."
      />
      <div className="max-w-7xl mx-auto px-6">
        <MasonryGrid items={portraitsPortfolio} />
      </div>
    </div>
  );
}
