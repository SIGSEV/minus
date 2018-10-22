import React from 'react'
import { hydrate, render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from './store'
import App from './components/App'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)
const r = __PROD__ ? hydrate : render

r(
  <App store={store} Router={ConnectedRouter} routerProps={{ history }} />,
  document.getElementById('root'),
)
