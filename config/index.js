const env = process.env.NODE_ENV || 'development'
const config = require(`./${env}`)

export default {
  env,
  port: 3000,
  devtools: !!process.env.DEVTOOLS,
  ...config
}
