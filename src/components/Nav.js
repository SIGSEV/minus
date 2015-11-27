import React, { Component } from 'react'
import { Link } from 'react-router'

if (process.env.BROWSER) {
  require('styles/components/Nav.scss')
}

class Nav extends Component {

  render () {
    return (
      <div className='Nav'>
        <NavLink to='/'>
          {'Home'}
        </NavLink>
        <NavLink to='/login'>
          {'Login'}
        </NavLink>
      </div>
    )
  }

}

const NavLink = (props) => (
  <span className='NavLink'>
    {'[ '}<Link to={props.to}>{props.children}</Link>{' ]'}
  </span>
)

export default Nav
