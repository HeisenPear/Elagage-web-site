/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs verte vive (dégradé #A4BD01 → #679436)
        primary: {
          DEFAULT: '#679436', // Vert moyen (base du dégradé)
          50: '#F3F7EB',
          100: '#E7EFD7',
          200: '#CFDFAF',
          300: '#B7CF87',
          400: '#9FBF5F',
          500: '#87AF37',
          600: '#679436', // Vert foncé du dégradé
          700: '#527629',
          800: '#3E591F',
          900: '#293B14',
        },
        accent: {
          DEFAULT: '#A4BD01', // Vert vif (haut du dégradé)
          hover: '#8FA401',
          light: '#B8CC33',
        },
        secondary: {
          DEFAULT: '#FFA500', // Orange (CTA secondaires, accents)
          hover: '#FF8C00',
          light: '#FFB333',
        },
        neutral: {
          cream: '#F5F5F0', // Blanc cassé naturel
          black: '#1A1A1A',
          gray: '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Système typographique responsive
        'display-1': ['clamp(3rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-3': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '0' }],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        128: '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'lift': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(164, 189, 1, 0.4)', // Vert vif #A4BD01 pour glow
      },
    },
  },
  plugins: [],
}
