import path from 'path'
import React from 'react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { RouterContext, match } from 'react-router'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import config from 'config'
import routes from 'routes'
import createStore from 'createStore'

import Html from 'Html'

export default (req, res) => {

  const { url } = req
  const history = createMemoryHistory(url)
  const location = history.createLocation(url)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { return res.status(500).end('internal server error') }
    if (!renderProps) { return res.status(404).end('not found') }

    const store = createStore(history)

    Promise.all([
      // initialization
    ]).then(() => {

      const app = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const state = store.getState()

      const stats = (config.env === 'production')
        ? require(path.join(config.distFolder, 'stats.json'))
        : {}

      const HtmlComponent = (
        <Html
          stats={stats}
          content={renderToString(app)}
          state={state} />
      )

      const markup = renderToStaticMarkup(HtmlComponent)
      const page = `<!doctype html>${markup}`

      res.end(page)

    })
  })

}
