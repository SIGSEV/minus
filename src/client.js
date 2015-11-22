import React from 'react'
import { compose } from 'lodash'
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

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer, initialState)

const rootComponent = (
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>
)

const mountNode = document.getElementById('root')

render(rootComponent, mountNode)
