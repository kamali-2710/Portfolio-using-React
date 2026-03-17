import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h1 className="title">
        ABOUT <span>ME</span>
      </h1>

      <div className="about-container">
        {/* Left Side */}
        <div className="personal-info">
          <h2>PERSONAL INFOS</h2>

          <div className="info-grid">
            <p>
              <b>First Name : </b> Kamali
            </p>
            <p>
              <b>Last Name : </b> K
            </p>
            <p>
              <b>Age : </b> 23
            </p>
            <p>
              <b>Nationality : </b> Indian
            </p>
            <p>
              <b>Location : </b>Trichy,TamilNadu
            </p>
            <p>
              <b>Phone : </b> 8778105657
            </p>
            <p>
              <b>Email : </b> Kamalimuruganantham 171@gmail.com
            </p>
            <p>
              <b>Language : </b> Tamil, English
            </p>
          </div>

          <button className="btn">
          <a href="./public/Kamali-cv.pdf" download>
            Download CV <i className="fa-solid fa-circle-arrow-down"></i>
          </a>
        </button>
        </div>

        {/* Right Side */}
        <div className="stats">
          <div className="box">
            <h2>3+</h2>
            <p>PROJECTS</p>
          </div>

          <div className="box">
            <h2>1+</h2>
            <p>INTERNSHIP</p>
          </div>

          <div className="box">
            <h2>8+</h2>
            <p>TECHNOLOGIES LEARNED</p>
          </div>

          <div className="box">
            <h2>100+</h2>
            <p>HOURS OF CODING PRACTICE</p>
          </div>
        </div>
      </div>
      {/* EXPERIENCE & EDUCATION */}

      <div className="experience">
        <h2 className="exp-heading">
          EXPERIENCE & <span>EDUCATION</span>
        </h2>

        <div className="exp-container">
          {/* Experience */}

          <div className="exp-left">
            <div className="exp-item">
              <div className="exp-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>

              <span className="exp-year">2026- Present</span>

              <h3>MERNSTACK DEVELOPER COURSE</h3>

              <p>
                MERN Stack learner building full stack web applications. Working
                with MongoDB, Express, React and Node.js.
              </p>
            </div>

            <div className="exp-item">
              <div className="exp-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>

              <span className="exp-year">2023</span>

              <h3>FULLSTACK DEVELOPER INTERN</h3>

              <p>
                Completed FullStack internship and built a Hospital Management
                System. Worked on both frontend and backend development.
              </p>
            </div>
          </div>

          {/* Education */}

          <div className="exp-right">

            <div className="exp-item">
              <div className="exp-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>

              <span className="exp-year">2025</span>

              <h3>MSC COMPUTER SCIENCE</h3>

              <p>
                Bishop Heber College - Trichy | <br /> CGPA : 7.6 CGPA.
              </p>
            </div>

            <div className="exp-item">
              <div className="exp-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>

              <span className="exp-year">2023</span>

              <h3>BSC COMPUTER SCIENCE</h3>

              <p>
                Srimad Andavan Arts and Science College - Trichy | <br />
                CGPA : 9.1 CGPA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
