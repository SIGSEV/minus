import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'

import routes from '../routes'

const App = ({ store, Router, routerProps }) => (
  <Provider store={store}>
    <Router {...routerProps}>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  </Provider>
)

export default hot(module)(App)
