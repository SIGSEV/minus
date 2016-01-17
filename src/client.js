import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import createStore from 'createStore'

const store = createStore(createHistory())

const rootComponent = (
  <Provider store={store}>
    <ReduxRouter/>
  </Provider>
)

const mountNode = document.getElementById('root')

render(rootComponent, mountNode)
