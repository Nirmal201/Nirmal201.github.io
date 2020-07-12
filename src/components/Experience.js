import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h3 className="section-head">Where I've worked</h3>
      <div className="descjb">
        <ul className="listjb">
          <li>
            <button className="listjb-btn">
              <a
                href="https://aleri.ca/"
                className="cmp-btn"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span>Aleri</span>
              </a>
            </button>
          </li>
        </ul>
        <div className="jbdesc">
          <h4 className="jbhead">
            <span>Web Developer</span>
            {/* <span className="jbcmp refer">
          {" "}
          <span>&nbsp;@&nbsp;</span>
          <a
            href="https://aleri.ca/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Aleri
          </a>
        </span> */}
          </h4>
          <h5 className="period">
            <span className="j">February - June 2020</span>
          </h5>
          <div>
            <ul className="jbli">
              <li>
                {" "}
                Created dynamic web application for criminal lawyers performing
                cross examination.
              </li>
              <li>
                Responsible for launching and designing web pages utilizing HTML
                and CSS.
              </li>
              <li>
                {" "}
                Working in collaboration with keeping the team's goal as the
                highest priority with firm determination and responsibilities.
              </li>
              <li>Version control using Git and GitHub.</li>
              <li>
                Collaborate with the development team, support, and business on
                a day to day development requests.
              </li>
              <li>
                Challenge ideas and opinions to avoid pitfalls and inefficient
                solutions.
              </li>
              <li>
                Designed and Developed web application from the prototype of
                Website.
              </li>
              <li>
                {" "}
                Configured and developed custom components with technology
                partners (analysts, developers, designers etc.) to meet
                requirements and goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
