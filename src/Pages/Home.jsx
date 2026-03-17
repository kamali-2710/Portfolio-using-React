import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <h4>Hello I'm</h4>
        <h1>Kamali</h1>
        <h3 className="typing">
          Mern Stack <span>Developer</span>
        </h3>

        <p>
          I specialize in building scalable and responsive web applications
          using the MERN stack. My goal is to create efficient, clean and
          user-friendly digital experiences.
        </p>

        <Link to="/Project">
          <button className="btn1">See My Work</button>
        </Link>
        <button className="btn">
          <a href="./public/Kamali-cv.pdf" download>
            Download CV
          </a>
        </button>
      </div>

      <div className="home-right">
        <div className="circle">
  
          {/* <div className="top-card">
            <p>Project</p>
          </div> */}

      
          {/* <div className="bottom-card">
            <p>MernStack</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
