import { useRef, useEffect } from "react"
import styles from "./Hero.module.css"

import layer2 from "./assets/layer2.webp"
import layer3 from "./assets/layer3.webp"
import layer4 from "./assets/layer4.webp"
import layer5 from "./assets/layer5.webp"
import layer6 from "./assets/layer6.webp"
import layer7 from "./assets/layer7.webp"
import layer8 from "./assets/layer8.webp"

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
                <img src={vfo} className={styles.vfoLogo} alt="VFO logo" />
                <div className={styles.socialMedia}>
                    <a href="https://github.com/oliveira-victor" target="_blank" rel="noreferrer">
                        <img src={github} alt="GitHub icon" title="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-fo/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn icon" title="LinkedIn" />
                    </a>
                </div>
                <div className={styles.container}>
                    <div data-depth="0.4" className={styles.title}>
                        <h1>VICTOR FREIRE OLIVEIRA</h1>
                        <p>Front-end developer</p>
                    </div>
                    <div data-relative-input="true" id={styles.scene} ref={refParallax}>
                        <div className={styles.layer} data-depth="0.4"><img src={layer5} id={styles.layer5} alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero