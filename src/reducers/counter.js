import { handleActions } from 'redux-actions'

const initialState = { value: 0, fetching: false }

export default handleActions({

  INCREMENT: state => ({ ...state, value: state.value + 1 }),
  DECREMENT: state => ({ ...state, value: state.value - 1 }),
  FETCHING: state => ({ ...state, fetching: true }),
  FETCHED: state => ({ ...state, fetching: false })

}, initialState)
