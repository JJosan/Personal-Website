import React from 'react';
import './Education.css';
import Fade from 'react-reveal/Fade';

function Education() {

    return (
        <div className='education'>
            <Fade bottom>
                <div className='professional_details'>
                    <div>
                        <hr />
                        <h1>Education</h1>
                    </div>
                    <div className='professional_description'>
                        <h2>University of Washington, Seattle</h2>
                        <h3>B.S. in Informatics, Human-Computer-Interaction and Data Science</h3>
                    </div>
                </div>
                <div className='professional_image'>
                    <img src={"https://i.imgur.com/V5azWac.png"} />
                </div>
            </Fade>
        </div>
    );
}

export default Education;