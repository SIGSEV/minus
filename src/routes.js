import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App } from 'components'
import { Home, Login } from 'components/pages'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login}/>
  </Route>
)
