import React from "react";
import "./contact.css";
import Form from "../formullaire/Form";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
function Contact() {
  return (
    <div className="contact">
      <Form />
      <ReadMoreButton color="black" colortext="white" />
    </div>
  );
}

export default Contact;
