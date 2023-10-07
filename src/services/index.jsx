import { useState } from 'react'
import styles from './Services.module.css'

import devices from './assets/devices.svg'
import service1 from './assets/service1.svg'
import service2 from './assets/service2.svg'
import service3 from './assets/service3.svg'
import service4 from './assets/service4.svg'

const Services = () => {

    const [toggleWebdev, setToggleWebdev] = useState(true);
    const [toggleDesign, setToggleDesign] = useState(false);

    const handleToggleWebdev = () => {
        setToggleDesign(false);
        setToggleWebdev(true);
    }

    const handleToggleDesign = () => {
        setToggleWebdev(false);
        setToggleDesign(true);
    }

    return (
        <section className={styles.services} id="services">
            <h2>Services</h2>
            <div className={styles.servicesContainer}>
                <div className={styles.buttonsWrapper}>
                    <div className={toggleWebdev ? `${styles.serviceBtn_isSelected} ${styles.servicesBtn}` : `${styles.servicesBtn}`} onClick={handleToggleWebdev}>
                        <h3 className={toggleWebdev ? `${styles.selectedBtn}` : ''}>Web development</h3>
                    </div>
                    <div className={toggleDesign ? `${styles.serviceBtn_isSelected} ${styles.servicesBtn}` : `${styles.servicesBtn}`} onClick={handleToggleDesign}>
                        <h3 className={toggleDesign ? `${styles.selectedBtn}` : ''}>Multimedia design</h3>
                    </div>
                </div>
                {toggleWebdev &&
                    <div className={`${styles.DevCanvas} fadeIn ${styles.canvas}`}>
                        <div className={styles.leftSide}>
                            <img src={devices} alt="Devices" />
                        </div>
                        <div className={styles.rightSide}>
                            <span className={styles.rightSideTitle}>I design and build digital products!</span>
                            <div className={styles.servicesIcons}>
                                <div className={styles.servCard}>
                                    <img src={service1} alt="Laptop and smartphone icons" />
                                    <span className={styles.servCardTitle}>Responsive</span>
                                    <p>
                                        Sites that adapt to different screens for better experience
                                    </p>
                                </div>
                                <div className={styles.servCard}>
                                    <img src={service2} alt="Clock icon" />
                                    <span className={styles.servCardTitle}>Fast</span>
                                    <p>
                                        High performance web applications with short load time
                                    </p>
                                </div>
                                <div className={styles.servCard}>
                                    <img src={service3} alt="Thumb up icon" />
                                    <span className={styles.servCardTitle}>User friendly</span>
                                    <p>
                                        Intuitive interfaces will improve accessbility and usability
                                    </p>
                                </div>
                                <div className={styles.servCard}>
                                    <img src={service4} alt="Planets icon" />
                                    <span className={styles.servCardTitle}>Dynamic</span>
                                    <p>
                                        Interactive pages that engage the user with dynamism
                                    </p>
                                </div>
                            </div>
                            <p>
                                I develop digital products keeping a clean and readable code, aiming to reach a high performance and minding the good syntax, SEO features and accessbility.
                            </p>
                        </div>
                    </div>}
                {toggleDesign &&
                    <div className={`${styles.designCanvas} fadeIn ${styles.canvas}`}>
                        Design
                    </div>}
            </div>
            <br />
        </section>
    )
}

export default Services