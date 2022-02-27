import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
  return (
      <div className='navbar'>
      <div>
        <div className='navbar_title'>
          <h1 className='navbar_title_name'>Jason Nguyen</h1>
          <h1 className='navbar_title_position'>University Student</h1>
        </div>
        <nav className='navbar_links'>
          <div>
            <NavLink to='/Personal-Website/'>Professional</NavLink>
            <NavLink to='/Personal-Website/personal/'>Personal</NavLink>
          </div>
          <div>
            <Link to='/Personal-Website/'>Resume</Link>
            <Link to='/Personal-Website/'>Linkedin</Link>
            <Link to='/Personal-Website/'>Github</Link>
            <Link to='/Personal-Website/'>Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;