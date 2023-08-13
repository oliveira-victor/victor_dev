import Contact from "./Contact"
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"

function App() {

  return (
    <div className="container">
      <Header />
      <Hero />
      <Projects />
      <div id="contact"></div>
      <Contact />
    </div>
  )
}

export default App
