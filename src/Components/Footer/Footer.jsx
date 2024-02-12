import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
            <h6 style={{ fontSize: 'smaller' }}>Copyright &#169; 2024 Hardik. All Rights Reserved.</h6>

              {/* Made 
              with{" "}
               <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
              By Hardik */}
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
