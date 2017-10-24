import webpack from 'webpack'

import webpackConfig from './base'

export default {
  ...webpackConfig,
  devtool: 'eval',
  entry: ['react-hot-loader/patch', ...webpackConfig.entry, 'webpack-hot-middleware/client'],
  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
