import React from "react";

import aboutImg from "../../assets/about.jpeg";

import "./about.style.css";

const About = () => {
  return (
    <div className="about">
      <div className="info">
        <h2 className="sub-title">My Story</h2>
        <p className="text text_one">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          asperiores consectetur blanditiis deleniti dolor corporis dolore rem
          aperiam ratione magnam? Incidunt, quis est nobis rerum rem placeat ex!
          Vero fugiat facere esse inventore ipsa quos molestiae necessitatibus
          commodi at. Veritatis, repellat debitis! Vitae aut ex, deserunt eum
          ducimus reiciendis perferendis quisquam aspernatur in ea corporis
          doloremque totam, eaque soluta veritatis delectus! Necessitatibus nisi
          deserunt repudiandae cumque eos nihil earum cupiditate illo, vitae,
          molestiae minus ipsa quaerat quia blanditiis voluptatibus optio at
          autem assumenda maiores rem odio expedita. Sunt commodi, mollitia
          quae, alias dolores velit debitis iure odit repellendus accusamus
          pariatur!
        </p>
        <p className="text text_2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          asperiores consectetur blanditiis deleniti dolor corporis dolore rem
          aperiam ratione magnam? Incidunt, quis est nobis rerum rem placeat ex!
          Vero fugiat facere esse inventore ipsa quos molestiae necessitatibus
          commodi at. Veritatis, repellat debitis! Vitae aut ex, deserunt eum
          ducimus reiciendis perferendis quisquam aspernatur in ea corporis
          doloremque totam, eaque soluta veritatis delectus! Necessitatibus nisi
          deserunt repudiandae cumque eos nihil earum cupiditate illo, vitae,
          molestiae minus ipsa quaerat quia blanditiis voluptatibus optio at
          autem assumenda maiores rem odio expedita. Sunt commodi, mollitia
          quae, alias dolores velit debitis iure odit repellendus accusamus
          pariatur!
        </p>
        <p className="text text_3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          asperiores consectetur blanditiis deleniti dolor corporis dolore rem
          aperiam ratione magnam? Incidunt, quis est nobis rerum rem placeat ex!
          Vero fugiat facere esse inventore ipsa quos molestiae necessitatibus
          commodi at. Veritatis, repellat debitis! Vitae aut ex, deserunt eum
          ducimus reiciendis perferendis quisquam aspernatur in ea corporis
          doloremque totam, eaque soluta veritatis delectus! Necessitatibus nisi
          deserunt repudiandae cumque eos nihil earum cupiditate illo, vitae,
          molestiae minus ipsa quaerat quia blanditiis voluptatibus optio at
          autem assumenda maiores rem odio expedita. Sunt commodi, mollitia
          quae, alias dolores velit debitis iure odit repellendus accusamus
          pariatur!
        </p>
      </div>
      <div className="details">
        <img className="about-img" src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
