const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/client',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.woff2?($|\?)/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
