import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Navbar() {

  function ScrollUp() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <Fade left>
      <div className='navbar'>
        <div>
          <div className='navbar_title'>
            <h1 className='navbar_title_name'>Jason Nguyen</h1>
            <h1 className='navbar_title_position'>University Student</h1>
          </div>
          <nav className='navbar_links'>
            <div>
              <NavLink to='/Personal-Website' onClick={ScrollUp}>Professional</NavLink>
              <NavLink to='/Personal-Website/personal' onClick={ScrollUp}>Personal</NavLink>
            </div>
            <div className='navbar_pages'>
              <a href='https://drive.google.com/file/d/1EaonZgXi1DyLlS_mCPnDGD6Z2aMY7P1f/view?usp=sharing' target="_blank" rel='noreferrer'>Resume</a>
              <a href='https://www.linkedin.com/in/NJason/' target="_blank" rel='noreferrer'>Linkedin</a>
              <a href='https://github.com/JJosan' target="_blank" rel='noreferrer'>Github</a>
              <a href='#bottom'>Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </Fade>

  );
}

export default Navbar;