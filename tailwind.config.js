/** @type {import('tailwindcss').Config} */

export default {
  content: [
    ["./app/**/*.{html,js,tsx, ts,jsx}"],
     "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      margin: {
        '20': '20px',
      },
      colors:{
        'blue': '1A7BFF',
        'white': 'FFFFFF',
        'gray': '848199',
        
      },
      
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

