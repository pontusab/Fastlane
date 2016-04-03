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
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
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
