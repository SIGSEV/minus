import { render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from 'store'

import App from 'components/App'

import 'styles/main.scss'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)
const root = App(store, ConnectedRouter, { history })

render(root, document.getElementById('root'))
