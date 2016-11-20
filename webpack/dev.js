import webpack from 'webpack'
import path from 'path'

import webpackConfig from './config'

const src = path.resolve(__dirname, '../src')

export default {
  ...webpackConfig,

  devtool: 'eval',

  entry: [
    ...webpackConfig.entry,
    'webpack-hot-middleware/client',
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: src,
      query: { presets: ['react-hmre'] },
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader'],
      include: src,
    }],
  },

  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

}
