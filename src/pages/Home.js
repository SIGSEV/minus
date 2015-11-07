import React, { Component } from 'react'
import { dispatch } from 'redux'
import { connect } from 'react-redux'

import { increment } from '../actions/counter'

@connect(
  state => ({
    counter: state.counter
  })
)
class Todo extends Component {

  handleIncrement (e) {
    const { dispatch } = this.props
    dispatch(increment())
  }

  render () {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <button onClick={::this.handleIncrement}>{'increment'}</button>
        {' : '}
        {counter}
      </div>
    )
  }

}

export default Todo
