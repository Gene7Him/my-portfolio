import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Hi, I'm Eugene Faison
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
           I'm a software engineer focused on building useful, impactful tools for the web. Whether it’s frontend interfaces, backend systems, or fullstack products, I love shipping projects that solve real-world problems.
        </p>
      </main>
    </>
  );
}
