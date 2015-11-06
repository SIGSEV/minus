import { handleActions } from 'redux-actions'

const initialState = {
  val: 0
}

const reducer = handleActions({

  INCREMENT: state => ({
    val: state.val + 1
  }),

  DECREMENT: state => ({
    val: state.val - 1
  })

}, initialState)

export default reducer
