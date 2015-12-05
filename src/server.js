import express from 'express'
import compression from 'compression'

import config from 'config'
import render from 'middlewares/render'
import devServer from 'middlewares/dev-server'

delete process.env.BROWSER

const server = express()

server.use('/assets', config.assetsFolder)

if (config.env === 'development') {
  devServer(server)
}

if (config.env === 'production') {
  server.use(compression())
  server.use('/dist', config.distFolder)
  server.use(render)
}

server.listen(config.port, 'localhost', err => {
  if (err) { return console.log(err) }
  console.log(`listening at localhost:${config.port} in ${config.env} mode`)
})
