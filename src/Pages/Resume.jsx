import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume-page">
      <h1 className="Resume-title">
        RESU<span>ME</span>
      </h1>

      {/* LEFT SIDE */}
      <div className="resume-section">
        <div className="resume-left">
          <div className="resume-card">
            <h3>Kamali M</h3>
            <p className="topic">
              MSc Computer Science Graduate | Full Stack Developer (MERN)
            </p>

            <p>📍 Trichy, Tamilnadu</p>
            <p>✉️ Kamalimuruganantham171@gmail.com</p>
            <p>📞 +91 8778105657</p>
          </div>

          <div className="resume-card">
            <h3>Professional Summary</h3>

              <p>
                Motivated Computer Science postgraduate with strong knowledge in
                web development and programming. Skilled in building responsive
                web applications using modern technologies and eager to grow as
                a Full Stack Developer.
              </p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="resume-right">
          <div className="resume-card">
            <h3>Education</h3>

            <p>
              <b>MSC COMPUTER SCIENCE</b>
            </p>
            <p>Bishop Heber College | Trichy (2023–2025)</p>
            <p>CGPA: 7.6</p>

            <br />

            <p>
              <b>BSC COMPUTER SCIENCE</b>
            </p>
            <p>Srimad Andavan Arts & Science College | Trichy(2020–2023)</p>
            <p>CGPA : 9.1</p>
          </div>

          <div className="resume-card">
            <h3>Projects</h3>

            <ul style={{listStyleType:"square"}}>
              <li>Kamvy Watch E-Commerce (HTML , CSS)</li>
              <li>Nature Beauty E-Commerce (Bootstrap)</li>
              <li>Scentora Perfume E-Commerce(JavaScript)</li>
              <li>Expense Tracker (JQuery)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
