import React from 'react'
import { Provider } from 'react-redux'
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'

import { Html } from 'components'
import routes from 'routes'
import reducer from 'reducers'
import { main, style } from '../../dist/stats.json'

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

    const HtmlComponent = (
      <Html
        main={main}
        style={style}
        children={app}
        state={state}/>
    )

    const markup = renderToString(HtmlComponent)
    const page = `<!doctype html>${markup}`
    res.end(page)

  })

}
