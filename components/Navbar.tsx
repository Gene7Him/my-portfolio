'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-gradient-light dark:bg-gradient-dark shadow-md backdrop-blur-md"
    >
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-blue-600 dark:text-purple-400">Eugene</div>
        
        {/* Hamburger Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-blue-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      <ul className={`md:flex space-x-6 hidden`}>
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/projects" className="hover:underline">Projects</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/resume" className="hover:underline">Resume</a></li>
        <li>
          <a
            href="https://www.foundbyfaison.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <img
              src="/logomain.png"
              alt="FoundByFaison Logo"
              className="w-6 h-6 transition-transform duration-300 hover:scale-110"
            />
            <span className="hover:no-underline">FoundByFaison</span>
          </a>
        </li>
      </ul>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
    </div>

    {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><a href="https://foundbyfaison.tech" target="_blank">FoundByFaison</a></li>
          <ThemeToggle />
        </ul>
      )}

      
    
    </motion.nav>
  );
}
