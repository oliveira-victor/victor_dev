import styles from "./Projects.module.css"
import Cards from "./CardsDisplay"

import react from "./assets/logo-react.svg"

function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <h2>Projects</h2>
            <div className={styles.container}>
                <Cards />
            </div>
            <br />
            <div className={styles.projectsTxt}>
                <img className={styles.reactLogo}src={react} alt="React icon" />
                <p>
                    This page was designed and developed with ReactJS + Vite and the graphic tools Gimp and Inkscape.
                </p>
            </div>
        </section>
    )
}

export default Projects