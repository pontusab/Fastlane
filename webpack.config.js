var webpack = require('webpack');
var config = require('./config');
var path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:'+ config.PORT +'/__webpack_hmr',
    './src/client',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.woff2?($|\?)/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};


