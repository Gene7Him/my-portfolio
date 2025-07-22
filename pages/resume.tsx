'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Collapsible = ({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-xl font-semibold text-blue-700 dark:text-blue-300"
      >
        {title}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </section>
  );
};

export default function Resume() {
  return (
    <>
      
      <div className="min-h-screen px-6 py-10 bg-white dark:bg-baseDark text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Resume
            </h1>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Print PDF
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold">Eugene Faison</h2>
            <p>Auburn, WA · (504) 261-4234 · <a className="text-blue-500 hover:underline" href="mailto:eugenefaison7@gmail.com">eugenefaison7@gmail.com</a></p>
            <p>
              <a href="https://linkedin.com/in/eugenefaison7" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a> ·
              <a href="https://github.com/Gene7Him" target="_blank" className="ml-2 text-blue-500 hover:underline">GitHub</a> ·
              <a href="https://efaison.engineer" target="_blank" className="ml-2 text-blue-500 hover:underline">Portfolio</a>
            </p>
          </div>

          <Collapsible title="Professional Summary">
            <p className="text-sm leading-relaxed">
              Full-stack Software Engineer and U.S. Army Veteran with a BAS in Software Development and an AAS in Data Analytics.
              Proven ability to build scalable applications and backend systems using Python, Go, JavaScript, Redis, SQL, and more.
              Experienced in DevOps, data engineering, frontend design, and Agile leadership across civic and operational projects.
            </p>
          </Collapsible>

          <Collapsible title="Education & Certifications">
            <ul className="list-disc list-inside text-sm">
              <li>BAS in Software Development – Green River College</li>
              <li>AAS in Software Development & Data Analytics – Green River College</li>
            </ul>
          </Collapsible>

          <Collapsible title="Projects">
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-lg">OpsTrack – Field Operations Dashboard</h3>
                <ul className="list-disc list-inside">
                  <li>SaaS tool for managing HVAC, generator, CDL vehicle logs and diagnostics.</li>
                  <li>React/Vite frontend, Supabase/Postgres backend, CSV/manual input, role-based routing.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">FairHouse – Civic Tech Housing Platform</h3>
                <ul className="list-disc list-inside">
                  <li>Public housing bias analytics app using real-time dashboards & public data normalization.</li>
                  <li>Built with Python, Docker, Supabase, Streamlit, and PostgreSQL.</li>
                </ul>
              </div>
            </div>
          </Collapsible>

          <Collapsible title="Skills">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 text-sm list-disc list-inside">
              <li>React, Vue, Tailwind, TypeScript</li>
              <li>Go, Python, Java, Node.js</li>
              <li>PostgreSQL, Redis, MongoDB</li>
              <li>Supabase, Firebase, Docker, Vite</li>
              <li>CI/CD, GitHub Actions, REST & gRPC</li>
              <li>FastAPI, Django, Express</li>
            </ul>
          </Collapsible>

          <Collapsible title="Professional Experience">
            <div className="border-l-2 border-blue-600 pl-4 space-y-6 mt-4">

              {[
                {
                  title: 'Open-Source Contributor Intern – CodeDay',
                  period: 'Sep 2024 – Mar 2025',
                  bullets: [
                    'Merged PR into Eclipse IDE, saving ~2,000 user hours per quarter.',
                    'Led Agile team, managed 40+ tasks as Product Owner.',
                    'Built 20+ TypeScript & React components and Dockerized deployments.',
                  ],
                },
                {
                  title: 'Software Engineer Intern – Green Spa Café',
                  period: 'Jul 2024 – Aug 2024',
                  bullets: [
                    'Developed salon appointment app with MERN stack and React Native.',
                    'Integrated MongoDB and tested APIs using Postman.',
                  ],
                },
                {
                  title: 'Generator & HVAC Technician – U.S. Army',
                  period: 'May 2018 – Oct 2021',
                  bullets: [
                    'Led 20-person team across 580+ assets including generators, Humvees, HVAC.',
                    'Reduced downtime 40% through diagnostics and maintenance workflows.',
                  ],
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <h3 className="text-md font-bold">{exp.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{exp.period}</p>
                  <ul className="list-disc list-inside text-sm mt-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
}
