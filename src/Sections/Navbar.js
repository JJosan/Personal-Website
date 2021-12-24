import '../App.css';


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // when it is not at the top of the page
    document.getElementById("navbar").style.padding = "0 0 0";
    document.getElementById("navbar").style.backgroundColor = "rgb(32, 54, 143)";
  } else {
    document.getElementById("navbar").style.padding = "5px 0 5px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }
}


function Navbar() {
  return (
    <div id='navbar'>
        <a href="#">Home</a>
        <a href="https://drive.google.com/file/d/11lvLjTuMaRbhMHEbPEqLX7xRNFLhj1I9/view?usp=sharing" target="_blank">Resume</a>
        <a href="https://github.com/JJosan" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/jason-nguyen-b35b231b0/" target="_blank">Linkedin</a>
        <a href="#bottom">Contact</a>
    </div>
  );
}

export default Navbar;