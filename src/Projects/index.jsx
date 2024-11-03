import { useTranslation } from "react-i18next"
import CardsDisplay from "./CardsDisplay"
import MotionY from "../animation/MotionY"

import styles from "./Projects.module.css"

function Projects() {

    const { t } = useTranslation("projectsSection")

    return (
        <section className={styles.projects} id="projects">
            <h2 className="cardTitle">{t('projects')}</h2>
            <div className={styles.container}>
                <MotionY delay={0}>
                    <CardsDisplay />
                </MotionY>
            </div>
            <br />
        </section>
    )
}

export default Projects
