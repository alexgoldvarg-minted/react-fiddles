// Modules
var path = require('path'); // file path utilities
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // Css structuring
var autoprefixer = require('autoprefixer'); // adds vendor prefixes

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/js/main'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8080/public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss')}
    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 2 versions']})
  ],

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
