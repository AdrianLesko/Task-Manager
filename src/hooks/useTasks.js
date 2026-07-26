import {useState, useEffect, useRef} from 'react'

export default function useTasks () {
    const [tasks, setTasks] = useState(() => {
        try {
        const savedTasks = localStorage.getItem('tasks')
        return savedTasks ? JSON.parse(savedTasks) : []
        } catch {
        return []
        }
    })
    
    const addTask = (taskObj) => {
        setTasks(prev=> [...prev, taskObj])
    }

    const deleteTask = (taskObj) => {
        setTasks(prev => prev.filter(task => task.id !== taskObj.id))
    }
   

    return {tasks, addTask, deleteTask}
}