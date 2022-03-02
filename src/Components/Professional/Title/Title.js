import React from 'react';
import './Title.css';
import Fade from 'react-reveal/Fade';

function Title() {
  return (
    <Fade top>
      <div className='title'>
        <h1>Hi, I'm Jason Nguyen</h1>
        <h2>Passionate in Software Development & Aspiring 10X Developer</h2>
      </div>
    </Fade>

  );
}

export default Title;