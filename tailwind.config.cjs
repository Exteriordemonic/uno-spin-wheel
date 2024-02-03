/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        red: '#FF0000', // Classic Uno red
        yellow: '#FFFF00', // Bright yellow
        green: '#008000', // Uno green
        blue: '#0000FF', // Uno blue
        lightRed: '#FF6666', // Lighter shade of red
        lightYellow: '#FFFF99', // Lighter shade of yellow
        lightGreen: '#66FF66', // Lighter shade of green
        lightBlue: '#6699FF', // Lighter shade of blue
        actionBlack: '#000000', // Black for action cards
        white: '#FFFFFF', // White for text or designs
        transparent: 'transparent', // Transparent for special cases
      }
    },
  },
  plugins: [],
}

