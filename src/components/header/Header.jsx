import React from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="headerContainer">
      <div>
        <img src={logo} alt="logo de jwa" />
      </div>
      <nav>
        <Link to="/about/*" className="link">
          about
        </Link>
        <Link to="/solution/*" className="link">
          solution
        </Link>
        <Link to="/services/*" className="link">
          services
        </Link>
        <Link to="/careers/*" className="link">
          careers
        </Link>
        <Link to="/testimonials/*" className="link">
          testimonials
        </Link>
        <Link to="/blog/*" className="link">
          blog
        </Link>
      </nav>
    </div>
  );
}

export default Header;
