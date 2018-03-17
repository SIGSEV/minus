import webpack from 'webpack'

import webpackConfig from './base'

export default {
  ...webpackConfig,
  mode: 'development',
  devtool: 'eval',
  entry: [...webpackConfig.entry, 'webpack-hot-middleware/client'],
  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
