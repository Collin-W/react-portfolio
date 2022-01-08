import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import { faLinkedIn } from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// const element = <FontAwesomeIcon icon={faLinkedIn} />

function Footer() {
  return (
    <div>
      <a href="https://github.com/Collin-W">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/collin-whalen/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}

export default Footer;
