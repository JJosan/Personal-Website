import React from 'react';
import './SmallNavbar.css';
import { NavLink } from 'react-router-dom';


function SmallNavbar() {
  return (
    <div className="smallnavbar">
        <NavLink to='/Personal-Website/'>Professional</NavLink>
        <NavLink to='/Personal-Website/personal/'>Personal</NavLink>
    </div>
  );
}

export default SmallNavbar;