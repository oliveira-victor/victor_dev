import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

const Menu = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className={styles.logo}></div>
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