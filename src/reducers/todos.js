import { handleActions } from 'redux-actions'

const initialState = {
  todos: [
    { id: 1, text: 'go to meetup' },
    { id: 2, text: 'contribute to a healthier world' }
  ]
}

export default handleActions({

  ADD_TODO: (state, todo) => ({
    todos: [
      ...state.todos,
      todo
    ]
  })

}, initialState)
