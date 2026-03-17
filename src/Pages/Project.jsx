import React from "react";
import "./Project.css";

const ProjectCard = ({ img, title, desc, tags, github, demo }) => {
  return (
    <div className="project-card">

      {/* IMAGE (no clickable link) */}
      <div className="img-box">
        <img src={img} alt={title} />
        
        {/* Optional overlay icon (can be removed if not needed) */}
        <div className="overlay">
          <a href={github} target="_blank" rel="noreferrer" className="icon">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>

      {/* Project title and description */}
      <h3>{title}</h3>
      <p>{desc}</p>

      {/* Tags */}
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="project-btns">
        <a href={github} target="_blank" rel="noreferrer" className="btn github">
          Github
        </a>
        <a href={demo} target="_blank" rel="noreferrer" className="btn demo">
          Live Demo
        </a>
      </div>

    </div>
  );
};

export default function Project() {

  const projects = [
    {
      img: "/images/prj3.png",
      title: "Kamvy Watch Website",
      desc: "Clean blogging platform",
      tags: ["HTML", "CSS"],
      github: "https://kamali-2710.github.io/kamvy-watch-Website/",
      demo: "https://kamvy-watch-website.vercel.app/",
    },
    {
      img: "/images/prj.2.png",
      title: "Nature Beauty Website",
      desc: "Game UI with animation",
      tags: ["HTML", "CSS", "Bootstrap"],
      github: "https://kamali-2710.github.io/Nature-Beauty-website/",
      demo: "https://nature-beauty-website.vercel.app/",
    },
    {
      img: "/images/prj4.png",
      title: "Scentora Perfume Website",
      desc: "Shopping website UI",
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/kamali-2710/Scentora-Perfume-web",
      demo: "https://scentora-perfume-website.vercel.app/",
    },
    {
      img: "/images/expense.jpg",
      title: "Expense Tracker",
      desc: "Personal portfolio website",
      tags: ["HTML", "CSS", "JQuery"],
      github: "https://github.com/kamali-2710/Expense-Tracker-Jquery",
      demo: "https://expense-tracker-jquery.vercel.app/",
    },
    {
      img: "/images/prj5.png",
      title: "Dashboard",
      desc: "Admin dashboard UI",
      tags: ["HTML", "CSS"],
      github: "https://github.com/kamali-2710/kamvy",
      demo: "https://your-live-demo-link.com",
    },
  ];

  return (
    <div className="project-section">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          img={project.img}
          title={project.title}
          desc={project.desc}
          tags={project.tags}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
}