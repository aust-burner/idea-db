import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const IdeaDetails = (props) => {
    let idea = props.idea;
    let upVote = props.upVote;
    let downVote = props.downVote;
    
    return (
        <li className="idea-wrapper">
            <div className="idea"> 
                <div className="title">{idea.title}</div>
                <div className="description">{idea.description}</div>
                <div className="voteCount">{idea.voteCount}</div>
            </div>
            <div className="voting">
                <button onClick={() => upVote(idea.id)}>Upvote</button>
                <button onClick={() => downVote(idea.id)}>Downvote</button>
            </div>
        </li>
    );
}

export default IdeaDetails;
