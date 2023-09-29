import Footer from '../Footer'
import styles from './Contact.module.css'

import linkedin from './assets/contact-linkedin.svg'
import gmail from './assets/contact-gmail.svg'

const Contact = () => {
    return (
        <>
            <section className={styles.contact}>
                <h2>Contact</h2>
                <div className={styles.container}>
                    <p>
                        Thank you for visiting my page! You can contact me on social media or just send me an email at: victor.freire.oliveira@gmail.com
                    </p>
                    <div className={styles.iconsContainer}>
                        <a href="https://www.linkedin.com/in/victor-fo/"><img src={linkedin} alt="LinkedIn icon" /></a>
                        <a href="mailto:victor.freire.oliveira@gmail.com"><img src={gmail} alt="Gmail icon" /></a>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact