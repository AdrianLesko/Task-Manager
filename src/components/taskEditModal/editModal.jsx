import './editModal.css'
import {useState} from 'react'


function EditModal ({taskToEdit, isModalOpen, handleEditSave, handleEditCancel}) {

    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTaskObj = {
            id: taskToEdit.id,
            title: newTitle,
            description: newDescription,
            completed: taskToEdit.completed
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
                    <div className='edit-title-container'>
                        <h3>Edit Title</h3>
                        <input 
                            type='text'
                            placeholder={taskToEdit.title}
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>

                    <div className='edit-description-container'>
                        <h3>Edit Description</h3>
                        <input
                            type='text'
                            placeholder={taskToEdit.description}
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>

                    <div id='button-container'>
                        <button 
                            type='submit'
                            id='save-button'
                        >
                            Save Changes
                        </button>
                        <button 
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