import './taskForm.css'
import {useState} from 'react'

export default function TaskForm (props) {
    const addTask = props.addTask
    const isCompleted = props.isTaskCompleted
    const [currentVal, setVal] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataObj = {
            id: Date.now(),
            title: currentVal,
            description: description,
            completed: false,
        }
        addTask(dataObj)
        setVal('')
        setDescription('')
    }

    return (
        <div className='component'>
            <form onSubmit={handleSubmit}>
                <h2 className='add-task-title'>Add New Task</h2>
              <input type='text' value={currentVal} onChange={(e) => setVal(e.target.value)} placeholder='Task title...' required/>
              <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description...'/>
              <button type='submit'>Add task</button>
            </form>
        </div>
    )
}

