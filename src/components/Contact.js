import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { ExternalLink } from 'react-external-link';
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

function Contact({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    email
  }) {
    return (
      <>
        <div
          className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
        >
          <div className="container">
            <div
              className="row home__hero-row"
              style={{
                display: "flex",
                flexDirection: imgStart === "start" ? "row-reverse" : "row",
              }}
            >
              <div className="col">
                <div className="home__hero-text-wrapper">
                  <div className="top-line">{topLine}</div>
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headline}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }
                  >
                    <FaPhoneAlt />{description}
                  </p>
                <p className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }><FaLocationArrow /> Osijek, Croatia</p>
                  <ExternalLink href={"mailto:kolinger315@gmail.com"}>
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  </ExternalLink>
                </div>
              </div>
              <div className="col">
                <div className="home__hero-img-wrapper">
                  <img src={img} alt={alt} className="home__hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Contact
