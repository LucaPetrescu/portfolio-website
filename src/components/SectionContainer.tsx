import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  reveal?: boolean;
}

export default function SectionContainer({
  children,
  className = '',
  reveal = true,
}: SectionContainerProps) {
  const ref = useScrollReveal();

  if (!reveal) {
    return (
      <section className={`max-w-7xl mx-auto px-6 ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={`scroll-reveal max-w-7xl mx-auto px-6 ${className}`}
    >
      {children}
    </section>
  );
}
