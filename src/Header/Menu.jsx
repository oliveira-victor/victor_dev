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
                    <a href="#main">
                        <li>
                            {t('home')}
                        </li>
                    </a>
                    <a href="#services">
                        <li>
                            {t('services')}
                        </li>
                    </a>
                    <a href="#projects">
                        <li>
                            {t('projects')}
                        </li>
                    </a>
                    <a href="#about">
                        <li>
                            {t('about')}
                        </li>
                    </a>
                    <a href="#contact">
                        <li>
                            {t('contact')}
                        </li>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Menu