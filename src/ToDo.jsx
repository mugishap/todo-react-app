/* eslint-disable no-unused-vars */
import React from 'react'

function ToDo({ todo, toggleTodo }) {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label htmlFor="todo">
                <input type="checkbox" onChange={handleTodoClick} checked={todo.complete} id="todo" />
                {todo.name}
            </label>
        </div>
    )
}

export default ToDo