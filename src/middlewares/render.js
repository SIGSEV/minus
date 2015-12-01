import React from 'react'
import { Provider } from 'react-redux'
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { minify } from 'html-minifier'

import routes from 'routes'
import reducer from 'reducers'
import { main, style } from '../../dist/stats.json'

export default (req, res) => {

  const location = createLocation(req.url)
  const store = createStore(reducer)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { return res.status(500).end('internal server error') }
    if (!renderProps) { return res.status(404).end('not found') }

    const InitialComponent = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    )

    const rootHtml = renderToString(InitialComponent)
    const initialState = store.getState()

    const page = `
      <!doctype html>
      <html>
        <head>

          <base href="/">
          <meta charset="utf-8">
          <link rel="icon" href="assets/favicon.ico" type="image/x-icon">

          <title>App</title>

          <link href="dist/${style}" rel="stylesheet"/>

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>

        </head>
        <body>
          <div id="root">${rootHtml}</div>
          <script src="dist/${main}"></script>
        </body>
      </html>
    `
    res.end(minify(page, {
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    }))

  })

}
