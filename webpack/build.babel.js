import webpack from 'webpack'
import { StatsWriterPlugin } from 'webpack-stats-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import webpackConfig from './base'

export default {
  ...webpackConfig,

  output: {
    ...webpackConfig.output,
    filename: 'bundle-[hash].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader', 'autoprefixer-loader'],
      }),
      exclude: /node_modules/,
    }],
  },

  plugins: [
    ...webpackConfig.plugins,

    new ExtractTextPlugin('styles-[hash].css'),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true, // eslint-disable-line
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true, // eslint-disable-line
        evaluate: true,
        if_return: true, // eslint-disable-line
        join_vars: true, // eslint-disable-line
      },
      output: {
        comments: false,
      },
    }),

    new StatsWriterPlugin({
      transform: data => JSON.stringify({
        main: data.assetsByChunkName.main[0],
        styles: data.assetsByChunkName.main[1],
      }),
    }),

  ],

  stats: {
    colors: true,
    reasons: false,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },

}
