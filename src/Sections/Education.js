import '../App.css';
import img from '../img/uwlogo.png';

function Education() {
  return (
    <section className="two">
      <div className="text">
          <h2>Education</h2>
          <p>I am currently attending the <strong>University of Washington</strong> Seattle campus. I am majoring 
              in <a href="https://ischool.uw.edu/programs/informatics"><strong>Informatics </strong></a>. My area of
              study is mainly around <strong>software development</strong>.
          </p>
          <img src={img} alt="University of Washington Logo" />
          <h3>Relevant Coursework</h3>
          <ul>
              <li>Data Structures and Algorithms</li>
              <li>Computer Systems</li>
              <li>Databases and Data Modeling</li>
              <li>Client-Side Web Development</li>
          </ul>
      </div>
    </section>
  );
}

export default Education;