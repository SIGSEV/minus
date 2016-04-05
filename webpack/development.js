import webpack from 'webpack'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

import webpackConfig from './config'

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
      exclude: /node_modules/,
      query: { presets: ['react-hmre'] }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss'],
      exclude: /node_modules/
    }]
  },

  postcss: wp => [postcssImport({ addDependencyTo: wp }), precss, autoprefixer],

  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}
