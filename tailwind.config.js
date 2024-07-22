/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        platypi:['platypi','serif']
      },
      screens:{
        'xs':'320px',
      },
      margin: {
        '42': '168px',
        '41': '164px',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

