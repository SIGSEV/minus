import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App } from 'components'
import { Home, Example } from 'pages'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='example' component={Example}/>
  </Route>
)
