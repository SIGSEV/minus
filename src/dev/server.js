import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

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
    const page = `
      <!doctype html>
      <html>
        <head>

          <base href='/'>
          <meta charset='utf-8'>

          <title>App</title>

        </head>
        <body>
          <div id='root'></div>
          <script src='dist/bundle.js'></script>
        </body>
      </html>
    `
    res.end(page)
  })

}
