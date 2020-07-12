import React, { useState } from "react";
import LeftOrein from "./LeftOrien";
import RightOrien from "./RightOrien";
import useDocumentScrollThrottled from "./ScrollHook";

const Navbar = ({ openNav, handleNav }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  const MINIMUM_SCROLL = 50;
  const TIMEOUT_DELAY = 400;
  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  return (
    <>
      <header
        id="head-nav"
        className={`header-nav ${shadowStyle} ${hiddenStyle}`}
      >
        <nav className="navbar">
          <a href="#top" className="logo">
            NP
          </a>
          <div className="nav-rightEle ">
            <ol className="nav-items">
              <li className="nav-li">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-li">
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li className="nav-li">
                <a href="#work" className="nav-link">
                  Work
                </a>
              </li>
              <li className="nav-li">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ol>
            <div>
              <a
                href="https://drive.google.com/file/d/1wQ9KkhmKUKbZu0-alOvwSn8OgK2mh6zs/view?usp=sharing"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="nav-btn"
              >
                Resume
              </a>
            </div>
          </div>
          <button className="nav-toggle" onClick={handleNav}>
            <span
              className={openNav === true ? " isOpen hamburger" : "hamburger"}
            ></span>
          </button>
        </nav>

        <div
          aria-hidden={openNav === true ? "false" : "true"}
          tabIndex={openNav === true ? "1" : "-1"}
          className={openNav === false ? "mobNtVisi" : "mobVisi"}
        >
          <aside className="sideNav">
            <nav className="mobile-nav">
              <ol className="mobile-ol">
                <li className="mobile-li">
                  <a href="/#about" className="mobile-link">
                    About
                  </a>
                </li>
                <li className="mobile-li">
                  <a href="/#experience" className="mobile-link">
                    Experience
                  </a>
                </li>
                <li className="mobile-li">
                  <a href="/#work" className="mobile-link">
                    Work
                  </a>
                </li>
                <li className="mobile-li">
                  <a href="/#contact" className="mobile-link">
                    Contact
                  </a>
                </li>
              </ol>
              <a href="/#resume" className="mobile-btn">
                Resume
              </a>
            </nav>
          </aside>
        </div>
      </header>
      <LeftOrein />
      <RightOrien />
    </>
  );
};

export default Navbar;
