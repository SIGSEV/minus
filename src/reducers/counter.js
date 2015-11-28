import { handleActions } from 'redux-actions'

const reducer = handleActions({

  INCREMENT: state => {
    return { ...state, value: state.value + 1 }
  },
  DECREMENT: state => {
    return { ...state, value: state.value - 1 }
  },
  FETCHING: state => {
    return { ...state, fetching: true }
  },
  FETCHED: (state, action) => {
    return { value: action.payload, fetching: false }
  }

}, {
  value: 0,
  fetching: false
})

export default reducer
