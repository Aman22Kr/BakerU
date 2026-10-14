/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', md: '1.5rem' } },
    extend: {
      colors: {
        brand: { DEFAULT: '#B0DCD1', dark: '#7FBFB0', light: '#E6F4F0' },
        cocoa: { DEFAULT: '#4A2C21', dark: '#2E1A13', light: '#7A5446' },
        cream: '#FBF7F2',
        accent: '#C8553D',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: { page: '1240px' },
      aspectRatio: { card: '4 / 3', banner: '16 / 6' },
      boxShadow: { card: '0 2px 12px rgba(74,44,33,.08)', lift: '0 8px 24px rgba(74,44,33,.14)' },
    },
  },
  plugins: [],
};
