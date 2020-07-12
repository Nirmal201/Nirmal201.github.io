import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-mobDiv">
        <ul className="footer-ul">
          <li>
            <a
              href="https://github.com/Nirmal201"
              className="social"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src={require("../icon/github.svg")}
                alt="Github Icon"
                className="icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nirmal-patel-07a5a2129/"
              className="social"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src={require("../icon/linkedin.svg")}
                alt="LinkedIn Icon"
                className="icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nirmal_201/"
              className="social"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src={require("../icon/instagram.svg")}
                alt="Instagram Icon"
                className="icon"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-div">
        <a
          href="https://www.linkedin.com/in/nirmal-patel-07a5a2129/"
          target="_blank"
          className="footer-link"
          rel="nofollow noopener noreferrer"
        >
          <div>Designed & Built by Nirmal Patel</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
