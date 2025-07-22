'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Resume() {
  const [showSections, setShowSections] = useState({
    experience: true,
    education: true,
    skills: true,
  });

  const toggle = (key: keyof typeof showSections) =>
    setShowSections({ ...showSections, [key]: !showSections[key] });

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white dark:bg-baseDark text-gray-800 dark:text-white px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Resume
            </h1>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Print PDF
            </button>
          </div>

          {/* Experience */}
          <section className="mb-8">
            <button
              className="text-xl font-semibold w-full text-left"
              onClick={() => toggle('experience')}
            >
              Experience
            </button>
            {showSections.experience && (
              <div className="mt-4 space-y-8 border-l-2 border-blue-600 pl-4">
                {[
                  {
                    title: 'Founder & Software Engineer – FoundByFaison.tech',
                    duration: '2024 – Present',
                    description: 'Developed tools and platforms to help founders build in public.',
                  },
                  {
                    title: 'Creator – OpsTrack SaaS',
                    duration: '2024 – Present',
                    description: 'Built a B2B platform for tracking HVAC/generator/CDL maintenance and compliance.',
                  },
                  {
                    title: 'Student Tech Specialist – Green River College',
                    duration: '2022 – 2024',
                    description: 'Managed veteran services systems, WordPress restoration, orientation systems, and more.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[14px] top-1 w-3 h-3 bg-blue-600 rounded-full"></div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
                    <p className="text-sm mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </section>

          {/* Education */}
          <section className="mb-8">
            <button
              className="text-xl font-semibold w-full text-left"
              onClick={() => toggle('education')}
            >
              Education
            </button>
            {showSections.education && (
              <div className="mt-4 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold">BAS – Software Development</h3>
                  <span className="text-sm text-gray-500">Green River College, 2025</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AAS – Data Analytics</h3>
                  <span className="text-sm text-gray-500">Green River College, 2023</span>
                </div>
              </div>
            )}
          </section>

          {/* Skills */}
          <section>
            <button
              className="text-xl font-semibold w-full text-left"
              onClick={() => toggle('skills')}
            >
              Skills
            </button>
            {showSections.skills && (
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm list-disc list-inside">
                <li>Next.js / React / Tailwind</li>
                <li>TypeScript / Node.js / Go</li>
                <li>PostgreSQL / Supabase / Firebase</li>
                <li>Docker / CI/CD / Vercel</li>
                <li>Framer Motion / Animations</li>
                <li>CLI / Bash / Git / GitHub</li>
                <li>REST & gRPC APIs</li>
                <li>Linux / Kali / Troubleshooting</li>
              </ul>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
