/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE5621',
        'second': '#2A435D',
        'third': '#FFF8EE',
        'link': '#4BFF3C',
      },
      fontFamily: {
        'roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}

