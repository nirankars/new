/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}", './src/components/**/*.jsx', './src/Layout/**/*.jsx', "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    textColors: {
      'primary': '#05264e'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '49': '49%',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'mainBlack': "#05264e",
        'mainBlue': '#3c65f5',
        'para': '#4f5e64',
        'lightPara': '#a0abb8',
        'value': '#6c757d',
        'BgBanner': '#f2f6fd',
        'BgBox': '#f8faff',
        'mainBorder': '#b4c0e0',
      },
      padding: {
        
      },
      boxShadow: {
        'defaultShadow': "0 10px 31px 0 rgb(7 152 255 / 9%)"
      }
    }
  },
  extend: {
    backgroundImage: {
    }
  }
}
