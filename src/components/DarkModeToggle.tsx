import { Sun, Moon } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ isDark, onToggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="w-8 h-8 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
