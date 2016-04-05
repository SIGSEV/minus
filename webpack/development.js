import webpack from 'webpack'
import path from 'path'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

import webpackConfig from './config'

const src = path.resolve(__dirname, '../src')

export default {
  ...webpackConfig,

  devtool: 'eval',

  entry: [
    ...webpackConfig.entry,
    'webpack-hot-middleware/client'
  ],

  module: {
    loaders: [...webpackConfig.loaders, {
      test: /\.js$/,
      loader: 'babel',
      include: src,
      query: { presets: ['react-hmre'] }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss'],
      include: src
    }]
  },

  postcss: wp => [postcssImport({ addDependencyTo: wp }), precss, autoprefixer],

  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}
