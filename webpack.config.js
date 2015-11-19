// Modules
// var path = require('path'); // file path utilities
// var ExtractTextPlugin = require('extract-text-webpack-plugin'); // Css structuring
// var autoprefixer = require('autoprefixer'); // adds vendor prefixes

module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
