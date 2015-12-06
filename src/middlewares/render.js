import path from 'path'
import React from 'react'
import { Provider } from 'react-redux'
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { createStore } from 'redux'

import config from 'config'
import { Html } from 'components'
import routes from 'routes'
import reducer from 'reducers'

export default (req, res) => {

  const location = createLocation(req.url)
  const store = createStore(reducer)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { return res.status(500).end('internal server error') }
    if (!renderProps) { return res.status(404).end('not found') }

    const app = (
      <Provider store={store}>
        <RoutingContext {...renderProps}/>
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
        state={state}/>
    )

    const markup = renderToStaticMarkup(HtmlComponent)
    const page = `<!doctype html>${markup}`
    res.end(page)

  })

}
