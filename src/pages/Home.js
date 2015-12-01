import React, { Component } from 'react'

class Home extends Component {

  render () {
    return (
      <div>
        <ul>
          <li>{'No bullshit. Just the code.'}</li>
          <li>{'100% ES6/ES7'}</li>
          <li>{'Fully linted, with large amount of eslint rules'}</li>
          <li>
            {'Happy developer experience:'}
            <ul>
              <li>{'Hot reloading components / reducers / styles'}</li>
              <li>{'Fine grained webpack configs, with dev / prod modes and optimized build.'}</li>
              <li>{'Out-of-the-box support of redux-devtools chrome extension'}</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

}

export default Home
