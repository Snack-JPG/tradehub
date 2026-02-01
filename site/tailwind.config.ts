import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy (keeping for backwards compatibility)
        navy: "#1e293b",
        trust: "#16a34a",

        // Premium Color System V3
        "navy-950": "#0a0f1e",
        "navy-900": "#1e293b",
        "navy-800": "#334155",
        "navy-700": "#475569",
        "navy-600": "#64748b",

        // Vibrant Amber System (warmer, more premium)
        "amber-700": "#b45309",
        "amber-600": "#d97706",
        "amber-500": "#f59e0b",
        "amber-400": "#fbbf24",
        "amber-100": "#fef3c7",
        "amber-50": "#fffbeb",

        // Accent Teal/Cyan (trust signals)
        "teal-700": "#0f766e",
        "teal-600": "#0d9488",
        "teal-500": "#14b8a6",
        "teal-100": "#ccfbf1",
        "teal-50": "#f0fdfa",

        // Success Green (verified badges)
        "success-700": "#15803d",
        "success-600": "#16a34a",
        "success-500": "#22c55e",
        "success-100": "#dcfce7",

        // Warm Grays (better text hierarchy)
        "warmgray-900": "#1c1917",
        "warmgray-800": "#292524",
        "warmgray-700": "#44403c",
        "warmgray-600": "#57534e",
        "warmgray-500": "#78716c",
        "warmgray-400": "#a8a29e",
        "warmgray-300": "#d6d3d1",
        "warmgray-200": "#e7e5e4",
        "warmgray-100": "#f5f5f4",
        "warmgray-50": "#fafaf9",

        // Premium Gradient Anchors
        "gold": "#d4af37",
        "bronze": "#cd7f32",

        // Certification Colors
        "gas-safe": "#003da5",
        "niceic": "#e30613",
        "trustmark": "#00a0df",
      },
      fontFamily: {
        serif: ["var(--font-merriweather)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      fontSize: {
        // Enhanced type scale (base 17px)
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1.0625rem', { lineHeight: '1.625rem' }], // 17px
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.3125rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5625rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.375rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.875rem' }],
        '5xl': ['3.25rem', { lineHeight: '1.1' }],
        '6xl': ['4rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.015em',
        wider: '0.05em',
        widest: '0.1em',
      },
      boxShadow: {
        // Elevated shadow system with more depth
        'sm': '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 2px 8px 0 rgba(0, 0, 0, 0.10)',
        'md': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 24px 0 rgba(0, 0, 0, 0.15)',
        'xl': '0 12px 40px 0 rgba(0, 0, 0, 0.18)',
        '2xl': '0 20px 60px 0 rgba(0, 0, 0, 0.22)',

        // Layered shadows for premium depth
        'card': '0 2px 8px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.18), 0 4px 8px rgba(0, 0, 0, 0.08)',
        'cta': '0 4px 16px rgba(217, 119, 6, 0.4), 0 2px 4px rgba(217, 119, 6, 0.2)',
        'cta-hover': '0 8px 24px rgba(217, 119, 6, 0.5), 0 4px 8px rgba(217, 119, 6, 0.3)',

        // Colored glow shadows
        'amber-glow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'teal-glow': '0 0 20px rgba(20, 184, 166, 0.4)',
        'success-glow': '0 0 16px rgba(34, 197, 94, 0.3)',

        // Inner shadows for depth
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.92)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-amber': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1e293b 0%, #0a0f1e 100%)',
        'gradient-premium': 'linear-gradient(135deg, #d4af37 0%, #f59e0b 50%, #d97706 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
