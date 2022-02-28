import React, { useState } from 'react';
import './Education.css';

function Education() {

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className='education'>
            <div className='professional_details'>
                <div>
                    <hr />
                    <h1>Education</h1>
                </div>
                <div className='professional_decription'>
                    <h2>University of Washington, Seattle</h2>
                    <h3>B.S. in Informatics, Human-Computer-Interaction and Data Science</h3>
                </div>
            </div>
            <div className='professional_image'>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Washington_Purple_Block_W_logo.svg/1280px-University_of_Washington_Purple_Block_W_logo.svg.png"}/>
            </div>
        </div>
    );
}

export default Education;