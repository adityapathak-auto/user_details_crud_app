/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "default":"#4b43b6",
      },
      width:{
        "11":"1px"
      },
      borderWidth:{
        "1":"1px",
      }
    },
  },
  plugins: [

    require('@tailwindcss/forms'),
  ],
}