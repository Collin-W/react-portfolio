import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="footer">
      <a href="https://github.com/Collin-W">
        <FontAwesomeIcon className="footer-icon" icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/collin-whalen/">
        <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
      </a>
    </div>
  );
}

export default Footer;
