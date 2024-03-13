/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:["Nunito Sans", "sans-serif"]
      },
      colors:{
        darkBlue:{
          veryDarkLightText:"hsl(200, 15%, 8%)"
        }
      }
    },
  },
  plugins: [],
}