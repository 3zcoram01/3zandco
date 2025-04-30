/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};