import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {

  render () {
    return (
      <div className='Nav'>
        <NavLink to='/'>
          {'Home'}
        </NavLink>
        <NavLink to='/example'>
          {'Example of actions'}
        </NavLink>
      </div>
    )
  }

}

const NavLink = ({ to, children }) => (
  <span className='NavLink'>
    {'[ '}<Link to={to}>{children}</Link>{' ]'}
  </span>
)

export default Nav
