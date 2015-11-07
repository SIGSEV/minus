var path = require('path');
var webpack = require('webpack');
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    './src/client'
  ],

  output: {
    path: path.join(__dirname, '../src/dist'),
    filename: 'bundle-[hash].js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass'),
      exclude: /node_modules/
    }]
  },

  plugins: [

    new ExtractTextPlugin('styles-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true)
      }
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),

    new StatsWriterPlugin({
      transform: function (data) {
        return JSON.stringify({
          main: data.assetsByChunkName.main[0],
          style: data.assetsByChunkName.main[1]
        })
      }
    })

  ]

};
