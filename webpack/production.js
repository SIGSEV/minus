var path = require('path');
var webpack = require('webpack');
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

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
    }]
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),

    new StatsWriterPlugin({
      transform: function (data) {
        console.log(data.assetsByChunkName.main);
        return JSON.stringify({
          main: data.assetsByChunkName.main
        })
      }
    })

  ]

};
