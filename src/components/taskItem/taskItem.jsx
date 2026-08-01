import './taskItem.css'

function TaskItem ({task, toggleTask, deleteTask, editTask}) {

    
    return (
        <div className='task-container'>
            <div className='task-container-texts'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
            <div className='task-container-interactivity'>
                <h3>{task.priority}</h3>
                <h3>{task.completed ? '✅ completed' : 'not completed'}</h3>
                
                <div className='btns-task-container'>
                    <input type='checkbox' checked={task.completed} onChange={() => toggleTask(task)}/>
                    <button onClick={() => editTask(task)}>Edit</button>
                    <button onClick={() => deleteTask(task)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem