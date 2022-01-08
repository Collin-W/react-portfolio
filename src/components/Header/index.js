import React from "react";

function Header({
  contactPage, setContactPage,
  aboutPage, setAboutPage
}) {

const onClick = () => {
setContactPage(!contactPage)
setAboutPage(!aboutPage)
}





  return (
    <header className="header">
      <h1 className="my-name">Collin Whalen</h1>
      <nav>
        <ul>
          <li>
            <a href="#About" onClick={() => setAboutPage(!aboutPage)}>About Me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact" onClick={() => onClick()}>Contact Me</a>
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
