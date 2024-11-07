import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'

import Footer from '../Footer'

import styles from './Contact.module.css'

import linkedin from './assets/contact-linkedin.svg'
import gmail from './assets/contact-gmail.svg'
import github from '../assets/github.svg'

const Contact = () => {

    const { t } = useTranslation("contactSection")

    const [pageAtBottom, setPageAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                onPageFullyScrolled()
            } else {
                setPageAtBottom(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const onPageFullyScrolled = () => {
        setPageAtBottom(true)
    }

    return (
        <>
            <section className={styles.contact}>
                <h2>{t('contact')}</h2>
                <div className={styles.container}>
                    <p>
                        {t('contactInfo')}<br />dev.victor.fo@gmail.com
                    </p>
                    <div className={styles.iconsContainer}>
                        <a href="https://www.linkedin.com/in/victor-fo/" target="_blank" rel="noreferrer">
                            <img className={pageAtBottom ? styles.bounce1 : ''} src={linkedin} alt="LinkedIn icon" />
                        </a>
                        <a href="mailto:dev.victor.fo@gmail.com">
                            <img className={pageAtBottom ? styles.bounce2 : ''} src={gmail} alt="Gmail icon" />
                        </a>
                        <a href="https://github.com/oliveira-victor" target="_blank" rel="noreferrer">
                            <img className={pageAtBottom ? styles.bounce3 : ''} src={github} alt="Gmail icon" />
                        </a>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact
