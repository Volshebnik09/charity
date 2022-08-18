var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: "../src/template/header/header.js",
    // index: "../src/pages/index/index.js"
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  output: {
    filename: 'scripts/[name].bundle.js',
  }
};