'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-gradient-light dark:bg-gradient-dark shadow-md backdrop-blur-md"
    >
    <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      
      <ul className="flex space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-relaxed tracking-tight">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/projects" className="hover:underline">Projects</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/resume" className="hover:underline">Resume</a></li>
        <li>
          <a
            href="https://www.foundbyfaison.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-90"
          >
            <img
              src="/logomain.png"
              alt="FoundByFaison Logo"
              className="w-6 h-6 transition-transform duration-300 hover:scale-110"
            />
            <span className="underline decoration-pink-500 decoration-2 hover:no-underline">FoundByFaison</span>
          </a>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
    </motion.nav>
  );
}
