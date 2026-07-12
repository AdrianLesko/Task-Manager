import './taskItem.css'

function TaskItem ({task}) {
    return (
        <div className='task-container'>
            <h2>{task.title}</h2>
            <h3>{task.completed ? 'completed' : 'not completed'}</h3>
        </div>
    )
}

export default TaskItem