import React from "react";

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <h3 className="section-head">About Me</h3>
      <div className="abdtl">
        <div className="lf-abdtl">
          <div>
            <p>Hello! I'm Nirmal, a Web Developer based in Toronto, ON.</p>
            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>
            <p>
              Shortly after graduating from{" "}
              <span className="refer">
                <a
                  href="https://www.lambtoncollege.ca/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Lambton College
                </a>
              </span>
              , I joined the start-up company named{" "}
              <span className="refer">
                <a
                  href="https://aleri.ca/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Aleri
                </a>
              </span>{" "}
              where I work on a wide variety of interesting and meaningful tasks
              on a daily basis.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="abdlt-skills">
            <li>JavaScript (ES6 +)</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="abdtl-img">
          <a href="https://github.com/nirmal201" className="abdtl-gthb">
            <div className="a-div">
              <img
                src={data.avatar_url}
                alt="Nirmal Patel"
                className="avatar"
                // style={{ width: "100%", height: "100%" }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
