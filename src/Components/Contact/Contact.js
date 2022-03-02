import React from 'react';
import './Contact.css';
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <Fade bottom>
      <div className="contact" id='bottom'>
        <h1>Contact Information</h1>
        <h2>nosajn123@gmail.com</h2>
        <h2>(206) 591-5047</h2>
      </div>
    </Fade>
  );
}

export default Contact;