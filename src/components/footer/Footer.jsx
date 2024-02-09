import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="Address_container">
          <span className="footer_title">Address</span>
          <span>JWay Group, Inc.</span>
          <span> 691 South Blvd.</span>
          <span> Milpitas, CA 95035</span>
          <span> USA</span>
          <span>Tel: +1 408 247 5929</span>
          <span> Fax: +1 408 247 5931</span>
        </div>
        <div className="Services_container">
          <span>Services</span>
          <span>Technology</span>
          <span> Digital Marketing</span>
          <span> Content Marketing</span>
          <span> HR Recruiting</span>
        </div>
        <div className="Resources_container">
          <span className="footer_title">Resources</span>
          <span>Success Stories</span>
          <span> Get in Touch</span>
          <span> About JWay</span>
          <span>Blog</span>
        </div>
        <div className="Information_container">
          <span className="footer_title">Information</span>
          <span>Careers </span>
          <span>FAQ </span>
          <span>Privacy Policy</span>
          <span> Do Not Sell My Personal Information</span>
          <span> Terms of Use</span>
          <span>Sitemap</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
