import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', stored === 'dark');
    setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="ml-auto px-2 py-1 text-sm">
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
