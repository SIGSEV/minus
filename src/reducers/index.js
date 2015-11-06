import { combineReducers } from 'redux'

import counter from './counter'
import todosReducer from './todos'

export default combineReducers({
  counter,
  todosReducer
})
