import React, { Component } from 'react'
import { Link } from 'react-router'

if (process.env.BROWSER === true) {
  require('styles/main.scss')
}

class Container extends Component {

  render () {

    return (
      <div>
        <div className='Navbar'>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </div>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default Container
