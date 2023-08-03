import styles from './Header.module.css'

const Menu = () => {
    return (
        <>
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
        </>
    )
}

export default Menu