/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'Primary': {
          'lightest': '#DFD8E7',
          'light': '#C5B4DA',
          'main': '#AF8CDB',
          'dark': '#895AC5',
          'darker': '#5C3390'
        },
        'Secondary': {
          'lightest': '#F3DEF9',
          'light': '#E0C0E8',
          'main': '#CD9DD9',
          'dark': '#C77EDA',
          'darker': '#BE44DC'
        },
        'Error': {
          'main': '#F72634',
          'hover': '#D90716',
          'pressed': '#9D060F'
        },
        'OtherColor': {
          'yellow': '#FDC503',
          'darkGreen': '#4BA080',
          'lightGreen': '#41CD98'
        },
        'MonoColor': {
          '50': '#F8FAFC',
          '100': '#F1F5F9',
          '200': '#E2E8F0',
          '300': '#CBD5E1',
          '400': '#94A3B8',
          '500': '#64748B',
          '600': '#475569',
          '700': '#334155',
          '800': '#1E293B',
          '900': '#0F172A',

        }
      }
    },
  },
  plugins: [],
};
