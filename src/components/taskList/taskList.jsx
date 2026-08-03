import TaskItem from "../taskItem/taskItem"
import './taskList.css'

export default function TaskList (props) {
    const deleteTask = props.deleteTask
    const tasks = props.tasks
    const toggleTask = props.toggleTask
    const editTask = props.editTask
    const filterValue = props.filterValue
    const sortingValue = props.sortingValue

    const sortTasks = (tasks) => {
        const sortedTasks = [...tasks]

        switch (sortingValue) {
            case "latest" : {
                return sortedTasks
            };

            case "completed-first" : {
                const completed = []
                const notCompleted = []

                sortedTasks.forEach(task => {
                    task.completed ? completed.push(task) : notCompleted.push(task)
                })

                return completed.concat(notCompleted)
            };

            
        }   
    }


    const filteredTasks = tasks.filter(task => {
        if (filterValue === 'completed') {
            return task.completed === true
        }
        if (filterValue === 'not-completed'){
            return task.completed === false
        } 
        return true
    })

    const sortedFilteredTasks = sortTasks(filteredTasks)

    return (

            <div className='task-list-container'>
                {sortedFilteredTasks.map((task) => {
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