import React, { useState, useEffect } from 'react';
import IdeaList from '../IdeaList';
import IdeaAdd from '../IdeaAdd';
import { v4 as uuidv4 } from 'uuid';
import { withFirebase } from '../Firebase';


import { withAuthorization } from '../Session';

const HomePage = (props) => {
  let firebase = props.firebase 
  const ideasRef = firebase.ideas ()

  const [state, setState] = useState({ideas: []})
  useEffect(() => {
    ideasRef.on('value', (snapshot) => {
      const snapshotValue = snapshot.val()
      if (snapshotValue) {
        const ideas = Object.values(snapshot.val())
        setState ({ideas: ideas})
        console.log(ideas)
      }
      
    })
  }, [])


  let upVote = (id) => {
    console.log('upVote', id)
    state.ideas.forEach((idea) => {
    if(id === idea.id) {
    idea.voteCount +=1}
    })
    console.log(state.ideas)
    setState ({ideas: state.ideas})
    ideasRef.child(id).child('voteCount').transaction((voteCount) => {
      return voteCount +1
    })
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

  let addIdea = (title, description) => {
    console.log('Add Idea', title, description)
    const idea = {title: title, description: description, id: uuidv4(), voteCount: 0}
    ideasRef.child(idea.id).set(idea)
    
    setState({ideas: [...state.ideas, idea]})
    
  }

  return(
    <div className="Home-page-wrapper">
      <div>
        <h1>Welcome to IOTD</h1>
      </div>

      <IdeaList ideas={state.ideas} upVote={upVote} downVote={downVote} />

      <div>
        IOTD
      </div>
      <div className='add-idea-wrapper'>

        <h2>What are you thinking today?</h2>
        <div>
          <IdeaAdd addIdea={addIdea}/>
        </div>

      </div>
    </div>
  )
}


const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)(HomePage));
