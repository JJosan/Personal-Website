import '../App.css';

function Skills() {
  return (
    <section className="three">
      <div className="text">
          <h2>Skills</h2>
          <p>Here are the languages and technologies that I have learned so far. This list will keep expanding as
              I gain more experience in tech.
          </p>
          <div className="skills">
              <div>
                  <h3>Languages</h3>
                  <ul>
                      <li>Java</li>
                      <li>C#</li>
                      <li>SQL</li>
                      <li>R</li>
                      <li>HTML/CSS</li>
                      <li>JavaScript</li>
                  </ul>
              </div>
              <div>
                  <h3>Frameworks</h3>
                  <ul>
                      <li>React</li>
                      <li>.NET</li>
                  </ul>
              </div>
              <div>
                  <h3>Tools</h3>
                  <ul>
                      <li>Visual Studio</li>
                      <li>IntelliJ</li>
                      <li>Git/Github</li>
                      <li>SQL Server</li>
                      <li>Tableau</li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Skills;