/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      ...defaultTheme.fontSize,
      40: ['40px', '49px'],
    },
  },
  plugins: [],
};
