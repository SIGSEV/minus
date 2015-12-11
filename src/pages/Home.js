import React, { Component } from 'react'

class Home extends Component {

  render () {
    return (
      <ul>
        <li>
          <strong style={{ color: 'red' }}>{'No. Fucking. Bullshit.'}</strong>
          {' Just the code.'}
        </li>
        <li>{'100% ES6/ES7 using Babel 6'}</li>
        <li>{'100% universal — page is rendered server side for initial load'}</li>
        <li>
          {'Use  '}
          <a target='_blank' href='https://github.com/facebook/react'>{'React'}</a>
          {', '}
          <a target='_blank' href='https://github.com/rackt/redux'>{'Redux'}</a>
          {' and '}
          <a target='_blank' href='https://github.com/rackt/react-router'>{'react-router'}</a>
        </li>
        <li>{'Fully linted, with large amount of eslint rules'}</li>
        <li>
          {'Happy developer experience:'}
          <ul>
            <li>{'Hot reloading components, reducers and styles'}</li>
            <li>{'Out-of-the-box support of redux-devtools chrome extension'}</li>
            <li>{'Ready to use build system, with assets renaming and optimizations'}</li>
          </ul>
        </li>
      </ul>
    )
  }

}

export default Home
