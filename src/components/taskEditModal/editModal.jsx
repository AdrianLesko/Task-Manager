import './editModal.css'
import {useState} from 'react'


function EditModal ({taskToEdit, isModalOpen, handleEditSave, handleEditCancel}) {

    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newPriority, setNewPriority] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTaskObj = {
            id: taskToEdit.id,
            title: newTitle,
            description: newDescription,
            completed: taskToEdit.completed,
            priority: newPriority
        }
        handleEditSave(newTaskObj)
        setNewTitle('')
        setNewDescription('')
    }

    const handleCancel = () => {
        setNewTitle('')
        setNewDescription('')
        handleEditCancel()
    }

    return isModalOpen &&
        (
            <div id='edit-modal'>
                <form onSubmit={handleSubmit}>
                    <h2>Edit <span id="title-to-edit">'{taskToEdit.title}'</span></h2>
                    <div className='edit-title-container edit-box'>
                        <h3>Edit Title</h3>
                        <input 
                            type='text'
                            placeholder={taskToEdit.title}
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>

                    <div className='edit-description-container edit-box'>
                        <h3>Edit Description</h3>
                        <input
                            type='text'
                            placeholder={taskToEdit.description}
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>

                    <div className='priority-container edit-box'>
                        <h3>Edit priority</h3>
                        <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                            <option value='common'>Common</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select>
                    </div>

                    <div id='button-container'>
                        <button 
                            type='submit'
                            id='save-button'
                        >
                            Save Changes
                        </button>
                        <button 
                            type='button'
                            id='cancel-button'
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div> 
        )
       
}

export default EditModal