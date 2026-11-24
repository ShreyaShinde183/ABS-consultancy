/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6fe',
          100: '#ddecfd',
          200: '#c2dcfb',
          300: '#99c4f8',
          400: '#68a3f3',
          500: '#4381ec',
          600: '#2d65e0',
          700: '#244fc8',
          800: '#1e40a2',
          900: '#0f2757',
          950: '#0a1936', // Deep corporate navy
        },
        navy: {
          light: '#1e293b',
          DEFAULT: '#0f172a',
          dark: '#020617',
        },
        accent: {
          light: '#fde68a',
          DEFAULT: '#d97706', // Warm amber/gold
          hover: '#b45309',
          dark: '#92400e',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'card': '0 2px 12px -2px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(15, 23, 42, 0.12), 0 8px 12px -6px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}
