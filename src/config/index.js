const env = process.env.NODE_ENV || 'development'
const config = require(`./${env}`)

export default {
  port: 3000,
  ...config
}
