import { useRef, useEffect } from "react"
import styles from "./Hero.module.css"

import layer1 from "./assets/layer1.png"
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
                    <div data-relative-input="true" id={styles.scene} ref={refParallax}>
                        <div className={styles.layer} data-depth="0.5"><button className={styles.titlePaper} id={styles.layer2}>Victor Freire Oliveira</button></div>
                        <div className={styles.layer} data-depth="0.4"><button className={styles.titlePaper} id={styles.layer3}>Front-end developer</button></div>
                        <div className={styles.layer} data-depth="0.3"><button className={styles.titlePaper} id={styles.layer4}>Multimedia designer</button></div>
                        <div className={styles.layer} data-depth="0.6"><img src={layer1} id={styles.layer5} alt="Victor's picture" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero