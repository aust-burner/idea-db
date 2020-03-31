import React, { useContext } from 'react';
import IdeaDetails from './IdeaDetails';

const IdeaList = (props) => {
    let ideas = props.ideas;
    let upVote = props.upVote;
    let downVote = props.downVote;
        ideas = [
            
            {ideaTitle: 'title', ideaDescription: 'desc'},
            {ideaTitle: 'title', ideaDescription: 'desc'}
    ]

    return ideas.length ? (

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