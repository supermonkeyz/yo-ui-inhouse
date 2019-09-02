module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-each': {
      plugins: {
        afterEach: [
          require('postcss-at-rules-variables')
        ]
      }
    },
    "postcss-color-mod-function": {},
    "postcss-mixins": {},
    "postcss-simple-vars": { silent: true },
    "postcss-nested": {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        // 'custom-properties': { preserve: false },
        'nesting-rules': false
      }
    },
    'postcss-functions': {
      functions: {
        background: function (value, angle = 'to right') {
          const arr = value.match(/[^()\s]+(\(.*?\))?/g).map(color => {
            if (color.split('&').length - 1 > 2) {
              console.error('\x1b[31m', 'color-stops overstep');
            }
            return color.replace(/&/g, ' ');
          });
          if (arr.length > 1) {
            return `linear-gradient(${angle}, ${arr.join(', ')})`;
          }
          return value;
        }
      }
    },
    "postcss-conditionals": {},
    'postcss-pxtorem': {
      rootValue: 16,
      propWhiteList: [
        '*',
        '!border',
        '!border-top',
        '!border-right',
        '!border-bottom',
        '!border-left',
        '!border-width'
      ],
      selectorBlackList: ['html'],
      mediaQuery: false
    },
    'postcss-sorting': {
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom'
    },
    // 'postcss-discard-duplicates': {},
    autoprefixer: {}
  }
};