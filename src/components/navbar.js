import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaReact, FaHome } from "react-icons/fa";
import { Button } from "./Button";
import "./navbar.css";
import { IconContext } from "react-icons/lib";
import { ExternalLink } from 'react-external-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#FAFAFF" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <ExternalLink href="https://reactjs.org/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaReact className="navbar-icon" />
              React Website
            </ExternalLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <ExternalLink href="https://github.com/kol242" className="nav-links" onClick={closeMobileMenu}>
                  GitHub
                </ExternalLink>
              </li>
              <li className="nav-item">
                <ExternalLink
                  href="https://www.linkedin.com/in/valentino-kolinger-96236a19a/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  LinkedIn
                </ExternalLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/" className="btn-link">
                    <FaHome id="faHome" />
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <FaHome />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
