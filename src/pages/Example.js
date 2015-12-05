import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as counterActions from 'actions/counter'

@connect(
  state => ({ counter: state.counter }),
  dispatch => bindActionCreators(counterActions, dispatch)
)
class Example extends Component {

  render () {

    const {
      counter,
      decrement,
      increment,
      incrementAsync
    } = this.props

    const { value, fetching } = counter

    return (
      <div>
        <div className='counter'>{value}</div>

        <button onClick={decrement}>
          {'decrement'}
        </button>

        <button onClick={increment}>
          {'increment'}
        </button>

        <button onClick={incrementAsync} disabled={fetching}>
          {'asynchronous increment'}
        </button>
      </div>
    )
  }

}

export default Example

