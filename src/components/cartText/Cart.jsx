import React from "react";
import "./cart.css";
function Cart({ position, children, title, soustitle, image, cartimage }) {
  //alignement du texte a gauche//
  if (position === "flex-start") {
    return (
      <div className="cartContainerText" style={{ alignItems: `${position}` }}>
        <h1 className="cartTitle">{title}</h1>
        <span className="cartSousTitle">{soustitle}</span>
        <div className="cartDescription" style={{ alignItems: `${position}` }}>
          {children}
        </div>
      </div>
    );
  }

  //alignement du texte a droite//
  if (position === "flex-end") {
    return (
      <div className="cartContainerText" style={{ alignItems: `${position}` }}>
        <h1 className="cartTitle">{title}</h1>
        <span className="cartSousTitle">{soustitle}</span>
        <div className="cartDescription" style={{ alignItems: `${position}` }}>
          {children}
        </div>
      </div>
    );
  }
  //cart image//
  if (cartimage === "true") {
    return (
      <div className="cartcontainimag">
        <img
          src={image}
          alt="  descaription de nos activites"
          className="imagCart"
        />
      </div>
    );
  }
}

export default Cart;
