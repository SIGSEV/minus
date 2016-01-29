import webpack from 'webpack'
import { StatsWriterPlugin } from 'webpack-stats-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

import webpackConfig from './config'

export default {
  ...webpackConfig,

  output: {
    ...webpackConfig.output,
    filename: 'bundle-[hash].js'
  },

  module: {
    loaders: [...webpackConfig.loaders, {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss'),
      exclude: /node_modules/
    }]
  },

  postcss: () => [precss, autoprefixer],

  plugins: [
    ...webpackConfig.plugins,

    // extract styles
    new ExtractTextPlugin('styles-[hash].css'),

    // optimizations
    new webpack.optimize.OccurrenceOrderPlugin(),
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
