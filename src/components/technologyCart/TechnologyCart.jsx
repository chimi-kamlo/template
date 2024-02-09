import React from "react";
import "./technologyCart.css";

function TechnologyCart({ children, image, title, color }) {
  return (
    <div className="technologyCart" style={{ backgroundColor: `${color}` }}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default TechnologyCart;
