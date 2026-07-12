import { useState } from 'react'
import './App.css'
import TaskList from './components/taskList.jsx'
import TaskForm from './components/taskForm.jsx'

function App() {
  
  return (
    <div className='main-container'>
      <h1 className='title'>Task Manager v01</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
