import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducer from 'reducers'

export default history => {

  const initialState = (process.env.BROWSER)
    ? window.__INITIAL_STATE__
    : {}

  const devTools = (process.env.BROWSER && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f

  return compose(
    applyMiddleware(syncHistory(history)),
    applyMiddleware(thunk),
    devTools
  )(createStore)(reducer, initialState)

}
