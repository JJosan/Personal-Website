import React from 'react';
import './Personal.css';
import PersonalTitle from './PersonalTitle/PersonalTitle.js';
import Summary from './Summary/Summary.js';
import RiceField from './RiceField/RiceField.js';

function Personal() {
  return (
    <div className='personal'>
      <PersonalTitle />
      <Summary />
      <RiceField />
    </div>
  );
}

export default Personal;