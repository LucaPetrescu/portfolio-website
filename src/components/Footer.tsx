import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-display text-2xl tracking-widest uppercase text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors duration-300"
            >
              Luca Petrescu
            </Link>
            <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mt-1 font-sans">
              Cinematic Travel Photography
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-6">
            {['Portfolio', 'About', 'Gear', 'Contact'].map((label) => (
              <Link
                key={label}
                to={`/${label === 'Portfolio' ? 'portfolio/places' : label.toLowerCase()}`}
                className="text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-300 font-sans"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
              { Icon: Mail, href: '/contact', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-muted)] font-sans tracking-wide">
            © {year} Luca Petrescu. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] font-sans italic">
            "Every frame is a story waiting to be told."
          </p>
        </div>
      </div>
    </footer>
  );
}
