import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { matchPath } from 'react-router-dom'

import routes from '../routes'
import createStore from '../store'
import page from './page'

import App from '../components/App'

export default stats => async (req, res) => {
  try {
    const store = createStore()

    const context = {}
    const promises = []

    routes.some(route => {
      const match = matchPath(req.url, route)
      if (match && route.load) {
        promises.push(route.load(store))
      }
      return match
    })

    await Promise.all(promises)

    const routerProps = { location: req.url, context }
    const root = <App store={store} Router={StaticRouter} routerProps={routerProps} />
    const html = __DEV__ ? '' : renderToString(root)

    res.end(page({ html, state: store.getState(), main: stats.main || 'bundle.js' }))
  } catch (err) {
    res.status(500).send(err.stack)
  }
}
