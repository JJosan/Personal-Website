import '../App.css';
import Introduction from './Introduction.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Bottom from './Bottom.js';
import Rice from './Rice.js';

function SectionContainer() {
  return (
    <div className='container'>
      <Introduction />
      <Education />
      <Skills />
      <Projects />
      <Rice />
      <Bottom />
    </div>
  );
}

export default SectionContainer;