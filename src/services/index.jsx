import { useState } from 'react'
import styles from './Services.module.css'

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
                    <div className={`${styles.DevCanvas} fadeIn`}>
                        Web dev
                    </div>}
                {toggleDesign &&
                    <div className={`${styles.designCanvas} fadeIn`}>
                        Design
                    </div>}
            </div>
        </section>
    )
}

export default Services