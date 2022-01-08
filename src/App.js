import React from 'react'; //{ useState }
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import DisplayProjects from './components/DisplayProjects/index'

function App() {

    const projectsArray = [
        {
           name: "test 1",
           link: "www.github.com/xyz",
           image: "image.png",
           description: "This is my project 1"
        },
        {
           name: "test 2",
           link: "www.github.com/xyz",
           image: "image.png",
           description: "This is my project 2"
        },
        {
           name: "test 3",
           link: "www.github.com/xyz",
           image: "image.png",
           description: "This is my project 3"
        }
      ]

return (
    <div>
    <Header></Header>

    <DisplayProjects projectsArray={projectsArray}/>

    <Footer>
    
    </Footer>

    </div>
)

}

export default App;