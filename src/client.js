import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import createStore from 'createStore'

const store = createStore()

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
