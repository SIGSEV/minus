import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import config from './config'
import reducer from './reducers'
import routes from './routes'

let store, DevTools, DebugPanel, LogMonitor
const initialState = {}
const history = createBrowserHistory()

if (config.env === 'development') {
  const { compose } = require('redux')
  const { devTools, persistState } = require('redux-devtools')
  DevTools = require('redux-devtools/lib/react').DevTools
  DebugPanel = require('redux-devtools/lib/react').DebugPanel
  LogMonitor = require('redux-devtools/lib/react').LogMonitor

  const finalStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)

  store = finalStore(reducer, initialState)
} else {
  store = createStore(reducer, initialState)
}

const rootComponent = (
  <div>
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>
    {config.env === 'development' && (
      <DebugPanel top right bottom>
        <DevTools store={store}
          monitor={LogMonitor}
          visibleOnLoad />
      </DebugPanel>
    )}
  </div>
)

const mountNode = document.getElementById('root')

render(rootComponent, mountNode)
