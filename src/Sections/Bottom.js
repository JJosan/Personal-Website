import '../App.css';
import back from '../img/node.jpg';



function Bottom() {
  return (
    <section className="bottom-page" style={{ backgroundImage:`url(${back})`}}>
        <div id="bottom" className="contact">
            <h2>Contact Information</h2>
            <p>Email: Nosajn123@gmail.com</p>
            <p>Phone: (206) 591-5047</p>
        </div>
    </section>
  );
}

export default Bottom;