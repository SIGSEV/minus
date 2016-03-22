delete process.env.BROWSER

require('babel-register')

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

const pipe = piping(pipingOpts)

if (config.env !== 'development' || pipe) {
  launcher[process.argv[2]]()
}
