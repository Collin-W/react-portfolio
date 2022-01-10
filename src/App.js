import React, { useState } from "react"; //{ useState }
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About";
import DisplayProjects from "./components/DisplayProjects/index";
import ContactMe from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [contactPage, setContactPage] = useState(false);
  const [projectPage, setProjectPage] = useState(false);
  const [resumePage, setResumePage] = useState(false);
  const [aboutPage, setAboutPage] = useState(true);

  

  const projectsArray = [
    {
      name: "test 1",
      link: "www.github.com/xyz",
      image: "image.png",
      description: "This is my project 1",
    },
    {
      name: "test 2",
      link: "www.github.com/xyz",
      image: "image.png",
      description: "This is my project 2",
    },
    {
      name: "test 3",
      link: "www.github.com/xyz",
      image: "image.png",
      description: "This is my project 3",
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
