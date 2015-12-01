import path from 'path'
import express from 'express'
import compression from 'compression'

import config from 'config'

delete process.env.BROWSER

const server = express()

server.use('/assets', express.static(path.join(__dirname, './assets')))

if (config.env === 'development') {
  require('dev/server')(server)
}

if (config.env === 'production') {
  const render = require('middlewares/render')

  server.use(compression())
  server.use('/dist', express.static(path.join(__dirname, '../dist')))
  server.use(render)
}

server.listen(config.port, 'localhost', err => {
  if (err) { return console.log(err) }
  console.log(`listening at http://localhost:${config.port} in ${config.env} mode`)
})
