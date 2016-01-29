import webpack from 'webpack'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

import webpackConfig from './config'

export default {
  ...webpackConfig,

  devtool: 'sourcemap',

  entry: [
    ...webpackConfig.entry,
    'webpack-hot-middleware/client'
  ],

  module: {
    loaders: [...webpackConfig.loaders, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        plugins: [
          ['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }]
        ]
      }
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
