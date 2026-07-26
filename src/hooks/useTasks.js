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
   

    return {tasks, addTask}
}