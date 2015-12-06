import React from 'react'

if (process.env.BROWSER) { require('styles/main.scss') }

export default ({ children }) => (
  <div className='brand'>

    <header>

      <h1>{'minus'}</h1>
      <em>{'Minimalist starter for universal apps'}</em>

    </header>

    {children}

    <footer>
      <em>{'No fucking copyright. '}</em>
      <a target='_blank' href='https://github.com/SIGSEV/minus'>Code is on Github</a>
    </footer>

  </div>
)
