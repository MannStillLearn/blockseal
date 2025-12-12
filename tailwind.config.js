/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#00c2ff',
          indigo: '#4f46e5',
          dark: '#030712',
          slate: '#0b1220',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 194, 255, 0.35)',
      },
    },
  },
  plugins: [],
}

