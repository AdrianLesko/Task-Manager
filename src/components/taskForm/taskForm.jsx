
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
        <div className='h-full'>
            <form onSubmit={handleSubmit}
                className='h-full flex flex-col gap-3 items-center'>
                <h2 className='w-full text-center bg-secondary rounded-lg py-1 text-white font-bold text-xl'>Add New Task</h2>
                <label className='relative'>
                    <input 
                        type='text' 
                        value={currentVal} 
                        onChange={(e) => setVal(e.target.value)} 
                        required
                        className='border-3 border-secondary rounded-lg focus:bg-secondary'
                        />
                    <span className='absolute top-0 left-0 translate-x-12 translate-y-px text-secondary font-mono'>Enter Title</span>
                </label>
                <label className='relative'>
                    <input 
                        type='text' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                        className='border-3 border-secondary rounded-lg'
                    />
                    <span className='absolute top-0 left-0 translate-x-4 translate-y-px text-secondary font-mono'>Enter Description</span>
                </label>
                <label htmlFor='add-select'
                    className='text-secondary font-bold'>Select Priority</label>
                <select 
                    id='add-select' 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                    className='border-3 text-secondary border-secondary w-54'
                >
                    <option value='common'>Common</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
              <button 
                type='submit'
                className='border-3 border-secondary w-30 rounded-lg font-bold text-secondary hover:bg-secondary hover:text-black'
                >Add task</button>
            </form>
        </div>
    )
}

