import React from 'react';
import './Professional.css';
import Title from './Title/Title.js';
import Education from './Education/Education.js';
import Projects from './Projects/Projects.js';
import Experience from './Experience/Experience.js';
import Skills from './Skills/Skills.js';

function Professional() {
  return (
    <div className='professional'>
      <Title />
      <Education />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
}

export default Professional;