delete process.env.BROWSER

require('babel-register')
require('babel-polyfill')

const path = require('path')
const piping = require('piping')
const appModulePath = require('app-module-path')

const config = require('./src/config').default

appModulePath.addPath(path.join(__dirname, 'src'))

const launcher = {
  '--app': () => require('./src/server'),
  '--api': () => require('./src/dev/api')
}

const pipingOpts = {
  hook: true,
  ignore: /(actions|components|reducers|styles)\/.*/
}

if (config.env !== 'development' || piping(pipingOpts)) {
  launcher[process.argv[2]]()
}
