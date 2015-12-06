import path from 'path'
import React from 'react'
import { Provider } from 'react-redux'
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import config from 'config'
import routes from 'routes'
import createStore from 'createStore'

const Html = ({ content, state, stats: { style, main = 'bundle.js' } }) => (
  <html>
    <head>

      <base href='/'/>
      <meta charSet='utf-8'/>
      <link rel='icon' href='assets/favicon.ico' type='image/x-icon'/>

      <title>App</title>

      {style && (
        <link href={`dist/${style}`} rel='stylesheet'/>
      )}

      {state && (
        <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${JSON.stringify(state)}` }}/>
      )}

    </head>
    <body>

      <div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
      <script src={`dist/${main}`}></script>

    </body>
  </html>
)

export default (req, res) => {

  const location = createLocation(req.url)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { return res.status(500).end('internal server error') }
    if (!renderProps) { return res.status(404).end('not found') }

    const store = createStore()

    Promise.all([
      // initialization
    ]).then(() => {

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
  })

}
