import styles from './Header.module.css'
import Menu from './Menu'
import PhoneMenu from './PhoneMenu'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Menu />
                <PhoneMenu />
            </div>
        </header>
    )
}

export default Header