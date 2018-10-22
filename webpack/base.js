import webpack from 'webpack'
import path from 'path'

import * as globals from '../src/globals'

export default {
  entry: ['@babel/polyfill', './src/client'],
  resolve: {
    modules: ['../src', '../node_modules'].map(p => path.resolve(__dirname, p)),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      ...Object.keys(globals).reduce((acc, key) => {
        acc[key] = JSON.stringify(globals[key])
        return acc
      }, {}),
      __BROWSER__: JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
}
