import { createAction } from 'redux-actions'

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

const fetching = createAction('FETCHING')
const fetched = createAction('FETCHED')

export function incrementAsync () {
  return (dispatch) => new Promise (resolve => {
    dispatch(fetching())
    setTimeout(() => {
      dispatch(increment())
      dispatch(fetched())
      resolve()
    }, 1e3)
  })
}
