import Contact from "./Contact"
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import styles from "./index.css?inline"

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
