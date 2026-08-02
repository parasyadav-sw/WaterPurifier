/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '425px',
      'tablet': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#00B4D8',
        accent: '#90E0EF',
        navy: '#03045E',
        'navy-deep': '#020345',
        success: '#2DD4BF',
        ink: '#1E293B',
        'ink-soft': '#64748B',
        paper: '#FFFFFF',
        mist: '#F0F9FF',
        'mist-deep': '#E2E8F0',
        teal: '#0077B6',
        'teal-deep': '#005F8A',
        gold: '#00B4D8',
        'gold-deep': '#009AB5',
        line: 'rgba(3, 4, 94, 0.08)',
        'danger': '#EF4444',
        'danger-bg': 'rgba(239, 68, 68, 0.1)',
        'warning': '#F59E0B',
        'warning-bg': 'rgba(245, 158, 11, 0.1)',
        'success-bg': 'rgba(45, 212, 191, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['Poppins', 'Sora', 'sans-serif'],
        accent: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        radius: '16px',
        'radius-sm': '12px',
        'radius-lg': '16px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(3, 4, 94, 0.05)',
        md: '0 8px 24px rgba(3, 4, 94, 0.06), 0 2px 8px rgba(3, 4, 94, 0.02)',
        lg: '0 16px 40px rgba(3, 4, 94, 0.08)',
        glass: '0 8px 32px 0 rgba(0, 119, 182, 0.04)',
      },
      transitionTimingFunction: {
        'bezier-custom': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom, 0px)',
        'safe-top': 'env(safe-area-inset-top, 0px)',
        'safe-left': 'env(safe-area-inset-left, 0px)',
        'safe-right': 'env(safe-area-inset-right, 0px)',
      }
    },
  },
  plugins: [],
}
