import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const github = <FontAwesomeIcon icon="fa-brands fa-github-square" />
  return (
    <section>
      <a href="https://github.com/Collin-W">
        {/* <i class="fa-brands fa-github-square"></i> */}
       {github}
      </a>

      <a href="https://www.linkedin.com/in/collin-whalen/">
        {/* <i class="fa-brands fa-linkedin"></i> */}
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>
    </section>
  );
}

export default Footer;
