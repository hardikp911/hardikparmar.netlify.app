import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
// import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Hardik Parmar</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and innovative PHP and JavaScript Developer with 1 year of
          experience. Proficient in a variety of technologies and frameworks.
          Skilled in WordPress with 1 year of hands-on experience, having
          successfully delivered numerous projects. Eager to expand expertise
          and embrace new challenges in the field.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/hardikp911"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:hardik3259@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919116763067"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/hardik3259/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="resume">
          <button
            className="btnResume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1hWvwoCLlxAw1HukAG2PXNtuFkncn8pWD/view?usp=drive_link"
              );
            }}
          >
            &#x1F441; Preview CV
          </button>
          <button
            className="btnResume"
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://drive.google.com/uc?export=download&id=1hWvwoCLlxAw1HukAG2PXNtuFkncn8pWD";
              link.download = "Parmar_Hardik_Resume.pdf";
              link.click();
            }}
          >
            &#x2b07; Download CV
          </button>
        </div>
      </div>
      <Introduction />
      {/* <Timeline /> */}
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
