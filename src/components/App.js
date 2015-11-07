import React, { Component } from 'react'
import { Link } from 'react-router'

if (process.env.BROWSER === true) {
  require('../styles/main.scss')
}

class Container extends Component {

  render () {

    return (
      <div>
        <Link to='/'>Home</Link>
        {' - '}
        <Link to='/todo'>Todos</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default Container
