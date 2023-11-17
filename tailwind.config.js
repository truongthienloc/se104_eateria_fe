/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'primary': '1400px',
      },
      colors: {
        'primary': '#FE5621',
        'second': '#2A435D',
        'third': '#FFFFFF',
        'fourth': '#FFF8EE',
        'link': '#4BFF3C',
      },
      boxShadow: {
        'fadeBottom': 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
        'borderLine': 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px',
        'floating': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      fontFamily: {
        'roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}

