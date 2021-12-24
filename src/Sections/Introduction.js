import '../App.css';
import back from '../img/back.png'

function Introduction() {
  return (
    <section className="one" style={{ backgroundImage:`url(${back})`}}>
      <div className="me">
          <h1>Hi, I'm Jason Nguyen</h1>
          <hr />
          <h2>I am a 2nd year University student passionate in software development</h2>
      </div>
    </section>
  );
}

export default Introduction;