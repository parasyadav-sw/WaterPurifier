/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#06B6D4',
        navy: '#0F172A',
        'navy-deep': '#020617',
        success: '#10B981',
        ink: '#1E293B',
        'ink-soft': '#64748B',
        paper: '#FFFFFF',
        mist: '#F8FAFC',
        'mist-deep': '#E2E8F0',
        teal: '#0EA5E9',
        'teal-deep': '#0369A1',
        gold: '#06B6D4',
        'gold-deep': '#0891B2',
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
        sm: '0 1px 3px rgba(15, 23, 42, 0.05)',
        md: '0 8px 24px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(15, 23, 42, 0.02)',
        lg: '0 16px 40px rgba(15, 23, 42, 0.08)',
        glass: '0 8px 32px 0 rgba(14, 165, 233, 0.04)',
      },
      transitionTimingFunction: {
        'bezier-custom': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
