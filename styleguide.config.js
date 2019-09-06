const path = require('path');
module.exports = {
  // set your styleguidist configuration here
  title: 'YoUI Guide',
  pagePerSection: true,
  // components: 'components/**/[a-z]*.vue',
  defaultExample: true,
  renderRootJsx: path.join(__dirname, './styleguide.root.js'),
  sections: [
    {
      name: 'Basic',
      components: [
        './components/button/button.vue',
        './components/spinner/spinner.vue'
      ],
      sectionDepth: 0
    }
  ]
  // webpackConfig: {
  //   // custom config goes here
  // }
};
