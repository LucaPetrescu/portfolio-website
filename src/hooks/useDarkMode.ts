import { useState, useEffect } from 'react';

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return true; // default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return [isDark, toggleDark];
}
