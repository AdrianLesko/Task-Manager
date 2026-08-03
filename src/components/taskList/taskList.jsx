import TaskItem from "../taskItem/taskItem"
import './taskList.css'

export default function TaskList (props) {
    const deleteTask = props.deleteTask
    const tasks = props.tasks
    const toggleTask = props.toggleTask
    const editTask = props.editTask
    const filterValue = props.filterValue

    const filteredTasks = [...tasks].filter(task => {
        if (filterValue === 'completed') {
            return task.completed === true
        }
        if (filterValue === 'not-completed'){
            return task.completed === false
        } 
        return true
    })

    return (

            <div className='task-list-container'>
                {filteredTasks.map((task) => {
                    return (
                        <TaskItem 
                            task={task} 
                            toggleTask={toggleTask} 
                            editTask={editTask} 
                            deleteTask={deleteTask}
                            key={task.id}  
                        />
                    )
                })}
            </div> 
    )
}