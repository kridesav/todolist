import { useState } from 'react'
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Simple Todolist</h1>
      <TodoList />
    </div>
  )
}

export default App
