import TaskItem from "./taskItem"
import './taskList.css'

export default function TaskList (props) {
    const deleteTask = props.deleteTask
    const dataList = props.dataList
    const toggleTask = props.toggleTask
    const editTask = props.editTask
    return (

        <div className='task-list-container'>
            {dataList.map((task) => {
                return <TaskItem task={task} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} key={task.id}  />
            })}
        </div> 
    )
}