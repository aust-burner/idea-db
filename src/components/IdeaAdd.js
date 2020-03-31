import React, { useContext, useState } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';

const IdeaForm = () => {
    const { addIdea } = useContext(IdeaContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addMovie(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Idea Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Movie Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input type="submit" value='Add Idea'/>
        </form>
    )
}

export default IdeaAdd