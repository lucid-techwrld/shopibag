/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
