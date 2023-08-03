import { useRef, useEffect } from "react"
import styles from "./Hero.module.css"

import layer2 from "./assets/layer2.webp"
import layer3 from "./assets/layer3.webp"
import layer4 from "./assets/layer4.webp"
import layer5 from "./assets/layer5.webp"
import layer6 from "./assets/layer6.webp"
import layer7 from "./assets/layer7.webp"
import layer8 from "./assets/layer8.webp"

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
                <div className={styles.container}>
                    <div data-relative-input="true" id={styles.scene} ref={refParallax}>
                        <div className={styles.layer} data-depth="0.1"><img src={layer2} alt="" /></div>
                        <div className={styles.layer} data-depth-x="0.2"><img src={layer3} alt="" /></div>
                        <div className={styles.layer} data-depth="0.3"><img src={layer4} alt="" /></div>
                        <div className={styles.layer} data-depth="0.4"><img src={layer5} alt="" /></div>
                        <div className={styles.layer} data-depth="0.5"><img src={layer6} alt="" /></div>
                        <div className={styles.layer} data-depth="0.6"><img src={layer7} alt="" /></div>
                        <div className={styles.layer} data-depth="0.7"><img src={layer8} alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero