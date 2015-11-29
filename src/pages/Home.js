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
    const { value, fetching } = this.props.counter

    return (
      <div className='Home'>

        <h1 className='Counter'>{fetching ? 'Loading...' : value}</h1>

        <h3>{'Actions can be quite simple'}</h3>
        <div className='zsa'>
          <button onClick={::this.increment} disabled={fetching} className='DemoBtn'>{'Increment'}</button>
          <button onClick={::this.decrement} disabled={fetching} className='DemoBtn'>{'Decrement'}</button>
        </div>
        <h3>{'But also asynchronous, like an API call.'}</h3>
        <div className='z'>
          <button onClick={::this.fetch} disabled={fetching} className='DemoBtn'>{'Fake Fetch'}</button>
        </div>

      </div>
    )
  }

}

export default HomePage
