import TaskItem from "./taskItem"
import './taskList.css'

export default function TaskList (props) {
    const dataList = props.showTask

    return (

        <div className='task-list-container'>
            {dataList.map((task, index) => {
                return <TaskItem task={task} key={index} />
            })}
        </div> 
    )
}