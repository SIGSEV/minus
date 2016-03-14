import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import createStore from 'createStore'
import routes from 'routes'

const store = createStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

function routerUpdate () {
  const { components, location, params } = this.state // eslint-disable-line
  const { dispatch } = store

  trigger('fetch', components, {
    path: location.pathname,
    query: location.query,
    params,
    dispatch
  })
}

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={routerUpdate} />
  </Provider>
)

const rootNode = document.getElementById('root')

render(root, rootNode)
