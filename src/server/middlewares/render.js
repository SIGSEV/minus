import path from 'path'
import React from 'react'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { Router, match, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import config from 'config'
import routes from 'core/routes'
import createStore from 'core/store'

import Html from 'core/components/Html'

const stats = (config.env === 'production')
  ? require(path.join(config.distFolder, 'stats.json'))
  : {}

export default (req, res) => {

  const { url } = req
  const memHistory = createMemoryHistory(url)
  const location = memHistory.createLocation(url)

  const store = createStore(memHistory, {})
  const history = syncHistoryWithStore(memHistory, store)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { return res.status(500).end('internal server error') }
    if (!renderProps) { return res.status(404).end('not found') }

    const { dispatch } = store

    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch
    }

    const { components } = renderProps

    trigger('fetch', components, locals).then(() => {

      const root = (
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      )

      const state = store.getState()

      const HtmlComponent = (
        <Html
          stats={stats}
          content={renderToString(root)}
          state={state} />
      )

      const markup = renderToStaticMarkup(HtmlComponent)
      const page = `<!doctype html>${markup}`

      res.end(page)

    }).catch(err => res.status(500).send(err.stack))
  })

}
