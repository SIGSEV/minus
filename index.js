const path = require('path')
const piping = require('piping')

delete process.env.BROWSER

const launcher = {
  '--app': () => require('./src/server'),
  '--api': () => require('./src/dev/api')
}

const isDev = process.env.NODE_ENV === 'development'
const param = process.argv[2]
const target = launcher[param]
const src = path.join(__dirname, 'src')

const pipingOpts = {
  hook: true
}

if (target && (!isDev || piping(pipingOpts))) {
  require('babel-register')
  require('app-module-path').addPath(src)
  target()
}
