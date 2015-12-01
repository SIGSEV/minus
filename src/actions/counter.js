import { createAction } from 'redux-actions'

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

const fetching = createAction('FETCHING')
const fetched = createAction('FETCHED')

export function incrementAsync () {
  return (dispatch) => {
    dispatch(fetching())
    setTimeout(() => {
      dispatch(increment())
      dispatch(fetched())
    }, 1e3)
  }
}
