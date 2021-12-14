import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaReact
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          This page is the result of several days of learning and practicing and 
          <br/>serves only as an example of showing the acquired knowledge of web development.
        </p>
        <p className="footer-subscription-text">
          Design is acquired from free templates that can be found on the internet.
          <br /> Thank you for your attention!
        </p>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to={"//reactjs.org/"} className="social-logo">
              <FaReact className="navbar-icon" />
              React Website
            </Link>
          </div>
          <small className="website-rights">Kolinger © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//www.facebook.com/valentino.kolinger/"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="social-icon"/>
            </Link>
            <Link
              className="social-icon-link"
              to={"//github.com/kol242"}
              target="_blank"
              aria-label="Twitter"
            >
              <FaGithub className="social-icon"/>
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/in/valentino-kolinger-96236a19a/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
