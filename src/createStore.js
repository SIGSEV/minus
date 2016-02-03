import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducer from 'reducers'
import devTools from 'dev/tools'

export default history => {

  const initialState = (process.env.BROWSER)
    ? window.__INITIAL_STATE__
    : {}

  const enhancers = compose(
    applyMiddleware(syncHistory(history), thunk),
    devTools
  )

  const store = createStore(reducer, initialState, enhancers)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store

}
