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

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    const addTask = (taskObj) => {
        setTasks(prev=> [...prev, taskObj])
    }

    const deleteTask = (taskObj) => {
        setTasks(prev => prev.filter(task => task.id !== taskObj.id))
    }
   
    const toggleTask = (taskObj) => {
      setTasks((prev) => {
        return prev.map((task) =>
          task.id === taskObj.id
            ? { ...task, completed: !task.completed }
            : task,
        );
      });
    };

    const updateTask = (newTask) => {
      setTasks((prev) => {
        return prev.map((task) =>
          task.id === newTaskObj.id ? newTaskObj : task,
        )
      })
    }

    return {tasks, addTask, deleteTask, toggleTask, updateTask}
}