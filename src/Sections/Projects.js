import '../App.css';
import Discord from '../img/DiscordLogo.JPG';
import Seam from '../img/seams.jpg';
import VR from '../img/quest2.jpg';

function discord() {
    window.open("https://github.com/JJosan/Discord-Bot", "_blank");
}

function seam() {
    window.open("https://github.com/JJosan/Image-Resizer", "_blank");
}

function vr() {
    window.open("https://github.com/JJosan/VR-Game", "_blank");
}

function Projects() {
  return (
    <section style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <div className="text">
            <h2>Projects</h2>
            <p>Here are some personal projects that I have worked on / am working on.
            </p>
            <div className="projects">
                <div onClick={discord} rel="noreferrer" style={{ backgroundImage:`url(${Discord})`}}>
                    <h3>Discord Bot</h3>
                </div>
                <div onClick={seam} rel="noreferrer" style={{ backgroundImage:`url(${Seam})`}}>
                    <h3>Image Resizer</h3>
                </div>
                <div onClick={vr} rel="noreferrer" style={{ backgroundImage:`url(${VR})`}}>
                    <h3>VR Game</h3>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Projects;