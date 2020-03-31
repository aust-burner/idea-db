import React, { useState } from 'react';


const IdeaAdd = (props) => {
    const addIdea = props.addIdea
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addIdea(title, description)
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
                placeholder="Idea Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input type="submit" value='Add Idea'/>
        </form>
    )
}

export default IdeaAdd