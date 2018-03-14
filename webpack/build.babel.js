import webpack from 'webpack'
import { StatsWriterPlugin } from 'webpack-stats-plugin'

import webpackConfig from './base'

export default {
  ...webpackConfig,
  mode: 'production',
  output: {
    ...webpackConfig.output,
    filename: 'bundle-[hash].js',
  },
  plugins: [
    ...webpackConfig.plugins,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new StatsWriterPlugin({
      transform: data => JSON.stringify({ main: data.assetsByChunkName.main }),
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
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
