import { useState, useEffect, useRef } from 'react'
import './App.css'
import TaskList from './components/taskList/taskList.jsx'
import TaskForm from './components/taskForm/taskForm.jsx'
import EditModal from './components/taskEditModal/editModal.jsx'
import useTasks from './hooks/useTasks.js'
import Filter from './components/filter/filter.jsx'

function App() {

  const {tasks, addTask,deleteTask, toggleTask, updateTask} = useTasks()

  //modals
  const [taskToEdit, setTaskToEdit] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  //filter 
  const [filterValue, setFilterValue] = useState('all')
  const handleFilterChange = (value) => {
    setFilterValue(value)
    console.log(value)
  }

  //edit task + edit modal // useEdit.js later
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

        <div className='filter-container'>
            <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />
        </div>

        <div className='list-container'>
          <TaskList 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
            editTask={editTask} 
            tasks={tasks}
            filterValue={filterValue}
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
