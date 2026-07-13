import TaskItem from "./taskItem"
import './taskList.css'

export default function TaskList (props) {
    const deleteTask = props.deleteTask
    const dataList = props.dataList

    return (

        <div className='task-list-container'>
            {dataList.map((task, index) => {
                return <TaskItem task={task} dataList={dataList} deleteTask={deleteTask} key={index}  />
            })}
        </div> 
    )
}