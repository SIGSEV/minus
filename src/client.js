import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import reducer from './reducers'
import routes from './routes'

const initialState = {}
const history = createBrowserHistory()
const store = createStore(reducer, initialState)

const rootComponent = (
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>
)

const mountNode = document.getElementById('root')

render(rootComponent, mountNode)
