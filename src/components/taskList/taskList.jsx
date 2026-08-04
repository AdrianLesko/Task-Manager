import TaskItem from "../taskItem/taskItem"
import './taskList.css'

export default function TaskList (props) {
    const deleteTask = props.deleteTask
    const tasks = props.tasks
    const toggleTask = props.toggleTask
    const editTask = props.editTask
    const filterValue = props.filterValue
    const sortingValue = props.sortingValue
   

    const sortTasks = (tasks, sortingValue) => {
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

            case "priority" : {
                const high = []
                const medium = []
                const common = []

                sortedTasks.forEach(task => {
                    if (task.priority === 'high') {
                        high.push(task)
                    } else if (task.priority === 'medium') {
                        medium.push(task)
                    } else {
                        common.push(task)
                    }
                })

                return high.concat(medium.concat(common))
            };
            default: {
                return sortedTasks
            }
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

    const sortedFilteredTasks = sortTasks(filteredTasks, sortingValue)

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