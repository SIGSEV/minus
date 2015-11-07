import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => {
  return {
    todos: state.todosReducer.todos
  }
})
class Todo extends Component {

  deleteTodo (todo) {
    console.log('deleting', todo)
  }

  renderTodo (todo, i) {
    return (
      <div key={i}>
        {todo.text}
        <button onClick={this.deleteTodo.bind(this, todo)}>
          {'delete this todo'}
        </button>
      </div>
    )
  }

  render () {
    const { todos } = this.props

    console.log('RENDER')
    return (
      <div>
        Toto component
        {todos.map(::this.renderTodo)}
      </div>
    )
  }

}

export default Todo
