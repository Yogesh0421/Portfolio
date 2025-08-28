
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Nav/Navbar"
import Project from "./Components/Project/Project"
import Service from "./Components/Service/Service"

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Service />
      <Project />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App