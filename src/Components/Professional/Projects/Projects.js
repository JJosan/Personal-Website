import React, { useState } from 'react';
import './Projects.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import ProjectData from './Projects.json';

function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className='projects'>
            <div className='professional_details'>
                <div>
                    <hr />
                    <h1>Projects</h1>
                </div>
                <div className='professional_decription'>
                    <Carousel
                        infiniteLoop={true} 
                        autoPlay={false} 
                        interval={4000} 
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        selectedItem={currentSlide}
                        swipeable={false}
                        animationHandler={"fade"}>
                        {
                            ProjectData.map(post => {
                                return(
                                    <div>
                                        <h2>{post.name}</h2>
                                        <h3>{post.description}</h3>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <div className='professional_image'>
                <Carousel
                    infiniteLoop={true} 
                    autoPlay={false}
                    interval={4000} 
                    showThumbs={false}
                    showArrows={true}
                    showStatus={false}
                    showIndicators={false}
                    onChange={(index) => {setCurrentSlide(index)}}>
                    {
                        ProjectData.map(post => {
                            return(
                                <img src={post.imageurl} />
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
  );
}

export default Projects;