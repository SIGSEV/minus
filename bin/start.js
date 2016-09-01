delete process.env.BROWSER

require('babel-register')
require('babel-polyfill')
require('ignore-styles')

require('../src/server')
