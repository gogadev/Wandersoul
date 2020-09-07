import React from "react";

import useForm from "../../components/use-form/useForm";

import img from "../../assets/img.jpeg";

import "./subscribe.style.css";

const Subscribe = () => {

  const submitForm = () => {
    alert("~Thank You For Subscribing To Wandersoul!~");
  };

  const [values, handleChange, handleSubmit] = useForm(submitForm);

  return (
    <div className="subscribe">
      <h1 className="sub-title">Let's keep in touch...</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name || ""}
          placeholder="Name"
          onChange={handleChange}
          required    
        />
        <input
          type="email"
          name="email"
          value={values.email || ""}
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <button className="btn" type="submit">
          Subscribe
        </button>
      </form>
      <div className="sub-img">
      <img className="img" src={img} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
