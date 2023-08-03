import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}></div>
                <div>
                    <ul className={styles.menu}>
                        <a href="#main">
                            <li>
                                Home
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                Services
                            </li>
                        </a>
                        <a href="#projects">
                            <li>
                                Projects
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                About me
                            </li>
                        </a>
                        <a href="#contact">
                            <li>
                                Contact
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header