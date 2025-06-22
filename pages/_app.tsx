import type { AppProps } from 'next/app';
import '../styles/globals.css'; // adjust if using Tailwind or CSS
import Navbar from '../components/Navbar'; // adjust the path if needed
import Footer from '../components/footer'; // adjust the path if needed

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="min-h-screen bg-beige-gradient text-gray-900 dark:bg-dark-violet bg-[length:400%_400%] animate-bg-pan text-gray-900 dark:text-white">
      <Navbar />
      
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
      
  ); 
}

 
