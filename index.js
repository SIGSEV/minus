const path = require('path')

delete process.env.BROWSER

const launcher = {
  '--app': () => require('./src/server'),
  '--api': () => require('./src/dev/api')
}

const param = process.argv[2]
const target = launcher[param]
const src = path.join(__dirname, 'src')

if (target) {
  require('babel-register')
  require('app-module-path').addPath(src)
  target()
}
