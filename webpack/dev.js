import webpack from 'webpack'

import webpackConfig from './base'

export default {
  ...webpackConfig,
  mode: 'development',
  devtool: 'eval',
  entry: [
    ...webpackConfig.entry,
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ],
  plugins: [new webpack.HotModuleReplacementPlugin(), ...webpackConfig.plugins],
}
