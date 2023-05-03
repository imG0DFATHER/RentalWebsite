/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
        'site-blue': '#141d35',
        'site-cream': '#ebe2ca',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
}