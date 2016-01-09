import React, { Component } from 'react'
import io from 'socket.io-client'

import config from 'config'

if (process.env.BROWSER) { require('styles/main.scss') }

class App extends Component {

  componentWillMount () {
    const socket = io.connect(`:${config.socketPort}`)
    socket.on('connect', () => {})
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}

export default App
