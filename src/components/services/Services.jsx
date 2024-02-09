import React from "react";
import Container from "../containner/Container";
import Cart from "../cartText/Cart";
import image from "../../images/cart1.png";
import "./services.css";
function Services() {
  return (
    <div className="serviceContainer">
      <Container>
        <Cart
          position="flex-start"
          title="Technology"
          soustitle="We focus on providing the right tool for product
innovation and digital communication"
        >
          <span>Web Design and App Development</span>
          <span>Mobile Apps</span>
          <span> UI/UX Design</span>
          <span>Logistics</span>
          <span> Technology Consulting</span>
          <span>Cybersecurity </span>
          <span> Technical Support</span>
          <span>CRM</span>
        </Cart>
        <Cart cartimage="true" image={image} />
      </Container>

      <Container>
        <Cart cartimage="true" image={image} />
        <Cart
          position="flex-end"
          title="Digital Marketing"
          soustitle=" Tailor-made digital  marketing services towards reaching the optimal
success for every client"
        >
          <span>Social Media</span>
          <span>Campaign Strategy</span>
          <span> Campaign Management </span>
          <span>Content Strategy</span>
          <span> Marketing Automation </span>
          <span>Marketing Insights and Analytics</span>
          <span> Brand Kit</span>
        </Cart>
      </Container>

      <Container>
        <Cart
          position="flex-start"
          title="Content Marketing"
          soustitle="Creat content that really resonates with your target audience and bring together
creative elements to get the message across."
        >
          <span>Graphic Design </span>
          <span>Copywriting</span>
          <span> Animation</span>
          <span>Photography</span>
          <span> Video Production</span>
        </Cart>
        <Cart cartimage="true" image={image} />
      </Container>

      <Container>
        <Cart cartimage="true" image={image} />
        <Cart
          position="flex-end"
          title="HR Recruitment"
          soustitle=" We find the right people with the right skill set to meet your needs"
        >
          <span>Recruitment</span>
          <span>Workforce Assessment </span>
          <span>Staff Augmentation </span>
        </Cart>
      </Container>
    </div>
  );
}

export default Services;
