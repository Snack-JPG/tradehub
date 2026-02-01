import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a0b5a0',
          400: '#759075',
          500: '#557055',
          600: '#2D5A4B',
          700: '#264838',
          800: '#1f3a2e',
          900: '#1a3027',
        },
        cream: {
          50: '#FAFAF5',
          100: '#F5F2E8',
          200: '#F5E6C8',
          300: '#EDD9A8',
          400: '#E5CC88',
          500: '#D4A853',
          600: '#B8903F',
          700: '#9C782B',
          800: '#806017',
          900: '#644803',
        },
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
