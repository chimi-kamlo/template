import React from "react";
import HeroTop from "../components/heroTop/HeroTop";
import Services from "../components/services/Services";
import Clients from "../components/clients/Clients";
import Project from "../components/projects/Project";
import Technology from "../components/technology/Technology";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
function Home() {
  return (
    <div>
      <HeroTop />
      <Services />
      <Clients />
      <Project />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
