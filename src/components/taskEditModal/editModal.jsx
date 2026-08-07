
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
            <div id='edit-modal' className="border-2 border-secondary w-[60dvw] h-[80dvh] rounded-2xl bg-primary-b text-secondary">
                <form onSubmit={handleSubmit}
                    className='px-10 py-7 flex flex-col items-center gap-15 h-full border border-red-500'
                >
                    <h2 class='text-center text-2xl font-extrabold'>Edit <span id="title-to-edit">'{taskToEdit.title}'</span></h2>
                    <div className='edit-title-container edit-box w-full flex flex-col items-center'>
                        <h3 className='bg-secondary rounded-lg w-3/4 text-white text-xl font-bold px-4 py-1'>Edit Title</h3>
                        <input 
                            type='text'
                            placeholder={taskToEdit.title}
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className='rounded-lg w-3/4 bg-primary text-secondary h-8 px-3'
                        />
                    </div>

                    <div className='edit-description-container edit-box flex flex-col items-center w-full'>
                        <h3 className='bg-secondary rounded-lg w-3/4 text-white text-xl font-bold px-4 py-1'>Edit Description</h3>
                        <input
                            type='text'
                            placeholder={taskToEdit.description}
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className='rounded-lg w-3/4 bg-primary text-secondary h-8 px-3'
                        />
                    </div>

                    <div className='priority-container edit-box flex flex-col items-center w-full'>
                        <h3 className='bg-secondary rounded-lg w-3/4 text-white text-xl font-bold px-4 py-1'>Edit priority</h3>
                        <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}
                            className='rounded-lg w-3/4 bg-primary text-secondary h-8 px-3'
                        >
                            <option value='common'>Common</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select>
                    </div>

                    <div id='button-container' className='mt-auto flex flex-row gap-6'>
                        <button 
                            type='submit'
                            id='save-button'
                            className='bg-secondary px-5 py-3 rounded-xl text-black text-[13px] cursor-pointer font-bold hover:bg-secondary hover:text-white'
                        >
                            Save Changes
                        </button>
                        <button 
                            type='button'
                            id='cancel-button'
                            onClick={handleCancel}
                            className='bg-primary-b px-5 py-3 rounded-xl text-white text-[13px] cursor-pointer font-bold hover:bg-red-400 hover:text-black'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div> 
        )
       
}

export default EditModal