import About from "./About"
import Contact from "./Contact"
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Services from "./services"

function App() {

  return (
    <div className="container">
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
