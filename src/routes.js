import React from 'react'
import { Route } from 'react-router'

import { App } from './components'
import { Todo } from './components/pages'

export default (
  <Route path='/' component={App}>
    <Route path='/todo' component={Todo} />
  </Route>
)
