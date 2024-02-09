import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Solution from "./pages/Solution";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/solution/*" element={<Solution />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/testimonials/*" element={<Testimonials />} />
          <Route path="/careers/*" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
