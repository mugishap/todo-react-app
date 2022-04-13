/* eslint-disable no-unused-vars */
import React from 'react'

function ToDo({ todo }) {
    return (
        <div>
            <label htmlFor="todo">
                <input type="checkbox" checked={todo.complete} id="todo" />
            { todo.name }
            </label>
        </div>
    )
}

export default ToDo