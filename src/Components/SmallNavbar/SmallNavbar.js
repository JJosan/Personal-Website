import React, { useState } from 'react';
import './SmallNavbar.css';
import { NavLink } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Fade from 'react-reveal/Fade';

function SmallNavbar() {

  const [navops, setNavops] = useState(true);

  function burger() {
    setNavops(!navops);
  }

  return (
    <Fade top>
      <div className="smallnavbar">
        <Fade left>
          <div className='smallnavbar_burger' onClick={burger}>
            <DoubleArrowIcon />
          </div>
        </Fade>
        <div className='smallnavbar_normal'>
          <div className='smallnavbar_externallinks' >
            <a href='https://drive.google.com/file/d/1EaonZgXi1DyLlS_mCPnDGD6Z2aMY7P1f/view?usp=sharing' target="_blank" rel='noreferrer'>Resume</a>
            <a href='https://www.linkedin.com/in/NJason/' target="_blank" rel='noreferrer'>Linkedin</a>
            <a href='https://github.com/JJosan' target="_blank" rel='noreferrer'>Github</a>
            <a href='#bottom'>Contact</a>
          </div>
          <div className='smallnavbar_internallinks' >
            <NavLink to='/Personal-Website/'>Professional</NavLink>
            <NavLink to='/Personal-Website/personal/'>Personal</NavLink>
          </div>
        </div>
        <div className='smallnavbar_smaller'>
          <Fade left>
            <div className='smallnavbar_externallinks' style={navops ? { display: "none" } : { display: "block" }}>
              <a href='https://drive.google.com/file/d/1EaonZgXi1DyLlS_mCPnDGD6Z2aMY7P1f/view?usp=sharing' target="_blank" rel='noreferrer'>Resume</a>
              <a href='https://www.linkedin.com/in/NJason/' target="_blank" rel='noreferrer'>Linkedin</a>
              <a href='https://github.com/JJosan' target="_blank" rel='noreferrer'>Github</a>
              <a href='#bottom'>Contact</a>
            </div>
          </Fade>
          <Fade left>
            <div className='smallnavbar_internallinks' style={!navops ? { display: "none" } : { display: "block" }}>
              <NavLink to='/Personal-Website/'>Professional</NavLink>
              <NavLink to='/Personal-Website/personal/'>Personal</NavLink>
            </div>
          </Fade>

        </div>
      </div>
    </Fade>

  );
}

export default SmallNavbar;