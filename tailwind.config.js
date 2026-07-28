/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: '#E4EEF2',
        'mist-deep': '#D3E3E9',
        navy: '#0F2A3A',
        'navy-deep': '#0A1E2B',
        teal: '#2F8F9D',
        'teal-deep': '#1D5F6B',
        gold: '#C9A66B',
        'gold-deep': '#B38E54',
        ink: '#12263A',
        'ink-soft': '#4A6070',
        paper: '#FBFCFC',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        radius: '22px',
        'radius-lg': '28px',
      },
      boxShadow: {
        sm: '0 4px 12px rgba(15, 42, 58, 0.04)',
        md: '0 16px 32px rgba(15, 42, 58, 0.06), 0 4px 8px rgba(15, 42, 58, 0.02)',
        lg: '0 32px 64px rgba(15, 42, 58, 0.1)',
      },
      transitionTimingFunction: {
        'bezier-custom': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
