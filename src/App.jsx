import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './components/taskList.jsx'
import TaskForm from './components/taskForm.jsx'

function App() {
  const [dataList, setDataList] = useState([])

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

  return (
    <>
      <h1 className='title'>Task Manager v01</h1>
      <div className='main-container'>
        

        <div className='form-container'>
          <TaskForm addtask={addTask}/>
        </div>

        <div className='list-container'>
          <TaskList deleteTask={deleteTask} dataList={dataList}/>
        </div>

      </div>
    </>
  )
}

export default App
