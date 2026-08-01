import './taskForm.css'
import {useState} from 'react'

export default function TaskForm (props) {
    const addTask = props.addTask
    const isCompleted = props.isTaskCompleted
    const [currentVal, setVal] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('common')

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataObj = {
            id: Date.now(),
            title: currentVal,
            description: description,
            completed: false,
            priority: priority,
        }
        console.log(dataObj)
        addTask(dataObj)
        setVal('')
        setDescription('')
    }

    return (
        <div className='component'>
            <form onSubmit={handleSubmit}>
                <h2 className='add-task-title'>Add New Task</h2>
                <label className='input-box'>
                    <input type='text' value={currentVal} onChange={(e) => setVal(e.target.value)} required/>
                    <span className='placeholder'>Enter Title</span>
                </label>
                <label className='input-box'>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    <span className='placeholder'>Enter Description</span>
                </label>
                <label htmlFor='add-select'>Select Priority</label>
                <select id='add-select' value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value='common'>Common</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
              <button type='submit'>Add task</button>
            </form>
        </div>
    )
}

