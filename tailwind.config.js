/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  variants: {
    backdropFilter: ['responsive'], // Add other variants as needed
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
  ],
}


// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       backdropFilter: {
//         'none': 'none',
//         'blur': 'blur(20px)',
//       },
//     },
//   },
//   variants: {
//     backdropFilter: ['responsive'], // Add other variants as needed
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/typography'),
//     require('tailwindcss-filters'),
//   ],
// };


