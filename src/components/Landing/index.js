import React from 'react';


function Landing() {
  
  return (
  <div className="Landing-page-wrapper"
    style={{
      width: '90%',
      maxWidth: '40rem',
      margin: '2rem auto',
      border: '1px solid #ccc',
      padding: '1rem',
      backgroundColor: 'lightGrey'
    }} 
  >
    <h1>Welcome to IOTD</h1>
    <p>Idea of the Day (IOTD) is an app that lets people submit ideas of anykind,
       and lets the audience vote on their idea. Well voted ideas make it to the 
       top, and poor ideas find their way to the bottom of the list. </p>
    
  </div>
  );
}
export default Landing;
