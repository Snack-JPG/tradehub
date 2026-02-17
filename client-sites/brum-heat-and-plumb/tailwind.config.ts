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
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d9',
          300: '#8da8c6',
          400: '#678bb3',
          500: '#1e3a5f',
          600: '#182e4b',
          700: '#122337',
          800: '#0c1724',
          900: '#060c12',
        },
        emergency: {
          50: '#fff5f0',
          100: '#ffe6d9',
          200: '#ffc7b3',
          300: '#ffa88d',
          400: '#ff8967',
          500: '#ff5722',
          600: '#e64a19',
          700: '#cc3d13',
          800: '#b3300d',
          900: '#992407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
