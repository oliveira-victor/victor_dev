import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                Footer text
            </div>
            <div className={styles.emptyMobileSpace}></div>
        </footer>
    )
}

export default Footer