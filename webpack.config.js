var path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    // header: "../src/template/header/header.js",
    // index: "../src/pages/index/team.js",
    // team: "../src/pages/team/team.js",
    // news: "../src/pages/news/news.js",
    // charityPrograms: "../src/pages/charityPrograms/charityPrograms.js",
    contacts: "../src/pages/contacts/contacts.js"
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
    },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
  },
  output: {
    filename: 'scripts/[name].bundle.js',
  }
};