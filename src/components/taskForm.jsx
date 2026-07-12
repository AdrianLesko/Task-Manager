import './taskForm.css'
import {useState} from 'react'

export default function TaskForm (props) {
    const addTask = props.addtask
    const [currentVal, setVal] = useState('')

    const handleChange = (e) => {
        setVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataObj = {
            title: currentVal,
            completed: false,
        }
        addTask(dataObj)
        setVal('')
    }

    return (
        <div className='component'>
            <form onSubmit={handleSubmit}>
              <input type='text' value={currentVal} onChange={handleChange} placeholder='Write your task here...'/>
              <button type='submit'>Add</button>
            </form>
        </div>
    )
}

