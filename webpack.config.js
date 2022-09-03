var path = require('path');


module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    // header: "../src/template/header/header.js",
    // index: "../src/pages/index/index.js",
    // team: "../src/pages/team/team.js",
    // news: "../src/pages/news/news.js",
    // charityPrograms: "../src/pages/charityPrograms/charityPrograms.js",
    // contacts: "../src/pages/contacts/contacts.js",
    // helpNow: "../src/pages/helpNow/helpNow.js",
    // requisites: "../src/pages/requisites/requisites.js",
    // reports: "../src/pages/reports/reports.js",
    // documents: "../src/pages/documents/documents.js",
    calculator: "../src/pages/calculator/calculator.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: "all"
        }
      }
    }
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
  },


};