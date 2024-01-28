import React from "react";
import edu from "../Assets/book.svg";
import degree from "../Assets/school.svg";


const Education = () => {
  return (
    <div className="skill">
      <h3 className="fw-bold text-center">
        <img src={edu} className="me-2 mb-2" />
        EDUCATION
      </h3>
      <div className="row text-center mb-5">
      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>Master's Degree</h4>
        <h5 className=" fw-light">Master Of Business Adminstration ( 2011 - 2013 )</h5>
        <h5 className=" fw-light">Kongu Engineering College, Erode.</h5>
        <h5 className=" fw-light">CGPA - 7.67</h5>
      </div>
      
      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>Bachelor's Degree</h4>
        <h5 className=" fw-light">B.E - Mechanical ( 2002 - 2006 )</h5>
        <h5 className=" fw-light">Sona College Of Technology , Salem.</h5>
        <h5 className=" fw-light">Percentage - 73.13%</h5>
      </div>

      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>HSC</h4>
        <h5 className=" fw-light">Sri Saradha Bala Mandir Boys HSC School, Salem ( 2001 - 2002 )</h5>
        <h5 className=" fw-light">Percentage - 85.58%</h5>
      </div>

      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>SSLC</h4>
        <h5 className=" fw-light">Sri Saradha Bala Mandir Boys HSC School, Salem ( 1999 - 2000 )</h5>
        <h5 className=" fw-light">Perentage - 70.82%</h5>
      </div>

      </div>
      
      <hr className="hr" />

     </div>
  );
};

export default Education;
