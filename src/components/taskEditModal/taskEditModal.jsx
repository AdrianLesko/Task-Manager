import './taskEditModal.css'
function TaskEditModal ({taskToEdit, isEditOpen}) {
   return isEditOpen ? (
    <div id='task-edit-modal'>
        <h3>Edit</h3>
        <form id='edit-form'>
            <label htmlFor='edit-title'>Edit "{taskToEdit.title}"</label>
            <input id='edit-title' type='text' value={taskToEdit.title} onChange={e=> taskToEdit.title = e.target.value}/>
            <br></br>
            <label htmlFor='edit-description'>Edit "{taskToEdit.title}" description</label>
            <input id='edit-description' type='text' value={taskToEdit.description} onChange={e => taskToEdit.description = e.target.value}/>
            <button type='submit'>Save</button>
        </form>
    </div>
   )
   : null
    
}

export default TaskEditModal