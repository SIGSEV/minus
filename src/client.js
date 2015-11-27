import React from 'react'
import { compose } from 'lodash'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxReactRouter, ReduxRouter } from 'redux-router'
import { createHistory } from 'history'

import config from 'config'
import reducer from 'reducers'
import routes from 'routes'

const initialState = (config.env === 'production')
  ? window.__INITIAL_STATE__
  : {}

const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer, initialState)

if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(require('./reducers'))
  })
}

const rootComponent = (
  <Provider store={store}>
    <ReduxRouter/>
  </Provider>
)

const mountNode = document.getElementById('root')

render(rootComponent, mountNode)
