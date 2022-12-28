/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...defaultTheme.extend,
      boxShadow: {
        '3xl': '0px 10px 50px rgba(0, 0, 0, 0.05)',
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      40: ['40px', '49px'],
      lg: ['18px', '29px'],
      xl: ['20px', '25px'],
      '2xl': [
        '24px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
    },
  },
  plugins: [],
};
