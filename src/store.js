import { createStore, applyMiddleware, compose } from 'redux'
import { createHistory } from 'history'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'

import config from 'config'
import reducer from 'reducers'
import routes from 'routes'

const initialState = (process.env.BROWSER && config.env === 'production')
  ? window.__INITIAL_STATE__
  : {}

const devTools = (process.env.BROWSER && window.devToolsExtension)
  ? window.devToolsExtension()
  : f => f

const router = (process.env.BROWSER)
  ? reduxReactRouter({ routes, createHistory })
  : f => f

export default compose(
  applyMiddleware(thunk),
  router,
  devTools
)(createStore)(reducer, initialState)
