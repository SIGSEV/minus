import path from 'path'
import webpack from 'webpack'
import { StatsWriterPlugin } from 'webpack-stats-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
  },

  entry: [
    './src/client'
  ],

  output: {
    path: path.join(__dirname, '../dist'),
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

    // env variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true)
      }
    }),

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
