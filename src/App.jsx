import { useState, useEffect, useRef } from 'react'
import './App.css'
import TaskList from './components/taskList/taskList.jsx'
import TaskForm from './components/taskForm/taskForm.jsx'
import EditModal from './components/taskEditModal/editModal.jsx'
import useTasks from './hooks/useTasks.js'

function App() {

  const {tasks, addTask,deleteTask, toggleTask, updateTask} = useTasks()

  
  //modals
  const [taskToEdit, setTaskToEdit] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isInitialContentLoaded = useRef(false)


  // local storage updater 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(dataList))
  }, [dataList])


  const editTask = (taskObj) => {
    setTaskToEdit(taskObj)
    setIsModalOpen(true)
  }

  const handleEditSave = (newTask) => {
    updateTask(newTask)
    setIsModalOpen(false)
    setTaskToEdit(null)
  }

  const handleEditCancel = () => {
    setTaskToEdit(null)
    setIsModalOpen(false)
  }


  

  return (
    <div id='app'>
      <div className='title-container'>
        <h1 className='title'>Task Manager v01</h1>
      </div>
      <div className='main-container'>
  
        <div className='form-container'>
          <TaskForm addTask={addTask}/>
        </div>

        <div className='list-container'>
          <TaskList 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
            editTask={editTask} 
            dataList={dataList}
          />
        </div>
      </div>
      <div id='edit-task-modal'>
        <EditModal 
          taskToEdit={taskToEdit}
          isModalOpen={isModalOpen}
          handleEditSave={handleEditSave}
          handleEditCancel={handleEditCancel}
        />
      </div>
    </div>
  )
}

export default App
