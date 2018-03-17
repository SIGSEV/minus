import React from 'react'
import { hydrate, render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from 'store'

import App from 'components/App'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

const r = __PROD__ ? hydrate : render
const rootNode = document.getElementById('root')
const rootComponent = <App store={store} Router={ConnectedRouter} routerProps={{ history }} />

r(rootComponent, rootNode)
