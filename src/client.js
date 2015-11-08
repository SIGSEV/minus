import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import config from 'config'
import reducer from 'reducers'
import routes from 'routes'

const history = createBrowserHistory()

const initialState = (config.env === 'production')
  ? window.__INITIAL_STATE__
  : {}

const devTools = (config.devtools)
  ? require('./dev/tools')
  : null

const store = (config.devtools)
  ? devTools.devStore(reducer, initialState)
  : createStore(reducer, initialState)

const rootComponent = (
  <div>
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>
    {config.devtools && <devTools.DevComponent store={store} />}
  </div>
)

const mountNode = document.getElementById('root')

render(rootComponent, mountNode)
