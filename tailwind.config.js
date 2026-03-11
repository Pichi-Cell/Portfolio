/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          emerald: "#10b981",
          teal: "#14b8a6",
          slate: "#475569",
        },
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10%, -10%) scale(1.1)' },
          '66%': { transform: 'translate(-10%, 10%) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
