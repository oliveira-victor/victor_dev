import styles from "./Projects.module.css"
import Cards from "./CardsDisplay"

function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <h2>Projects</h2>
            <div className={styles.container}>
                <Cards />
            </div>
            <br />
        </section>
    )
}

export default Projects