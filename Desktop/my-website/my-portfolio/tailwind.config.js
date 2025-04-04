/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050A15",
        secondary: "#64ffda",
        lightNavy: "#0F172A",
        navy: "#050A15",
        slate: "#94A3B8",
        lightSlate: "#CBD5E1",
        lightestSlate: "#E2E8F0",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.8s ease-in-out',
        slideIn: 'slideIn 0.8s ease-in-out',
        bounce: 'bounce 1s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 