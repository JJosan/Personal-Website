import React from 'react';
import './Professional.css';
import Title from './Title/Title.js';
import Education from './Education/Education.js';
import Projects from './Projects/Projects.js';
import Experience from './Experience/Experience.js';

function Professional() {
  return (
    <div className='professional'>
      <Title />
      <Education />
      <Projects />
      <Experience />
    </div>
  );
}

export default Professional;