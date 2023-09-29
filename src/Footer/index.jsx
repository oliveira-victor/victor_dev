import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTxt}>
                    &copy;2023 Victor Freire Oliveira • Front-end developer | Multimedia Designer • All rights reserved
                </div>
            </div>
            <div className={styles.emptyMobileSpace}></div>
        </footer>
    )
}

export default Footer