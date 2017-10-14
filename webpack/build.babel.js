import webpack from 'webpack'
import { StatsWriterPlugin } from 'webpack-stats-plugin'

import webpackConfig from './base'

export default {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    filename: 'bundle-[hash].js',
  },
  plugins: [
    ...webpackConfig.plugins,
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
      transform: data => JSON.stringify({ main: data.assetsByChunkName.main }),
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
