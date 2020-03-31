import React, { useContext } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';

const IdeaDetails = ({ idea }) => {
    const { dispatch } = useContext(IdeaContext)

    const handleSubmit = (vote) => {}
    return (
        <div className="idea-wrapper">
            <div className="idea">
                <li onClick={() => dispatch({ type: "REMOVE_IDEA", id: idea.id})}>
                    <div className="title">{idea.title}</div>
                    <div className="description">{idea.description}</div>
                </li>
            </div>
            <div className="voting">
                <button onClick={() => handleSubmit('up')}>Upvote</button>
                <button onClick={() => handleSubmit('down')}>Downvote</button>
            </div>
        </div>
    );
}

export default IdeaDetails;
