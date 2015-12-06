import React from 'react'
import { renderToString } from 'react-dom/server'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import { Html } from 'components'
import webpackConfig from '../../webpack/development'

export default server => {

  const compiler = webpack(webpackConfig)

  const devMiddlewareConfig = {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }

  server.use(webpackDevMiddleware(compiler, devMiddlewareConfig))
  server.use(webpackHotMiddleware(compiler))

  server.use((req, res) => {
    const HtmlComponent = <Html/>
    const markup = renderToString(HtmlComponent)
    const page = `<!doctype html>${markup}`
    res.end(page)
  })

}
