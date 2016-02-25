import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import createStore from 'createStore'
import routes from 'routes'

const store = createStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

const rootNode = document.getElementById('root')

render(root, rootNode)
