import React from "react";
import "./projectCart.css";
function ProjectCart({ image, title }) {
  return (
    <div className="projectCartContainer">
      <img src={image} alt="" className="projetImage" />

      <span>{title}</span>
    </div>
  );
}

export default ProjectCart;
