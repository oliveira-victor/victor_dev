import { useRef, useEffect } from "react"
import styles from "./Hero.module.css"

import vfo from '../assets/vfo_white.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

const Hero = () => {

    const refParallax = useRef();

    useEffect(() => {
        let scene = refParallax.current;

        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
        });
    })

    return (
        <>
            <section className={styles.hero} id="main">
                <div className={styles.mainLayer}>
                <img src={vfo} className={styles.vfoLogo} alt="VFO logo" />
                    <h1 className="fadeIn">Victor Freire Oliveira
                        <br /><span className={`${styles.subtitle} fadeIn2`}>Front-End Developer</span>
                    </h1>
                    <a href="#services">
                        <button className={`${styles.startBtn} ${styles.btn1}`}>Get started
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
                <div className={styles.container}>
                    <div data-relative-input="true" id={styles.scene} ref={refParallax}>
                        <div className={styles.layer} data-depth="0.2">
                            {/* <h1 id={styles.layer2}>Victor Freire Oliveira<br /><span className={styles.subtitle}>Front-End Developer</span></h1> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero