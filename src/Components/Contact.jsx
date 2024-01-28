import React from "react";
import contact from "../Assets/Contact.png";
import mail from "../Assets/mail.png";
import phone from "../Assets/phone.png";
import location from "../Assets/location.png";

const Contact = () => {
  return (
    <div className="mb-5">
      <h3 className="fw-bold text-center mt-5 ">
        <img alt="contact" src={contact} className="mb-2 contact pe-2" />
        CONTACT ME
      </h3>
       <div className="row mt-5 text-center">
       <div className="col-md-4">
        <img src={mail} alt="mail" className="mail mb-2" />
        <h5 className=" fw-light d-inline ms-2">prakash2k2mech@gmail.com </h5>
       </div>
       <div className="col-md-4">
        <img src={phone} alt="mail" className="mail mb-2" />
        <h5 className=" fw-light d-inline ms-2">+91 9944883412 </h5>
       </div>
       <div className="col-md-4">
        <img src={location} alt="mail" className="mail mb-2" />
        <h5 className=" fw-light d-inline ms-2">Salem , Tamil Nadu</h5>
       </div>
       </div>
       
    </div>
  );
};

export default Contact;
