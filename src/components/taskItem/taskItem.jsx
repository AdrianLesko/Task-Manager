
function TaskItem ({task, toggleTask, deleteTask, editTask}) {

    
    return (
        <div className='flex flex-row border-2 border-secondary rounded-lg mt-1 justify-between pl-2
            pr-3 items-center bg-white
         '>
            <div className='flex flex-row items-center justify-start gap-2'>
                <div className=''>
                    <input className='hover:cursor-pointer' type='checkbox' checked={task.completed} onChange={() => toggleTask(task)}/>
                </div>
                <div className='flex flex-col items-start justify-center py-2'>
                    <h2 className='font-extrabold text-xl text-primary'>{task.title}</h2>
                    <p>{task.description}</p>
                </div>
            </div>
            <div className='flex flex-row gap-10'>
                <h3 className='bg-primary-b px-2 py-1 rounded-xl cursor-default text-white text-[13px] font-bold'>{task.priority}</h3>
                <h3 className='bg-primary-b px-2 py-1 rounded-xl cursor-default text-white text-[13px] font-bold'>{task.completed ? '✅ completed' : 'not completed'}</h3>
                
                <div className='flex flex-row gap-2'>
                    <button className='bg-primary-b px-4 py-1 rounded-xl text-white text-[13px] cursor-pointer font-bold hover:bg-secondary hover:text-black' onClick={() => editTask(task)}>Edit</button>
                    <button className='bg-primary-b px-4 py-1 rounded-xl text-white text-[13px] cursor-pointer font-bold hover:bg-red-400 hover:text-black'onClick={() => deleteTask(task)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem