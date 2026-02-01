/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0E27',
        accent: '#6C5CE7',
        secondary: '#00D9FF',
        tertiary: '#FF6B9D',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 92, 231, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 92, 231, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
