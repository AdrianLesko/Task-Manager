import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './components/taskList.jsx'
import TaskForm from './components/taskForm.jsx'
import TaskEditModal from './components/taskEditModal.jsx'

function App() {
  const [dataList, setDataList] = useState([])
  const [taskToEdit, setTaskToEdit] = useState({})
  const [isEditOpen, setIsEditOpen] = useState(false)

  useEffect(() => {
    console.log(dataList)
  }, [dataList])

  const addTask = (taskObj) => {
    setDataList(prev=> [...prev, taskObj])
  }

  const deleteTask = (taskObj) => {
    console.log(`task "${taskObj.title}" deletion:`)
    setDataList(prev => prev.filter(task => task.id !== taskObj.id))
  }

  const toggleTask = (taskObj) => {
    const isCompleted = taskObj.completed
    isCompleted ? taskObj.completed = false : taskObj.completed = true
    console.log(taskObj)
  }

  const editTask = (taskObj) => {
    setTaskToEdit(taskObj)
    setIsEditOpen(true)
    console.log('edit mode opeened', taskToEdit, isEditOpen)
  }

  return (
    <>
      <h1 className='title'>Task Manager v01</h1>
      <div className='main-container'>
  
        <div className='form-container'>
          <TaskForm addTask={addTask}/>
        </div>

        <div className='list-container'>
          <TaskList deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} dataList={dataList}/>
        </div>
      </div>
      <TaskEditModal taskToEdit={taskToEdit} isEditOpen={isEditOpen}/>
    </>
  )
}

export default App
