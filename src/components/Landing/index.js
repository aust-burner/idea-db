import React from 'react';


function Landing() {
  
  return (
  <div className="Landing-page-wrapper">
    <h1 className="welcome-banner">Welcome to IOTD</h1>
      <div className="Landing-page-content">
        <p>Idea of the Day (IOTD) is an app that lets people submit ideas of anykind,
       and lets the audience vote on their idea. Well voted ideas make it to the 
       top, and poor ideas find their way to the bottom of the list. </p>
       <img src="/images/Roller-skates.png"
        style={{
          width: '300px'
        }}
       ></img>
        
      </div>
  </div>
  );
}
export default Landing;
