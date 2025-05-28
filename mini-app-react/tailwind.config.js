/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ivory: '#EDEDE9',
        sky: '#CDD7ED',
        lightGray:'#AFAAA2',
        beige: '#DBCAC0',
        periwinkle: '#7185BE',
        navy: '#2E3952'
      },
      fontFamily: {
       tipography: ['Poppins', 'sans-serif'],
       tipography2: ['Zilla Slab','sans-serif' ]
      }
    },
  },
  plugins: [],
}

