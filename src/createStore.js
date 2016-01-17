import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'

import reducer from 'reducers'
import routes from 'routes'

export default history => {

  const initialState = (process.env.BROWSER)
    ? window.__INITIAL_STATE__
    : {}

  const devTools = (process.env.BROWSER && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f

  const router = reduxReactRouter({ routes, history })

  return compose(
    applyMiddleware(thunk),
    router,
    devTools
  )(createStore)(reducer, initialState)

}
