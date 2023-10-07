import { useState } from 'react'
import styles from './Services.module.css'

import devices from './assets/devices.svg'
import service1 from './assets/service1.svg'
import service2 from './assets/service2.svg'
import service3 from './assets/service3.svg'
import service4 from './assets/service4.svg'
import Accordion from './Accordion'

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
                        <div className={styles.upContainer}>
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
                                    I develop digital products keeping a clean and readable code, aiming to reach a high performance result and minding the good practice, SEO features and accessbility. From regular web pages to more complex applications with implementation of APIs, the use of powerful and modern programming technologies and libraries.
                                </p>
                            </div>
                        </div>
                        <div className={styles.downContainer}>
                            <p>Here are some examples on how you can count on me:</p>
                            <Accordion
                                question="Regular web page"
                                answer="Whether you need a personal or professional web site of any kind to show your content to the world, I can make you a high performance page that will engage the user with beautiful and interactive content, as well as a great care for the accessbility and easy way of browsing."
                            />
                            <Accordion
                                question="Landing page"
                                answer="Do you need to promote a product, a course, an event or any other kind of service? This single and straight to the point kind of page will do it. This is a great and fast solution and you can expect practicality."
                            />
                            <Accordion
                                question="Dashboard"
                                answer="This is a platform, an information management tool that will display various types of visual data from a database in one place in an easy way to understand. A great tool for businesses."
                            />
                            <Accordion
                                question="Web application"
                                answer="Need to develop a practical app that will solve problems or entertain? A web app is great for it can be accessed anywhere on a device with a browser. If you need an app for automatizing tasks and solving problems, a fast and lightweight web app can help, and I can do that for you."
                            />
                            <Accordion
                                question="Simple online game"
                                answer="If you need an online game, I can develop a low complexity and efficient one in JavaScript, whether you need it for educational purposes or just for pure entertainment, just bring the concept and I'll turn it into something playable and fun."
                            />
                            <Accordion
                                question="Custom social media links page"
                                answer="That's a great way to avoid those over used social links pages you see in people's bio on social media. You can have your own unique customized and interactive links page, that will represent you or your company in a professional way."
                            />
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