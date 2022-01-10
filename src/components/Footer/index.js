import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="footer">
  
      <a className="footer-icon" href="https://github.com/Collin-W">
        <FontAwesomeIcon  icon={faGithub} />
      </a>
     
     
      <a className="footer-icon" href="https://www.linkedin.com/in/collin-whalen/">
        <FontAwesomeIcon  icon={faLinkedin} />
      </a>
      
    </div>
  );
}

export default Footer;
