import styles from './Header.module.css'

import about from './assets/icon-about.svg'
import contact from './assets/icon-contact.svg'
import home from './assets/icon-home.svg'
import services from './assets/icon-services.svg'
import projects from './assets/icon-projects.svg'

const PhoneMenu = () => {
    return (
        <ul className={styles.phoneMenu}>
            <a href="#main">
                <li>
                    <div><img src={home} alt="Home icon" /></div>
                    <div>
                        Home
                    </div>
                </li>
            </a>
            <a href="#services">
                <li>
                    <div><img src={services} alt="Services icon" /></div>
                    <div>
                        Services
                    </div>
                </li>
            </a>
            <a href="#projects">
                <li>
                    <div><img src={projects} alt="Projects icon" /></div>
                    <div>
                        Projects
                    </div>
                </li>
            </a>
            <a href="#about">
                <li>
                    <div><img src={about} alt="About icon" /></div>
                    <div>
                        About
                    </div>
                </li>
            </a>
            <a href="#contact">
                <li>
                    <div><img src={contact} alt="Contact icon" /></div>
                    <div>
                        Contact
                    </div>
                </li>
            </a>
        </ul>
    )
}

export default PhoneMenu