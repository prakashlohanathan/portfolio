import React from "react";
import img from "../Assets/prakash.jpg";
import github from "../Assets/github.svg";
import linkedIn from "../Assets/linkedin.svg";
import about from "../Assets/about.png";
import certificate from "../Assets/certificate-small.png";

const About = () => {
  return (
    <div className="about">
      <h3 className="fw-bold text-center mb-3">
        <img alt="profile" src={about} className="me-2 mb-2 " />
        ABOUT
      </h3>

      <div className="row mb-5">
        <div className="col-md-6">
          <p className="fs-5 fw-light">
            <span className="d-block fs-3 fw-medium">Hello , my name is </span>
            <span className="d-block fs-1 fw-bold">Prakash L</span>
            Hello there! 👋 I'm a budding MERN-stack developer, passionate about creating 
            both frontend and backend magic for web applications.
            🌐 While I'm relatively new to the coding scene, 
            I've already dived into crafting a variety of MERN Stack projects.
          </p>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1Fk6NP1YjZ7AlDqVWgZUEG9ytHFPiMvz0/view?usp=sharing"
            target="_blank"
          >
            <button id="resume" className="resume btn fw-bold fs-6">My Resume</button>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/prakashlohanathan"
            target="_blank"
            className="ms-4"
          >
            <img alt="profile" src={github} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/prakash-lohanathan-1796b949/"
            target="_blank"
            className="ms-4"
          >
            <img alt="profile" src={linkedIn} />
          </a>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1tjzhW3Upd-MjhznQowa4IdQrDdYaFPJt/view?usp=sharing"
            target="_blank"
            className="ms-4"
          >
            <img alt="profile" src={certificate} />
          </a>
        </div>
        <div className="col-6 text-center image">
          <img alt="profile" src={img} className="pro-img" />
        </div>
        
      </div>
      <hr className="hr" />
    </div>
  );
};

export default About;