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
        <li><a href="/blog" className="hover:underline">Blog</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/resume" className="hover:underline">Resume</a></li>
      </ul>
      <ThemeToggle />
    </nav>
    </motion.nav>
  );
}
