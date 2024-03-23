import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

import lightLogo from '../assets/vfo_white.svg'
import darkLogo from '../assets/vfo_dark.svg'

const Menu = ({ transparentNavbar }) => {

    const { t } = useTranslation()

    return (
        <>
            <div className={styles.logo}>
                <h1>
                    <a href="#"><img src={transparentNavbar ? darkLogo : lightLogo} alt="Victor Freire Oliveira - Front-End Developer" /></a>
                </h1>
            </div>
            <div>
                <ul className={styles.menu}>
                    <li>
                        <a href="#main">{t('home')}</a>
                    </li>
                    <li>
                        <a href="#services">{t('services')}</a>
                    </li>
                    <li>
                        <a href="#projects">{t('projects')}</a>
                    </li>
                    <li>
                        <a href="#about">{t('about')}</a>
                    </li>
                    <li>
                        <a href="#contact">{t('contact')}</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu