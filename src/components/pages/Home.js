import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as counterActions from '../../actions/counter'

@connect(
  state => ({
    counter: state.counter
  }),
  (dispatch) => bindActionCreators(counterActions, dispatch)
)
class Todo extends Component {

  render () {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <button onClick={decrement}>{'decrement'}</button>
        {' - '}
        <button onClick={increment}>{'increment'}</button>
        {' : '}
        {counter}
      </div>
    )
  }

}

export default Todo
