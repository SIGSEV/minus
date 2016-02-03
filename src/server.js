import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import config from 'config'
import api from 'api'
import render from 'middlewares/render'

const server = express()

if (config.env === 'development') {
  require('dev/server').default(server)
}

if (config.env === 'production') {
  server.use(compression())
  server.use(bodyParser.json())
  server.use('/dist', express.static(config.distFolder))
  server.use(config.apiUrl, api)
}

server.use('/assets', express.static(config.assetsFolder))
server.use(render)

server.listen(config.port, 'localhost', err => {
  /* eslint-disable no-console */
  if (err) { return console.log(err) }
  console.log(`[APP] listening at localhost:${config.port} in ${config.env} mode`)
  /* eslint-enable no-console */
})
