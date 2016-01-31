import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import createStore from 'createStore'
import routes from 'routes'

const store = createStore(browserHistory)

const root = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

const rootNode = document.getElementById('root')

render(root, rootNode)
