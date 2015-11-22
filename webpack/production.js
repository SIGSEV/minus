import webpack from 'webpack'
import { StatsWriterPlugin } from 'webpack-stats-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import webpackConfig from './config'

export default {
  ...webpackConfig,

  output: {
    ...webpackConfig.output,
    filename: 'bundle-[hash].js'
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
    ...webpackConfig.plugins,

    // extract styles
    new ExtractTextPlugin('styles-[hash].css'),

    // optimizations
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),

    // write stats
    new StatsWriterPlugin({
      transform: data => JSON.stringify({
        main: data.assetsByChunkName.main[0],
        style: data.assetsByChunkName.main[1]
      })
    })

  ],

  progress: true,

  stats: {
    colors: true,
    reasons: false,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  }

}
