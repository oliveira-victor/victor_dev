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
import { useEffect, useState } from "react"

const Hero = () => {

    const { t } = useTranslation()

    const heroIcons = [html, css, javascript, typescrip, react, next, redux, sass, gulp, other]

    const showIconEffect = `${styles.showIcon} fadeIn2`

    const [activeClass, setActiveClass] = useState(
        Array(heroIcons.length).fill(styles.hideIcon)
    )

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < heroIcons.length) {
                setActiveClass((prev) =>
                    prev.map((className, i) => (i === index ? showIconEffect : className))
                );
                index++;
            } else {
                clearInterval(interval);
            }
        }, 200);
    
        return () => clearInterval(interval);
    }, [showIconEffect]);

    useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < heroIcons.length) {
            setActiveClass((prev) =>
                prev.map((className, i) => (i === index ? showIconEffect : className))
            );
            index++;
        } else {
            clearInterval(interval);
        }
    }, 200);

    return () => clearInterval(interval);
}, [showIconEffect]);

    return (
        <>
            <section className={styles.hero} id="main">
                <div className={styles.mainLayer}>
                    <img src={vfo} className={styles.vfoLogo} alt="VFO logo" />
                    <h1 className="fadeIn">Victor Freire Oliveira
                        <br /><span className={`${styles.subtitle} fadeIn2`}>{t('VFOsubtitle')}</span>
                    </h1>
                    <div className={`${styles.heroIcons}`}>
                        {heroIcons.map((icon, index) => (
                            <img src={icon} key={index} className={activeClass[index]} countalt="Tech icon" />
                        ))}
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