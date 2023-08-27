/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        'inter': ["Inter-Bold", "Helvetica"],
        'regular': ["Inter-Regular", "Helvetica"],
      },
      colors: {
        'prim': '#FF2525',
        'yellowish': '#FFF3E3'
        
      },
      boxShadow: {
        'custom': '10px 10px 10px #00000040',
        'customS': '5px 5px 5px #00000040'
      }
    },
  },
  plugins: [],
}

