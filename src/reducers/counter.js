import { handleActions } from 'redux-actions'

const reducer = handleActions({

  INCREMENT: val => val + 1,
  DECREMENT: val => val - 1

}, 0)

export default reducer
