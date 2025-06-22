import type { AppProps } from 'next/app';
import '../styles/globals.css'; // adjust if using Tailwind or CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
