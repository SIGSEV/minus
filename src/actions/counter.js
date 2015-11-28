import { createAction } from 'redux-actions'

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const fetching = createAction('FETCHING')
export const fetched = createAction('FETCHED')

export function fetchCounter () {
  return (dispatch) => {

    dispatch(fetching())
    const delay = Math.floor(Math.random() * 3) + 1 * 1e3
    const newValue = Math.floor(Math.random() * 100)

    setTimeout(() => {
      dispatch(fetched(newValue))
    }, delay)
  }
}
