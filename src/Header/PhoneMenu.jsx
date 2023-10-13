import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

import about from './assets/icon-about.svg'
import contact from './assets/icon-contact.svg'
import home from './assets/icon-home.svg'
import services from './assets/icon-services.svg'
import projects from './assets/icon-projects.svg'

const PhoneMenu = () => {

    const { t } = useTranslation()

    return (
        <ul className={styles.phoneMenu}>
            <a href="#main">
                <li>
                    <div><img src={home} alt="Home icon" /></div>
                    <div>
                        {t('home')}
                    </div>
                </li>
            </a>
            <a href="#services">
                <li>
                    <div><img src={services} alt="Services icon" /></div>
                    <div>
                        {t('services')}
                    </div>
                </li>
            </a>
            <a href="#projects">
                <li>
                    <div><img src={projects} alt="Projects icon" /></div>
                    <div>
                        {t('projects')}
                    </div>
                </li>
            </a>
            <a href="#about">
                <li>
                    <div><img src={about} alt="About icon" /></div>
                    <div>
                        {t('about')}
                    </div>
                </li>
            </a>
            <a href="#contact">
                <li>
                    <div><img src={contact} alt="Contact icon" /></div>
                    <div>
                        {t('contact')}
                    </div>
                </li>
            </a>
        </ul>
    )
}

export default PhoneMenu