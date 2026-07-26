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
                <label class='input-box'>
                    <input type='text' value={currentVal} onChange={(e) => setVal(e.target.value)} required/>
                    <span class='placeholder'>Enter Title</span>
                </label>
                <label class='input-box'>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    <span class='placeholder'>Enter Description</span>
                </label>
              <button type='submit'>Add task</button>
            </form>
        </div>
    )
}

