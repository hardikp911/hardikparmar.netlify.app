import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/about-pic.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span class="different">Hardik Parmar</span> and I am from{" "}
                <span class="different">Bikaner, Rajasthan (India)</span>. I
                have completed my graduation in BCA from{" "}
                <span class="different">
                  Maharaja Ganga Singh University, BIKANER (BKN)
                </span>
                . Then I pursued my MCA from{" "}
                <span class="different">
                  MIT World Peace University (MIT-WPU)
                </span>
                . And now I am working as a{" "}
                <span class="different">PHP - Developer</span> at{" "}
                <span class="different">Flippercode</span>.
              </h4>
              <h4>Terms that describe me besides coding:</h4>
              
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Football Enthusiast{" "}
              </h4>
             
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Love  Gardening {" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
