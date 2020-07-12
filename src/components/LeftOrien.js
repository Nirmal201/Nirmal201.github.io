import React from "react";

const LeftOrein = () => {
  return (
    <div className="left-orientation">
      <ul>
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
  );
};

export default LeftOrein;
