/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid'
import './App.css'
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = id => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleAddTodo = e => {
    e.preventDefault()
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null

  }
  const handleClearTodos = (() => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  })

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className="up">
        <button onClick={handleClearTodos} className={'clear'}>Clear todos</button>
        <div>{todos.filter(todo => !todo.complete).length} left todos</div>
      </div>

      <div className="form">
        <form>
          <input ref={todoNameRef} type={'text'} />
          <button type={'submit'} className="add" onClick={handleAddTodo}><span className="material-icons">add</span></button>
        </form>
      </div>
      <ToDoList className={'list'} todos={todos} toggleTodo={toggleTodo} />
      <footer>&copy;Precieux 2022. All rights reserved</footer>
    </div>
  );
}

export default App;
