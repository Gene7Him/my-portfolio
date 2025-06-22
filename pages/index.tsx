import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <motion.h1 
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Hi, I'm Eugene Faison
        </motion.h1>
        <motion.p
          className="text-md md:text-lg max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
           I'm a software engineer focused on building useful, impactful tools for the web. Whether it’s frontend interfaces, backend systems, or fullstack products, I love shipping projects that solve real-world problems.
        </motion.p>
      </main>
      </div>
    </>
    

    

  );
}
