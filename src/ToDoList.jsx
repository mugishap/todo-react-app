import React from 'react'
import ToDo from './ToDo'
function ToDoList({ todos,toggleTodo }) {
  return (
    todos.map(todo => {
      return <ToDo key={todo.id} todo={ todo } toggleTodo={toggleTodo} />
    })
  )
}

export default ToDoList