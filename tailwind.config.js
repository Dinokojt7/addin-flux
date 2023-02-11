const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
   cursor: false,
  },
  mde: 'jit',
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
      'bermuda': '#a3a3a3',
      'orange': '#f97316',
      'stone': '#292524',
      'stoner':'#453C41',
      'border': '#d6d3d1',
      'gridbg': '#E9E8E8',
    },
    extend: {
      fontSize: {
        'xxs': '.65rem',
      },
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
