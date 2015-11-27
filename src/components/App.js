import React, { Component } from 'react'

if (process.env.BROWSER) {
  require('styles/main.scss')
}

import Nav from 'components/Nav'

class App extends Component {

  render () {

    return (
      <div className='brand'>

        <header>
          <h1>{'The Minus Project'}</h1>
          <em>{'Minimalist starter for universal apps'}</em>
        </header>

        <Nav />

        <hr/>

        {this.props.children}

      </div>
    )
  }
}

export default App
