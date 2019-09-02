const path = require('path');
module.exports = {
  // set your styleguidist configuration here
  title: 'YoUI Guide',
  pagePerSection: true,
  components: 'components/**/[a-z]*.vue',
  defaultExample: true,
  renderRootJsx: path.join(__dirname, './styleguide.root.js')
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // }
};
