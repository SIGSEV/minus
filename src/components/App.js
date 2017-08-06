import React from 'react'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'

import routes from 'routes'

export default (store, Router, routerProps) =>
  <Provider store={store}>
    <Router {...routerProps}>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </Router>
  </Provider>
