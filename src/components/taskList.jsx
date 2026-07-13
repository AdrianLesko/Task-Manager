import TaskItem from "./taskItem"
import './taskList.css'

export default function TaskList (props) {
    const deleteTask = props.deleteTask
    const dataList = props.dataList
    const toggleTask = props.toggleTask
    return (

        <div className='task-list-container'>
            {dataList.map((task) => {
                return <TaskItem task={task} toggleTask={toggleTask} deleteTask={deleteTask} key={task.id}  />
            })}
        </div> 
    )
}