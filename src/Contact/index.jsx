import Footer from '../Footer'
import styles from './Contact.module.css'

import linkedin from './assets/contact-linkedin.svg'
import gmail from './assets/contact-gmail.svg'
import github from '../assets/github.svg'
import { useTranslation } from 'react-i18next'

const Contact = () => {

    const { t } = useTranslation("contactSection")

    return (
        <>
            <section className={styles.contact}>
                <h2>{t('contact')}</h2>
                <div className={styles.container}>
                    <p>
                        {t('contactInfo')}
                    </p>
                    <div className={styles.iconsContainer}>
                        <a href="https://www.linkedin.com/in/victor-fo/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn icon" /></a>
                        <a href="mailto:dev.victor.fo@gmail.com"><img src={gmail} alt="Gmail icon" /></a>
                        <a href="https://github.com/oliveira-victor" target="_blank" rel="noreferrer"><img src={github} alt="Gmail icon" /></a>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact