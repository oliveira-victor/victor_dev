import styles from "./Hero.module.css"

import vfo from '../assets/vfo_white.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import LangSwitcher from "./LangSwitcher"
import { useTranslation } from "react-i18next"

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
                <LangSwitcher />
            </section>
        </>
    )
}

export default Hero