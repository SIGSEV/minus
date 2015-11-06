import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Container extends Component {

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
