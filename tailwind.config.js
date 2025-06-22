/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vibrant: {
          primary: '#8b5cf6',
          baseLight: '#fdfcfb',
          baseDark: '#0e0e10',
          accent: '#2563eb',
          100: '#fef08a',
          200: '#fde047',
          300: '#facc15',
          400: '#eab308',
          500: '#ca8a04',
          600: '#a16207',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'beige-gradient': 'linear-gradient(to bottom, #fdfcfb, #e2d1c3, #f8fafc, #dbeafe)',
        'dark-violet': 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': { backgroundPosition: 'center top' },
          '50%': { backgroundPosition: 'center bottom' },
        },
      },
      animation: {
        'bg-pan': 'gradient-y 15s ease infinite',
      },
    },
  },
  plugins: [],
}
