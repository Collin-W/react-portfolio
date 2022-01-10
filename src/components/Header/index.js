import React from "react";

function Header({
  contactPage, setContactPage,
  aboutPage, setAboutPage,
  resumePage, setResumePage,
  projectPage, setProjectPage
}) {

const onContact = () => {
setContactPage(!contactPage)
setAboutPage(!aboutPage)
}
const onProject = () => {
setProjectPage(!contactPage)
setAboutPage(!aboutPage)
}
const onResume = () => {
setResumePage(!contactPage)
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
            <a href="#Projects" onClick={() => onProject(projectPage)}>Projects</a>
          </li>
          <li>
            <a href="#Contact" onClick={() => onContact()}>Contact Me</a>
          </li>
          <li>
            <a href="#Resume" onClick={() => onResume(resumePage)}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
