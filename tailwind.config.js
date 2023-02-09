const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
   cursor: false,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '270': '270deg',
      '45' : '45deg'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'orange': '#f97316',
      'stone': '#292524',
      'border': '#d6d3d1',
      'gridbg': '#e4e4e7',
    },
    extend: {
      backgroundImage: theme => ({
       'tree': "url('https://markhorsell.com/recursive-tree/')",
       colors: {
        orange: colors.orange,
        emerald: colors.emerald,
      }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
