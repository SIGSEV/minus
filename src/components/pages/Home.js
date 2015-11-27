import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment } from 'actions/counter'

@connect(
  state => ({
    counter: state.counter
  })
)
class Home extends Component {

  handleIncrement () {
    const { dispatch } = this.props
    dispatch(increment())
  }

  render () {
    const { counter } = this.props
    return (
      <div>
        <button onClick={::this.handleIncrement}>{'increment'}</button>
        {' : '}
        {counter}
      </div>
    )
  }

}

export default Home
