import React from "react";
import "./Skills.css";

const Skills = () => {

  const skills = [
    { img: "/images/HTML5.png", name: "HTML5" },
    { img: "/images/CSS3.png", name: "CSS3" },
    { img: "/images/Bootstrap.png", name: "Bootstrap" },
    { img: "/images/JavaScript.png", name: "JavaScript" },
    { img: "/images/React.png", name: "React" },
    { img: "/images/Node.js.png", name: "Nodejs" },
    { img: "/images/Express.png", name: "Express" },
    { img: "/images/MongoDB.png", name: "MongoDB" },
    { img: "/images/GitHub.png", name: "GitHub" },
    { img: "/images/vs code.png", name: "VS code" },
    { img: "/images/Vercel.png", name: "Versal" }
  ];

  return (
    <div className="skill-page">

      <h1 className="skill-title">SKI<span>LLS</span></h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;