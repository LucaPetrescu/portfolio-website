import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { to: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 z-50 bg-[var(--bg-secondary)] border-l border-[var(--border)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[var(--border)]">
          <span className="font-display text-lg tracking-widest uppercase text-[var(--gold)]">
            Menu
          </span>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-8 gap-6">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-display text-2xl tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-[var(--gold)]'
                    : 'text-[var(--text-primary)] hover:text-[var(--gold)]'
                }`
              }
              style={{
                transitionDelay: isOpen ? `${i * 60 + 100}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-6 py-8 border-t border-[var(--border)]">
          <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] font-sans">
            Chasing light across the world
          </p>
        </div>
      </div>
    </>
  );
}
