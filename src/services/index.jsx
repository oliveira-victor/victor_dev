import { useState } from 'react'
import styles from './Services.module.css'

import devices from './assets/devices.svg'
import service1 from './assets/service1.svg'
import service2 from './assets/service2.svg'

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
                                    <img src={service2} alt="Laptop and smartphone icons" />
                                    <span className={styles.servCardTitle}>Fast</span>
                                    <p>
                                    Technologies carefully chosen for better berformance
                                    </p>
                                </div>
                                <div className={styles.servCard}>
                                    <img src={service1} alt="Laptop and smartphone icons" />
                                    <span className={styles.servCardTitle}>Responsive</span>
                                    <p>
                                        Sites that adapt to different screens for better experience
                                    </p>
                                </div>
                                <div className={styles.servCard}>
                                    <img src={service1} alt="Laptop and smartphone icons" />
                                    <span className={styles.servCardTitle}>Responsive</span>
                                    <p>
                                        Sites that adapt to different screens for better experience
                                    </p>
                                </div>
                            </div>
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