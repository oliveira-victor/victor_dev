import styles from './Header.module.css'

const PhoneMenu = () => {
    return (
        <ul className={styles.phoneMenu}>
            <li>
                Home
            </li>
            <li>
                Services
            </li>
            <li>
                Projects
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    )
}

export default PhoneMenu