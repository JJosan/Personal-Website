import React, { useState, useEffect } from 'react';
import './Summary.css';
import Fade from 'react-reveal/Fade';

// const getData = () => {
//   return fetch("https://tranquil-fortress-29998.herokuapp.com/").then(response => response.json())
// }

function Summary() {

  const[things, setThings] = useState({})

  useEffect(() => {
    getData().then(data => setThings(data))
  },[])

  return (
    <Fade bottom>
      <div className='summary'>
        <div className='summary_header'>
          <hr />
          <h1>About Me</h1>
        </div>
        <div className='summary_body'>
          <div className='summary_text'>
            <p>Sleep is good for the mind</p>
            <p>Food is good for the soul</p>
            <p>Air Force 1s are good for self esteem</p>
          </div>
          <div className='summary_text'>
            <p>Nike Shoes</p>
            {/* {Object.entries(things).map(([key, value]) => {
              return (
                <p key={key}>{value}</p>
              )
            })} */}
          </div>
        </div>
        
      </div>
    </Fade>
  );
}

export default Summary;