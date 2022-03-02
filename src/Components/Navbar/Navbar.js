import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Navbar() {


  // have these janky variables because react router kinda sucks on github pages hosting
  const [val, setVal] = useState(true);

  function firstLoad() {
    if (val == true) {
      setVal(false);
    }
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
              <NavLink to='/Personal-Website/' style={val ? { color: '#002333' } : {}} onClick={firstLoad}>Professional</NavLink>
              <NavLink to='/Personal-Website/personal/' onClick={firstLoad}>Personal</NavLink>
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