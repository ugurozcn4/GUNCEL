/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#e8161e',
          dark: '#b8090f',
          bright: '#ff2832',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          mid: '#111111',
          card: '#181818',
          border: '#242424',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
