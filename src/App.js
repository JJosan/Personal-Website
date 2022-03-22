import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import SmallNavbar from './Components/SmallNavbar/SmallNavbar.js';
import Professional from './Components/Professional/Professional.js';
import Personal from './Components/Personal/Personal.js';
import Contact from './Components/Contact/Contact.js';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <SmallNavbar />
      <div className='app_body'>
        <Routes>
          <Route exact path='/Personal-Website' element={ <Professional /> }/>
          <Route exact path='/Personal-Website/personal' element={ <Personal /> }/>
        </Routes>
      </div>
      <Contact />
    </div>
  );
}

export default App;
