import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../../webpack/development'

const fn = server => {

  const compiler = webpack(webpackConfig)

  const devMiddlewareConfig = {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }

  server.use(webpackDevMiddleware(compiler, devMiddlewareConfig))
  server.use(webpackHotMiddleware(compiler))

}

module.exports = fn
