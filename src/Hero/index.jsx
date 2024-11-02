import { useTranslation } from "react-i18next"
import LangSwitcher from "./LangSwitcher"

import styles from "./Hero.module.css"

import vfo from '../assets/vfo_white.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

import html from './assets/heroicon-html.svg'
import css from './assets/heroicon-css.svg'
import javascript from './assets/heroicon-javascript.svg'
import typescrip from './assets/heroicon-typescript.svg'
import react from './assets/heroicon-react.svg'
import next from './assets/heroicon-next.svg'
import redux from './assets/heroicon-redux.svg'
import sass from './assets/heroicon-sass.svg'
import gulp from './assets/heroicon-gulp.svg'
import other from './assets/heroicon-other.svg'

const Hero = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className={styles.hero} id="main">
                <div className={styles.mainLayer}>
                <img src={vfo} className={styles.vfoLogo} alt="VFO logo" />
                    <h1 className="fadeIn">Victor Freire Oliveira
                        <br /><span className={`${styles.subtitle} fadeIn2`}>{t('VFOsubtitle')}</span>
                    </h1>
                    <div className={`${styles.heroIcons} fadeIn3`}>
                        <img src={html} alt="HTML icon" />
                        <img src={css} alt="CSS icon" />
                        <img src={javascript} alt="JavaScript icon" />
                        <img src={typescrip} alt="TypeScript icon" />
                        <img src={react} alt="React icon" />
                        <img src={next} alt="Next icon" />
                        <img src={redux} alt="Redux icon" />
                        <img src={sass} alt="Sass icon" />
                        <img src={gulp} alt="Gulp icon" />
                        <img src={other} alt="Other icon" />
                    </div>
                    <a href="#services">
                        <button className={`${styles.startBtn} ${styles.btn1}`}>{t('startBtn')}
                        </button>
                        <button className={`${styles.btn2} ${styles.fadeInGlow}`}></button>
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/oliveira-victor" target="_blank" rel="noreferrer">
                        <img src={github} alt="GitHub icon" title="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-fo/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn icon" title="LinkedIn" />
                    </a>
                </div>
                <div className={styles.sectionDivider}>
                    <div className={styles.top}></div>
                    <div className={styles.bottom}></div>
                </div>
                <LangSwitcher />
            </section>
        </>
    )
}

export default Hero