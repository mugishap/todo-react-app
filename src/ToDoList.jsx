import React from 'react'
import ToDo from './ToDo'
function ToDoList({ todos }) {
  return (
    todos.map(todo => {
      return <ToDo key={todo.id} todo={ todo } />
    })
  )
}

export default ToDoList