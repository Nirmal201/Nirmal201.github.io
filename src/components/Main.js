import React from "react";
import About from "./About";
import Experience from "./Experience";
import Intro from "./Intro";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = ({ data }) => {
  return (
    <div id="content">
      <main className="main fillHeight">
        <Intro />
        <About data={data} />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Main;
