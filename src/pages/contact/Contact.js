import React from "react";

import contactImg from "../../assets/contact.jpg";
import icons from "../../assets/icons.png";

import "./contact.style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-details">
        <img className="icons" src={icons} alt="" />
        <div className="imgs">
        <img className="contact-img" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
