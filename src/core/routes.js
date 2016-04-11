import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'core/components/App'
import Home from 'core/components/Home'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
)
