import React from 'react'
import { hydrate, render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'

import createStore from 'store'

import App from 'components/App'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

const rootNode = document.getElementById('root')

const r = Component =>
  (__PROD__ ? hydrate : render)(
    <AppContainer>{Component(store, ConnectedRouter, { history })}</AppContainer>,
    rootNode,
  )

r(App)

if (module.hot) {
  module.hot.accept('components/App', () => {
    const nextApp = require('components/App')
    r(nextApp)
  })
}
