import About from "./About"
import Contact from "./Contact"
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Services from "./Services"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <div id="contact"></div>
      <Contact />
    </div>
  )
}

export default App
