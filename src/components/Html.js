import React from 'react'

export default ({ children, state, style, main = 'bundle.js' }) => (
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

      <div id='root'>{children}</div>
      <script src={`dist/${main}`}></script>

    </body>
  </html>
)
