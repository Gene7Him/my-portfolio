import type { AppProps } from 'next/app';
import '../styles/globals.css'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/footer'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="flex flex-col min-h-screen bg-beige-gradient text-gray-900 dark:bg-dark-violet bg-[length:400%_400%] animate-bg-pan text-gray-900 dark:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main> 
      <Footer />
    </div>
  ); 
}

 
