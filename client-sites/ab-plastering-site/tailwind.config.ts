import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plaster: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E8E5E0',
          300: '#D4CFC7',
          800: '#4A4A4A',
          900: '#3D3D3D',
        },
        terracotta: {
          400: '#D4845F',
          500: '#C67A4B',
          600: '#B87333',
        },
        gold: {
          400: '#F5C842',
          500: '#F4B740',
        }
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
