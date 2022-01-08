import React from "react";

function Header(props) {
const {
    contactPage
} = props



  return (
    <header className="header">
      <h1 className="my-name">Collin Whalen</h1>
      <nav>
        <ul>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact" onClick={() => contactPage(true)}>Contact Me</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
