import styles from './Header.module.css'

const PhoneMenu = () => {
    return (
        <ul className={styles.phoneMenu}>
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
                            About
                        </li>
                    </a>
                    <a href="#contact">
                        <li>
                            Contact
                        </li>
                    </a>
        </ul>
    )
}

export default PhoneMenu