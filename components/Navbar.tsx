import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white dark:bg-gray-800 sticky top-0 z-50 flex justify-between">
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
