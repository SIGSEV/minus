import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCounter, increment, decrement } from 'actions/counter'

@connect(
  state => ({
    counter: state.counter
  })
)
class HomePage extends Component {

  increment () {
    const { dispatch } = this.props
    dispatch(increment())
  }

  decrement () {
    const { dispatch } = this.props
    dispatch(decrement())
  }

  fetch () {
    const { dispatch } = this.props
    dispatch(fetchCounter())
  }

  render () {
    const { counter } = this.props

    return (
      <div>

        <h1 className='Counter'>{counter.value}</h1>

        <div>{'Actions can be quite simple'}</div>
        <div>
          <button onClick={::this.increment}>{'Increment'}</button>
          <button onClick={::this.decrement}>{'Decrement'}</button>
        </div>
        <h3>{'But also asynchronous, like an API call.'}</h3>
        <div>
          <button onClick={::this.fetch}>{'Fetch'}</button>
        </div>

      </div>
    )
  }

}

export default HomePage
