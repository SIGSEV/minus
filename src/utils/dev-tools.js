import React from 'react'
import { compose, createStore } from 'redux'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

export const devStore = (reducer, initialState) => {
  return compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)(reducer, initialState)
}

export const DevComponent = ({ store }) => {
  return (
    <DebugPanel top right bottom>
      <DevTools store={store}
        monitor={LogMonitor}
        visibleOnLoad />
    </DebugPanel>
  )
}
