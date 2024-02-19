/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0148A4',
        'yellow':'#F6D000',
        'darkYellow':'#F6C143',
        'lightYellow':'#FFCD3E',
        'gray':'#333333',

        'dark-primary':'#212121',
        'dark-secondary':'#424242',
        'dark-header':'#363435',
        'dark-text':'#BDBDBD'

      },
      backgroundImage: {
        'bgImg': "url('/images/bg-footer.png')",
      },
      screens:{
        '3xl':'1640px',
        '2xl':'1240px',
        'xl':'1100px',
        'md':'840px',
        'sm':'680px',
      },
      fontFamily:{
        sofiaPro:'Sofia Pro',
        poppins:'Poppins',
      },
      fontSize:{
        ss:'10px'
      },
      animation: {
        'slidedown': 'slide .4s linear',
        'slideleft': 'slideLeft .6s linear',
        'slideright': 'slideRight .6s linear',
        'moveLeftRight':'moveLeftRight 3s infinite',
        'fadeout':'fadeOut 3s linear'
      },
      keyframes: {
        fadeOut:{
          '0%': { opacity:0 },
          '100%': { opacity:1 },
        },
        slide: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveLeftRight:{
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
