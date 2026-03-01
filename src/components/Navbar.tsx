import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import DarkModeToggle from './DarkModeToggle';
import MobileMenu from './MobileMenu';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio/places', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/gear', label: 'Gear' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg-primary)] border-b border-[var(--border)] py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl tracking-widest uppercase text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            Luca Petrescu
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-sans text-sm tracking-widest uppercase gold-underline transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <DarkModeToggle isDark={isDark} onToggle={toggleDark} />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-4">
            <DarkModeToggle isDark={isDark} onToggle={toggleDark} />
            <button
              onClick={() => setMobileOpen(true)}
              className="text-[var(--text-primary)] p-1"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
