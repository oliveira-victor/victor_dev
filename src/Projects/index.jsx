import { useTranslation } from "react-i18next"
import CardsDisplay from "./CardsDisplay"

import styles from "./Projects.module.css"

import react from "../assets/logo-react.svg"


function Projects() {

    const { t } = useTranslation("projectsSection")

    return (
        <section className={styles.projects} id="projects">
            <h2>{t('projects')}</h2>
            <div className={styles.container}>
                <CardsDisplay />
            </div>
            <br />
            <div className={styles.projectsTxt}>
                <img className={styles.reactLogo}src={react} alt="React icon" />
                <p>
                    {t('vfoDevNote')}
                </p>
            </div>
        </section>
    )
}

export default Projects