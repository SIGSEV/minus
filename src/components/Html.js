import React from 'react'
import serialize from 'serialize-javascript'

const Html = ({ content, state, stats: { styles, main = 'bundle.js' } }) => (
  <html>
    <head>

      <title>{'[::]'}</title>

      <meta charSet='utf-8' />
      <link rel='icon' href='/assets/favicon.ico' type='image/x-icon' />

      {styles && <link href={`/dist/${styles}`} rel='stylesheet' />}

      <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${serialize(state)}` }} />

    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
      <script src={`/dist/${main}`} />
    </body>
  </html>
)

export default Html
