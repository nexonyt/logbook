/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        screens: {
          'xs': '500px', // niestandardowy punkt przerwania
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: 'class',
  theme: {
    extend: {}
  }
}
