import React, { useState } from "react"; //{ useState }

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About";
import DisplayProjects from "./components/DisplayProjects/index";
import ContactMe from "./components/Contact";
import Resume from "./components/Resume";
import './App.css'
import './index.css'

function App() {
  const [contactPage, setContactPage] = useState(false);
  const [projectPage, setProjectPage] = useState(false);
  const [resumePage, setResumePage] = useState(false);
  const [aboutPage, setAboutPage] = useState(true);

  

  const projectsArray = [
    {
      name: "Capital Opulence",
      link: "https://capital-opulence.herokuapp.com/",
      image: "./assets/images/Screenshot (46).png",
      description: "A personal finance application.",
    },
    {
      name: "Movie Finder",
      link: "https://cassie-s.github.io/movie-finder/",
      image: "./assets/images/Screenshot (28).png",
      description: "Find your next movie.",
    },
    {
      name: "Weather Dashboard",
      link: "https://collin-w.github.io/weather-dashboard/",
      image: "./assets/images/Screenshot (25).png",
      description: "Find the weather forecast in a city.",
    },
  ];

  return (
    
    <div>

      <Header 
      setContactPage={setContactPage} contactPage={contactPage}
      setProjectPage={setProjectPage} projectPage={projectPage}
      setResumePage={setResumePage} resumePage={resumePage}
      setAboutPage={setAboutPage} aboutPage={aboutPage}
      ></Header>


      {!contactPage ? (
        <>
        </>
      ) : (
         <>
        <ContactMe></ContactMe>
        </>
      )}

      {!projectPage ? (
        <>
        </>
      ) : (
         <DisplayProjects projectsArray={projectsArray} />
      )}

      {!resumePage ? (
        <>
        </>
      ) : (
         <Resume></Resume>
      )}
      {!aboutPage ? (
        <>
        </>
      ) : (
         <About></About>
      )}

      
      <Footer></Footer>
    </div>
  );
}

export default App;
