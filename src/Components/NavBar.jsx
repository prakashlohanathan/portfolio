import React from "react";
import sun from "../Assets/sun.png"



const NavBar = () => {
  return (
    <div className="head position-fixed bg-white top-0" style={{width:"100vw"}}>
      <div className="row mt-4">
        <div className="col-5">
          <h3 className="h4">
            <span>MERN</span> Stack Developer
          </h3>
        </div>
        <div className="col-5 text-end link text-black">
          <a href="#about" className="ms-4 text-decoration-none ">About</a>
          <a href="#skills" className="ms-4 text-decoration-none ">Skills</a>
          <a href="#education" className="ms-4 text-decoration-none ">Education</a>
          <a href="#projects" className="ms-4 text-decoration-none ">Projects</a>
          <a href="#contact" className="ms-4 text-decoration-none ">Contact</a>
        </div>
        
      </div>
      <hr className="hr" />
    </div>
  );
};

export default NavBar;

