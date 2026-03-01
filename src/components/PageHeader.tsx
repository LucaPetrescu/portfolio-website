import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: PageHeaderProps) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`scroll-reveal pt-32 pb-16 px-6 ${center ? 'text-center' : ''}`}>
      <div className="max-w-4xl mx-auto">
        {eyebrow && (
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-5xl md:text-6xl text-[var(--text-primary)] leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
