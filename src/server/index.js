import express from 'express'
import compression from 'compression'
import path from 'path'

import config from 'config'
import render from 'server/render'

const server = express()

const stats = (config.env === 'production')
  ? require(path.join(config.distFolder, 'stats.json'))
  : {}

if (config.env === 'development') {
  require('./webpack').default(server)
}

if (config.env === 'production') {
  server.use(compression())
  server.use('/dist', express.static(config.distFolder))
}

server.use('/assets', express.static(config.assetsFolder))
server.use(render(stats))

server.listen(config.port, 'localhost', () => {
  console.log(`> http://localhost:${config.port} - ${config.env}`) // eslint-disable-line
})
