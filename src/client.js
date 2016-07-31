import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { Router, browserHistory, match } from 'react-router'

import createStore from 'store'
import routes from 'routes'

import 'styles/main.scss'

const store = createStore(browserHistory, window.__INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)

const matchRoutes = location =>
  match({ routes, location }, (error, redirectLocation, renderProps) => {

    if (redirectLocation) { return matchRoutes(redirectLocation) }

    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch: store.dispatch,
    }

    const { components } = renderProps

    if (window.__INITIAL_STATE__) {
      delete window.__INITIAL_STATE__
    } else {
      trigger('fetch', components, locals)
    }

  })

history.listen(matchRoutes)

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

const rootNode = document.getElementById('root')

render(root, rootNode)
