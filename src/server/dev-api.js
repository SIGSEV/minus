import express from 'express'
import bodyParser from 'body-parser'

import api from 'api'
import config from 'config'

const server = express()

server.use(bodyParser.json())
server.use(api)

server.listen(config.apiPort, 'localhost', (err) => {
  /* eslint-disable no-console */
  if (err) { return console.log(err) }
  console.log(`[API] listening at localhost:${config.apiPort} in ${config.env} mode`)
  /* eslint-enable no-console */
})
