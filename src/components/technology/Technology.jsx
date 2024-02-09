import React from "react";
import "./technology.css";
import TechnologyCart from "../technologyCart/TechnologyCart";
import technology1 from "../../images/technology1.png";
import ReadMorreButton from "../ReadMoreButton/ReadMoreButton";
function Technology() {
  return (
    <div className="technology">
      <h1>Some tips about technology, digital marketing, design, and more.</h1>
      <div className="technologyContainCart">
        <TechnologyCart
          title="The Role of Colors in Web Design"
          image={technology1}
          color="#5ECBFF"
        >
          Color is a major design element, and using it right can greatly
          benefit a...
        </TechnologyCart>
        <TechnologyCart
          title="6 Mobile Marketing Trends that Changes..."
          image={technology1}
          color="#E0CBB5"
        >
          Before the era of technological advances, money spent on marketing
          and...
        </TechnologyCart>
        <TechnologyCart
          title="6 Ways to Promote Your Consulting..."
          image={technology1}
          color="#E0CBB5"
        >
          It takes a good amount of money to hire the services of a professional
          interior...
        </TechnologyCart>
        <TechnologyCart
          title="6 Ways to Promote Your Consulting..."
          image={technology1}
          color="#E0CBB5"
        >
          Being passionate about something is the most beautiful thing in the
          world. It...
        </TechnologyCart>
      </div>
      <ReadMorreButton color="black" colortext="#ffffff" />
    </div>
  );
}

export default Technology;
