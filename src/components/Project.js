import React from "react";

const Project = () => {
  return (
    <section id="work" className="project">
      <h3 className="section-head">Some Things, I've Built</h3>
      <div>
        <div className="project-detail">
          <div className="project-1 prjrm">
            <h4 className="project-2 project-fea">Featured Project</h4>
            <h5 className="project-3 project-title">
              <a
                href="https://np-phonebook-app.herokuapp.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                PhoneBook - WEB APP
              </a>
            </h5>
            <div className="project-4 project-about">
              <p>
                PhoneBook is Single Page Application. It's open for any person
                to add phone number.
              </p>
            </div>
            <ul className="project-5 project-tool">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <div className="project-6 project-url">
              <a
                href="https://github.com/Nirmal201/phonebook-v2"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Github Link"
              >
                <img
                  className="icon"
                  src={require("../icon/github.svg")}
                  alt=""
                />
              </a>

              <a
                href="https://np-phonebook-app.herokuapp.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <img
                  className="icon"
                  src={require("../icon/link.svg")}
                  alt=""
                />
              </a>
            </div>
          </div>

          <a
            href="https://np-phonebook-app.herokuapp.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="External Link"
            className="project-img project-8"
          >
            <div
              style={{ position: "relative", overflow: "hidden" }}
              className="project-img-div"
            >
              <div style={{ width: "100%", paddingBottom: "62.2857%" }}></div>
              <img
                src={require("../icon/Screen Shot 2020-07-09 at 4.19.02 AM.png")}
                alt="Project"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: "0",
                  transitionDelay: "500ms",
                }}
              />
              <picture>
                <source />
                <img
                  src={require("../icon/Screen Shot 2020-07-09 at 4.19.02 AM.png")}
                  alt="Project 2"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    maxWidth: "700px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "1",
                    objectPosition: "center center",
                    transition: "opacity 500ms ease 0s",
                  }}
                />
              </picture>
            </div>
          </a>
        </div>

        {/* <div className="project-detail ">
          <div className="project-1 prjrm">
            <h4 className="project-2 project-fea div-2-title">
              Featured Project
            </h4>
            <h5 className="project-3 project-title">
              <a
                href="https://np-phonebook-app.herokuapp.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                PhoneBook - WEB APP
              </a>
            </h5>
            <div className="project-4 project-about">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                temporibus cumque nesciunt dolorum aliquid, cum ullam incidunt
                perferendis vitae nam.
              </p>
            </div>
            <ul className="project-5 project-tool">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <div className="project-6 project-url">
              <a
                href="https://github.com/Nirmal201/phonebook-v2"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Github Link"
              >
                <img
                  className="icon"
                  src={require("../icon/github.svg")}
                  alt=""
                />
              </a>

              <a
                href="https://np-phonebook-app.herokuapp.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <img
                  className="icon"
                  src={require("../icon/link.svg")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <a
            href="https://np-phonebook-app.herokuapp.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="External Link"
            className="project-img project-8"
          >
            <div
              style={{ position: "relative", overflow: "hidden" }}
              className="project-img-div"
            >
              <div style={{ width: "100%", paddingBottom: "62.2857%" }}></div>
              <img
                alt="Project"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: "0",
                  transitionDelay: "500ms",
                }}
              />
              <picture>
                <source />
                <img
                  src={require("../icon/Screen Shot 2020-07-09 at 4.19.02 AM.png")}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    maxWidth: "700px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "1",
                    objectPosition: "center center",
                    transition: "opacity 500ms ease 0s",
                  }}
                />
              </picture>
            </div>
          </a>
        </div> */}

        <p style={{ marginBottom: 0 }}>More to come.....</p>
      </div>
    </section>
  );
};

export default Project;
