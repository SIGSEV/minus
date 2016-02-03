delete process.env.BROWSER

const launcher = {
  '--app': () => require('./src/server'),
  '--api': () => require('./src/dev/api')
}

const param = process.argv[2]
const target = launcher[param]

if (target) {
  require('babel-register')
  target()
}
