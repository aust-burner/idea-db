import React, { useContext } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';
import IdeaDetails from './IdeaDetails';

const IdeaList = () => {
    const { ideas } = useContext(IdeaContext)
    return ideas.length ? (

        ideas = [
            {ideaTitle: 'title', ideaDescription: 'desc'},
            {ideaTitle: 'title', ideaDescription: 'desc'}
        ]
        <div className="idea-list">
            <ul>
                {ideas.map(idea => {
                    return (
                        <IdeaDetails idea={idea} key={idea.id}></IdeaDetails>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            You seriously have no ideas?
        </div>
    )
       
}

export default IdeaList