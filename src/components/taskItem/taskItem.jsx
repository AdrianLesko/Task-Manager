import './taskItem.css'

function TaskItem ({task, toggleTask, deleteTask, editTask}) {
   
   
    return (
        <div className='task-container'>
            <div className='content-task-container'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <h3>{task.completed ? 'completed' : 'not completed'}</h3>
            </div>
            <div className='btns-task-container'>
                <input type='checkbox' checked={task.completed} onChange={() => toggleTask(task)}/>
                <button onClick={() => editTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task)}>Delete</button>
            </div>
        </div>
    )
}

export default TaskItem