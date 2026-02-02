import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warmth: {
          50: '#fef7ee',
          100: '#fde8d3',
          200: '#fbcda5',
          300: '#f8aa6d',
          400: '#f47d33',
          500: '#f15b0b',
          600: '#e24106',
          700: '#bb2e08',
          800: '#95240e',
          900: '#79200f',
        },
        trust: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36acf8',
          500: '#0c93e9',
          600: '#0074c7',
          700: '#015ca1',
          800: '#064e85',
          900: '#0b426e',
        },
        navy: {
          50: '#f4f6f9',
          100: '#e9ecf2',
          200: '#cfd8e6',
          300: '#a6b7d3',
          400: '#7791bb',
          500: '#5673a4',
          600: '#435a8a',
          700: '#374870',
          800: '#2f3d5e',
          900: '#1a2332',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
