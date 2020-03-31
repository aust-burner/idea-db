import React, { useState } from 'react';
import IdeaList from '../IdeaList';
import IdeaAdd from '../IdeaAdd';
import { v4 as uuidv4 } from 'uuid';

import { withAuthorization } from '../Session';

const HomePage = () => {
  let initialIdeas = [
            
    {title: 'testTitle1', description: 'testDescription1', id: 1, voteCount: 5},
    {title: 'testTitle2', description: 'testDescription2', id: 2, voteCount: 2}
  ]

  const [state, setState] = useState({ideas:initialIdeas})

  let upVote = (id) => {
    console.log('upVote', id)
    state.ideas.forEach((idea) => {
    if(id === idea.id) {
    idea.voteCount +=1}
    })
    console.log(state.ideas)
    setState ({ideas: state.ideas})
  }

  let downVote = (id) => {
    console.log('downvote', id)
    state.ideas.forEach((idea) => {
      if(id === idea.id) {
      idea.voteCount -=1}
      })
      console.log(state.ideas)
      setState ({ideas: state.ideas})
    }
  }

  let addIdea = (title, description) => {
    console.log('Add Idea', title, description)
    
    setState({ideas: [...state.ideas, {title: title, description: description, id: uuidv4(), voteCount: 0}]})
    
  }



  return(
    <div>
      <h1>Welcome to IOTD</h1>
      <IdeaList ideas={state.ideas} upVote={upVote} downVote={downVote} />
      <div>
        IOTD
      </div>
      <h2>What are you thinking today?</h2>
      <IdeaAdd addIdea={addIdea}/>
      <div>
        addIdea Modal
      </div>
    </div>
    )
  


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
