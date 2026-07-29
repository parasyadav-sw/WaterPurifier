/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      }
    },
  },
  plugins: [],
}
