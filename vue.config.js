const path = require('path');
const config = require('./lib.config');

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      css: {
        localIdentName:
          config.namespace +
          config.separator +
          '[name]' +
          config.separator +
          '[local]',
        camelCase: 'only'
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'postcss',
      patterns: [path.resolve(__dirname, 'components/_style/global.css')]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('file-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugin: [
            {
              removeHiddenElems: false
            }
          ]
        }
      });
  }
};
