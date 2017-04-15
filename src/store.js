import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducer from 'reducers'

const devTools = (process.env.__BROWSER__ && window.devToolsExtension)
  ? window.devToolsExtension()
  : f => f

export default (history, initialState) => {

  const middlewares = [
    routerMiddleware(history),
    thunk,
  ]

  const enhancers = compose(
    applyMiddleware(...middlewares),
    devTools,
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
