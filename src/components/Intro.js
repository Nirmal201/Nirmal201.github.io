import React from "react";

const Intro = () => {
  return (
    <section className="head">
      <h1 className="hfl">Hi, my name is </h1>
      <h2 className="hnm" style={{ transitionDelay: "200ms" }}>
        Nirmal Patel.
      </h2>
      <h3 className="hsub" style={{ transitionDelay: "300ms" }}>
        I build things for the web.
      </h3>
      <div className="hdesc hfullW" style={{ transitionDelay: "400ms" }}>
        <p>
          I'm a passionate web developer and a team player based in Toronto, ON
          specializing in building exceptional websites, applications, and
          everything in between.
        </p>
      </div>
      <div className="hfullW">
        <a href="mailto: nirmalpatel201@gmail.com" className="main-btn nav-btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Intro;
