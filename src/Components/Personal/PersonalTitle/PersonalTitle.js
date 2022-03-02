import React from 'react';
import './PersonalTitle.css';
import Fade from 'react-reveal/Fade';

function PersonalTitle() {
  return (
    <Fade top>
      <div className='personaltitle'>
        <h1>Hi, I'm Jason Nguyen</h1>
        <h2>Professional REM Cyclist & Avid Connoisseur of Edible Goods</h2>
    </div>
    </Fade>
    
  );
}

export default PersonalTitle;