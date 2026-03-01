import { Outlet, NavLink } from 'react-router-dom';

const portfolioTabs = [
  { to: '/portfolio/places', label: 'Places' },
  { to: '/portfolio/portraits', label: 'Portraits' },
  { to: '/portfolio/street', label: 'Street' },
];

export default function PortfolioLayout() {
  return (
    <div>
      {/* Sub-navigation */}
      <div className="sticky top-[60px] z-40 bg-[var(--bg-primary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-8 pt-14">
            {portfolioTabs.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `pb-3 text-xs tracking-[0.2em] uppercase font-sans border-b-2 transition-all duration-300 ${
                    isActive
                      ? 'border-[var(--gold)] text-[var(--gold)]'
                      : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
