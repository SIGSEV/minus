import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {

  render () {
    return (
      <nav>
        <NavLink to='/'>
          {'Home'}
        </NavLink>
        <NavLink to='/example'>
          {'Example of actions'}
        </NavLink>
      </nav>
    )
  }

}

const NavLink = ({ to, children }) => (
  <span>
    {'[ '}<Link to={to}>{children}</Link>{' ]'}
  </span>
)

export default Nav
