import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { Router, browserHistory, match } from 'react-router'

import createStore from 'createStore'
import routes from 'routes'

import 'styles/main.scss'

const store = createStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => {

  match({ routes, location }, (error, redirectLocation, renderProps) => {

    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch: store.dispatch
    }

    const { components } = renderProps

    if (window.__INITIAL_STATE__) {
      delete window.__INITIAL_STATE__
    } else {
      trigger('fetch', components, locals)
    }

  })
})

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

const rootNode = document.getElementById('root')

render(root, rootNode)
