import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {


  // have these janky variables because react router kinda sucks on github pages hosting
  const [val, setVal] = useState(true);

  function firstLoad() {
    if (val == true) {
      setVal(false);
    }
  }

  return (
      <div className='navbar'>
      <div>
        <div className='navbar_title'>
          <h1 className='navbar_title_name'>Jason Nguyen</h1>
          <h1 className='navbar_title_position'>University Student</h1>
        </div>
        <nav className='navbar_links'>
          <div>
            <NavLink to='/Personal-Website/' style={val? {color: '#002333'} : {}} onClick={firstLoad}>Professional</NavLink>
            <NavLink to='/Personal-Website/personal/' onClick={firstLoad}>Personal</NavLink>
          </div>
          <div className='navbar_pages'>
            <a href='#'>Resume</a>
            <a href='#'>Linkedin</a>
            <a href='#'>Github</a>
            <a href='#'>Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;