import React from "react";
import Header from "../header/Header";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import "./heroTop.css";
function HeroTop() {
  return (
    <div className="heroTopContainer">
      <Header />
      <div className="herotopContainText">
        <h1 className="title">Make your Digital presence matter</h1>
        <p>
          We are a full service technology and digital solutions company with
          over 20 years of experience in industry.
        </p>
        <button className="heroTopButton">Start a project together</button>
        <ReadMoreButton color="white" />
      </div>
    </div>
  );
}

export default HeroTop;
