import React from 'react';
import './Summary.css';
import Fade from 'react-reveal/Fade';

function Summary() {
  return (
    <div className='summary'>
      <Fade bottom>
        <div className='summary_header'>
          <hr />
          <h1>About Me</h1>
        </div>
        <div className='summary_text'>
          <p>Sleep is good for the mind</p>
          <p>Food is good for the soul</p>
        </div>
      </Fade>
    </div>
  );
}

export default Summary;