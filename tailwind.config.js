/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange' : '#ffb23d',
        'main-black' : '#0e0d0b'
      }
    },
  },
  plugins: [],
}

